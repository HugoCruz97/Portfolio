import type { Dictionary } from "@/i18n/get-dictionary";
import { profile } from "@/content/profile";

export function Footer({ dict }: { dict: Dictionary["footer"] }) {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-5xl flex-col gap-2 px-4 py-8 text-xs text-muted sm:flex-row sm:justify-between sm:px-6">
        <p>
          © {new Date().getFullYear()} {profile.name}
        </p>
        <p>{dict.built}</p>
      </div>
    </footer>
  );
}
