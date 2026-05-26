"use client";

import { useState } from "react";

type Locale = "en" | "th";

/* ─── Translations ──────────────────────────────────────────────────────────── */

const t = {
  en: {
    nav: { skills: "Skills", experience: "Experience", projects: "Projects", contact: "Contact" },
    hero: {
      badge: "Open to opportunities",
      title: "Senior Full-Stack Developer",
      summary: (
        <>
          Full-stack developer with{" "}
          <span className="text-white">5+ years of experience</span> building
          web applications, APIs, CRM platforms, POS systems, and data-driven
          services. Comfortable owning features end-to-end — from requirement
          discussion to deployment.
        </>
      ),
      location: "Bangkok, Thailand",
    },
    sections: {
      skills: "Core Skills",
      experience: "Experience",
      projects: "Selected Projects",
      education: "Education",
      contact: "Contact",
    },
    skillGroups: {
      languages: "Languages",
      frontend: "Front-End",
      backend: "Back-End",
      database: "Database",
      devops: "DevOps & Tools",
    },
    education: {
      school: "Rajabhat Maha Sarakham University",
      degree: "Bachelor of Computer Technology",
    },
    footer: "Built with Next.js & Tailwind CSS",
    experience: [
      {
        company: "LOMR Company Limited",
        role: "Senior Full-Stack Developer",
        period: "Sep 2024 – Dec 2025",
        bullets: [
          "Developed a CRM platform for partner brand Charmiss, working closely with stakeholders to plan sprints and deliver features.",
          "Led end-to-end development of mission-based engagement features including coin accumulation and stamp missions.",
          "Built CRM UI and API routes with SolidStart, using MongoDB as the primary data store.",
          "Coordinated via Slack, Gather, Jira, and GitLab for daily workflows, version control, and CI/CD.",
        ],
        tags: ["SolidStart", "MongoDB", "GitLab CI/CD", "Jira"],
      },
      {
        company: "Extend IT Resource Co., Ltd.",
        role: "Back-End Developer",
        period: "Sep 2023 – Aug 2024",
        bullets: [
          "Designed and developed scalable microservices and RESTful APIs for ticket and incident management systems.",
          "Built an incident management platform for cyber incident reporting in collaboration with the government sector.",
          "Used NestJS, PostgreSQL, Docker, and GitLab for maintainable backend services and reproducible deployments.",
        ],
        tags: ["NestJS", "PostgreSQL", "Docker", "Microservices"],
      },
      {
        company: "Digital Economy & Society (on-site at Frasers Property)",
        role: "Software Developer",
        period: "Apr 2023 – Sep 2023",
        bullets: [
          "Developed a face detection and people-counting system with demographic analysis (gender, age estimation).",
          "Built API services with FastAPI to connect ML models to the front-end.",
          "Implemented a responsive Vue 3 + TypeScript front-end for real-time monitoring.",
        ],
        tags: ["FastAPI", "Vue 3", "TypeScript", "Python"],
      },
      {
        company: "CTO Solution Co., Ltd. (on-site at PTT Digital)",
        role: "Back-End Web Developer",
        period: "Jul 2022 – Feb 2023",
        bullets: [
          "Developed data display and request-handling services with Node.js (Restify, Express).",
          "Integrated MongoDB and SQL Server for NoSQL and relational storage.",
          "Built structured RESTful services for scalable data retrieval and backend integration.",
        ],
        tags: ["Node.js", "Express", "Restify", "MongoDB", "SQL Server"],
      },
      {
        company: "KORISTA Co., Ltd.",
        role: "Full-Stack Web Developer",
        period: "Oct 2021 – Jun 2022",
        bullets: [
          "Developed an e-commerce platform for imported products using Nuxt.js, AdonisJS, and MySQL.",
          "Implemented product catalog, dynamic search/filter, authentication, cart, checkout, and admin management.",
        ],
        tags: ["Nuxt.js", "AdonisJS", "MySQL"],
      },
      {
        company: "Sofat Co., Ltd.",
        role: "Programmer",
        period: "Jul 2020 – Sep 2021",
        bullets: [
          "Developed advertisement management websites with PHP Laravel and WordPress.",
          "Customized backend functionality and WordPress integration for content and ad workflows.",
        ],
        tags: ["PHP", "Laravel", "WordPress"],
      },
    ],
    projects: [
      {
        title: "Portfolio CI/CD & Kubernetes",
        type: "DevOps · 2026",
        description:
          "End-to-end CI/CD pipeline deploying a Next.js portfolio to a self-hosted k3s cluster on a VPS. Automated build, container registry push, and zero-touch deployment on every push to main.",
        tags: ["Next.js", "Docker", "GitHub Actions", "k3s", "Kubernetes", "GHCR"],
        href: undefined as string | undefined,
      },
      {
        title: "Bot Auto-Play Big Helmets",
        type: "Game Bot · 2026",
        description:
          "Python bot that auto-plays Big Helmets: Heroes of Destiny using computer vision and template matching to detect on-screen states and trigger actions automatically.",
        tags: ["Python", "OpenCV", "PyAutoGUI", "PIL", "Computer Vision"],
        href: "https://github.com/stonegtm/bot-auto-play-big-helmets",
      },
      {
        title: "Point of Sale System",
        type: "Full-Stack",
        description:
          "POS system for store product management with full inventory and transaction workflows.",
        tags: ["Next.js", "NestJS", "PostgreSQL", "Docker", "Nginx"],
        href: undefined as string | undefined,
      },
      {
        title: "Quiz Application",
        type: "Mobile",
        description:
          "Mobile quiz app to practice screen flows, state management, and user interaction patterns.",
        tags: ["React Native", "Expo"],
        href: undefined as string | undefined,
      },
      {
        title: "Telegram Todo Automation",
        type: "n8n Workflow · 2026",
        description:
          "No-code automation connecting Telegram, Google Sheets, and notification services for task management.",
        tags: ["n8n", "Telegram Bot", "Google Sheets"],
        href: undefined as string | undefined,
      },
    ],
  },

  th: {
    nav: { skills: "ทักษะ", experience: "ประสบการณ์", projects: "โปรเจกต์", contact: "ติดต่อ" },
    hero: {
      badge: "เปิดรับโอกาสใหม่",
      title: "นักพัฒนา Full-Stack อาวุโส",
      summary: (
        <>
          นักพัฒนา Full-Stack ที่มีประสบการณ์{" "}
          <span className="text-white">มากกว่า 5 ปี</span>{" "}
          ในการสร้างเว็บแอปพลิเคชัน, API, แพลตฟอร์ม CRM, ระบบ POS
          และบริการที่ขับเคลื่อนด้วยข้อมูล พร้อมดูแลฟีเจอร์ตั้งแต่ต้นจนจบ
          — ตั้งแต่คุยรีไควร์เมนต์จนถึงการ deploy
        </>
      ),
      location: "กรุงเทพมหานคร, ไทย",
    },
    sections: {
      skills: "ทักษะหลัก",
      experience: "ประสบการณ์",
      projects: "โปรเจกต์เด่น",
      education: "การศึกษา",
      contact: "ติดต่อ",
    },
    skillGroups: {
      languages: "ภาษาโปรแกรม",
      frontend: "ฟร้อนต์เอนด์",
      backend: "แบ็กเอนด์",
      database: "ฐานข้อมูล",
      devops: "DevOps & เครื่องมือ",
    },
    education: {
      school: "มหาวิทยาลัยราชภัฏมหาสารคาม",
      degree: "วิทยาศาสตรบัณฑิต สาขาเทคโนโลยีคอมพิวเตอร์",
    },
    footer: "สร้างด้วย Next.js & Tailwind CSS",
    experience: [
      {
        company: "LOMR Company Limited",
        role: "Senior Full-Stack Developer",
        period: "ก.ย. 2567 – ธ.ค. 2568",
        bullets: [
          "พัฒนาแพลตฟอร์ม CRM สำหรับแบรนด์พาร์ตเนอร์ Charmiss ทำงานร่วมกับผู้มีส่วนได้ส่วนเสียในการวางแผน sprint และส่งมอบฟีเจอร์",
          "นำการพัฒนา end-to-end ของฟีเจอร์ mission-based engagement รวมถึง mission สะสมเหรียญและ stamp",
          "พัฒนา CRM UI และ API routes ด้วย SolidStart โดยใช้ MongoDB เป็น data store หลัก",
          "ประสานงานทีมผ่าน Slack, Gather, Jira และ GitLab สำหรับ workflow ประจำวัน, version control และ CI/CD",
        ],
        tags: ["SolidStart", "MongoDB", "GitLab CI/CD", "Jira"],
      },
      {
        company: "Extend IT Resource Co., Ltd.",
        role: "Back-End Developer",
        period: "ก.ย. 2566 – ส.ค. 2567",
        bullets: [
          "ออกแบบและพัฒนา microservices และ RESTful APIs สำหรับระบบจัดการตั๋วและระบบจัดการเหตุการณ์",
          "พัฒนาแพลตฟอร์มจัดการเหตุการณ์ไซเบอร์สำหรับภาครัฐ",
          "ใช้ NestJS, PostgreSQL, Docker และ GitLab เพื่อรองรับ backend services ที่บำรุงรักษาง่ายและ deployment ที่ reproduce ได้",
        ],
        tags: ["NestJS", "PostgreSQL", "Docker", "Microservices"],
      },
      {
        company: "สำนักงานเศรษฐกิจดิจิทัล (ประจำ Frasers Property)",
        role: "Software Developer",
        period: "เม.ย. 2566 – ก.ย. 2566",
        bullets: [
          "พัฒนาระบบตรวจจับใบหน้าและนับจำนวนคนพร้อมวิเคราะห์ข้อมูลประชากร (เพศ, ช่วงอายุ)",
          "พัฒนา API services ด้วย FastAPI เพื่อเชื่อมต่อ ML model กับ front-end",
          "พัฒนา front-end responsive ด้วย Vue 3 + TypeScript สำหรับการแสดงผลแบบ real-time",
        ],
        tags: ["FastAPI", "Vue 3", "TypeScript", "Python"],
      },
      {
        company: "CTO Solution Co., Ltd. (ประจำ PTT Digital)",
        role: "Back-End Web Developer",
        period: "ก.ค. 2565 – ก.พ. 2566",
        bullets: [
          "พัฒนาบริการแสดงข้อมูลและจัดการ request ด้วย Node.js (Restify, Express)",
          "เชื่อมต่อ MongoDB และ SQL Server สำหรับเก็บข้อมูล NoSQL และ relational",
          "สร้าง RESTful services ที่มีโครงสร้างชัดเจนสำหรับ scalable data retrieval",
        ],
        tags: ["Node.js", "Express", "Restify", "MongoDB", "SQL Server"],
      },
      {
        company: "KORISTA Co., Ltd.",
        role: "Full-Stack Web Developer",
        period: "ต.ค. 2564 – มิ.ย. 2565",
        bullets: [
          "พัฒนาแพลตฟอร์ม e-commerce สำหรับสินค้านำเข้าด้วย Nuxt.js, AdonisJS และ MySQL",
          "ติดตั้งระบบ catalog สินค้า, ค้นหา/กรอง, authentication, ตะกร้าสินค้า, checkout, ติดตามออเดอร์ และ admin",
        ],
        tags: ["Nuxt.js", "AdonisJS", "MySQL"],
      },
      {
        company: "Sofat Co., Ltd.",
        role: "Programmer",
        period: "ก.ค. 2563 – ก.ย. 2564",
        bullets: [
          "พัฒนาเว็บไซต์จัดการโฆษณาด้วย PHP Laravel และ WordPress",
          "ปรับแต่ง backend และ WordPress integration สำหรับงานอัปเดตเนื้อหาและจัดการโฆษณา",
        ],
        tags: ["PHP", "Laravel", "WordPress"],
      },
    ],
    projects: [
      {
        title: "Portfolio CI/CD & Kubernetes",
        type: "DevOps · 2026",
        description:
          "pipeline CI/CD ครบวงจร deploy Next.js portfolio ไปยัง k3s cluster ที่ host เองบน VPS build อัตโนมัติ, push ไป container registry และ deploy เองทุกครั้งที่ push ไป main",
        tags: ["Next.js", "Docker", "GitHub Actions", "k3s", "Kubernetes", "GHCR"],
        href: undefined as string | undefined,
      },
      {
        title: "Bot Auto-Play Big Helmets",
        type: "Game Bot · 2026",
        description:
          "Python bot ที่เล่นเกม Big Helmets: Heroes of Destiny แบบอัตโนมัติ ใช้ computer vision และ template matching ตรวจจับสถานะหน้าจอและสั่งคลิกได้เอง",
        tags: ["Python", "OpenCV", "PyAutoGUI", "PIL", "Computer Vision"],
        href: "https://github.com/stonegtm/bot-auto-play-big-helmets",
      },
      {
        title: "ระบบ Point of Sale",
        type: "Full-Stack",
        description:
          "ระบบ POS สำหรับจัดการสินค้าในร้านค้า พร้อม workflow การจัดการ inventory และธุรกรรมครบถ้วน",
        tags: ["Next.js", "NestJS", "PostgreSQL", "Docker", "Nginx"],
        href: undefined as string | undefined,
      },
      {
        title: "แอปพลิเคชัน Quiz",
        type: "Mobile",
        description:
          "แอปควิซบนมือถือสำหรับฝึกการออกแบบ screen flows, state management และ user interaction",
        tags: ["React Native", "Expo"],
        href: undefined as string | undefined,
      },
      {
        title: "Telegram Todo Automation",
        type: "n8n Workflow · 2026",
        description:
          "automation ไม่ต้องเขียนโค้ด เชื่อม Telegram, Google Sheets และบริการแจ้งเตือนสำหรับจัดการ task",
        tags: ["n8n", "Telegram Bot", "Google Sheets"],
        href: undefined as string | undefined,
      },
    ],
  },
} as const;

