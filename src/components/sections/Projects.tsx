"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Lock } from "lucide-react";
import { projects } from "@/lib/data";
import { RevealOnScroll } from "@/components/animations/RevealOnScroll";
import { GithubIcon } from "@/components/ui/Icons";

const projectGradients = [
  "from-[#dfff1f] via-[#a3e635] to-[#65a30d]",
  "from-[#3b82f6] via-[#6366f1] to-[#8b5cf6]",
  "from-[#f97316] via-[#ef4444] to-[#ec4899]",
];

export function Projects() {
  return (
    <section id="projects" className="relative py-28 sm:py-36 overflow-hidden">
      <div className="mx-auto max-w-6xl px-6">
        {/* Section header */}
        <div className="grid md:grid-cols-2 gap-6 md:items-end mb-16 sm:mb-20">
          <RevealOnScroll>
            <div className="space-y-5">
              <div className="sw-eyebrow">
                <span className="dot" />
                Recent Work
              </div>
              <h2 className="display text-[clamp(2.5rem,8vw,6.5rem)] font-semibold leading-[0.9]">
                RECENT
                <br />
                <span className="text-accent">PROJECTS.</span>
              </h2>
            </div>
          </RevealOnScroll>
          <RevealOnScroll delay={0.15}>
            <p className="text-base text-fg-soft leading-relaxed md:text-right">
              A selection of production systems I&apos;ve architected — from
              distributed SaaS platforms to streaming infrastructure serving
              50,000+ users.
            </p>
          </RevealOnScroll>
        </div>

        {/* Project grid */}
        <div className="grid md:grid-cols-3 gap-5">
          {projects.map((project, i) => {
            const isLive = !project.confidential && project.liveUrl;
            const Tag = isLive ? "a" : "div";

            const tagProps = isLive
              ? {
                  href: project.liveUrl as string,
                  target: "_blank",
                  rel: "noopener noreferrer",
                }
              : {};

            return (
              <RevealOnScroll key={project.title} delay={i * 0.1}>
                <motion.div
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  className="h-full"
                >
                  <Tag
                    {...tagProps}
                    className={`group block sw-card sw-card-glow p-5 h-full ${
                      isLive ? "cursor-pointer" : "cursor-default"
                    }`}
                  >
                    {/* Cover */}
                    <div
                      className={`relative aspect-[4/3] rounded-2xl overflow-hidden bg-gradient-to-br ${
                        projectGradients[i % projectGradients.length]
                      } mb-5`}
                    >
                      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.2),transparent_55%)]" />
                      <div className="absolute inset-0 mix-blend-overlay opacity-30 bg-dots" />
                      <div className="absolute inset-0 p-5 flex flex-col justify-between">
                        <div className="flex items-center justify-between">
                          <span className="text-xs font-mono text-black/70 bg-white/30 backdrop-blur-sm px-2.5 py-1 rounded-full border border-white/20">
                            {project.year}
                          </span>
                          {project.featured ? (
                            <span className="text-[10px] uppercase tracking-widest font-semibold text-black bg-white/40 backdrop-blur-sm px-2.5 py-1 rounded-full border border-white/30">
                              Featured
                            </span>
                          ) : project.confidential ? (
                            <span className="inline-flex items-center gap-1 text-[10px] uppercase tracking-widest font-semibold text-black bg-white/40 backdrop-blur-sm px-2.5 py-1 rounded-full border border-white/30">
                              <Lock className="w-2.5 h-2.5" />
                              {project.liveLabel}
                            </span>
                          ) : null}
                        </div>
                        <div>
                          <h3 className="text-3xl sm:text-4xl font-semibold tracking-tight text-black/90 leading-none">
                            {project.title}
                          </h3>
                        </div>
                      </div>
                    </div>

                    {/* Body */}
                    <div className="flex items-start justify-between gap-3 mb-3">
                      <div className="min-w-0">
                        <h4 className="text-lg font-semibold text-fg group-hover:text-accent transition-colors truncate">
                          {project.title}
                        </h4>
                        <p className="text-xs text-muted">{project.tag}</p>
                      </div>
                      {isLive ? (
                        <div className="sw-arrow shrink-0" aria-label="Open live site">
                          <ArrowUpRight className="w-4 h-4" />
                        </div>
                      ) : (
                        <div className="shrink-0 w-10 h-10 rounded-full border border-border-bright bg-bg-elevated flex items-center justify-center text-muted">
                          <Lock className="w-3.5 h-3.5" />
                        </div>
                      )}
                    </div>

                    <p className="text-sm text-fg-soft leading-relaxed line-clamp-3">
                      {project.description}
                    </p>

                    {/* Tech */}
                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {project.tech.slice(0, 4).map((t) => (
                        <span
                          key={t}
                          className="text-[10px] uppercase tracking-wider text-muted bg-bg-elevated border border-border px-2 py-1 rounded-full font-mono"
                        >
                          {t}
                        </span>
                      ))}
                      {project.tech.length > 4 && (
                        <span className="text-[10px] uppercase tracking-wider text-muted bg-bg-elevated border border-border px-2 py-1 rounded-full font-mono">
                          +{project.tech.length - 4}
                        </span>
                      )}
                    </div>

                    {/* Footer status */}
                    <div className="mt-5 pt-4 border-t border-border flex items-center justify-between">
                      {isLive ? (
                        <>
                          <span className="inline-flex items-center gap-2 text-xs text-emerald-400 font-medium">
                            <span className="relative flex h-2 w-2">
                              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                            </span>
                            Live in production
                          </span>
                          <span className="text-xs text-muted group-hover:text-accent transition-colors">
                            Visit →
                          </span>
                        </>
                      ) : (
                        <>
                          <span className="inline-flex items-center gap-2 text-xs text-muted font-medium">
                            <Lock className="w-3 h-3" />
                            {project.liveLabel} · NDA
                          </span>
                          <span className="text-xs text-muted">
                            Available on request
                          </span>
                        </>
                      )}
                    </div>
                  </Tag>
                </motion.div>
              </RevealOnScroll>
            );
          })}
        </div>

        {/* See more */}
        <RevealOnScroll delay={0.4}>
          <div className="mt-12 flex justify-center">
            <a
              href="https://github.com/asitdass"
              target="_blank"
              rel="noopener noreferrer"
              className="sw-btn-secondary"
            >
              <GithubIcon className="w-4 h-4" />
              See more on GitHub
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
