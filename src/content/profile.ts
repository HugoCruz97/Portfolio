// Personal data shown on the site. Fields marked TODO still need real values.
export const profile = {
  name: "Hugo Pinto",
  githubUser: "HugoCruz97",
  photo: "/foto.jpg", // file in /public; falls back to the GitHub avatar while it doesn't exist
  avatar: "https://avatars.githubusercontent.com/u/82546446?v=4",
  github: "https://github.com/HugoCruz97",
  linkedin: "https://www.linkedin.com/in/hugo-cruz-souto/",
  email: "hugopintoc@hotmail.com",
  cvUrl: "/cv-hugo-pinto.pdf",
  siteUrl: "https://hugosouto.vercel.app",
};

export const stack = {
  frontend: ["React", "Next.js", "TypeScript", "JavaScript", "Hotwire (Turbo + Stimulus)", "Tailwind CSS", "Redux Toolkit"],
  backend: ["Ruby on Rails", "Node.js", "NestJS", "Fastify", "Prisma", "REST APIs"],
  data: ["PostgreSQL", "Oracle PL/SQL", "SQL Server", "SQL", "SQLite"],
  infra: ["Docker", "Docker Compose", "Nginx", "Linux (Red Hat)", "Windows Server", "GitHub Actions", "Kamal", "Vercel"],
} as const;
