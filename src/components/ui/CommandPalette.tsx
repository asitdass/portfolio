"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState, useRef, useMemo } from "react";
import {
  Home,
  User,
  Code2,
  Briefcase,
  FolderKanban,
  MessageCircle,
  Mail,
  FileText,
  Search,
  Sparkles,
  ArrowRight,
} from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/Icons";
import { siteConfig } from "@/lib/data";

type Command = {
  id: string;
  label: string;
  description?: string;
  icon: React.ComponentType<{ className?: string }>;
  group: "navigation" | "social" | "actions";
  action: () => void;
  keywords?: string[];
};

export function CommandPalette() {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [activeIndex, setActiveIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const listRef = useRef<HTMLDivElement>(null);

  const commands: Command[] = useMemo(
    () => [
      {
        id: "home",
        label: "Go to Home",
        icon: Home,
        group: "navigation",
        action: () => scrollTo("home"),
        keywords: ["start", "top", "hero"],
      },
      {
        id: "about",
        label: "About Me",
        description: "Background and stats",
        icon: User,
        group: "navigation",
        action: () => scrollTo("about"),
      },
      {
        id: "skills",
        label: "Skills & Tech Stack",
        description: "49+ technologies",
        icon: Code2,
        group: "navigation",
        action: () => scrollTo("skills"),
        keywords: ["tech", "stack", "technologies"],
      },
      {
        id: "experience",
        label: "Work Experience",
        description: "2.5+ years at Edmingle",
        icon: Briefcase,
        group: "navigation",
        action: () => scrollTo("experience"),
        keywords: ["work", "career", "job"],
      },
      {
        id: "projects",
        label: "Projects",
        description: "Featured work",
        icon: FolderKanban,
        group: "navigation",
        action: () => scrollTo("projects"),
        keywords: ["portfolio", "work"],
      },
      {
        id: "contact",
        label: "Get in Touch",
        icon: MessageCircle,
        group: "navigation",
        action: () => scrollTo("contact"),
        keywords: ["hire", "email"],
      },
      {
        id: "github",
        label: "GitHub",
        description: "@asitdass",
        icon: GithubIcon,
        group: "social",
        action: () => window.open(siteConfig.github, "_blank"),
        keywords: ["code", "git"],
      },
      {
        id: "linkedin",
        label: "LinkedIn",
        description: "Connect professionally",
        icon: LinkedinIcon,
        group: "social",
        action: () => window.open(siteConfig.linkedin, "_blank"),
        keywords: ["profile", "social"],
      },
      {
        id: "email",
        label: "Send an Email",
        description: siteConfig.email,
        icon: Mail,
        group: "social",
        action: () => window.open(`mailto:${siteConfig.email}`),
        keywords: ["mail", "contact"],
      },
      {
        id: "resume",
        label: "Download Resume",
        description: "PDF • Latest version",
        icon: FileText,
        group: "actions",
        action: () => {
          const a = document.createElement("a");
          a.href = "/Asit_Rohan_Dass_Resume.pdf";
          a.download = "Asit_Rohan_Dass_Resume.pdf";
          document.body.appendChild(a);
          a.click();
          document.body.removeChild(a);
          setIsOpen(false);
        },
        keywords: ["cv", "pdf"],
      },
      {
        id: "copy-email",
        label: "Copy Email Address",
        icon: Sparkles,
        group: "actions",
        action: () => {
          navigator.clipboard.writeText(siteConfig.email);
        },
        keywords: ["clipboard"],
      },
    ],
    []
  );

  const filtered = useMemo(() => {
    if (!query) return commands;
    const q = query.toLowerCase();
    return commands.filter((cmd) => {
      const haystack = [
        cmd.label,
        cmd.description,
        cmd.id,
        ...(cmd.keywords || []),
      ]
        .filter(Boolean)
        .join(" ")
        .toLowerCase();
      return haystack.includes(q);
    });
  }, [query, commands]);

  const grouped = useMemo(() => {
    const groups: Record<string, Command[]> = {
      navigation: [],
      actions: [],
      social: [],
    };
    filtered.forEach((cmd) => groups[cmd.group].push(cmd));
    return groups;
  }, [filtered]);

  useEffect(() => {
    setActiveIndex(0);
  }, [query]);

  function scrollTo(id: string) {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
    setIsOpen(false);
  }

  // Keyboard shortcut: Cmd+K / Ctrl+K
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setIsOpen((p) => !p);
      }
      if (e.key === "Escape") {
        setIsOpen(false);
      }
      if (e.key === "/" && !isOpen) {
        const target = e.target as HTMLElement;
        const tag = target?.tagName?.toLowerCase();
        if (tag !== "input" && tag !== "textarea") {
          e.preventDefault();
          setIsOpen(true);
        }
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [isOpen]);

  // Focus input on open
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
    } else {
      setQuery("");
    }
  }, [isOpen]);

  // Arrow key navigation
  useEffect(() => {
    if (!isOpen) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "ArrowDown") {
        e.preventDefault();
        setActiveIndex((i) => Math.min(i + 1, filtered.length - 1));
      }
      if (e.key === "ArrowUp") {
        e.preventDefault();
        setActiveIndex((i) => Math.max(i - 1, 0));
      }
      if (e.key === "Enter") {
        e.preventDefault();
        filtered[activeIndex]?.action();
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [isOpen, activeIndex, filtered]);

  let runningIdx = -1;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-[200] flex items-start justify-center pt-[12vh] sm:pt-[18vh] px-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.15 }}
        >
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-bg/70 backdrop-blur-md"
            onClick={() => setIsOpen(false)}
          />

          {/* Palette */}
          <motion.div
            className="relative w-full max-w-xl rounded-2xl border border-border bg-card shadow-[0_20px_70px_-15px_rgba(0,0,0,0.7)] overflow-hidden"
            initial={{ opacity: 0, scale: 0.96, y: -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: -10 }}
            transition={{ duration: 0.18, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Search input */}
            <div className="flex items-center gap-3 px-4 py-3.5 border-b border-border">
              <Search className="w-4 h-4 text-muted shrink-0" />
              <input
                ref={inputRef}
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Type a command or search..."
                className="flex-1 bg-transparent outline-none text-sm placeholder:text-muted text-fg"
              />
              <kbd className="text-xs">esc</kbd>
            </div>

            {/* Results */}
            <div ref={listRef} className="max-h-[60vh] overflow-y-auto py-2">
              {filtered.length === 0 ? (
                <div className="px-4 py-12 text-center">
                  <p className="text-sm text-muted">No results for &quot;{query}&quot;</p>
                </div>
              ) : (
                <>
                  {Object.entries(grouped).map(([groupName, items]) => {
                    if (items.length === 0) return null;
                    return (
                      <div key={groupName}>
                        <div className="px-4 pt-2 pb-1 text-[10px] uppercase tracking-[0.15em] text-muted font-mono">
                          {groupName}
                        </div>
                        {items.map((cmd) => {
                          runningIdx++;
                          const isActive = runningIdx === activeIndex;
                          return (
                            <button
                              key={cmd.id}
                              type="button"
                              onClick={cmd.action}
                              onMouseEnter={() => setActiveIndex(runningIdx)}
                              className={`w-full flex items-center gap-3 px-4 py-2.5 text-left transition-colors ${
                                isActive
                                  ? "bg-accent/15 text-fg"
                                  : "text-fg-soft hover:bg-card-hover"
                              }`}
                            >
                              <div
                                className={`shrink-0 w-8 h-8 rounded-lg flex items-center justify-center transition-colors ${
                                  isActive
                                    ? "bg-accent/20 text-accent-bright"
                                    : "bg-bg-elevated text-muted"
                                }`}
                              >
                                <cmd.icon className="w-4 h-4" />
                              </div>
                              <div className="flex-1 min-w-0">
                                <div className="text-sm font-medium truncate">
                                  {cmd.label}
                                </div>
                                {cmd.description && (
                                  <div className="text-xs text-muted truncate">
                                    {cmd.description}
                                  </div>
                                )}
                              </div>
                              {isActive && (
                                <ArrowRight className="w-4 h-4 text-accent-bright shrink-0" />
                              )}
                            </button>
                          );
                        })}
                      </div>
                    );
                  })}
                </>
              )}
            </div>

            {/* Footer */}
            <div className="flex items-center justify-between px-4 py-2.5 border-t border-border bg-bg-elevated/50 text-xs text-muted font-mono">
              <div className="flex items-center gap-3">
                <span className="flex items-center gap-1.5">
                  <kbd>↑</kbd>
                  <kbd>↓</kbd>
                  <span>navigate</span>
                </span>
                <span className="flex items-center gap-1.5">
                  <kbd>↵</kbd>
                  <span>select</span>
                </span>
              </div>
              <span className="hidden sm:flex items-center gap-1.5">
                <Sparkles className="w-3 h-3" />
                <span>command palette</span>
              </span>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