/* ─── Page ──────────────────────────────────────────────────────────────────── */

export default function Home() {
  const [locale, setLocale] = useState<Locale>("en");
  const T = t[locale];

  return (
    <div className="min-h-screen bg-[#0f0f0f] text-zinc-100 font-[family-name:var(--font-geist-sans)]">
      {/* Nav */}
      <nav className="sticky top-0 z-50 border-b border-zinc-800 bg-[#0f0f0f]/90 backdrop-blur">
        <div className="mx-auto max-w-4xl px-6 py-4 flex items-center justify-between">
          <span className="font-[family-name:var(--font-geist-mono)] text-sm text-zinc-400">
            samabat.dev
          </span>
          <div className="flex items-center gap-6">
            <div className="hidden sm:flex gap-6 text-sm text-zinc-400">
              <a href="#skills" className="hover:text-white transition-colors">{T.nav.skills}</a>
              <a href="#experience" className="hover:text-white transition-colors">{T.nav.experience}</a>
              <a href="#projects" className="hover:text-white transition-colors">{T.nav.projects}</a>
              <a href="#contact" className="hover:text-white transition-colors">{T.nav.contact}</a>
            </div>
            <button
              onClick={() => setLocale(locale === "en" ? "th" : "en")}
              className="flex items-center gap-1.5 rounded-lg border border-zinc-700 bg-zinc-800/50 px-3 py-1.5 text-xs font-medium text-zinc-300 hover:border-zinc-500 hover:text-white transition-all"
            >
              <span>{locale === "en" ? "🇹🇭" : "🇬🇧"}</span>
              <span>{locale === "en" ? "ภาษาไทย" : "English"}</span>
            </button>
          </div>
        </div>
      </nav>

      <main className="mx-auto max-w-4xl px-6 py-20 space-y-24">
        {/* Hero */}
        <section className="space-y-6">
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-xs text-emerald-400">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
            {T.hero.badge}
          </div>

          <div>
            <h1 className="text-5xl font-bold tracking-tight text-white sm:text-6xl">
              Samabat Yamsopa
            </h1>
            <p className="mt-3 text-xl text-zinc-400 font-light">{T.hero.title}</p>
          </div>

          <p className="max-w-2xl text-zinc-400 leading-relaxed">{T.hero.summary}</p>

          <div className="flex flex-wrap gap-3">
            <a
              href="https://github.com/stonegtm"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-lg border border-zinc-700 bg-zinc-800/50 px-4 py-2 text-sm text-zinc-300 hover:border-zinc-500 hover:text-white transition-all"
            >
              <GithubIcon />
              github.com/stonegtm
            </a>
            <a
              href="https://linkedin.com/in/samabat-yamsopa"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-lg border border-zinc-700 bg-zinc-800/50 px-4 py-2 text-sm text-zinc-300 hover:border-zinc-500 hover:text-white transition-all"
            >
              <LinkedinIcon />
              linkedin.com/in/samabat-yamsopa
            </a>
            <span className="flex items-center gap-2 rounded-lg border border-zinc-700 bg-zinc-800/50 px-4 py-2 text-sm text-zinc-300">
              <LocationIcon />
              {T.hero.location}
            </span>
          </div>
        </section>

        {/* Skills */}
        <section id="skills" className="space-y-8">
          <SectionHeading label={T.sections.skills} />
          <div className="grid gap-5 sm:grid-cols-2">
            <SkillGroup title={T.skillGroups.languages} color="violet" skills={["JavaScript", "TypeScript", "Python", "Java"]} />
            <SkillGroup
              title={T.skillGroups.frontend}
              color="sky"
              skills={["SolidJS / SolidStart", "Next.js", "Vue 3 / Nuxt.js", "React Native Expo", "Tailwind CSS", "Ant Design", "Vuetify", "Bootstrap"]}
            />
            <SkillGroup
              title={T.skillGroups.backend}
              color="emerald"
              skills={["Node.js", "NestJS", "Express", "AdonisJS", "Restify", "FastAPI", "RESTful APIs", "Microservices", "Auth / Authorization"]}
            />
            <SkillGroup title={T.skillGroups.database} color="amber" skills={["MongoDB", "PostgreSQL", "MySQL", "SQL Server"]} />
            <SkillGroup
              title={T.skillGroups.devops}
              color="rose"
              skills={["Docker", "Kubernetes (kubectl)", "GitHub Actions (CI/CD)", "GitLab CI/CD", "Nginx", "AWS EC2", "Ubuntu", "Jira", "Postman", "Figma"]}
            />
          </div>
        </section>

        {/* Experience */}
        <section id="experience" className="space-y-8">
          <SectionHeading label={T.sections.experience} />
          <div className="space-y-0">
            {T.experience.map((job, i) => (
              <ExperienceCard key={i} {...job} isLast={i === T.experience.length - 1} />
            ))}
          </div>
        </section>

        {/* Projects */}
        <section id="projects" className="space-y-8">
          <SectionHeading label={T.sections.projects} />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {T.projects.map((p, i) => (
              <ProjectCard key={i} {...p} />
            ))}
          </div>
        </section>

        {/* Education */}
        <section className="space-y-4">
          <SectionHeading label={T.sections.education} />
          <div className="rounded-xl border border-zinc-800 bg-zinc-900/50 p-5">
            <p className="font-semibold text-white">{T.education.school}</p>
            <p className="text-sm text-zinc-400 mt-1">{T.education.degree}</p>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="space-y-4">
          <SectionHeading label={T.sections.contact} />
          <div className="rounded-xl border border-zinc-800 bg-zinc-900/50 p-6 flex flex-wrap gap-6">
            <ContactItem icon={<EmailIcon />} label="tonevongola@gmail.com" href="mailto:tonevongola@gmail.com" />
            <ContactItem icon={<PhoneIcon />} label="065-272-8472" />
            <ContactItem icon={<LineIcon />} label="LINE: stonegtm1" />
          </div>
        </section>
      </main>

      <footer className="border-t border-zinc-800 py-8 text-center text-sm text-zinc-600">
        © 2025 Samabat Yamsopa · {T.footer}
      </footer>
    </div>
  );
}

