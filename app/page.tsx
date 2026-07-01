import Link from "next/link";
import {Button} from "@/components/ui/button";
import {SocialLinks} from "@/components/site/social-links";
import {LottiePlayer} from "@/components/site/lottie-player";
import {siteConfig} from "@/content/site-config";
import landingPerson from "@/content/lottie/landingPerson.json";

export default function Home() {
  return (
    <section className="mx-auto grid max-w-5xl grid-cols-1 items-center gap-12 px-6 py-16 sm:py-24 md:grid-cols-2">
      <div className="flex flex-col items-start gap-6">
        <p className="font-heading text-lg text-primary">Hi, my name is</p>
        <h1 className="text-4xl font-semibold tracking-tight sm:text-6xl">
          {siteConfig.name}.
        </h1>
        <p className="max-w-lg text-lg text-muted-foreground">
          {siteConfig.tagline}
        </p>
        <SocialLinks />
        <div className="flex flex-wrap gap-3 pt-2">
          <Button nativeButton={false} render={<Link href="/contact" />}>
            Contact Me
          </Button>
          <Button
            nativeButton={false}
            variant="outline"
            render={
              <a
                href={siteConfig.resumeLink}
                target="_blank"
                rel="noreferrer noopener"
              />
            }
          >
            See My Resume
          </Button>
        </div>
      </div>
      <div className="mx-auto w-full max-w-sm md:max-w-none">
        <LottiePlayer animationData={landingPerson} />
      </div>
    </section>
  );
}
