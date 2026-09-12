import { useEffect, useState } from "react";
import { NAV } from "@/lib/portfolio-data";

const GMAIL_TO = "surajbiswasc@gmail.com";
const GMAIL_SUBJECT = "Let's Work Together";
const GMAIL_BODY =
  "Hi Suraj,\n\nI came across your portfolio and would love to connect about a potential opportunity.\n\n";

const gmailHref = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(
  GMAIL_TO,
)}&su=${encodeURIComponent(GMAIL_SUBJECT)}&body=${encodeURIComponent(GMAIL_BODY)}`;

/**
 * Dynamic Island–inspired navbar.
 * Always a floating rounded pill with margin from the edges of the
 * viewport — wider and slightly taller at the top of the page, and
 * condenses into a smaller, tighter pill once the reader scrolls.
 */
export function DynamicNav() {
  const [condensed, setCondensed] = useState(false);
  const [active, setActive] = useState("Home");

  useEffect(() => {
    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => setCondensed(window.scrollY > 90));
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  // Track which section is in view so the condensed pill can name it.
  useEffect(() => {
    const sections = NAV.map((item) =>
      document.getElementById(item.href.slice(1)),
    ).filter((el): el is HTMLElement => el !== null);
    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            const match = NAV.find(
              (item) => item.href === `#${entry.target.id}`,
            );
            if (match) setActive(match.label);
          }
        }
      },
      { rootMargin: "-40% 0px -55% 0px" },
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return (
    <header className="pointer-events-none fixed inset-x-0 top-0 z-50 flex justify-center px-4">
      <div
        className={`pointer-events-auto transition-[max-width] duration-500 ${
          condensed ? "mt-3 w-full max-w-[640px]" : "mt-4 w-full max-w-[1140px]"
        }`}
        style={{ transitionTimingFunction: "cubic-bezier(0.22, 1.4, 0.36, 1)" }}
      >
        <div
          className={`grid w-full grid-cols-[auto_minmax(0,1fr)_auto] items-center overflow-hidden rounded-full border border-neutral-200 bg-white/90 backdrop-blur-[16px] shadow-[0_10px_30px_-8px_rgba(0,0,0,0.18)] transition-all duration-500 ${
            condensed ? "h-12 gap-4 px-5" : "h-16 gap-4 px-6 sm:px-7"
          }`}
        >
          <a
            href="#home"
            className={`display shrink-0 text-neutral-900 transition-all duration-500 ${
              condensed ? "text-[13px]" : "text-[15px]"
            }`}
          >
            Portfolio<span className="text-amber">.</span>
          </a>

          {condensed ? (
            <a
              href={NAV.find((item) => item.label === active)?.href ?? "#home"}
              className="label-xs flex min-w-0 shrink-0 items-center justify-center gap-2 text-neutral-500 transition-colors hover:text-amber"
            >
              <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-amber" />
              <span className="truncate">{active}</span>
            </a>
          ) : (
            <nav className="hidden min-w-0 items-center gap-5 overflow-x-auto whitespace-nowrap px-1 transition-all duration-500 lg:flex [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
              {NAV.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className={`label-xs shrink-0 transition-colors hover:text-amber ${
                    active === item.label ? "text-amber" : "text-neutral-500"
                  }`}
                >
                  {item.label}
                </a>
              ))}
            </nav>
          )}

          <a
            href={gmailHref}
            target="_blank"
            rel="noopener noreferrer"
            className="label-xs group relative isolate flex shrink-0 items-center gap-1.5 overflow-hidden rounded-full bg-amber px-5 py-3 text-white shadow-[0_4px_14px_-4px_rgba(217,119,6,0.6)] transition-all duration-300 hover:scale-105 hover:shadow-[0_8px_24px_-6px_rgba(217,119,6,0.75)] active:scale-95"
          >
            <span
              aria-hidden
              className="pointer-events-none absolute inset-0 -z-10 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-700 ease-out group-hover:translate-x-full"
            />
            <span>Hire Me</span>
            <svg
              aria-hidden
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
            >
              <line x1="7" y1="17" x2="17" y2="7" />
              <polyline points="7 7 17 7 17 17" />
            </svg>
          </a>
        </div>
      </div>
    </header>
  );
}
