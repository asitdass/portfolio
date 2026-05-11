"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { navItems, siteConfig } from "@/lib/data";
import { useActiveSection } from "@/hooks/useActiveSection";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const activeSection = useActiveSection();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.header
        className="fixed top-4 left-1/2 -translate-x-1/2 z-40 w-[min(92%,1080px)]"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 2.2, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      >
        <div
          className={cn(
            "flex items-center justify-between gap-4 px-3 py-2 rounded-full border transition-all duration-500",
            isScrolled
              ? "bg-card/85 backdrop-blur-xl border-border-bright"
              : "bg-card/40 backdrop-blur-md border-border"
          )}
        >
          {/* Brand */}
          <a
            href="#home"
            className="flex items-center gap-2 px-3 py-1.5 group"
          >
            <span className="relative w-8 h-8 rounded-full bg-accent flex items-center justify-center text-black font-bold text-sm">
              A
            </span>
            <span className="hidden sm:inline text-sm font-medium text-fg">
              {siteConfig.name.split(" ")[0]} Dass
            </span>
          </a>

          {/* Center nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navItems.map((item) => {
              const isActive = activeSection === item.href.slice(1);
              return (
                <a
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "relative px-3.5 py-1.5 text-sm font-medium rounded-full transition-colors duration-300",
                    isActive ? "text-black" : "text-muted hover:text-fg"
                  )}
                >
                  {isActive && (
                    <motion.span
                      layoutId="activeNavPill"
                      className="absolute inset-0 rounded-full bg-accent"
                      transition={{
                        type: "spring",
                        stiffness: 380,
                        damping: 32,
                      }}
                    />
                  )}
                  <span className="relative z-10">{item.label}</span>
                </a>
              );
            })}
          </nav>

          {/* CTA */}
          <a href="#contact" className="hidden md:inline-flex sw-btn-primary text-xs px-4 py-2">
            Hire Me
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>

          {/* Mobile burger */}
          <button
            type="button"
            className="md:hidden w-9 h-9 flex flex-col justify-center items-center gap-1 rounded-full border border-border-bright bg-card mr-1"
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            aria-label="Toggle menu"
          >
            <motion.span
              className="w-4 h-0.5 bg-fg block rounded-full"
              animate={isMobileOpen ? { rotate: 45, y: 3 } : { rotate: 0, y: 0 }}
            />
            <motion.span
              className="w-4 h-0.5 bg-fg block rounded-full"
              animate={isMobileOpen ? { opacity: 0 } : { opacity: 1 }}
            />
            <motion.span
              className="w-4 h-0.5 bg-fg block rounded-full"
              animate={isMobileOpen ? { rotate: -45, y: -3 } : { rotate: 0, y: 0 }}
            />
          </button>
        </div>
      </motion.header>

      {/* Mobile menu */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            className="fixed inset-0 z-30 bg-bg/97 backdrop-blur-xl flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            <nav className="flex flex-col items-center gap-7">
              {navItems.map((item, i) => (
                <motion.a
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsMobileOpen(false)}
                  className={cn(
                    "text-3xl sm:text-4xl font-semibold tracking-tight transition-colors",
                    activeSection === item.href.slice(1)
                      ? "text-accent"
                      : "text-fg hover:text-accent"
                  )}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ delay: i * 0.06, duration: 0.35 }}
                >
                  {item.label}
                </motion.a>
              ))}
              <motion.a
                href="#contact"
                onClick={() => setIsMobileOpen(false)}
                className="sw-btn-primary mt-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ delay: 0.3, duration: 0.35 }}
              >
                Hire Me <ArrowUpRight className="w-4 h-4" />
              </motion.a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
