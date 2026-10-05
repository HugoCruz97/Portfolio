import { GraduationCapIcon, BookOpenIcon } from "lucide-react";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/get-dictionary";
import { education, experience } from "@/content/experience";
import { Section, Tag } from "./ui";
import { Reveal } from "./reveal";

export function ExperienceSection({ lang, dict }: { lang: Locale; dict: Dictionary["experience"] }) {
  return (
    <Section id="experience" title={dict.title}>
      <ol className="relative space-y-12 border-l border-border pl-8">
        {experience.map((job) => (
          <li key={`${job.company}-${job.start}`} className="relative">
            <span className="absolute top-1.5 -left-[2.3rem] size-3 rounded-full border-2 border-background bg-accent" />
            <Reveal>
              <p className="font-mono text-xs text-muted">
                {job.start} — {job.end ?? dict.present}
              </p>
              <h3 className="mt-1 text-lg font-semibold">
                {job.role[lang]} <span className="text-accent">@ {job.company}</span>
              </h3>
              <ul className="mt-3 max-w-3xl list-disc space-y-1.5 pl-5 text-muted marker:text-accent">
                {job.highlights[lang].map((h) => (
                  <li key={h}>{h}</li>
                ))}
              </ul>
              <div className="mt-4 flex flex-wrap gap-2">
                {job.stack.map((s) => (
                  <Tag key={s}>{s}</Tag>
                ))}
              </div>
            </Reveal>
          </li>
        ))}
      </ol>

      <Reveal className="mt-20">
        <h3 className="text-2xl font-semibold tracking-tight">{dict.education}</h3>
        <div className="mt-6 grid gap-4 sm:grid-cols-3">
          {education.map((item) => {
            const Icon = item.kind === "degree" ? GraduationCapIcon : BookOpenIcon;
            return (
              <div key={`${item.institution}-${item.title.en}`} className="rounded-2xl border border-border bg-card p-5">
                <Icon className="size-5 text-accent" />
                <p className="mt-3 font-medium">{item.title[lang]}</p>
                <p className="mt-1 text-sm text-muted">
                  {item.institution} · {item.period ?? dict.course}
                </p>
              </div>
            );
          })}
        </div>
      </Reveal>
    </Section>
  );
}
