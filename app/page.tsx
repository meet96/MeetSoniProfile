import {BackToTop} from "@/components/BackToTop";
import {CopyEmail} from "@/components/CopyEmail";
import {Effects} from "@/components/Effects";
import {Header} from "@/components/Header";
import {Rich} from "@/components/Rich";
import {Section} from "@/components/Section";
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

const focus = [
  {
    title: "Architecture & system design",
    body: "Trade-off driven design for scalable, maintainable enterprise platforms."
  },
  {
    title: "Cloud-native on Azure",
    body: "Containers, CI/CD and GitOps with Docker, Kubernetes, Helm and Argo CD."
  },
  {
    title: "Technical leadership",
    body: "Mentoring engineers, code reviews and turning requirements into delivery plans."
  },
  {
    title: "Application security",
    body: "Enterprise DAST capabilities on HCL AppScan A360."
  }
];

const rotating = ["scale", "perform", "stay secure", "last"];

const marquee = [
  "C#",
  ".NET 8+",
  "ASP.NET Core",
  "Azure",
  "Entity Framework Core",
  "SQL Server",
  "Angular",
  "Python",
  "Docker",
  "Kubernetes",
  "Helm",
  "Argo CD",
  "AWS",
  "Microservices",
  "Clean Architecture"
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

const pad = (n: number) => String(n).padStart(2, "0");

export default function Home() {
  const linkedin = profile.socials.find(s => s.label === "LinkedIn")!;
  const [first] = profile.name.split(" ");

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{__html: JSON.stringify(personSchema)}}
      />
      <a href="#about" className="skip-link">
        Skip to content
      </a>

      <Header nav={nav} email={profile.email} />
      <Effects />

      <main id="top">
        <section className="hero">
          <div className="hero-bg" aria-hidden="true">
            <span className="orb orb-1" />
            <span className="orb orb-2" />
            <span className="orb orb-3" />
            <span className="grid" />
          </div>

          <div className="container hero-inner">
            <p className="badge rise" style={{"--d": 0} as React.CSSProperties}>
              <span className="pulse" aria-hidden="true" />
              Open to Lead &amp; Architect roles
            </p>

            <h1
              className="display rise"
              style={{"--d": 1} as React.CSSProperties}
            >
              <span className="hello">Hi, I&rsquo;m {first} —</span>I build .NET
              &amp; Azure systems that{" "}
              <span className="rotator">
                <span className="sr-only">{rotating[0]}.</span>
                <span className="rotator-track" aria-hidden="true">
                  {[...rotating, rotating[0]].map((w, i) => (
                    <span key={i} className="gradient-text">
                      {w}.
                    </span>
                  ))}
                </span>
              </span>
            </h1>

            <p className="lead rise" style={{"--d": 2} as React.CSSProperties}>
              {profile.title} with{" "}
              <strong>{profile.yearsOfExperience} years</strong> designing
              scalable, secure, high-performance enterprise and cloud-native
              platforms. Based in {profile.location}.
            </p>

            <div
              className="actions rise"
              style={{"--d": 3} as React.CSSProperties}
            >
              <a className="btn btn-primary" href={`mailto:${profile.email}`}>
                Let&rsquo;s talk
                <span className="btn-arrow" aria-hidden="true">
                  →
                </span>
              </a>
              <a
                className="btn"
                href={profile.resume}
                target="_blank"
                rel="noopener"
              >
                <svg
                  viewBox="0 0 24 24"
                  width="16"
                  height="16"
                  aria-hidden="true"
                >
                  <path
                    d="M12 4v11m0 0-4.5-4.5M12 15l4.5-4.5M5 20h14"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                Résumé
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
          </div>

          <div
            className="marquee rise"
            style={{"--d": 4} as React.CSSProperties}
            aria-label="Core technologies"
          >
            <ul className="marquee-track">
              {[...marquee, ...marquee].map((t, i) => (
                <li key={i} aria-hidden={i >= marquee.length || undefined}>
                  {t}
                </li>
              ))}
            </ul>
          </div>

          <div className="container">
            <dl className="stats">
              {profile.highlights.map((h, i) => (
                <div
                  key={h.label}
                  className="card stat"
                  data-reveal
                  style={{"--i": i} as React.CSSProperties}
                >
                  <dt>{h.label}</dt>
                  <dd data-count>{h.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        <div className="container">
          <Section
            id="about"
            index="01"
            kicker="About"
            title={
              <>
                Engineer by craft, <em>architect</em> by mindset.
              </>
            }
          >
            <div className="about">
              <div className="prose" data-reveal>
                {profile.summary.map((p, i) => (
                  <p key={i}>
                    <Rich text={p} />
                  </p>
                ))}
              </div>
              <ul className="focus">
                {focus.map((f, i) => (
                  <li
                    key={f.title}
                    className="card"
                    data-reveal
                    style={{"--i": i} as React.CSSProperties}
                  >
                    <h3>{f.title}</h3>
                    <p>{f.body}</p>
                  </li>
                ))}
              </ul>
            </div>
          </Section>

          <Section
            id="experience"
            index="02"
            kicker="Experience"
            title={
              <>
                Nine years of <em>shipping</em> to production.
              </>
            }
          >
            <ol className="timeline">
              {experience.map(role => {
                const current = role.period.includes("Present");
                return (
                  <li
                    key={`${role.company}-${role.title}`}
                    className={`timeline-item${current ? " is-current" : ""}`}
                    data-reveal
                  >
                    <span className="timeline-dot" aria-hidden="true" />
                    <article className="card role">
                      <header className="role-head">
                        <div>
                          <h3 className="role-title">{role.title}</h3>
                          <p className="role-company">
                            {role.company}
                            {current && <span className="pill">Current</span>}
                          </p>
                        </div>
                        <div className="role-meta">
                          <span>{role.period}</span>
                          <span>{role.location}</span>
                        </div>
                      </header>
                      <ul className="role-points">
                        {role.points.map((p, i) => (
                          <li key={i}>
                            <Rich text={p} />
                          </li>
                        ))}
                      </ul>
                    </article>
                  </li>
                );
              })}
            </ol>
          </Section>

          <Section
            id="skills"
            index="03"
            kicker="Skills"
            title={
              <>
                The <em>toolbox</em>.
              </>
            }
          >
            <div className="skills">
              {skills.map((s, i) => (
                <div
                  key={s.group}
                  className="card skill-card"
                  data-reveal
                  style={{"--i": i % 3} as React.CSSProperties}
                >
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

          <Section
            id="certifications"
            index="04"
            kicker="Certifications & Education"
            title={
              <>
                Always <em>learning</em>.
              </>
            }
          >
            <ul className="certs">
              {certifications.map((c, i) => (
                <li
                  key={c.code}
                  className="card cert"
                  data-reveal
                  style={{"--i": i % 3} as React.CSSProperties}
                >
                  <div className="cert-top">
                    <span className="cert-code">{c.code}</span>
                    <span className="cert-issuer">{c.issuer}</span>
                  </div>
                  <p className="cert-name">{c.name}</p>
                  <p className="cert-date">{c.date}</p>
                </li>
              ))}
              {education.map(e => (
                <li key={e.school} className="card cert edu" data-reveal>
                  <div className="cert-top">
                    <span className="cert-code">B.E.</span>
                    <span className="cert-issuer">{e.period}</span>
                  </div>
                  <p className="cert-name">{e.degree}</p>
                  <p className="cert-date">{e.school}</p>
                </li>
              ))}
            </ul>
          </Section>

          <section id="contact" className="contact" data-reveal>
            <div className="contact-card">
              <p className="kicker">
                <span className="kicker-index">{pad(5)}</span>Contact
              </p>
              <h2 className="display">
                Let&rsquo;s build something <em>reliable</em>.
              </h2>
              <p className="lead">
                Open to conversations about senior, lead and architect roles,
                .NET and Azure platforms, and engineering leadership.
              </p>
              <div className="actions">
                <a
                  className="btn btn-primary btn-lg"
                  href={`mailto:${profile.email}`}
                >
                  {profile.email}
                </a>
                <CopyEmail email={profile.email} />
              </div>
              <ul className="socials">
                {profile.socials.map(s => (
                  <li key={s.label}>
                    <a href={s.href} target="_blank" rel="noopener noreferrer">
                      {s.label} ↗
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        </div>
      </main>

      <footer className="container footer">
        <span>
          © {new Date().getFullYear()} {profile.name}
        </span>
        <span>Built with Next.js · Hosted on Netlify</span>
      </footer>

      <BackToTop />
    </>
  );
}
