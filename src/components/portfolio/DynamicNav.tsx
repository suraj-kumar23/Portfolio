import { useEffect, useRef, useState } from "react";
import { NAV } from "@/lib/portfolio-data";

/**
 * Dynamic Island–inspired navbar.
 * Always a floating rounded pill with margin from the edges of the
 * viewport — wider and slightly taller at the top of the page, and
 * condenses into a smaller, tighter pill once the reader scrolls.
 * The whole pill carries a subtle 3D tilt that follows the pointer
 * and springs back on leave.
 */
export function DynamicNav() {
  const [condensed, setCondensed] = useState(false);
  const [active, setActive] = useState("Home");
  const pillRef = useRef<HTMLDivElement>(null);

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

  const tilt = (e: React.PointerEvent) => {
    const el = pillRef.current;
    if (!el || e.pointerType === "touch") return;
    const r = el.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - 0.5;
    const y = (e.clientY - r.top) / r.height - 0.5;
    el.style.transitionDuration = "0ms";
    el.style.transform = `rotateX(${(-y * 10).toFixed(2)}deg) rotateY(${(x * 12).toFixed(2)}deg)`;
  };

  const untilt = () => {
    const el = pillRef.current;
    if (!el) return;
    el.style.transitionDuration = "500ms";
    el.style.transform = "rotateX(0deg) rotateY(0deg)";
  };

  return (
    <header className="pointer-events-none fixed inset-x-0 top-0 z-50 flex justify-center px-4 [perspective:900px]">
      <div
        ref={pillRef}
        onPointerMove={tilt}
        onPointerLeave={untilt}
        style={{ transitionTimingFunction: "cubic-bezier(0.22, 1.4, 0.36, 1)" }}
        className={`pointer-events-auto transition-[max-width,transform] duration-500 will-change-transform ${
          condensed ? "mt-3 w-full max-w-[640px]" : "mt-4 w-full max-w-[1140px]"
        }`}
      >
        <div
          className={`flex items-center justify-between rounded-full border border-neutral-200 bg-white/90 backdrop-blur-[16px] shadow-[0_10px_30px_-8px_rgba(0,0,0,0.18)] transition-all duration-500 ${
            condensed ? "h-12 gap-6 px-5" : "h-16 gap-8 px-6 sm:px-7"
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
              className="label-xs flex items-center gap-2 text-neutral-500 transition-colors hover:text-amber"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-amber" />
              {active}
            </a>
          ) : (
            <nav className="hidden items-center gap-6 transition-all duration-500 lg:flex">
              {NAV.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className={`label-xs transition-colors hover:text-amber ${
                    active === item.label ? "text-amber" : "text-neutral-500"
                  }`}
                >
                  {item.label}
                </a>
              ))}
            </nav>
          )}

          <a
            href="/resume.pdf"
            download="Suraj-Kumar-Biswas-Resume.pdf"
            className="label-xs rounded-full border border-hairline px-5 py-3 text-ink transition-colors hover:border-amber hover:text-amber"
          >
            Download Resume
          </a>
        </div>
      </div>
    </header>
  );
}
