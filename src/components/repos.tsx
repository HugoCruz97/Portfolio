import { ArrowUpRightIcon, StarIcon } from "lucide-react";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/get-dictionary";
import type { Repo } from "@/lib/github";
import { profile } from "@/content/profile";
import { Section } from "./ui";
import { Reveal } from "./reveal";

export function Repos({ lang, dict, repos }: { lang: Locale; dict: Dictionary["repos"]; repos: Repo[] }) {
  if (repos.length === 0) return null;
  const date = new Intl.DateTimeFormat(lang === "pt" ? "pt-BR" : "en-US", { month: "short", year: "numeric" });

  return (
    <Section id="repos" title={dict.title} subtitle={dict.subtitle} className="pt-0 sm:pt-0">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {repos.map((repo, i) => (
          <Reveal key={repo.name} delay={(i % 3) * 0.05}>
            <a
              href={repo.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex h-full flex-col rounded-2xl border border-border bg-card p-5 transition hover:-translate-y-0.5 hover:border-accent/50"
            >
              <div className="flex items-start justify-between gap-2">
                <h3 className="font-mono text-sm font-medium break-all">{repo.name}</h3>
                <ArrowUpRightIcon className="size-4 shrink-0 text-muted transition group-hover:text-accent" />
              </div>
              {repo.description && <p className="mt-2 text-sm text-muted">{repo.description}</p>}
              <div className="mt-auto flex items-center gap-4 pt-5 text-xs text-muted">
                {repo.language && (
                  <span className="flex items-center gap-1.5">
                    <span className="size-2 rounded-full bg-accent" />
                    {repo.language}
                  </span>
                )}
                {repo.stargazers_count > 0 && (
                  <span className="flex items-center gap-1">
                    <StarIcon className="size-3" /> {repo.stargazers_count}
                  </span>
                )}
                <span>
                  {dict.updated} {date.format(new Date(repo.pushed_at))}
                </span>
              </div>
            </a>
          </Reveal>
        ))}
      </div>
      <div className="mt-8">
        <a href={profile.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-sm text-muted transition hover:text-accent">
          {dict.viewAll} <ArrowUpRightIcon className="size-4" />
        </a>
      </div>
    </Section>
  );
}
