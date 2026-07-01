import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import { MDXRemote } from "next-mdx-remote/rsc";
import { getAllProjects, getProjectBySlug } from "@/lib/mdx";
import { Badge } from "@/components/ui/badge";

export function generateStaticParams() {
  return getAllProjects().map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return {};
  return { title: project.title, description: project.summary };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  return (
    <article className="mx-auto flex max-w-3xl flex-col gap-8 px-6 py-16 sm:py-24">
      <header className="flex flex-col gap-4">
        {project.coverImage && (
          <div className="flex h-16 items-center">
            <Image
              src={project.coverImage}
              alt={project.title}
              width={56}
              height={56}
              className="object-contain"
            />
          </div>
        )}
        <h1 className="font-heading text-3xl font-semibold">{project.title}</h1>
        <p className="text-lg text-muted-foreground">{project.summary}</p>
        {project.stack && project.stack.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {project.stack.map((tech) => (
              <Badge key={tech} variant="secondary">
                {tech}
              </Badge>
            ))}
          </div>
        )}
        {project.links?.live && (
          <a
            href={project.links.live}
            target="_blank"
            rel="noreferrer noopener"
            className="text-sm font-medium text-primary hover:underline"
          >
            Visit live site →
          </a>
        )}
      </header>
      <div className="prose prose-neutral dark:prose-invert max-w-none">
        <MDXRemote source={project.content} />
      </div>
    </article>
  );
}
