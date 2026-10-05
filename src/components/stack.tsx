import { CodeIcon, DatabaseIcon, LayoutIcon, ServerIcon } from "lucide-react";
import type { Dictionary } from "@/i18n/get-dictionary";
import { stack } from "@/content/profile";
import { Section, Tag } from "./ui";
import { Reveal } from "./reveal";

const icons = { frontend: LayoutIcon, backend: CodeIcon, data: DatabaseIcon, infra: ServerIcon };

export function Stack({ dict }: { dict: Dictionary["stack"] }) {
  const groups = Object.keys(stack) as (keyof typeof stack)[];

  return (
    <Section id="stack" title={dict.title} subtitle={dict.subtitle}>
      <div className="grid gap-4 sm:grid-cols-2">
        {groups.map((group, i) => {
          const Icon = icons[group];
          return (
            <Reveal key={group} delay={i * 0.05} className="rounded-2xl border border-border bg-card p-6">
              <div className="flex items-center gap-3">
                <span className="rounded-lg bg-accent-soft p-2 text-accent">
                  <Icon className="size-4" />
                </span>
                <h3 className="font-medium">{dict.groups[group]}</h3>
              </div>
              <div className="mt-5 flex flex-wrap gap-2">
                {stack[group].map((tool) => (
                  <Tag key={tool}>{tool}</Tag>
                ))}
              </div>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}
