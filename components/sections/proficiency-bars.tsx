import {proficiency} from "@/content/site-config";

export function ProficiencyBars() {
  return (
    <div className="flex flex-col gap-5">
      <h2 className="font-heading text-2xl font-semibold">Proficiency</h2>
      {proficiency.map(item => (
        <div key={item.label} className="flex flex-col gap-1.5">
          <p className="text-sm text-muted-foreground">{item.label}</p>
          <div className="h-2 w-full overflow-hidden rounded-full bg-muted">
            <div
              className="h-full rounded-full bg-primary"
              style={{width: `${item.percent}%`}}
            />
          </div>
        </div>
      ))}
    </div>
  );
}