/* ─── Components ────────────────────────────────────────────────────────────── */

function SectionHeading({ label }: { label: string }) {
  return (
    <div className="flex items-center gap-4">
      <h2 className="text-xs font-semibold uppercase tracking-widest text-zinc-500">{label}</h2>
      <div className="h-px flex-1 bg-zinc-800" />
    </div>
  );
}

const colorMap: Record<string, string> = {
  violet: "bg-violet-500/10 text-violet-300 border-violet-500/20",
  sky: "bg-sky-500/10 text-sky-300 border-sky-500/20",
  emerald: "bg-emerald-500/10 text-emerald-300 border-emerald-500/20",
  amber: "bg-amber-500/10 text-amber-300 border-amber-500/20",
  rose: "bg-rose-500/10 text-rose-300 border-rose-500/20",
};

const titleColorMap: Record<string, string> = {
  violet: "text-violet-400",
  sky: "text-sky-400",
  emerald: "text-emerald-400",
  amber: "text-amber-400",
  rose: "text-rose-400",
};

function SkillGroup({ title, skills, color }: { title: string; skills: string[]; color: string }) {
  return (
    <div className="rounded-xl border border-zinc-800 bg-zinc-900/50 p-5 space-y-3">
      <h3 className={`text-xs font-semibold uppercase tracking-wider ${titleColorMap[color]}`}>{title}</h3>
      <div className="flex flex-wrap gap-2">
        {skills.map((s) => (
          <span key={s} className={`rounded-md border px-2.5 py-1 text-xs font-medium ${colorMap[color]}`}>
            {s}
          </span>
        ))}
      </div>
    </div>
  );
}

