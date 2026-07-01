import Image from "next/image";
import {timeline} from "@/content/timeline";

export function ExperienceTimeline() {
  return (
    <div className="flex flex-col gap-6">
      <h2 className="font-heading text-2xl font-semibold">Career Timeline</h2>
      <ol className="relative flex flex-col gap-8 border-l border-border pl-6">
        {timeline.map(entry => (
          <li key={`${entry.org}-${entry.role}`} className="relative">
            <span className="absolute top-1.5 -left-[1.9rem] flex size-8 items-center justify-center rounded-full border border-border bg-card">
              <Image
                src={entry.logo}
                alt={entry.org}
                width={20}
                height={20}
                className="rounded-sm object-contain"
              />
            </span>
            <div className="flex flex-col gap-1">
              <div className="flex flex-wrap items-baseline justify-between gap-x-3">
                <h3 className="font-medium">
                  {entry.role} · {entry.org}
                </h3>
                <span className="text-xs text-muted-foreground">
                  {entry.start} — {entry.end}
                </span>
              </div>
              <p className="text-sm text-muted-foreground">
                {entry.description}
              </p>
              {entry.bullets && (
                <ul className="mt-1 flex flex-col gap-1 text-sm text-muted-foreground">
                  {entry.bullets.map(bullet => (
                    <li key={bullet} className="flex gap-2">
                      <span className="text-primary">▹</span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}
