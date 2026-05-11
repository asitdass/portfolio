"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { ArrowUpRight, Plus, Minus } from "lucide-react";
import { experiences } from "@/lib/data";
import { RevealOnScroll } from "@/components/animations/RevealOnScroll";

export function Experience() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <section id="experience" className="relative py-28 sm:py-36 overflow-hidden bg-bg-soft">
      <div className="mx-auto max-w-6xl px-6">
        {/* Header */}
        <div className="grid md:grid-cols-2 gap-6 md:items-end mb-16 sm:mb-20">
          <RevealOnScroll>
            <div className="space-y-5">
              <div className="sw-eyebrow">
                <span className="dot" />
                Career
              </div>
              <h2 className="display text-[clamp(2.5rem,8vw,6.5rem)] font-semibold leading-[0.9]">
                2.5+ YEARS
                <br />
                OF <span className="text-accent">EXPERIENCE.</span>
              </h2>
            </div>
          </RevealOnScroll>
          <RevealOnScroll delay={0.15}>
            <p className="text-base text-fg-soft leading-relaxed md:text-right">
              Building production systems at scale — from CI/CD architecture to
              cloud security to multi-provider video infrastructure.
            </p>
          </RevealOnScroll>
        </div>

        {/* Experience accordion */}
        <div className="space-y-4">
          {experiences.map((exp, i) => {
            const isOpen = openIdx === i;
            return (
              <RevealOnScroll key={i} delay={i * 0.08}>
                <motion.div
                  layout
                  className={`sw-card overflow-hidden ${isOpen ? "border-accent/30 bg-card-hover" : ""}`}
                  transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                >
                  <button
                    type="button"
                    onClick={() => setOpenIdx(isOpen ? null : i)}
                    className="w-full text-left p-6 sm:p-8 flex items-start gap-4 sm:gap-6"
                  >
                    {/* Logo placeholder */}
                    <div className="shrink-0 w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-accent flex items-center justify-center text-black font-bold text-lg">
                      {exp.company[0]}
                    </div>

                    <div className="flex-1 min-w-0 grid sm:grid-cols-[1fr_auto] gap-2 sm:gap-6 items-start">
                      <div>
                        <div className="flex flex-wrap items-center gap-2 mb-1">
                          <h3 className="text-xl sm:text-2xl font-semibold text-fg">
                            {exp.company}
                          </h3>
                          <span className="text-xs font-mono text-muted px-2 py-0.5 rounded-md bg-bg-elevated border border-border">
                            {exp.type}
                          </span>
                        </div>
                        <p className="text-sm text-fg-soft mb-1">{exp.role}</p>
                        <p className="text-xs text-muted line-clamp-1 max-w-xl">
                          {exp.highlights[0].description}
                        </p>
                      </div>
                      <div className="flex items-center gap-3 sm:flex-col sm:items-end">
                        <span className="text-xs font-mono text-muted whitespace-nowrap">
                          {exp.period}
                        </span>
                        <span className="shrink-0 w-9 h-9 rounded-full bg-bg-elevated border border-border flex items-center justify-center text-fg">
                          {isOpen ? (
                            <Minus className="w-4 h-4" />
                          ) : (
                            <Plus className="w-4 h-4" />
                          )}
                        </span>
                      </div>
                    </div>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 sm:px-8 pb-8 pt-2 grid sm:grid-cols-2 gap-3 sm:gap-4 sm:pl-[calc(3.5rem+1.5rem+1.5rem)]">
                          {exp.highlights.map((h, hi) => (
                            <div
                              key={hi}
                              className="rounded-2xl border border-border bg-bg-elevated p-5 hover:border-accent/30 transition-colors"
                            >
                              <div className="flex items-center gap-2 mb-2">
                                <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                                <h4 className="text-sm font-semibold text-fg">
                                  {h.title}
                                </h4>
                              </div>
                              <p className="text-xs text-fg-soft leading-relaxed">
                                {h.description}
                              </p>
                            </div>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              </RevealOnScroll>
            );
          })}
        </div>

        {/* Resume CTA */}
        <RevealOnScroll delay={0.3}>
          <div className="mt-12 flex justify-center">
            <a
              href="/Asit_Rohan_Dass_Resume.pdf"
              download="Asit_Rohan_Dass_Resume.pdf"
              className="sw-btn-primary"
            >
              Download Full Resume
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
