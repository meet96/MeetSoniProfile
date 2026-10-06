import {Rich} from "@/components/Rich";
import {Section} from "@/components/Section";
import {ThemeToggle} from "@/components/ThemeToggle";
import {
  certifications,
  education,
  experience,
  profile,
  skills
} from "@/data/profile";

const nav = [
  {href: "#about", label: "About"},
  {href: "#experience", label: "Experience"},
  {href: "#skills", label: "Skills"},
  {href: "#certifications", label: "Certifications"},
  {href: "#contact", label: "Contact"}
];

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: profile.name,
  jobTitle: profile.title,
  email: `mailto:${profile.email}`,
  url: profile.siteUrl,
  address: {"@type": "PostalAddress", addressLocality: profile.location},
  sameAs: profile.socials.map(s => s.href)
};

export default function Home() {
  const linkedin = profile.socials.find(s => s.label === "LinkedIn")!;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{__html: JSON.stringify(personSchema)}}
      />

      <header className="site-header">
        <div className="container header-inner">
          <a href="#top" className="brand">
            {profile.name}
          </a>
          <nav aria-label="Primary" className="nav">
            {nav.map(item => (
              <a key={item.href} href={item.href}>
                {item.label}
              </a>
            ))}
          </nav>
          <ThemeToggle />
        </div>
      </header>

      <main id="top" className="container">
        <section className="hero">
          <p className="eyebrow">
            <span className="dot" aria-hidden="true" />
            {profile.title} · {profile.location}
          </p>
          <h1 className="display">
            Hi, I&rsquo;m {profile.name.split(" ")[0]}.{" "}
            <em>I build systems that scale.</em>
          </h1>
          <p className="lead">{profile.tagline}</p>
          <div className="actions">
            <a className="btn btn-primary" href={`mailto:${profile.email}`}>
              Get in touch
            </a>
            <a
              className="btn"
              href={profile.resume}
              target="_blank"
              rel="noopener"
            >
              Résumé (PDF)
            </a>
            <a
              className="btn btn-ghost"
              href={linkedin.href}
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn ↗
            </a>
          </div>

          <dl className="stats">
            {profile.highlights.map(h => (
              <div key={h.label}>
                <dt>{h.label}</dt>
                <dd>{h.value}</dd>
              </div>
            ))}
          </dl>
        </section>

        <Section id="about" title="About">
          {profile.summary.map((p, i) => (
            <p key={i} className="prose">
              <Rich text={p} />
            </p>
          ))}
        </Section>

        <Section id="experience" title="Experience">
          <ol className="timeline">
            {experience.map(role => (
              <li key={`${role.company}-${role.title}`} className="role">
                <div className="role-meta">
                  <span>{role.period}</span>
                  <span className="muted">{role.location}</span>
                </div>
                <div>
                  <h3 className="role-title">
                    {role.title}
                    <span className="role-company"> · {role.company}</span>
                  </h3>
                  <ul className="role-points">
                    {role.points.map((p, i) => (
                      <li key={i}>
                        <Rich text={p} />
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
            ))}
          </ol>
        </Section>

        <Section id="skills" title="Skills">
          <div className="skills">
            {skills.map(s => (
              <div key={s.group} className="skill-row">
                <h3>{s.group}</h3>
                <ul className="chips">
                  {s.items.map(item => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Section>

        <Section id="certifications" title="Certifications">
          <ul className="certs">
            {certifications.map(c => (
              <li key={c.code}>
                <span className="cert-code">{c.code}</span>
                <span className="cert-name">{c.name}</span>
                <span className="muted cert-meta">
                  {c.issuer} · {c.date}
                </span>
              </li>
            ))}
          </ul>
        </Section>

        <Section id="education" title="Education">
          {education.map(e => (
            <div key={e.school} className="edu">
              <div>
                <h3 className="role-title">{e.degree}</h3>
                <p className="muted">{e.school}</p>
              </div>
              <span className="muted">{e.period}</span>
            </div>
          ))}
        </Section>

        <section id="contact" className="contact">
          <h2 className="display">
            Let&rsquo;s build something <em>reliable</em>.
          </h2>
          <p className="lead">
            Open to conversations about senior, lead and architect roles, .NET
            and Azure systems, and engineering leadership.
          </p>
          <a className="contact-email" href={`mailto:${profile.email}`}>
            {profile.email}
          </a>
          <ul className="socials">
            {profile.socials.map(s => (
              <li key={s.label}>
                <a href={s.href} target="_blank" rel="noopener noreferrer">
                  {s.label} ↗
                </a>
              </li>
            ))}
          </ul>
        </section>
      </main>

      <footer className="container footer">
        <span>
          © {new Date().getFullYear()} {profile.name}
        </span>
        <span className="muted">Built with Next.js · Hosted on Netlify</span>
      </footer>
    </>
  );
}
