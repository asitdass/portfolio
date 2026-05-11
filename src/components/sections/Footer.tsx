"use client";

import { ArrowUpRight } from "lucide-react";
import { siteConfig, navItems } from "@/lib/data";
import { GithubIcon, LinkedinIcon } from "@/components/ui/Icons";

export function Footer() {
  return (
    <footer className="relative pt-20 pb-10 border-t border-border overflow-hidden">
      <div className="mx-auto max-w-6xl px-6">
        {/* Massive name display */}
        <div className="text-center pb-12 mb-12 border-b border-border">
          <p className="text-xs uppercase tracking-[0.4em] text-muted mb-6">
            Crafted in 2026 · Bengaluru, India
          </p>
          <h3 className="display text-[clamp(3rem,15vw,12rem)] font-semibold leading-[0.85] tracking-tighter">
            ASIT<span className="text-accent">.</span>
          </h3>
        </div>

        {/* Bottom row */}
        <div className="grid sm:grid-cols-3 gap-8 items-start">
          <div>
            <p className="text-sm text-fg-soft">© {new Date().getFullYear()} {siteConfig.name}</p>
            <p className="text-xs text-muted mt-1">All rights reserved.</p>
          </div>

          <nav className="flex flex-wrap gap-x-5 gap-y-2 sm:justify-center">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm text-muted hover:text-accent transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex sm:justify-end gap-3">
            <a
              href={siteConfig.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="w-10 h-10 rounded-full border border-border-bright bg-card flex items-center justify-center text-fg-soft hover:bg-accent hover:text-black hover:border-accent transition-colors"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
            <a
              href={siteConfig.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="w-10 h-10 rounded-full border border-border-bright bg-card flex items-center justify-center text-fg-soft hover:bg-accent hover:text-black hover:border-accent transition-colors"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>
            <a
              href={`mailto:${siteConfig.email}`}
              className="inline-flex items-center gap-2 text-sm text-fg hover:text-accent transition-colors px-4 py-2 rounded-full border border-border-bright bg-card hover:border-accent"
            >
              Say Hi <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        <p className="text-center text-xs text-muted mt-12 font-mono">
          Built with Next.js 15 · Framer Motion · Tailwind CSS
        </p>
      </div>
    </footer>
  );
}
