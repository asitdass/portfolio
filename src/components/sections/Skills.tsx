"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import {
  SiNextdotjs,
  SiNestjs,
  SiPostgresql,
  SiRedis,
  SiDocker,
  SiTypescript,
  SiGithubactions,
} from "react-icons/si";
import { FaAws } from "react-icons/fa6";
import type { IconType } from "react-icons";
import { skillCategories } from "@/lib/data";
import { RevealOnScroll } from "@/components/animations/RevealOnScroll";

type Tool = {
  name: string;
  role: string;
  Icon: IconType;
  bg: string;
  fg: string;
};

// Custom Cursor (AI editor) logo — not in simple-icons
const CursorIcon: IconType = ((props) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
    {...props}
  >
    <path d="M11.925 24l10.425-6.025V5.95L11.925 0 1.5 5.95v12.025L11.925 24zm0-1.733L3.005 17.13V6.84l8.92 5.137 8.92-5.137v10.29l-8.92 5.137zm0-12.157L3.005 5.95l8.92-5.137 8.92 5.137-8.92 4.16z" />
  </svg>
)) as IconType;

const tools: Tool[] = [
  { name: "Next.js", role: "React Framework", Icon: SiNextdotjs, bg: "bg-black", fg: "text-white" },
  { name: "NestJS", role: "Backend Framework", Icon: SiNestjs, bg: "bg-[#0d0d0d]", fg: "text-[#E0234E]" },
  { name: "PostgreSQL", role: "Primary Database", Icon: SiPostgresql, bg: "bg-[#0d2233]", fg: "text-[#4169E1]" },
  { name: "AWS", role: "Cloud Infrastructure", Icon: FaAws, bg: "bg-[#232F3E]", fg: "text-[#FF9900]" },
  { name: "Redis", role: "Cache & Queues", Icon: SiRedis, bg: "bg-[#1a0606]", fg: "text-[#DC382D]" },
  { name: "Docker", role: "Containerization", Icon: SiDocker, bg: "bg-[#061421]", fg: "text-[#2496ED]" },
  { name: "TypeScript", role: "Type Safety", Icon: SiTypescript, bg: "bg-[#0a1f3a]", fg: "text-[#3178C6]" },
  { name: "GitHub Actions", role: "CI / CD Pipelines", Icon: SiGithubactions, bg: "bg-[#0d1117]", fg: "text-[#2088FF]" },
  { name: "Cursor", role: "AI Code Editor", Icon: CursorIcon, bg: "bg-[#0a0a0a]", fg: "text-accent" },
];

export function Skills() {
  return (
    <section id="tools" className="relative py-28 sm:py-36 overflow-hidden">
      <div className="mx-auto max-w-6xl px-6">
        {/* Header */}
        <div className="grid md:grid-cols-2 gap-6 md:items-end mb-16 sm:mb-20">
          <RevealOnScroll>
            <div className="space-y-5">
              <div className="sw-eyebrow">
                <span className="dot" />
                Toolkit
              </div>
              <h2 className="display text-[clamp(2.5rem,8vw,6.5rem)] font-semibold leading-[0.9]">
                PREMIUM
                <br />
                <span className="text-accent">TOOLS.</span>
              </h2>
            </div>
          </RevealOnScroll>
          <RevealOnScroll delay={0.15}>
            <p className="text-base text-fg-soft leading-relaxed md:text-right">
              The exact stack I rely on every day to design, build, and ship
              production software. Battle-tested across SaaS, infrastructure,
              and security work.
            </p>
          </RevealOnScroll>
        </div>

        {/* Tools grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-5">
          {tools.map((tool, i) => (
            <RevealOnScroll key={tool.name} delay={i * 0.05}>
              <motion.div
                className="group relative sw-card sw-card-glow p-5 sm:p-6 h-full"
                whileHover={{ y: -3 }}
                transition={{ duration: 0.4 }}
              >
                <div className="flex items-start justify-between gap-3 mb-6">
                  <div
                    className={`relative w-14 h-14 rounded-2xl ${tool.bg} ${tool.fg} flex items-center justify-center shadow-[inset_0_1px_0_rgba(255,255,255,0.08),0_4px_16px_rgba(0,0,0,0.4)] border border-white/5`}
                  >
                    <tool.Icon className="w-7 h-7" />
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-muted group-hover:text-accent group-hover:rotate-12 transition-all duration-400 opacity-0 group-hover:opacity-100" />
                </div>
                <h3 className="text-base sm:text-lg font-semibold text-fg group-hover:text-accent transition-colors">
                  {tool.name}
                </h3>
                <p className="text-xs text-muted mt-0.5">{tool.role}</p>
              </motion.div>
            </RevealOnScroll>
          ))}
        </div>

        {/* Full skill catalog */}
        <div className="mt-20">
          <RevealOnScroll>
            <h3 className="text-2xl sm:text-3xl font-semibold tracking-tight text-fg mb-8">
              Full Stack <span className="text-muted">— 49+ technologies</span>
            </h3>
          </RevealOnScroll>
          <div className="space-y-6">
            {skillCategories.map((cat, ci) => (
              <RevealOnScroll key={cat.name} delay={ci * 0.06}>
                <div className="grid md:grid-cols-[200px_1fr] gap-3 md:gap-8 items-baseline border-t border-border pt-6">
                  <h4 className="text-sm uppercase tracking-[0.18em] text-fg-soft font-medium">
                    {cat.name}
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {cat.skills.map((skill) => (
                      <span
                        key={skill}
                        className="text-sm px-3 py-1 rounded-full bg-bg-elevated border border-border text-fg-soft hover:border-accent hover:text-accent transition-colors cursor-default"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
