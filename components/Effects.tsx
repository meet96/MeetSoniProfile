"use client";

import {useEffect} from "react";

/**
 * Page-wide progressive enhancements, all no-ops without JS:
 * - reveals [data-reveal] elements as they scroll into view
 * - counts up [data-count] numbers once visible
 * - feeds pointer position to .card elements for the hover spotlight
 */
export function Effects() {
  useEffect(() => {
    const reduced = matchMedia("(prefers-reduced-motion: reduce)").matches;

    const reveal = new IntersectionObserver(
      entries => {
        for (const e of entries) {
          if (!e.isIntersecting) continue;
          e.target.classList.add("is-visible");
          reveal.unobserve(e.target);
          const counter = e.target.querySelector<HTMLElement>("[data-count]");
          if (counter && !reduced) countUp(counter);
        }
      },
      {rootMargin: "0px 0px -10% 0px", threshold: 0.1}
    );
    document
      .querySelectorAll("[data-reveal]")
      .forEach(el => reveal.observe(el));

    const onPointer = (e: PointerEvent) => {
      const card = (e.target as Element).closest<HTMLElement>(".card");
      if (!card) return;
      const r = card.getBoundingClientRect();
      card.style.setProperty("--mx", `${e.clientX - r.left}px`);
      card.style.setProperty("--my", `${e.clientY - r.top}px`);
    };
    addEventListener("pointermove", onPointer, {passive: true});

    return () => {
      reveal.disconnect();
      removeEventListener("pointermove", onPointer);
    };
  }, []);

  return null;
}

function countUp(el: HTMLElement) {
  const match = el.textContent?.match(/^(\D*)([\d.]+)(.*)$/);
  if (!match) return;
  const [, prefix, num, suffix] = match;
  const target = parseFloat(num);
  const decimals = num.split(".")[1]?.length ?? 0;
  const start = performance.now();
  const duration = 1400;

  const tick = (now: number) => {
    const t = Math.min((now - start) / duration, 1);
    const eased = 1 - Math.pow(1 - t, 4);
    el.textContent = `${prefix}${(target * eased).toFixed(decimals)}${suffix}`;
    if (t < 1) requestAnimationFrame(tick);
  };
  requestAnimationFrame(tick);
}
