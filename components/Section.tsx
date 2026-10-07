import type {ReactNode} from "react";

export function Section({
  id,
  index,
  kicker,
  title,
  children
}: {
  id: string;
  index: string;
  kicker: string;
  title: ReactNode;
  children: ReactNode;
}) {
  return (
    <section id={id} className="section" aria-labelledby={`${id}-title`}>
      <header className="section-head" data-reveal>
        <p className="kicker">
          <span className="kicker-index">{index}</span>
          {kicker}
        </p>
        <h2 id={`${id}-title`} className="section-title">
          {title}
        </h2>
      </header>
      {children}
    </section>
  );
}
