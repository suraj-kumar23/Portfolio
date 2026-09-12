import { createFileRoute } from "@tanstack/react-router";
import portrait from "@/assets/portrait.png";

import { DynamicNav } from "@/components/portfolio/DynamicNav";
import { PortalHero } from "@/components/portfolio/PortalHero";
import { ProjectCards } from "@/components/portfolio/ProjectCards";
import { Certifications } from "@/components/portfolio/Certifications";
import { SkillMarquee } from "@/components/portfolio/SkillMarquee";
import { AchievementCarousel } from "@/components/portfolio/AchievementCarousel";
import {
  useReveals,
  useScrollY,
} from "@/components/portfolio/use-scroll-progress";
import {
  DISCIPLINES,
  EDUCATION,
  LINKS,
  NAV,
  ROSTER,
  CONTACT,
} from "@/lib/portfolio-data";
import { VideoCards } from "@/components/portfolio/VideoCards";

const TITLE = "Suraj Kumar Biswas — Developer, Filmmaker, Storyteller";

const DESCRIPTION =
  "Portfolio of Suraj Kumar Biswas — full-stack and AI engineer in Kolkata building AgriNova, VistaLex, GestureTalk and SageChain, and shooting cinematic stories after hours.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "profile" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Portfolio,
});

function Section({
  id,
  children,
  className = "",
}: {
  id?: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section
      id={id}
      className={`mx-auto max-w-[1240px] px-5 sm:px-8 ${className}`}
    >
      {children}
    </section>
  );
}

