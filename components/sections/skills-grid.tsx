import { Badge } from "@/components/ui/badge";
import { skillsSection } from "@/content/site-config";

export function SkillsGrid() {
  return (
    <div className="flex flex-col gap-6">
      <div>
        <h2 className="font-heading text-2xl font-semibold">{skillsSection.title}</h2>
        <p className="mt-1 text-sm tracking-wide text-muted-foreground uppercase">
          {skillsSection.subtitle}
        </p>
      </div>
      <ul className="flex flex-col gap-2 text-muted-foreground">
        {skillsSection.bullets.map((bullet) => (
          <li key={bullet} className="flex gap-2">
            <span className="text-primary">▹</span>
            <span>{bullet}</span>
          </li>
        ))}
      </ul>
      <div className="flex flex-wrap gap-2">
        {skillsSection.stack.map((skill) => (
          <Badge key={skill} variant="secondary">
            {skill}
          </Badge>
        ))}
      </div>
    </div>
  );
}
