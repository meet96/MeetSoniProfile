import { cn } from "@/lib/utils";
import { socialLinks } from "@/content/site-config";

const items = [
  { label: "GitHub", href: socialLinks.github },
  { label: "LinkedIn", href: socialLinks.linkedin },
  { label: "Email", href: socialLinks.email },
  { label: "Medium", href: socialLinks.medium },
  { label: "Stack Overflow", href: socialLinks.stackoverflow },
];

export function SocialLinks({ className }: { className?: string }) {
  return (
    <nav className={cn("flex flex-wrap items-center gap-x-5 gap-y-2", className)}>
      {items.map((item) => (
        <a
          key={item.label}
          href={item.href}
          target="_blank"
          rel="noreferrer noopener"
          className="text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          {item.label}
        </a>
      ))}
    </nav>
  );
}
