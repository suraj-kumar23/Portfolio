import portrait from "@/assets/portrait.png";
import { useScrollProgress } from "./use-scroll-progress";

export function PortalHero() {
  const { ref, progress } = useScrollProgress<HTMLDivElement>();

  const p = Math.min(1, progress / 0.82);
  const ease = p * p * (3 - 2 * p);

  const panelShift = ease * 120;
  const scale = 1 + ease * 0.22;
  const tracking = 0.04 - ease * 0.065;
  const split = ease * 40;
  const imgScale = 1.0 - ease * 0.08;
  const duotone = ease * 0.42;
  const dot = ease * 46;

  return (
    <section
      id="home"
      ref={ref}
      className="relative h-[250vh] w-screen"
      style={{
        marginLeft: "calc(50% - 50vw)",
        marginRight: "calc(50% - 50vw)",
      }}
    >
      <div
        className="sticky top-0 h-screen w-full overflow-hidden"
        style={{ isolation: "isolate" }}
      >
        {/* Full-bleed image — focal point raised so the head is never cropped */}
        <img
          src={portrait}
          alt="Suraj Kumar Biswas, developer and filmmaker"
          className="absolute inset-0 h-full w-full object-cover object-[center_18%]"
          style={{
            transform: `scale(${imgScale})`,
            transformOrigin: "50% 18%",
          }}
        />

        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(120deg, var(--teal), var(--amber))",
            mixBlendMode: "overlay",
            opacity: duotone,
          }}
          aria-hidden
        />

        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(120% 90% at 50% 40%, transparent 20%, var(--ground) 100%)",
          }}
          aria-hidden
        />

        <span
          className="absolute left-1/2 top-1/2 h-1.5 w-1.5 rounded-full bg-amber"
          style={{ transform: `translate(${-dot}vw, ${-dot * 0.55}vh)` }}
          aria-hidden
        />
        <span
          className="absolute left-1/2 top-1/2 h-1.5 w-1.5 rounded-full bg-teal"
          style={{ transform: `translate(${dot}vw, ${dot * 0.55}vh)` }}
          aria-hidden
        />

        <div
          className="absolute inset-y-0 left-0 w-[51%] bg-ground"
          style={{ transform: `translateX(${-panelShift}%)` }}
          aria-hidden
        />
        <div
          className="absolute inset-y-0 right-0 w-[51%] bg-ground"
          style={{ transform: `translateX(${panelShift}%)` }}
          aria-hidden
        />

        <div className="pointer-events-none absolute inset-0 flex items-center justify-center px-4">
          <h1
            className="display flex w-full max-w-[calc(100%-2rem)] items-center justify-center whitespace-nowrap text-center text-[clamp(18px,6vw,72px)] leading-none text-ink sm:text-[clamp(22px,5.5vw,64px)] lg:text-[clamp(28px,5vw,78px)]"
            style={{ transform: `scale(${scale})`, letterSpacing: `${tracking}em` }}
          >
            <span style={{ transform: `translateX(${-split}%)`, display: "inline-block" }}>
              SURAJ KUMAR
            </span>
            <span className="inline-block w-[0.3em]" />
            <span style={{ transform: `translateX(${split}%)`, display: "inline-block" }}>
              BISWAS
            </span>
          </h1>
        </div>

        <div className="pointer-events-none absolute inset-0 p-5 pt-20 sm:p-8 sm:pt-24">
          <div className="flex items-start justify-between">
            <p className="label-xs text-ink-2">Developer · Filmmaker · Storyteller</p>
            <p className="label-xs text-ink-2">Kolkata, India</p>
          </div>
          <div className="absolute inset-x-5 bottom-6 flex items-end justify-between sm:inset-x-8">
            <p className="label-xs text-ink-muted">B.Tech CSE · 2022—2026</p>
            <p className="label-xs text-ink-muted">
              Scroll to open <span className="text-amber">·</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}