function Portfolio() {
  useReveals();
  const y = useScrollY();

  return (
    <div className="bg-ground text-ink">
      <DynamicNav />

      <main>
        <PortalHero />

        {/* ── Statement fold ─────────────────────────────── */}
        <section
          id="about"
          className="relative overflow-hidden py-28 sm:min-h-screen sm:py-36"
        >
          <div className="mx-auto flex max-w-[1240px] flex-col justify-center px-5 sm:px-8">
            <p className="label-xs text-teal" data-reveal>
              About Me
            </p>

            <span
              className="display pointer-events-none mt-6 block text-[clamp(70px,16vw,220px)] leading-[0.8] text-transparent"
              style={{ WebkitTextStroke: "1px var(--hairline)" }}
              aria-hidden
            >
              01
            </span>

            <h2
              className="display -mt-6 max-w-[22ch] text-[clamp(24px,3.6vw,52px)] leading-[1.12]"
              data-reveal
            >
              I build beautiful web applications by day and{" "}
              <span className="text-amber">
                tell cinematic stories through the lens
              </span>{" "}
              by night — traveller, photographer, relentless creator.
            </h2>

            <p
              className="mt-8 max-w-[52ch] text-[15px] leading-relaxed text-ink-2"
              data-reveal
            >
              A Software Development Engineer with foundations in data
              structures, system design and problem solving, shipping
              products with Java, Python, React, Node and Flask on AWS and
              Azure. Whether it's a web app or a travel film, the principle is
              the same: tell a compelling story with precision and craft.
            </p>

            <ul className="mt-16 grid gap-px border-t border-hairline sm:grid-cols-2 lg:grid-cols-4">
              {DISCIPLINES.map((d, i) => (
                <li
                  key={d.name}
                  className="border-b border-hairline py-6 pr-6"
                  data-reveal
                  data-reveal-delay={i * 80}
                >
                  <p className="label-xs text-amber">0{i + 1}</p>

                  <p className="display mt-3 text-xl">{d.name}</p>

                  <p className="mt-2 text-[13px] text-ink-muted">{d.note}</p>
                </li>
              ))}
            </ul>
          </div>

          <img
            src={portrait}
            alt=""
            aria-hidden
            className="pointer-events-none absolute -right-24 top-1/3 hidden h-[420px] w-[420px] rounded-full object-cover opacity-15 lg:block"
            style={{
              transform: `translateY(${y * -0.04}px) rotate(${y * 0.012}deg)`,
            }}
          />
        </section>

        {/* ── Projects ───────────────────────────────────── */}
        <Section
          id="projects"
          className="border-t border-hairline py-24 sm:py-32"
        >
          <div
            data-reveal
            className="flex flex-wrap items-end justify-between gap-8 pb-12 sm:pb-16"
          >
            <div>
              <p className="label-xs text-teal">Featured Work</p>

              <h2 className="display mt-6 text-[clamp(34px,5vw,68px)] leading-[0.95]">
                Projects<span className="text-amber">.</span>
              </h2>

              <p className="mt-6 max-w-[52ch] text-[15px] leading-relaxed text-ink-2">
                Four builds from the last two years — agriculture intelligence,
                accessible learning, real-time sign interpretation and modular
                DeFi. Hover a card to open it.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <a
                href={LINKS.github}
                target="_blank"
                rel="noreferrer"
                className="label-xs rounded-full bg-ink px-5 py-3 text-ground transition-opacity hover:opacity-85"
              >
                View My Work
              </a>

              <a
                href="#contact"
                className="label-xs rounded-full border border-hairline px-5 py-3 text-ink transition-colors hover:border-amber hover:text-amber"
              >
                Get In Touch
              </a>
            </div>
          </div>

          <ProjectCards />
        </Section>

        {/* ── Skills ─────────────────────────────────────── */}
        <Section
          id="skills"
          className="border-t border-hairline py-24 sm:py-32"
        >
          <p className="label-xs text-teal" data-reveal>
            Expertise
          </p>

          <h2
            className="display mt-6 text-[clamp(30px,4.4vw,58px)] leading-none"
            data-reveal
          >
            Skills
          </h2>

          <p
            className="mt-6 max-w-[52ch] text-[15px] leading-relaxed text-ink-2"
            data-reveal
          >
            Data analysis, engineering and full-stack craft — flowing left to
            right. Hover any chip to pause it; the legend below counts every
            domain.
          </p>

          <SkillMarquee />
        </Section>

        {/* ── Cinematic Films ────────────────────────────── */}
        <Section id="films" className="border-t border-hairline py-24 sm:py-32">
          <div data-reveal className="pb-12 sm:pb-16">
            <p className="label-xs text-teal">Cinematic Reels</p>

            <h2 className="display mt-6 text-[clamp(34px,5vw,68px)] leading-[0.95]">
              Films<span className="text-amber">.</span>
            </h2>

            <p className="mt-6 max-w-[52ch] text-[15px] leading-relaxed text-ink-2">
              A selection of cinematic edits and travel moments — shot, graded
              and cut for the screen. Browse the slider; each reel plays as it
              comes to the front.
            </p>
          </div>

          <VideoCards />
        </Section>

        {/* ── Roster ─────────────────────────────────────── */}
        <Section
          id="hobbies"
          className="border-t border-hairline py-24 sm:py-32"
        >
          <p className="label-xs text-teal" data-reveal>
            Beyond Code
          </p>

          <h2
            className="display mt-6 text-[clamp(30px,4.4vw,58px)] leading-none"
            data-reveal
          >
            Experience & Hobbies
          </h2>

          <ul className="mt-12 border-t border-hairline">
            {ROSTER.map((row, i) => {
              const inner = (
                <>
                  <span className="label-xs w-28 shrink-0 text-amber">
                    {row.label}
                  </span>

                  <span className="display flex-1 text-[clamp(20px,2.6vw,34px)] leading-tight">
                    {row.name}
                  </span>

                  <span className="hidden flex-1 text-[13px] text-ink-muted sm:block">
                    {row.note}
                  </span>

                  <span className="label-xs shrink-0 text-ink-2">
                    {row.meta}
                  </span>
                </>
              );

              return (
                <li
                  key={row.name}
                  className="border-b border-hairline"
                  data-reveal
                  data-reveal-delay={i * 60}
                >
                  {row.href ? (
                    <a
                      href={row.href}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-4 py-6 transition-colors hover:text-amber"
                    >
                      {inner}
                    </a>
                  ) : (
                    <div className="flex items-center gap-4 py-6">{inner}</div>
                  )}
                </li>
              );
            })}
          </ul>
        </Section>

        {/* ── Achievements ───────────────────────────────── */}
        <Section
          id="achievements"
          className="border-t border-hairline py-24 sm:py-32"
        >
          <p className="label-xs text-teal" data-reveal>
            Recognition
          </p>

          <h2
            className="display mt-6 text-[clamp(30px,4.4vw,58px)] leading-none"
            data-reveal
          >
            Achievements
          </h2>

          <AchievementCarousel />
        </Section>

        {/* ── Education ──────────────────────────────────── */}
        <Section
          id="education"
          className="border-t border-hairline py-24 sm:py-32"
        >
          <div data-reveal>
            <p className="label-xs text-teal">Academic Journey</p>

            <h2 className="display mt-6 text-[clamp(30px,4.4vw,58px)] leading-none">
              Education<span className="text-amber">.</span>
            </h2>

            <p className="mt-6 max-w-[52ch] text-[15px] leading-relaxed text-ink-2">
              A timeline of the academic foundations that shaped my approach
              to software engineering, problem solving and technology.
            </p>
          </div>

          <EducationTimeline />
        </Section>

        {/* ── Certifications ─────────────────────────────── */}
        <Section
          id="certificates"
          className="border-t border-hairline py-24 sm:py-32"
        >
          <div data-reveal className="pb-12 sm:pb-16">
            <p className="label-xs text-teal">Credentials</p>

            <h2 className="display mt-6 text-[clamp(30px,4.4vw,58px)] leading-none">
              Certifications<span className="text-amber">.</span>
            </h2>

            <p className="mt-6 max-w-[52ch] text-[15px] leading-relaxed text-ink-2">
              Verified courses and certifications — from HackerRank and Oracle
              to ISRO's Indian Institute of Remote Sensing, IBM, Microsoft and
              Duke University.
            </p>
          </div>

          <Certifications />
        </Section>

        {/* ── Close ──────────────────────────────────────── */}
        <section
          id="contact"
          className="border-t border-hairline pt-24 sm:pt-32"
        >
          <div className="mx-auto max-w-[1240px] px-5 sm:px-8">
            <p className="label-xs text-teal" data-reveal>
              Let's Connect
            </p>

            <div className="mt-6 flex flex-col justify-between gap-10 lg:flex-row lg:items-end">
              <div data-reveal>
                <h2 className="display max-w-[16ch] text-[clamp(30px,4.6vw,60px)] leading-[1.02]">
                  Have a project in mind
                  <span className="text-amber">?</span>
                </h2>

                <p className="mt-5 max-w-[46ch] text-[13px] text-ink-muted">
                  Whether it's a web app, a film, or a collaboration — Kolkata,
                  India · surajbiswasc@gmail.com · +91 89180 67883
                </p>
              </div>

              <div className="flex flex-wrap gap-3" data-reveal>
                <a
                  href={LINKS.email}
                  className="label-xs rounded-full bg-ink px-5 py-3 text-ground transition-opacity hover:opacity-85"
                >
                  Say Hello
                </a>

                <a
                  href="/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  download="Suraj-Kumar-Biswas-Resume.pdf"
                  className="label-xs rounded-full border border-hairline px-5 py-3 text-ink transition-colors hover:border-amber hover:text-amber"
                >
                  Download Resume
                </a>
              </div>
            </div>

            <div className="mt-16 flex flex-wrap items-center justify-between gap-4 border-t border-hairline py-6">
              <p className="label-xs text-ink-muted"> © 2026 Suraj Kumar Biswas </p>

              <div className="flex flex-wrap gap-6">
                {[
                  ["GitHub", LINKS.github],
                  ["LinkedIn", LINKS.linkedin],
                  ["Instagram", LINKS.instagram],
                  ["Email", LINKS.email],
                ].map(([label, href]) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    className="label-xs text-ink-2 transition-colors hover:text-amber"
                  >
                    {label}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* ── Large Footer Name ─────────────────────────── */}
          <p
            className="display w-full translate-y-[0.16em] overflow-hidden whitespace-nowrap px-2 text-center text-[9vw] leading-[0.8] text-ink"
            aria-hidden
          >
            SURAJ KUMAR BISWAS
          </p>
        </section>
      </main>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────
   EDUCATION 3D TIMELINE
───────────────────────────────────────────────────────── */

function EducationTimeline() {
  return (
    <div className="relative mt-20 perspective-[1600px]">
      {/* Central timeline */}
      <div
        className="pointer-events-none absolute bottom-0 left-4 top-0 w-px bg-gradient-to-b from-transparent via-amber/60 to-transparent sm:left-1/2 sm:-translate-x-1/2"
        aria-hidden
      />

      {/* Animated glowing line */}
      <div
        className="pointer-events-none absolute left-4 top-0 h-full w-px origin-top bg-amber/40 sm:left-1/2 sm:-translate-x-1/2"
        aria-hidden
      />

      <div className="space-y-12 sm:space-y-20">
        {EDUCATION.map((education, i) => {
          const isLeft = i % 2 === 0;

          return (
            <div
              key={`${education.name}-${i}`}
              className="group relative sm:min-h-[230px]"
              data-reveal
              data-reveal-delay={i * 120}
            >
              {/* Timeline node */}
              <div className="absolute left-4 top-10 z-20 -translate-x-1/2 sm:left-1/2">
                <div className="relative flex h-5 w-5 items-center justify-center">
                  <span className="absolute h-8 w-8 animate-ping rounded-full bg-amber/10" />

                  <span className="absolute h-5 w-5 rounded-full border border-amber/50 bg-ground transition-all duration-500 group-hover:scale-150 group-hover:border-amber" />

                  <span className="relative h-2 w-2 rounded-full bg-amber shadow-[0_0_20px_rgba(245,158,11,0.7)] transition-all duration-500 group-hover:h-3 group-hover:w-3" />
                </div>
              </div>

              {/* Year badge */}
              <div
                className={`mb-5 ml-10 sm:absolute sm:top-4 sm:mb-0 sm:w-[calc(50%-55px)] ${
                  isLeft
                    ? "sm:left-[calc(50%+55px)]"
                    : "sm:right-[calc(50%+55px)] sm:text-right"
                }`}
              >
                <span className="label-xs inline-flex items-center gap-2 rounded-full border border-hairline bg-ground-2 px-4 py-2 text-amber shadow-[0_10px_30px_rgba(0,0,0,0.08)] transition-all duration-500 group-hover:-translate-y-1 group-hover:border-amber/50 group-hover:shadow-[0_15px_40px_rgba(245,158,11,0.12)]">
                  <span className="h-1.5 w-1.5 rounded-full bg-amber" />
                  {education.date}
                </span>
              </div>

              {/* Card */}
              <div
                className={`ml-10 sm:w-[calc(50%-55px)] ${isLeft ? "sm:mr-auto" : "sm:ml-auto"}`}
              >
                <div className="relative overflow-hidden rounded-2xl border border-hairline bg-ground-2 p-6 shadow-[0_20px_60px_rgba(0,0,0,0.06)] transition-all duration-700 ease-out [transform-style:preserve-3d] group-hover:-translate-y-3 group-hover:[transform:rotateX(3deg)_rotateY(-3deg)_translateZ(20px)] group-hover:border-amber/40 group-hover:shadow-[0_30px_80px_rgba(0,0,0,0.12)] sm:p-8">
                  {/* 3D background glow */}
                  <div
                    className="pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full bg-amber/10 blur-3xl transition-all duration-700 group-hover:scale-150 group-hover:bg-amber/15"
                    aria-hidden
                  />

                  {/* Decorative number */}
                  <span
                    className="display pointer-events-none absolute -right-3 -top-8 select-none text-[110px] leading-none text-transparent opacity-20 transition-all duration-700 group-hover:-translate-y-3 group-hover:translate-x-2 group-hover:opacity-40"
                    style={{
                      WebkitTextStroke: "1px var(--hairline)",
                    }}
                    aria-hidden
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>

                  {/* Top metadata */}
                  <div className="relative z-10 flex items-center justify-between gap-4">
                    <span className="label-xs text-teal">
                      {String(i + 1).padStart(2, "0")} /{" "}
                      {String(EDUCATION.length).padStart(2, "0")}
                    </span>

                    <span className="label-xs text-ink-muted">
                      Academic Journey
                    </span>
                  </div>

                  {/* Degree / Programme */}
                  <h3 className="display relative z-10 mt-8 max-w-[18ch] text-[clamp(24px,3vw,38px)] leading-[0.98] transition-transform duration-700 group-hover:translate-z-[12px]">
                    {education.name}
                  </h3>

                  {/* Institution */}
                  <div className="relative z-10 mt-7 border-t border-hairline pt-5">
                    <p className="label-xs text-amber">
                      Institution
                    </p>

                    <p className="mt-2 text-[15px] leading-relaxed text-ink-2">
                      {education.place}
                    </p>
                  </div>

                  {/* Result */}
                  <div className="relative z-10 mt-5 flex flex-wrap items-end justify-between gap-4">
                    <div>
                      <p className="label-xs text-ink-muted">Result</p>

                      <p className="display mt-1 text-xl">{education.result}</p>
                    </div>

                    <div className="flex h-10 w-10 items-center justify-center rounded-full border border-hairline transition-all duration-500 group-hover:rotate-45 group-hover:border-amber group-hover:bg-amber group-hover:text-ground">
                      <span className="text-lg">↗</span>
                    </div>
                  </div>

                  {/* Bottom animated line */}
                  <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-amber transition-all duration-700 group-hover:w-full" />

                  {/* Shine */}
                  <div
                    className="pointer-events-none absolute -left-full top-0 h-full w-1/2 skew-x-[-20deg] bg-gradient-to-r from-transparent via-white/10 to-transparent transition-all duration-1000 group-hover:left-[140%]"
                    aria-hidden
                  />
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Timeline ending */}
      <div className="relative mt-10 flex justify-center sm:mt-16">
        <div className="relative flex h-10 w-10 items-center justify-center rounded-full border border-hairline bg-ground-2 shadow-[0_10px_40px_rgba(0,0,0,0.08)]">
          <span className="h-2 w-2 rounded-full bg-amber shadow-[0_0_20px_rgba(245,158,11,0.8)]" />
        </div>
      </div>
    </div>
  );
}
