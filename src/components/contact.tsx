import { MailIcon } from "lucide-react";
import type { Dictionary } from "@/i18n/get-dictionary";
import { profile } from "@/content/profile";
import { GithubIcon, LinkedinIcon } from "./brand-icons";
import { ButtonLink } from "./ui";
import { Reveal } from "./reveal";

export function Contact({ dict }: { dict: Dictionary["contact"] }) {
  return (
    <section id="contact" className="mx-auto max-w-5xl px-4 py-20 sm:px-6 sm:py-28">
      <Reveal className="relative overflow-hidden rounded-3xl border border-border bg-card px-6 py-16 text-center sm:px-12">
        <div className="pointer-events-none absolute -bottom-32 left-1/2 h-64 w-[32rem] -translate-x-1/2 rounded-full bg-accent/20 blur-3xl" />
        <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">{dict.title}</h2>
        <p className="mx-auto mt-4 max-w-xl text-muted">{dict.subtitle}</p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          {profile.email && (
            <ButtonLink href={`mailto:${profile.email}`}>
              <MailIcon className="size-4" /> {dict.email}
            </ButtonLink>
          )}
          {profile.linkedin && (
            <ButtonLink href={profile.linkedin} variant="ghost" external>
              <LinkedinIcon className="size-4" /> LinkedIn
            </ButtonLink>
          )}
          <ButtonLink href={profile.github} variant="ghost" external>
            <GithubIcon className="size-4" /> GitHub
          </ButtonLink>
        </div>
      </Reveal>
    </section>
  );
}
