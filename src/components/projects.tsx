import { ArrowUpRightIcon, CheckIcon } from "lucide-react";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/get-dictionary";
import { projects } from "@/content/projects";
import { GithubIcon } from "./brand-icons";
import { Section, Tag } from "./ui";
import { Reveal } from "./reveal";

export function Projects({ lang, dict }: { lang: Locale; dict: Dictionary["projects"] }) {
  return (
    <Section id="projects" title={dict.title} subtitle={dict.subtitle}>
      <div className="space-y-6">
        {projects.map((project, i) => (
          <Reveal key={project.slug}>
            <article className="group relative overflow-hidden rounded-2xl border border-border bg-card p-6 transition hover:border-accent/50 sm:p-8">
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div>
                  <p className="font-mono text-xs text-accent">
                    {String(i + 1).padStart(2, "0")} · {project.year}
                  </p>
                  <h3 className="mt-2 text-2xl font-semibold tracking-tight">{project.name}</h3>
                  <p className="mt-2 max-w-2xl text-muted">{project.summary[lang]}</p>
                </div>
                <div className="flex gap-2">
                  <a
                    href={project.repo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-full border border-border px-3 py-1.5 text-xs transition hover:border-accent hover:text-accent"
                  >
                    <GithubIcon className="size-3.5" /> {dict.code}
                  </a>
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 rounded-full bg-foreground px-3 py-1.5 text-xs text-background transition hover:opacity-85"
                    >
                      {dict.live} <ArrowUpRightIcon className="size-3.5" />
                    </a>
                  )}
                </div>
              </div>

              <div className="mt-8 grid gap-8 md:grid-cols-3">
                <div>
                  <h4 className="text-xs font-medium tracking-wider text-muted uppercase">{dict.problem}</h4>
                  <p className="mt-2 text-sm leading-relaxed">{project.problem[lang]}</p>
                </div>
                <div>
                  <h4 className="text-xs font-medium tracking-wider text-muted uppercase">{dict.solution}</h4>
                  <p className="mt-2 text-sm leading-relaxed">{project.solution[lang]}</p>
                </div>
                <div>
                  <h4 className="text-xs font-medium tracking-wider text-muted uppercase">{dict.highlights}</h4>
                  <ul className="mt-2 space-y-2 text-sm leading-relaxed">
                    {project.highlights[lang].map((h) => (
                      <li key={h} className="flex gap-2">
                        <CheckIcon className="mt-1 size-3.5 shrink-0 text-accent" />
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-8 flex flex-wrap gap-2">
                {project.stack.map((s) => (
                  <Tag key={s}>{s}</Tag>
                ))}
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
