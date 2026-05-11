"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { ArrowUpRight, Mail, Copy, Check, Loader2, AlertCircle } from "lucide-react";
import { siteConfig } from "@/lib/data";
import { GithubIcon, LinkedinIcon } from "@/components/ui/Icons";
import { RevealOnScroll } from "@/components/animations/RevealOnScroll";

type Status = "idle" | "submitting" | "success" | "error";

export function Contact() {
  const [copied, setCopied] = useState(false);
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [form, setForm] = useState({
    name: "",
    email: "",
    budget: "",
    message: "",
  });

  function copyEmail() {
    navigator.clipboard.writeText(siteConfig.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_KEY;

    // Fallback: if no key configured, open mail client
    if (!accessKey) {
      const body = `Hi Asit,%0D%0A%0D%0A${form.message}%0D%0A%0D%0A— ${form.name}%0D%0A${form.email}${form.budget ? `%0D%0ABudget: ${form.budget}` : ""}`;
      window.location.href = `mailto:${siteConfig.email}?subject=Project Inquiry from ${form.name}&body=${body}`;
      setStatus("success");
      return;
    }

    try {
      const payload = {
        access_key: accessKey,
        subject: `New Project Inquiry — ${form.name}`,
        from_name: form.name,
        replyto: form.email,
        name: form.name,
        email: form.email,
        budget: form.budget || "Not specified",
        message: form.message,
        botcheck: "",
      };

      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(payload),
      });

      const data = await res.json();
      if (data.success) {
        setStatus("success");
        setForm({ name: "", email: "", budget: "", message: "" });
        setTimeout(() => setStatus("idle"), 6000);
      } else {
        setStatus("error");
        setErrorMessage(data.message || "Something went wrong. Please try again.");
      }
    } catch (err) {
      setStatus("error");
      setErrorMessage(
        err instanceof Error ? err.message : "Network error — try again."
      );
    }
  }

  return (
    <section id="contact" className="relative py-28 sm:py-36 overflow-hidden bg-bg-soft">
      <div className="absolute inset-x-0 bottom-0 h-1/2 bg-[radial-gradient(ellipse_60%_100%_at_50%_100%,rgba(223,255,31,0.08),transparent)] pointer-events-none" />

      <div className="relative mx-auto max-w-6xl px-6">
        {/* Header */}
        <div className="grid md:grid-cols-2 gap-6 md:items-end mb-16 sm:mb-20">
          <RevealOnScroll>
            <div className="space-y-5">
              <div className="sw-eyebrow">
                <span className="dot" />
                Contact
              </div>
              <h2 className="display text-[clamp(2.5rem,8vw,6.5rem)] font-semibold leading-[0.9]">
                LET&apos;S WORK
                <br />
                <span className="text-accent">TOGETHER.</span>
              </h2>
            </div>
          </RevealOnScroll>
          <RevealOnScroll delay={0.15}>
            <p className="text-base text-fg-soft leading-relaxed md:text-right">
              Open to <span className="text-fg font-medium">SDE 2 roles</span>,
              freelance projects, and contract work. Average reply within 24
              hours.
            </p>
          </RevealOnScroll>
        </div>

        <div className="grid lg:grid-cols-[1fr_1.2fr] gap-6 lg:gap-10">
          {/* Left: contact links */}
          <RevealOnScroll>
            <div className="space-y-4">
              <button
                type="button"
                onClick={copyEmail}
                className="group w-full sw-card sw-card-glow p-5 sm:p-6 flex items-center gap-4 text-left"
              >
                <div className="w-12 h-12 rounded-2xl bg-accent flex items-center justify-center text-black shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-xs uppercase tracking-[0.18em] text-muted">
                    Email
                  </p>
                  <p className="text-sm text-fg font-medium truncate">
                    {siteConfig.email}
                  </p>
                </div>
                <span className="shrink-0 text-muted group-hover:text-accent transition-colors">
                  {copied ? (
                    <Check className="w-4 h-4 text-accent" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </span>
              </button>

              <a
                href={siteConfig.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="group block sw-card sw-card-glow p-5 sm:p-6"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-[#0A66C2] flex items-center justify-center text-white shrink-0">
                    <LinkedinIcon className="w-5 h-5" />
                  </div>
                  <div className="flex-1">
                    <p className="text-xs uppercase tracking-[0.18em] text-muted">
                      LinkedIn
                    </p>
                    <p className="text-sm text-fg font-medium">
                      asit-rohan-dass
                    </p>
                  </div>
                  <div className="sw-arrow shrink-0">
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>
              </a>

              <a
                href={siteConfig.github}
                target="_blank"
                rel="noopener noreferrer"
                className="group block sw-card sw-card-glow p-5 sm:p-6"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-zinc-100 flex items-center justify-center text-black shrink-0">
                    <GithubIcon className="w-5 h-5" />
                  </div>
                  <div className="flex-1">
                    <p className="text-xs uppercase tracking-[0.18em] text-muted">
                      GitHub
                    </p>
                    <p className="text-sm text-fg font-medium">@asitdass</p>
                  </div>
                  <div className="sw-arrow shrink-0">
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>
              </a>

              <div className="sw-card p-5 sm:p-6 mt-2">
                <p className="text-xs uppercase tracking-[0.18em] text-muted mb-2">
                  Based in
                </p>
                <p className="text-base font-medium text-fg">
                  Bengaluru, India
                </p>
                <p className="text-xs text-muted mt-1">
                  Working IST · UTC+5:30
                </p>
              </div>
            </div>
          </RevealOnScroll>

          {/* Right: form */}
          <RevealOnScroll delay={0.15}>
            <form
              onSubmit={handleSubmit}
              className="sw-card p-6 sm:p-8 space-y-5 relative"
            >
              {/* Honeypot */}
              <input
                type="checkbox"
                name="botcheck"
                tabIndex={-1}
                className="hidden"
                aria-hidden="true"
              />

              <div className="grid sm:grid-cols-2 gap-4">
                <Field
                  label="Name"
                  type="text"
                  required
                  value={form.name}
                  onChange={(v) => setForm({ ...form, name: v })}
                />
                <Field
                  label="Email"
                  type="email"
                  required
                  value={form.email}
                  onChange={(v) => setForm({ ...form, email: v })}
                />
              </div>

              <div className="space-y-2">
                <label className="block text-xs uppercase tracking-[0.18em] text-muted">
                  Budget
                </label>
                <select
                  value={form.budget}
                  onChange={(e) => setForm({ ...form, budget: e.target.value })}
                  className="w-full px-4 py-3 rounded-2xl border border-border bg-bg-elevated text-fg outline-none transition-colors focus:border-accent appearance-none cursor-pointer"
                >
                  <option value="">Select…</option>
                  <option value="<$3k">Under $3k</option>
                  <option value="$3k - $5k">$3k – $5k</option>
                  <option value="$5k - $10k">$5k – $10k</option>
                  <option value=">$10k">$10k+</option>
                  <option value="Full-time role">Full-time role</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="block text-xs uppercase tracking-[0.18em] text-muted">
                  Message
                </label>
                <textarea
                  required
                  rows={5}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  placeholder="Tell me about the project, role, or idea you have in mind…"
                  className="w-full px-4 py-3 rounded-2xl border border-border bg-bg-elevated text-fg outline-none transition-colors focus:border-accent resize-none placeholder:text-muted-soft"
                />
              </div>

              <motion.button
                type="submit"
                disabled={status === "submitting"}
                className="w-full sw-btn-primary justify-center text-base py-4 group disabled:opacity-60 disabled:cursor-not-allowed"
                whileTap={{ scale: 0.98 }}
              >
                {status === "submitting" ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    Sending…
                  </>
                ) : (
                  <>
                    Submit
                    <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </>
                )}
              </motion.button>

              <AnimatePresence mode="wait">
                {status === "success" && (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    className="flex items-center gap-2 px-4 py-3 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-sm"
                  >
                    <Check className="w-4 h-4 shrink-0" />
                    <span>
                      Message sent. I&apos;ll get back to you within 24 hours.
                    </span>
                  </motion.div>
                )}
                {status === "error" && (
                  <motion.div
                    key="error"
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    className="flex items-center gap-2 px-4 py-3 rounded-xl bg-red-500/10 border border-red-500/30 text-red-300 text-sm"
                  >
                    <AlertCircle className="w-4 h-4 shrink-0" />
                    <span>
                      {errorMessage || "Something went wrong. Try again."}
                    </span>
                  </motion.div>
                )}
              </AnimatePresence>

              <p className="text-xs text-muted text-center">
                Or just send a quick email — I read every one.
              </p>
            </form>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  type,
  required,
  value,
  onChange,
}: {
  label: string;
  type: string;
  required?: boolean;
  value: string;
  onChange: (v: string) => void;
}) {
  return (
    <div className="space-y-2">
      <label className="block text-xs uppercase tracking-[0.18em] text-muted">
        {label}
      </label>
      <input
        type={type}
        required={required}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full px-4 py-3 rounded-2xl border border-border bg-bg-elevated text-fg outline-none transition-colors focus:border-accent placeholder:text-muted-soft"
      />
    </div>
  );
}
