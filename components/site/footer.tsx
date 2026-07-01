import { siteConfig } from "@/content/site-config";
import { SocialLinks } from "@/components/site/social-links";

export function Footer() {
  return (
    <footer className="border-t border-border/60">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-4 px-6 py-10 text-sm text-muted-foreground sm:flex-row sm:justify-between">
        <p>
          © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
        </p>
        <SocialLinks className="justify-center" />
      </div>
    </footer>
  );
}
