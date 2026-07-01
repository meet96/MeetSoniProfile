import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

const PROJECTS_DIR = path.join(process.cwd(), "content/projects");
const BLOG_DIR = path.join(process.cwd(), "content/blog");

export type ProjectFrontmatter = {
  title: string;
  slug: string;
  summary: string;
  coverImage?: string;
  stack?: string[];
  role?: string;
  year?: string;
  links?: { live?: string; repo?: string };
  order?: number;
};

export type ProjectEntry = ProjectFrontmatter & { content: string };

export type BlogFrontmatter = {
  title: string;
  slug: string;
  date: string;
  excerpt: string;
  tags?: string[];
  coverImage?: string;
  canonicalUrl?: string;
};

export type BlogEntry = BlogFrontmatter & { content: string };

function readMdxFiles(dir: string) {
  if (!fs.existsSync(dir)) return [];
  return fs.readdirSync(dir).filter((file) => file.endsWith(".mdx"));
}

export function getAllProjects(): ProjectEntry[] {
  return readMdxFiles(PROJECTS_DIR)
    .map((file) => {
      const raw = fs.readFileSync(path.join(PROJECTS_DIR, file), "utf8");
      const { data, content } = matter(raw);
      return { ...(data as ProjectFrontmatter), content };
    })
    .sort((a, b) => (a.order ?? 99) - (b.order ?? 99));
}

export function getProjectBySlug(slug: string): ProjectEntry | undefined {
  return getAllProjects().find((project) => project.slug === slug);
}

export function getAllPosts(): BlogEntry[] {
  return readMdxFiles(BLOG_DIR)
    .map((file) => {
      const raw = fs.readFileSync(path.join(BLOG_DIR, file), "utf8");
      const { data, content } = matter(raw);
      return { ...(data as BlogFrontmatter), content };
    })
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getPostBySlug(slug: string): BlogEntry | undefined {
  return getAllPosts().find((post) => post.slug === slug);
}
