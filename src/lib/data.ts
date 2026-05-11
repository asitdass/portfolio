export const siteConfig = {
  name: "Asit Rohan Dass",
  title: "Asit Rohan Dass | Full-Stack Software Engineer",
  description:
    "Full-Stack Software Engineer with 2.5+ years architecting production systems at scale. Building cloud-native platforms, distributed SaaS products, and secure infrastructure serving 200,000+ active users.",
  url: "https://asitdass.dev",
  email: "asitdass33@gmail.com",
  phone: "+91-7504008858",
  github: "https://github.com/asitdass",
  linkedin: "https://www.linkedin.com/in/asit-rohan-dass-775402192/",
};

export const navItems = [
  { label: "Home", href: "#home" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Tools", href: "#tools" },
  { label: "Contact", href: "#contact" },
];

export const stats = [
  { value: "+2.5", label: "Years of Experience" },
  { value: "+200K", label: "Users Served" },
  { value: "+50", label: "Vulnerabilities Fixed" },
];

export const marqueeRow1 = [
  "Distributed Systems",
  "Cloud Architecture",
  "Production CI/CD",
  "Security Engineering",
  "Multi-Tenant SaaS",
];

export const marqueeRow2 = [
  "Next.js",
  "NestJS",
  "PostgreSQL",
  "Redis",
  "AWS",
  "Docker",
  "TypeScript",
  "BullMQ",
];

export const tools = [
  { name: "Next.js", role: "React Framework", icon: "next" },
  { name: "NestJS", role: "Backend Framework", icon: "nest" },
  { name: "PostgreSQL", role: "Primary Database", icon: "postgres" },
  { name: "AWS", role: "Cloud Infrastructure", icon: "aws" },
  { name: "Redis", role: "Cache & Queues", icon: "redis" },
  { name: "Docker", role: "Containerization", icon: "docker" },
  { name: "TypeScript", role: "Type Safety", icon: "typescript" },
  { name: "GitHub Actions", role: "CI / CD Pipelines", icon: "github" },
  { name: "Cursor", role: "AI Code Editor", icon: "cursor" },
];

export const skillCategories = [
  {
    name: "Frontend",
    skills: [
      "React.js",
      "Next.js",
      "Ember.js",
      "Vite",
      "TypeScript",
      "JavaScript",
      "Tailwind CSS",
      "Shadcn/UI",
      "Ant Design",
      "SCSS",
      "TanStack Query",
    ],
  },
  {
    name: "Backend & Distributed Systems",
    skills: [
      "Node.js",
      "NestJS",
      "PHP",
      "C++",
      "REST APIs",
      "Webhooks",
      "BullMQ",
      "Redis",
      "Prisma ORM",
      "PostgreSQL",
      "MySQL",
      "MariaDB",
      "Queue Architectures",
      "Event-Driven Systems",
    ],
  },
  {
    name: "Cloud & DevOps",
    skills: [
      "AWS EC2",
      "AWS S3",
      "AWS RDS",
      "AWS ECR",
      "AWS ECS",
      "CloudFront",
      "IAM",
      "Lambda",
      "CloudWatch",
      "Docker",
      "CI/CD",
      "GitHub Actions",
      "Nginx",
      "CDN",
    ],
  },
  {
    name: "Security & Architecture",
    skills: [
      "RBAC",
      "JWT Auth",
      "Row-Level Security",
      "AES-256 Encryption",
      "Multi-Tenant Architecture",
      "Idempotent Processing",
    ],
  },
  {
    name: "AI & Tooling",
    skills: [
      "Claude AI",
      "Cursor",
      "Copilot",
      "Vector DB",
      "RAG Pipelines",
    ],
  },
];

export const experiences = [
  {
    role: "Software Engineer",
    company: "Edmingle",
    type: "Onsite",
    period: "Jul 2023 – Present",
    highlights: [
      {
        title: "CI/CD Automation",
        description:
          "Architected scalable CI/CD pipelines using GitHub Actions for 2 core products, enabling seamless multi-environment releases via S3 and CloudFront. Implemented OIDC for AWS authentication, eliminating long-lived keys.",
        icon: "rocket",
      },
      {
        title: "AWS Cloud Security",
        description:
          "Led remediation of 50+ critical VAPT findings across EC2, S3, IAM, RDS, and Lambda. Enforced IMDSv2, least-privilege IAM, and MFA — cutting attack surface by 40% and achieving full compliance.",
        icon: "shield",
      },
      {
        title: "Video Infrastructure",
        description:
          "Architected a multi-provider DRM video pipeline (Gumlet, Vimeo, Videocrypt) that eliminated piracy and scaled live-class streaming to 100+ hrs/day with 99.9% uptime across 50,000+ learners.",
        icon: "play",
      },
      {
        title: "Communities Platform",
        description:
          "Designed and shipped an end-to-end Communities module (Next.js + React.js + Node) supporting org-level discussions and 1:1 messaging — adopted by 100% of enterprise clients within 2 months.",
        icon: "users",
      },
    ],
  },
  {
    role: "Software Engineer Intern",
    company: "Edmingle",
    type: "Onsite",
    period: "Jan 2023 – Jun 2023",
    highlights: [
      {
        title: "Assessment System",
        description:
          "Built a high-scale Assessment System (Ember.js, PHP) that improved exam delivery efficiency by 50% for 100+ admins and 50,000+ students. Engineered automated certificate recertification workflows.",
        icon: "fileCheck",
      },
      {
        title: "Marketing & Growth",
        description:
          "Delivered marketing landing page (Next.js, Ant Design) with SSO + OTP authentication, contributing to a 30% uplift in new user sign-up conversion post-launch.",
        icon: "trendingUp",
      },
    ],
  },
];

export const projects = [
  {
    title: "Duepy",
    subtitle: "B2B Payment Recovery SaaS",
    year: "2025",
    tag: "SaaS · Personal",
    description:
      "Distributed reminder processing system with delayed queues, multi-tenant RBAC, AES-256 encryption, event-driven invoice reconciliation, and production CI/CD.",
    tech: ["Next.js 15", "NestJS", "PostgreSQL", "Redis", "BullMQ", "Razorpay"],
    liveUrl: "https://www.duepy.com/",
    liveLabel: "Live Site",
    confidential: false,
    featured: true,
    highlights: [
      "BullMQ + Redis delayed queues with deterministic job scheduling",
      "Multi-tenant NestJS backend with Supabase Auth & RLS",
      "Razorpay payment-link automation & event-driven reconciliation",
    ],
  },
  {
    title: "Communities",
    subtitle: "Org-Level Discussion Platform",
    year: "2024",
    tag: "Product · Edmingle",
    description:
      "End-to-end Communities module supporting organization-level discussions and 1:1 messaging. Adopted by 100% of enterprise clients within 2 months of release.",
    tech: ["Next.js", "React", "Node.js", "PostgreSQL", "WebSockets"],
    liveUrl: null,
    liveLabel: "Internal Product",
    confidential: true,
    featured: false,
    highlights: [
      "Real-time messaging with WebSocket connection pooling",
      "Threaded discussions with mentions, reactions and notifications",
      "Adopted by 100% of enterprise clients in 2 months",
    ],
  },
  {
    title: "DRM Video Pipeline",
    subtitle: "Multi-Provider Streaming Infra",
    year: "2024",
    tag: "Infrastructure · Edmingle",
    description:
      "Multi-provider DRM video pipeline (Gumlet, Vimeo, Videocrypt) that eliminated piracy and scaled live-class streaming to 100+ hours/day with 99.9% uptime.",
    tech: ["Node.js", "AWS S3", "CloudFront", "DRM", "FFmpeg"],
    liveUrl: null,
    liveLabel: "Confidential",
    confidential: true,
    featured: false,
    highlights: [
      "Eliminated piracy across 50,000+ learners",
      "Live-class streaming to 100+ hours per day",
      "99.9% uptime with multi-provider failover",
    ],
  },
];

export const education = {
  institution: "Odisha University of Technology & Research (OUTR)",
  degree: "B.Tech in Information Technology",
  cgpa: "9.63 / 10",
  period: "2019 – 2023",
  location: "Bhubaneswar, Karnataka, India",
};
