# ========================================
# Stage 1: deps — ติดตั้ง dependencies
# ========================================
# ใช้ Node.js 20 บน Alpine Linux (OS ขนาดเล็ก) เป็น base image
FROM node:20-alpine AS deps

# กำหนดโฟลเดอร์ทำงานภายใน container
WORKDIR /app

# คัดลอก package.json และ package-lock.json เข้ามาก่อน
COPY package*.json ./

# ติดตั้ง package ทุกตัวตาม lock file อย่างเคร่งครัด (เหมาะกับ production)
RUN npm ci

# ========================================
# Stage 2: builder — build โปรเจกต์
# ========================================
# เริ่ม environment ใหม่สะอาด สำหรับขั้นตอน build
FROM node:20-alpine AS builder

WORKDIR /app

# นำ node_modules ที่ติดตั้งไว้ใน stage แรกมาใช้ต่อ (ไม่ต้องติดตั้งซ้ำ)
COPY --from=deps /app/node_modules ./node_modules

# คัดลอกโค้ดทั้งหมดของโปรเจกต์เข้ามา
COPY . .

# รัน Next.js build เพื่อสร้างไฟล์ที่พร้อม deploy
RUN npm run build

# ========================================
# Stage 3: runner — รัน production server
# ========================================
# เริ่ม environment สะอาดอีกครั้ง เพื่อให้ image สุดท้ายมีขนาดเล็กที่สุด
FROM node:20-alpine AS runner

WORKDIR /app

# ตั้งค่าตัวแปร environment ให้เป็น production mode
ENV NODE_ENV=production

# นำเฉพาะไฟล์ standalone build ของ Next.js มา (ไม่รวม node_modules ขนาดใหญ่)
COPY --from=builder /app/.next/standalone ./

# คัดลอกไฟล์ static assets (JS, CSS ที่ build แล้ว)
COPY --from=builder /app/.next/static ./.next/static

# คัดลอกโฟลเดอร์ public (รูปภาพ, favicon ฯลฯ)
COPY --from=builder /app/public ./public

# ประกาศว่า container รับ traffic ที่ port 3000
EXPOSE 3000

# คำสั่งที่รันเมื่อ container เริ่มทำงาน
CMD ["node", "server.js"]