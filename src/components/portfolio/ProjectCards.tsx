import { PROJECTS, LINKS, type Project } from "@/lib/portfolio-data";
import { Github, ArrowUpRight } from "lucide-react";

import imgAgriNova from "@/assets/project-agrinova.jpg";
import imgVistaLex from "@/assets/project-vistalex.png";
import imgGestureTalk from "@/assets/project-gesturetalk.jpg";
import imgSageChain from "@/assets/project-sagechain.jpg";

const IMAGES: Record<string, string> = {
  P01: imgAgriNova,
  P02: imgVistaLex,
  P03: imgGestureTalk,
  P04: imgSageChain,
};

function Card({ project, index }: { project: Project; index: number }) {
  const amberFill = index % 2 === 0;

  return (
    <article
      className="group relative aspect-[16/9] w-full overflow-hidden rounded-xl border border-hairline bg-ground-2"
      data-reveal
    >
      {/* Photo */}
      <img
        src={IMAGES[project.code]}
        alt={`${project.title} — ${project.role}`}
        loading="lazy"
        width={1280}
        height={720}
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
      />
      {/* Legibility veil on the photo */}
      <div className="absolute inset-0 bg-gradient-to-t from-ground/85 via-ground/20 to-ground/30 transition-opacity duration-500 group-hover:opacity-0" />

      {/* Expanding circle — anchored to the icon, grows to fill the card */}
      <div
        aria-hidden
        className={`absolute right-4 top-4 h-11 w-11 rounded-full transition-transform duration-700 ease-[cubic-bezier(.22,1,.36,1)] group-hover:scale-[28] ${
          amberFill ? "bg-amber" : "bg-teal"
        }`}
      />

      {/* Category / code */}
      <div className="absolute left-4 top-4 flex items-center gap-2 transition-colors duration-500 sm:left-5 sm:top-5">
        <span className="label-xs text-ink transition-colors duration-500 group-hover:text-ground">
          {project.code}
        </span>
        <span className="h-px w-6 bg-ink/40 transition-colors duration-500 group-hover:bg-ground/50" />
        <span className="label-xs text-ink-muted transition-colors duration-500 group-hover:text-ground/70">
          {project.dates}
        </span>
      </div>

      {/* Icon (sits on the circle) */}
      <div
        className={`absolute right-4 top-4 z-10 flex h-11 w-11 items-center justify-center rounded-full transition-transform duration-700 group-hover:rotate-45 ${
          amberFill ? "text-ground" : "text-ink"
        }`}
      >
        <ArrowUpRight className="h-5 w-5" strokeWidth={1.75} />
      </div>

      {/* Default state: title + subtitle, bottom-left */}
      <div className="absolute inset-x-4 bottom-4 transition-all duration-500 group-hover:translate-y-3 group-hover:opacity-0 sm:inset-x-5 sm:bottom-5">
        <h3 className="display text-[clamp(22px,2.6vw,34px)] leading-none text-ink">
          {project.title}
        </h3>
        <p className="label-xs mt-2 text-ink-2">{project.role}</p>
      </div>

      {/* Hover state: description + links, revealed by the circle fill */}
      <div
        className={`absolute inset-0 flex flex-col justify-end gap-3 p-4 opacity-0 transition-all delay-100 duration-500 group-hover:opacity-100 sm:p-6 ${
          amberFill ? "text-ground" : "text-ink"
        }`}
      >
        <p
          className={`max-w-[52ch] text-[12.5px] leading-relaxed sm:text-[13.5px] ${
            amberFill ? "text-ground/90" : "text-ink/90"
          }`}
        >
          {project.summary}
        </p>
        <ul
          className={`hidden flex-wrap gap-x-3 gap-y-1 sm:flex ${
            amberFill ? "text-ground/70" : "text-ink/70"
          }`}
        >
          {project.stack.slice(0, 5).map((tech) => (
            <li key={tech} className="label-xs">
              {tech}
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-2 pt-1">
          <a
            href={project.github ?? LINKS.github}
            target="_blank"
            rel="noreferrer"
            aria-label={`${project.title} on GitHub`}
            className={`label-xs inline-flex items-center gap-1.5 rounded-full px-4 py-2 transition-colors ${
              amberFill
                ? "bg-ground text-ink hover:bg-ground/85"
                : "bg-ink text-ground hover:bg-ink/85"
            }`}
          >
            <Github className="h-3.5 w-3.5" /> Code
          </a>
          {project.live ? (
            <a
              href={project.live}
              target="_blank"
              rel="noreferrer"
              className={`label-xs inline-flex items-center gap-1.5 rounded-full border px-4 py-2 transition-colors ${
                amberFill
                  ? "border-ground/40 text-ground hover:bg-ground/10"
                  : "border-ink/40 text-ink hover:bg-ink/10"
              }`}
            >
              Live <ArrowUpRight className="h-3.5 w-3.5" />
            </a>
          ) : null}
        </div>
      </div>
    </article>
  );
}

export function ProjectCards() {
  return (
    <div className="grid w-full gap-5 sm:grid-cols-2 sm:gap-6">
      {PROJECTS.map((project, i) => (
        <Card key={project.code} project={project} index={i} />
      ))}
    </div>
  );
}