function ExperienceCard({
  company, role, period, bullets, tags, isLast,
}: {
  company: string; role: string; period: string; bullets: readonly string[]; tags: readonly string[]; isLast: boolean;
}) {
  return (
    <div className="relative flex gap-5">
      <div className="flex flex-col items-center">
        <div className="mt-1.5 h-2.5 w-2.5 shrink-0 rounded-full border-2 border-emerald-500 bg-[#0f0f0f]" />
        {!isLast && <div className="flex-1 w-px bg-zinc-800 my-1" />}
      </div>
      <div className={`space-y-3 ${isLast ? "pb-0" : "pb-10"}`}>
        <div>
          <p className="font-semibold text-white">{company}</p>
          <div className="flex flex-wrap items-center gap-2 mt-0.5">
            <span className="text-sm text-zinc-400">{role}</span>
            <span className="text-zinc-700">·</span>
            <span className="font-[family-name:var(--font-geist-mono)] text-xs text-zinc-500">{period}</span>
          </div>
        </div>
        <ul className="space-y-1.5">
          {bullets.map((b, i) => (
            <li key={i} className="flex gap-2 text-sm text-zinc-400 leading-relaxed">
              <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-zinc-600" />
              {b}
            </li>
          ))}
        </ul>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span key={tag} className="rounded-md bg-zinc-800 px-2 py-0.5 text-xs text-zinc-400">{tag}</span>
          ))}
        </div>
      </div>
    </div>
  );
}

