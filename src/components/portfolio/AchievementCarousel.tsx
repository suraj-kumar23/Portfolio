import { useEffect, useRef, useState } from "react";
import { ACHIEVEMENTS } from "@/lib/portfolio-data";

/**
 * Achievement carousel — scroll-driven fan stack.
 * The active card advances as the user scrolls down the page
 * (no buttons). Uses a tall wrapper + sticky inner container so
 * normal scroll physics/inertia are preserved.
 */

const RESULT_STYLES: Record<string, string> = {
  Winner: "border-amber/60 text-amber",
  Finalist: "border-teal/50 text-teal",
  Qualified: "border-hairline text-ink-muted",
};

// How much extra scroll distance to reserve per card (in vh).
// Bigger = slower / more deliberate card changes.
const VH_PER_CARD = 60;

export function AchievementCarousel() {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  const count = ACHIEVEMENTS.length;

  useEffect(() => {
    const wrapper = wrapperRef.current;
    if (!wrapper) return;

    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const rect = wrapper.getBoundingClientRect();
        const vh = window.innerHeight;
        const scrollable = wrapper.offsetHeight - vh;
        if (scrollable <= 0) return;

        // 0 when the wrapper's top just reaches the viewport top,
        // 1 when we've scrolled all the way through it.
        const progress = Math.min(1, Math.max(0, -rect.top / scrollable));
        const idx = Math.min(count - 1, Math.floor(progress * count));
        setActive(idx);
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(raf);
    };
  }, [count]);

  return (
    <div
      ref={wrapperRef}
      className="relative"
      style={{ height: `${count * VH_PER_CARD}vh` }}
    >
      <div className="sticky top-0 flex h-screen flex-col items-center justify-center overflow-hidden">
        {/* Counter */}
        <span className="label-xs mb-8 text-ink-muted">
          {String(active + 1).padStart(2, "0")} / {String(count).padStart(2, "0")}
        </span>

        {/* Fan stack */}
        <div className="relative h-[440px] w-full max-w-[440px] sm:h-[520px]">
          {ACHIEVEMENTS.map((a, i) => {
            const offset = i - active;
            const abs = Math.abs(offset);
            const isActive = offset === 0;
            const resultStyle =
              RESULT_STYLES[a.result] ?? "border-hairline text-ink-2";

            // Fan geometry — tune these to widen/narrow the spread
            const translateX = offset * 68;
            const translateY = abs * 14;
            const rotate = offset * 7;
            const scale = isActive ? 1 : Math.max(0.82, 1 - abs * 0.07);
            const zIndex = count - abs;
            const opacity = abs > 3 ? 0 : 1 - abs * 0.12;

            return (
              <div
                key={a.name}
                className={`absolute left-1/2 top-1/2 w-[260px] rounded-2xl border bg-ground-2 p-6 shadow-[0_20px_60px_rgba(0,0,0,0.18)] transition-transform duration-500 ease-out sm:w-[300px] sm:p-8 ${
                  isActive ? "border-amber/40" : "border-hairline"
                }`}
                style={{
                  transform: `translate(-50%, -50%) translate(${translateX}px, ${translateY}px) rotate(${rotate}deg) scale(${scale})`,
                  zIndex,
                  opacity,
                  pointerEvents: isActive ? "auto" : "none",
                  transitionProperty: "transform, opacity, border-color",
                }}
              >
                <span
                  className="display pointer-events-none absolute -right-2 -top-6 select-none text-[90px] leading-none text-transparent opacity-20"
                  style={{ WebkitTextStroke: "1px var(--hairline)" }}
                  aria-hidden
                >
                  {String(i + 1).padStart(2, "0")}
                </span>

                <span
                  className={`label-xs relative z-10 inline-flex items-center gap-2 rounded-full border px-3 py-1.5 ${resultStyle}`}
                >
                  {a.result}
                </span>

                <h3 className="display relative z-10 mt-6 max-w-[18ch] text-[clamp(20px,2.4vw,28px)] leading-[1.05]">
                  {a.name}
                </h3>

                <div className="relative z-10 mt-6 border-t border-hairline pt-4">
                  <p className="label-xs text-teal">Venue</p>
                  <p className="mt-2 text-[14px] leading-relaxed text-ink-2">
                    {a.place}
                  </p>
                </div>

                <p className="label-xs relative z-10 mt-4 text-ink-muted">
                  {a.date}
                </p>
              </div>
            );
          })}
        </div>

        {/* Indicators */}
        <div className="mt-10 flex justify-center gap-2">
          {ACHIEVEMENTS.map((_, i) => (
            <span
              key={i}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                i === active ? "w-6 bg-amber" : "w-1.5 bg-hairline"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}