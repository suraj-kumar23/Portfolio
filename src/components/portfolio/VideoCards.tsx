import { useCallback, useEffect, useRef, useState } from "react";
import { VIDEOS, LINKS } from "@/lib/portfolio-data";
import { Instagram, ChevronLeft, ChevronRight } from "lucide-react";

const AUTOPLAY_MS = 6000;

export function VideoCards() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);
  const count = VIDEOS.length;

  const go = useCallback(
    (dir: number) => setActive((a) => (a + dir + count) % count),
    [count],
  );

  // Autoplay: advance slide on a timer, paused on hover/focus
  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => go(1), AUTOPLAY_MS);
    return () => clearInterval(id);
  }, [paused, go]);

  // Play only the active video; pause and rewind the rest
  useEffect(() => {
    videoRefs.current.forEach((v, i) => {
      if (!v) return;
      if (i === active) {
        v.play().catch(() => {});
      } else {
        v.pause();
      }
    });
  }, [active]);

  const video = VIDEOS[active]!;

  return (
    <div
      className="w-full"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
    >
      {/* ── Slider stage ─────────────────────────────── */}
      <div
        className="relative mx-auto aspect-video w-full max-w-[880px]"
        role="region"
        aria-roledescription="carousel"
        aria-label="Cinematic videos"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === "ArrowLeft") go(-1);
          if (e.key === "ArrowRight") go(1);
        }}
      >
        {VIDEOS.map((v, i) => {
          // shortest signed offset from active (-2..2 for 5 items)
          let off = i - active;
          if (off > count / 2) off -= count;
          if (off < -count / 2) off += count;
          const abs = Math.abs(off);
          const isActive = off === 0;

          return (
            <div
              key={v.url}
              className="absolute inset-0 transition-all duration-700 ease-[cubic-bezier(.22,1,.36,1)]"
              style={{
                transform: `translateX(${off * 14}%) scale(${1 - abs * 0.12}) translateY(${abs * 4}%)`,
                opacity: abs > 2 ? 0 : 1 - abs * 0.35,
                filter: isActive ? "none" : `blur(${abs * 2}px) brightness(0.55)`,
                zIndex: 10 - abs,
                pointerEvents: isActive ? "auto" : "none",
              }}
              aria-hidden={!isActive}
            >
              <div className="h-full w-full overflow-hidden rounded-xl border border-hairline bg-ground-2 shadow-[0_30px_80px_-20px_rgba(0,0,0,.7)]">
                <video
                  ref={(el) => {
                    videoRefs.current[i] = el;
                  }}
                  src={v.url}
                  muted
                  loop
                  playsInline
                  preload={abs <= 1 ? "auto" : "metadata"}
                  className="h-full w-full object-cover"
                />
                {isActive && (
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ground/60 via-transparent to-transparent" />
                )}
              </div>
            </div>
          );
        })}

        {/* Arrows */}
        <button
          type="button"
          onClick={() => go(-1)}
          aria-label="Previous video"
          className="absolute -left-3 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-hairline bg-ground/80 text-ink backdrop-blur-md transition-colors hover:border-amber hover:text-amber sm:-left-6"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
        <button
          type="button"
          onClick={() => go(1)}
          aria-label="Next video"
          className="absolute -right-3 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-hairline bg-ground/80 text-ink backdrop-blur-md transition-colors hover:border-amber hover:text-amber sm:-right-6"
        >
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>

      {/* ── Active video metadata + CTA ──────────────── */}
      <div className="mx-auto mt-8 flex max-w-[880px] items-start justify-between gap-4">
        <div key={active} className="animate-fade-in">
          <div className="flex items-center gap-2">
            <span className="label-xs text-teal">{video.category}</span>
            <span className="h-px w-4 bg-hairline" />
            <span className="label-xs text-ink-muted">{video.year}</span>
          </div>
          <h3 className="display mt-2 text-[clamp(20px,2.2vw,28px)] leading-tight text-ink">
            {video.title}
          </h3>
        </div>
        <a
          href={LINKS.instagram}
          target="_blank"
          rel="noreferrer"
          aria-label="Follow on Instagram"
          className="label-xs flex shrink-0 items-center gap-1.5 rounded-full border border-hairline px-3 py-2 text-ink transition-colors hover:border-amber hover:text-amber"
        >
          <Instagram className="h-3.5 w-3.5" /> Follow
        </a>
      </div>

      {/* ── Pagination dots ──────────────────────────── */}
      <div className="mt-6 flex items-center justify-center gap-2.5">
        {VIDEOS.map((v, i) => (
          <button
            key={v.url}
            type="button"
            onClick={() => setActive(i)}
            aria-label={`Go to video ${i + 1}`}
            aria-current={i === active}
            className={`h-1.5 rounded-full transition-all duration-500 ${
              i === active ? "w-8 bg-amber" : "w-1.5 bg-hairline hover:bg-ink-muted"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
