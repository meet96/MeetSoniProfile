"use client";

import {useEffect, useState} from "react";
import {Logo} from "./Logo";
import {ThemeToggle} from "./ThemeToggle";

type NavItem = {href: string; label: string};

export function Header({nav, email}: {nav: NavItem[]; email: string}) {
  const [active, setActive] = useState("");
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Scroll progress + header elevation, batched to one frame.
  useEffect(() => {
    let frame = 0;
    const onScroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const max = document.documentElement.scrollHeight - innerHeight;
        document.documentElement.style.setProperty(
          "--progress",
          String(max > 0 ? scrollY / max : 0)
        );
        setScrolled(scrollY > 8);
        document.documentElement.toggleAttribute(
          "data-past-hero",
          scrollY > 600
        );
      });
    };
    onScroll();
    addEventListener("scroll", onScroll, {passive: true});
    return () => {
      cancelAnimationFrame(frame);
      removeEventListener("scroll", onScroll);
    };
  }, []);

  // Highlight the nav link for the section currently in view.
  useEffect(() => {
    const sections = nav
      .map(n => document.querySelector<HTMLElement>(n.href))
      .filter((s): s is HTMLElement => s !== null);
    const observer = new IntersectionObserver(
      entries => {
        for (const e of entries)
          if (e.isIntersecting) setActive(`#${e.target.id}`);
      },
      {rootMargin: "-45% 0px -50% 0px"}
    );
    sections.forEach(s => observer.observe(s));
    return () => observer.disconnect();
  }, [nav]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    addEventListener("keydown", onKey);
    return () => removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className={`site-header${scrolled || open ? " is-scrolled" : ""}`}>
      <div className="progress" aria-hidden="true" />
      <div className="container header-inner">
        <a href="#top" className="brand" aria-label="Back to top">
          <Logo className="brand-logo" />
        </a>

        <nav aria-label="Primary" className="nav">
          {nav.map(item => (
            <a
              key={item.href}
              href={item.href}
              aria-current={active === item.href ? "true" : undefined}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="header-actions">
          <a
            className="btn btn-sm btn-primary hide-sm"
            href={`mailto:${email}`}
          >
            Hire me
          </a>
          <ThemeToggle />
          <button
            type="button"
            className="menu-btn"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen(o => !o)}
          >
            <span />
            <span />
          </button>
        </div>
      </div>

      <div
        id="mobile-menu"
        className={`mobile-menu${open ? " is-open" : ""}`}
        hidden={!open}
      >
        <nav aria-label="Mobile" className="container">
          {nav.map((item, i) => (
            <a
              key={item.href}
              href={item.href}
              style={{"--i": i} as React.CSSProperties}
              onClick={() => setOpen(false)}
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