function ProjectCard({
  title, type, description, tags, href,
}: {
  title: string; type: string; description: string; tags: readonly string[]; href?: string;
}) {
  const inner = (
    <>
      <div className="flex items-start justify-between gap-2">
        <div>
          <p className="font-semibold text-white group-hover:text-emerald-400 transition-colors">{title}</p>
          <p className="text-xs text-zinc-500 mt-0.5">{type}</p>
        </div>
        {href && (
          <span className="shrink-0 mt-0.5 text-zinc-600 group-hover:text-emerald-400 transition-colors">
            <GithubIcon />
          </span>
        )}
      </div>
      <p className="text-sm text-zinc-400 leading-relaxed">{description}</p>
      <div className="flex flex-wrap gap-1.5">
        {tags.map((t) => (
          <span key={t} className="rounded-md bg-zinc-800 px-2 py-0.5 text-xs text-zinc-500">{t}</span>
        ))}
      </div>
    </>
  );

  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer"
        className="group flex flex-col gap-3 rounded-xl border border-zinc-800 bg-zinc-900/50 p-5 hover:border-zinc-600 transition-colors">
        {inner}
      </a>
    );
  }
  return (
    <div className="group flex flex-col gap-3 rounded-xl border border-zinc-800 bg-zinc-900/50 p-5 hover:border-zinc-600 transition-colors">
      {inner}
    </div>
  );
}

function ContactItem({ icon, label, href }: { icon: React.ReactNode; label: string; href?: string }) {
  const cls = "flex items-center gap-2 text-sm text-zinc-400 hover:text-white transition-colors";
  if (href) return <a href={href} className={cls}>{icon}{label}</a>;
  return <span className="flex items-center gap-2 text-sm text-zinc-400">{icon}{label}</span>;
}

/* ─── Icons ─────────────────────────────────────────────────────────────────── */

function GithubIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
    </svg>
  );
}

function LinkedinIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function LocationIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

function EmailIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
      <polyline points="22,6 12,13 2,6" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 8.81 19.79 19.79 0 01.02 2.2 2 2 0 012 .02h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
    </svg>
  );
}

function LineIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
      <path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63h2.386c.349 0 .63.285.63.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63.346 0 .628.285.628.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.281.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314" />
    </svg>
  );
}
