import type { Metadata } from "next";
import { getPinnedRepos } from "@/lib/github";
import { notableProjects } from "@/content/projects";
import { ProjectCard } from "@/components/sections/project-card";

export const metadata: Metadata = {
  title: "Projects",
  description: "Notable projects and open-source work by Meet Soni.",
};

export default async function ProjectsPage() {
  const pinnedRepos = await getPinnedRepos();

  return (
    <div className="mx-auto flex max-w-5xl flex-col gap-16 px-6 py-16 sm:py-24">
      <section className="flex flex-col gap-6">
        <div>
          <h1 className="font-heading text-2xl font-semibold">Notable Projects</h1>
          <p className="mt-1 text-sm tracking-wide text-muted-foreground uppercase">
            Key projects and products I have contributed to
          </p>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {notableProjects.map((project) => (
            <ProjectCard
              key={project.slug}
              title={project.name}
              description={project.description}
              href={project.url}
              image={project.image}
            />
          ))}
        </div>
      </section>

      {pinnedRepos.length > 0 && (
        <section className="flex flex-col gap-6">
          <div>
            <h2 className="font-heading text-2xl font-semibold">Open Source</h2>
            <p className="mt-1 text-sm tracking-wide text-muted-foreground uppercase">
              Pinned repositories from GitHub
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            {pinnedRepos.map((repo) => (
              <ProjectCard
                key={repo.id}
                title={repo.name}
                description={repo.description ?? ""}
                href={repo.url}
                meta={
                  repo.primaryLanguage
                    ? `${repo.primaryLanguage.name} · ★ ${repo.stars}`
                    : `★ ${repo.stars}`
                }
              />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
