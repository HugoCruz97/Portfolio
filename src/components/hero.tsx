import { ArrowUpRightIcon, DownloadIcon } from "lucide-react";
import type { Dictionary } from "@/i18n/get-dictionary";
import { profile } from "@/content/profile";
import { GithubIcon, LinkedinIcon } from "./brand-icons";
import { ButtonLink } from "./ui";
import { Reveal } from "./reveal";

export function Hero({ dict }: { dict: Dictionary["hero"] }) {
  return (
    <section className="relative overflow-hidden">
      <div className="bg-grid pointer-events-none absolute inset-0 -z-10" />
      <div className="pointer-events-none absolute -top-40 left-1/2 -z-10 h-80 w-[40rem] -translate-x-1/2 rounded-full bg-accent/20 blur-3xl" />

      <div className="mx-auto flex min-h-[90dvh] max-w-5xl flex-col justify-center px-4 pt-24 pb-16 sm:px-6">
        <Reveal>
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 text-xs text-muted">
            <span className="relative flex size-2">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-accent opacity-60 motion-reduce:hidden" />
              <span className="relative inline-flex size-2 rounded-full bg-accent" />
            </span>
            {dict.available}
          </span>
        </Reveal>

        <Reveal delay={0.05}>
          <h1 className="mt-6 text-4xl font-semibold tracking-tight text-balance sm:text-6xl">
            <span className="block text-lg font-normal text-muted sm:text-xl">{dict.greeting}</span>
            {profile.name}
            <span className="block bg-gradient-to-r from-accent to-sky-500 bg-clip-text text-transparent">
              {dict.role}
            </span>
          </h1>
        </Reveal>

        <Reveal delay={0.1}>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-pretty text-muted">{dict.tagline}</p>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="mt-10 flex flex-wrap items-center gap-3">
            <ButtonLink href="#projects">
              {dict.ctaProjects} <ArrowUpRightIcon className="size-4" />
            </ButtonLink>
            <ButtonLink href="#contact" variant="ghost">
              {dict.ctaContact}
            </ButtonLink>
            {profile.cvUrl && (
              <ButtonLink href={profile.cvUrl} variant="ghost" external>
                <DownloadIcon className="size-4" /> {dict.ctaCv}
              </ButtonLink>
            )}
            <div className="ml-1 flex items-center gap-1">
              <a href={profile.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="rounded-full p-2.5 text-muted transition hover:text-foreground">
                <GithubIcon className="size-5" />
              </a>
              {profile.linkedin && (
                <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="rounded-full p-2.5 text-muted transition hover:text-foreground">
                  <LinkedinIcon className="size-5" />
                </a>
              )}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
