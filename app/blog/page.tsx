import type {Metadata} from "next";
import Link from "next/link";
import {getAllPosts} from "@/lib/mdx";
import {socialLinks} from "@/content/site-config";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription
} from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Blog",
  description: "Writing on software engineering from Meet Soni."
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <div className="mx-auto flex max-w-3xl flex-col gap-8 px-6 py-16 sm:py-24">
      <div>
        <h1 className="font-heading text-2xl font-semibold">Blog</h1>
        <p className="mt-1 text-sm tracking-wide text-muted-foreground uppercase">
          Notes on software engineering
        </p>
      </div>

      {posts.length === 0 ? (
        <p className="text-muted-foreground">
          No posts here yet. In the meantime, find my writing on{" "}
          <a
            href={socialLinks.medium}
            target="_blank"
            rel="noreferrer noopener"
            className="text-primary hover:underline"
          >
            Medium
          </a>
          .
        </p>
      ) : (
        <div className="flex flex-col gap-4">
          {posts.map(post => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group block"
            >
              <Card className="transition-colors group-hover:border-primary/50">
                <CardHeader>
                  <CardTitle className="group-hover:text-primary">
                    {post.title}
                  </CardTitle>
                  <CardDescription>{post.excerpt}</CardDescription>
                </CardHeader>
              </Card>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
