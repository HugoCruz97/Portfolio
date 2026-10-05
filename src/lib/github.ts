import { profile } from "@/content/profile";

export type Repo = {
  name: string;
  description: string | null;
  html_url: string;
  homepage: string | null;
  language: string | null;
  stargazers_count: number;
  pushed_at: string;
  fork: boolean;
};

/** Public repos, newest first. Revalidated once a day; returns [] if GitHub is unreachable. */
export async function getRepos(exclude: string[] = []): Promise<Repo[]> {
  try {
    const res = await fetch(
      `https://api.github.com/users/${profile.githubUser}/repos?per_page=100&sort=pushed`,
      {
        headers: {
          Accept: "application/vnd.github+json",
          ...(process.env.GITHUB_TOKEN && { Authorization: `Bearer ${process.env.GITHUB_TOKEN}` }),
        },
        next: { revalidate: 60 * 60 * 24 },
      },
    );
    if (!res.ok) return [];
    const repos: Repo[] = await res.json();
    return repos.filter((r) => !r.fork && !exclude.includes(r.name.toLowerCase()));
  } catch {
    return [];
  }
}
