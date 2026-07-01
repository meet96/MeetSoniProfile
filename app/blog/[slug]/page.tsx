import type {Metadata} from "next";
import {notFound} from "next/navigation";
import {MDXRemote} from "next-mdx-remote/rsc";
import {getAllPosts, getPostBySlug} from "@/lib/mdx";

export function generateStaticParams() {
  return getAllPosts().map(post => ({slug: post.slug}));
}

export async function generateMetadata({
  params
}: {
  params: Promise<{slug: string}>;
}): Promise<Metadata> {
  const {slug} = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};
  return {title: post.title, description: post.excerpt};
}

export default async function BlogPostPage({
  params
}: {
  params: Promise<{slug: string}>;
}) {
  const {slug} = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  return (
    <article className="mx-auto flex max-w-3xl flex-col gap-8 px-6 py-16 sm:py-24">
      <header className="flex flex-col gap-2">
        <h1 className="font-heading text-3xl font-semibold">{post.title}</h1>
        <p className="text-sm text-muted-foreground">
          {new Date(post.date).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric"
          })}
        </p>
      </header>
      <div className="prose prose-neutral dark:prose-invert max-w-none">
        <MDXRemote source={post.content} />
      </div>
    </article>
  );
}
