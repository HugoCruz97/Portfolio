import { existsSync } from "node:fs";
import path from "node:path";
import Image from "next/image";
import type { Dictionary } from "@/i18n/get-dictionary";
import { profile } from "@/content/profile";
import { Section } from "./ui";
import { Reveal } from "./reveal";

export function About({ dict }: { dict: Dictionary["about"] }) {
  const hasPhoto = existsSync(path.join(process.cwd(), "public", profile.photo));

  return (
    <Section id="about" title={dict.title}>
      <div className="grid gap-12 md:grid-cols-[1fr_16rem]">
        <Reveal className="space-y-4 text-lg leading-relaxed text-pretty text-muted">
          {dict.paragraphs.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </Reveal>

        <Reveal delay={0.1} className="space-y-6">
          <Image
            src={hasPhoto ? profile.photo : profile.avatar}
            alt={profile.name}
            width={256}
            height={256}
            className="aspect-square w-full rounded-2xl border border-border object-cover"
          />
          <dl className="space-y-3 text-sm">
            {dict.facts.map((fact) => (
              <div key={fact.label} className="flex justify-between gap-4 border-b border-border pb-3">
                <dt className="text-muted">{fact.label}</dt>
                <dd className="text-right font-medium">{fact.value}</dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </Section>
  );
}
