import type { ReactNode } from "react";
import clsx from "clsx";
import { Reveal } from "./reveal";

export function Section({
  id,
  title,
  subtitle,
  children,
  className,
}: {
  id: string;
  title: string;
  subtitle?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section id={id} className={clsx("mx-auto max-w-5xl px-4 py-20 sm:px-6 sm:py-28", className)}>
      <Reveal>
        <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">{title}</h2>
        {subtitle && <p className="mt-3 max-w-2xl text-muted">{subtitle}</p>}
      </Reveal>
      <div className="mt-12">{children}</div>
    </section>
  );
}

export function Tag({ children }: { children: ReactNode }) {
  return (
    <span className="rounded-full border border-border bg-card px-3 py-1 font-mono text-xs text-muted">
      {children}
    </span>
  );
}

export function ButtonLink({
  href,
  children,
  variant = "primary",
  external,
}: {
  href: string;
  children: ReactNode;
  variant?: "primary" | "ghost";
  external?: boolean;
}) {
  return (
    <a
      href={href}
      {...(external && { target: "_blank", rel: "noopener noreferrer" })}
      className={clsx(
        "inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium transition focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent",
        variant === "primary"
          ? "bg-foreground text-background hover:opacity-85"
          : "border border-border hover:border-accent hover:text-accent",
      )}
    >
      {children}
    </a>
  );
}
