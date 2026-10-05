"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { MoonIcon, SunIcon } from "lucide-react";
import clsx from "clsx";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/get-dictionary";
import { profile } from "@/content/profile";

const sections = ["about", "stack", "projects", "experience", "contact"] as const;

export function Header({ lang, dict }: { lang: Locale; dict: Dictionary["nav"] }) {
  const { resolvedTheme, setTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const otherLang: Locale = lang === "pt" ? "en" : "pt";

  return (
    <header
      className={clsx(
        "fixed inset-x-0 top-0 z-50 transition-colors",
        scrolled ? "border-b border-border bg-background/80 backdrop-blur-md" : "border-b border-transparent",
      )}
    >
      <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-4 sm:px-6">
        <a href={`/${lang}`} className="font-mono text-sm font-semibold tracking-tight">
          {profile.name.split(" ")[0].toLowerCase()}
          <span className="text-accent">.dev</span>
        </a>

        <nav className="hidden items-center gap-6 text-sm text-muted md:flex">
          {sections.map((id) => (
            <a key={id} href={`#${id}`} className="transition hover:text-foreground">
              {dict[id]}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-1">
          <a
            href={`/${otherLang}`}
            aria-label={dict.switchLanguage}
            className="rounded-full px-3 py-2 font-mono text-xs font-medium uppercase text-muted transition hover:bg-card hover:text-foreground"
          >
            {otherLang}
          </a>
          <button
            type="button"
            onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
            aria-label={dict.toggleTheme}
            className="rounded-full p-2 text-muted transition hover:bg-card hover:text-foreground"
          >
            <SunIcon className="hidden size-4 dark:block" />
            <MoonIcon className="size-4 dark:hidden" />
          </button>
        </div>
      </div>
    </header>
  );
}
