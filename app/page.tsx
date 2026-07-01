import Link from "next/link";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/content/site-config";

export default function Home() {
  return (
    <section className="mx-auto flex max-w-5xl flex-col items-start gap-6 px-6 py-24 sm:py-32">
      <p className="font-heading text-lg text-primary">Hi, my name is</p>
      <h1 className="text-4xl font-semibold tracking-tight sm:text-6xl">
        {siteConfig.name}.
      </h1>
      <p className="max-w-2xl text-lg text-muted-foreground">
        {siteConfig.tagline}
      </p>
      <div className="flex flex-wrap gap-3 pt-2">
        <Button nativeButton={false} render={<Link href="/projects" />}>
          View Projects
        </Button>
        <Button
          nativeButton={false}
          variant="outline"
          render={<a href={siteConfig.resumeLink} target="_blank" rel="noreferrer noopener" />}
        >
          Resume
        </Button>
      </div>
    </section>
  );
}
