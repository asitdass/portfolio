"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowUpRight, Sparkles } from "lucide-react";
import { stats, marqueeRow1, marqueeRow2 } from "@/lib/data";

export function Hero() {
  return (
    <section
      id="home"
      className="relative w-full pt-32 sm:pt-36 pb-12 overflow-hidden"
    >
      {/* Ambient lime glow at top */}
      <div className="absolute inset-0 hero-glow pointer-events-none" />
      <div className="absolute inset-0 bg-dots opacity-50 pointer-events-none" />

      <div className="relative mx-auto max-w-6xl px-6">
        {/* Avatar + name + tagline */}
        <motion.div
          className="flex flex-col items-center text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.4, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="relative mb-6">
            <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-full overflow-hidden ring-2 ring-accent/40 ring-offset-4 ring-offset-bg shadow-[0_0_60px_rgba(223,255,31,0.35)]">
              <Image
                src="/my-image.png"
                alt="Asit Rohan Dass"
                fill
                priority
                sizes="(min-width: 640px) 112px, 96px"
                className="object-cover"
              />
            </div>
            <span className="absolute -top-0.5 -right-0.5 w-5 h-5 rounded-full bg-emerald-500 border-[3px] border-bg flex items-center justify-center z-10">
              <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
            </span>
          </div>

          <p className="text-sm sm:text-base text-fg font-medium">
            Asit Rohan Dass
          </p>
          <p className="mt-2 max-w-md text-sm text-muted">
            A Software Engineer architecting production systems serving 200K+ users.
          </p>
        </motion.div>

        {/* Massive heading */}
        <div className="mt-12 sm:mt-16">
          <motion.h1
            className="display text-center text-[clamp(3rem,12vw,11rem)] font-semibold leading-[0.88]"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.55, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="block">SOFTWARE</span>
            <span className="block">
              ENGINEER<span className="text-accent">.</span>
            </span>
          </motion.h1>
        </div>

        {/* Description + CTAs */}
        <motion.div
          className="mt-10 grid md:grid-cols-2 gap-8 md:gap-12 items-end"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.8, duration: 0.7 }}
        >
          <p className="text-base sm:text-lg text-fg-soft leading-relaxed max-w-md">
            Passionate about building cloud-native platforms, distributed SaaS,
            and secure infrastructure that scales. Currently shipping at Edmingle
            and freelance.
          </p>
          <div className="flex flex-wrap gap-3 md:justify-end">
            <a href="#projects" className="sw-btn-primary">
              View Projects
              <ArrowUpRight className="w-4 h-4" />
            </a>
            <a href="#contact" className="sw-btn-secondary">
              Get in Touch
            </a>
          </div>
        </motion.div>

        {/* Stats row */}
        <motion.div
          className="mt-16 sm:mt-20 grid grid-cols-3 gap-4 sm:gap-6 border-y border-border py-8 sm:py-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 3.0, duration: 0.7 }}
        >
          {stats.map((stat, i) => (
            <div
              key={i}
              className="text-center sm:text-left flex flex-col gap-1"
            >
              <span className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight text-fg display">
                {stat.value}
              </span>
              <span className="text-[10px] sm:text-xs uppercase tracking-[0.2em] text-muted">
                {stat.label}
              </span>
            </div>
          ))}
        </motion.div>

        {/* Press ⌘K hint */}
        <motion.div
          className="mt-10 flex justify-center items-center gap-2 text-xs font-mono text-muted"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 3.3, duration: 0.6 }}
        >
          <Sparkles className="w-3 h-3 text-accent" />
          <span>Press</span>
          <kbd>⌘</kbd>
          <kbd>K</kbd>
          <span>to navigate anywhere</span>
        </motion.div>
      </div>

      {/* Dual marquees */}
      <motion.div
        className="mt-16 sm:mt-24 space-y-3"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3.4, duration: 0.7 }}
      >
        <div className="overflow-hidden border-y border-border py-5">
          <div className="flex animate-marquee whitespace-nowrap w-max">
            {[...marqueeRow1, ...marqueeRow1, ...marqueeRow1].map((item, i) => (
              <span
                key={i}
                className="inline-flex items-center gap-6 px-6 text-3xl sm:text-5xl font-semibold tracking-tight text-fg display"
              >
                <span>{item}</span>
                <span className="text-accent text-2xl sm:text-3xl">✦</span>
              </span>
            ))}
          </div>
        </div>
        <div className="overflow-hidden border-b border-border py-4">
          <div className="flex animate-marquee-reverse whitespace-nowrap w-max">
            {[...marqueeRow2, ...marqueeRow2, ...marqueeRow2].map((item, i) => (
              <span
                key={i}
                className="inline-flex items-center gap-6 px-6 text-2xl sm:text-3xl font-medium tracking-tight text-muted"
              >
                <span>{item}</span>
                <span className="text-border-bright">·</span>
              </span>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
