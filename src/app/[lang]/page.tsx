import { notFound } from "next/navigation";
import { hasLocale } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";
import { projects } from "@/content/projects";
import { getRepos } from "@/lib/github";
import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { About } from "@/components/about";
import { Stack } from "@/components/stack";
import { Projects } from "@/components/projects";
import { Repos } from "@/components/repos";
import { ExperienceSection } from "@/components/experience";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";

export default async function Home({ params }: PageProps<"/[lang]">) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();

  const dict = await getDictionary(lang);
  // Featured projects already have their own cards; Unifood's back end is part of the same case.
  const repos = await getRepos([
    ...projects.map((p) => p.repo.split("/").pop()!.toLowerCase()),
    "unifood-back-postgresql",
  ]);

  return (
    <>
      <Header lang={lang} dict={dict.nav} />
      <main>
        <Hero dict={dict.hero} />
        <About dict={dict.about} />
        <Stack dict={dict.stack} />
        <Projects lang={lang} dict={dict.projects} />
        <Repos lang={lang} dict={dict.repos} repos={repos} />
        <ExperienceSection lang={lang} dict={dict.experience} />
        <Contact dict={dict.contact} />
      </main>
      <Footer dict={dict.footer} />
    </>
  );
}
