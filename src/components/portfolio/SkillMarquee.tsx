import {
  siC,
  siCplusplus,
  siDavinciresolve,
  siDatabricks,
  siDjango,
  siDocker,
  siExpress,
  siFigma,
  siFlask,
  siGit,
  siGithub,
  siGraphql,
  siHackerrank,
  siJavascript,
  siJira,
  siKeras,
  siLinux,
  siLooker,
  siMongodb,
  siMysql,
  siNextdotjs,
  siNodedotjs,
  siNumpy,
  siOpencv,
  siOpenjdk,
  siPandas,
  siPostgresql,
  siPostman,
  siPython,
  siQlik,
  siReact,
  siRedux,
  siScikitlearn,
  siSnowflake,
  siSpringboot,
  siSupabase,
  siTailwindcss,
  siTensorflow,
  siTypescript,
  siVite,
  siAngular,
} from "simple-icons";
import { SKILLS } from "@/lib/portfolio-data";

type Icon = { title: string; hex: string; path: string };

/* Map skill labels (lowercased, punctuation-stripped) to their official logo.
   Brands without a licensed icon (Adobe, AWS, Microsoft…) fall back to an
   amber dot so the palette stays intact. */
const ICONS: Record<string, Icon> = {
  python: siPython,
  java: siOpenjdk,
  typescript: siTypescript,
  "javascript es6+": siJavascript,
  javascript: siJavascript,
  c: siC,
  "c++": siCplusplus,
  "react.js": siReact,
  react: siReact,
  "next.js": siNextdotjs,
  angular: siAngular,
  "redux toolkit": siRedux,
  "tailwind css": siTailwindcss,
  vite: siVite,
  "node.js": siNodedotjs,
  "express.js": siExpress,
  flask: siFlask,
  django: siDjango,
  "spring boot": siSpringboot,
  graphql: siGraphql,
  postgresql: siPostgresql,
  mysql: siMysql,
  mongodb: siMongodb,
  supabase: siSupabase,
  docker: siDocker,
  "git / github": siGit,
  git: siGit,
  github: siGithub,
  postman: siPostman,
  linux: siLinux,
  tensorflow: siTensorflow,
  keras: siKeras,
  opencv: siOpencv,
  "scikit-learn": siScikitlearn,
  pandas: siPandas,
  numpy: siNumpy,
  "advanced sql hackerrank certified": siHackerrank,
  snowflake: siSnowflake,
  databricks: siDatabricks,
  "qlik sense": siQlik,
  "looker studio": siLooker,
  "jira / sprint coordination": siJira,
  figma: siFigma,
  "davinci resolve": siDavinciresolve,
};

function normalize(label: string): string {
  return label
    .toLowerCase()
    .replace(/[(),]/g, "")
    .replace(/\s+/g, " ")
    .trim();
}

function iconFor(label: string): Icon | null {
  return ICONS[normalize(label)] ?? null;
}

function Chip({ label }: { label: string }) {
  const icon = iconFor(label);
  return (
    <li className="group flex shrink-0 items-center gap-3 rounded-full border border-hairline bg-ground-2/60 px-5 py-3 transition-all duration-300 hover:-translate-y-1 hover:border-amber/60 hover:bg-ground-2">
      {icon ? (
        <svg
          viewBox="0 0 24 24"
          role="img"
          aria-label={icon.title}
          className="h-[18px] w-[18px] fill-ink-2 transition-all duration-300 group-hover:scale-110 group-hover:fill-amber"
        >
          <path d={icon.path} />
        </svg>
      ) : (
        <span className="h-[7px] w-[7px] rounded-full bg-amber/70 transition-transform duration-300 group-hover:scale-125" />
      )}
      <span className="whitespace-nowrap text-[13px] font-medium tracking-wide text-ink-2 transition-colors duration-300 group-hover:text-ink">
        {label}
      </span>
    </li>
  );
}

function Row({ items, reverse, duration }: { items: string[]; reverse?: boolean; duration: number }) {
  const doubled = [...items, ...items];
  return (
    <div className="flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
      <ul
        className={`flex w-max items-center gap-4 py-2 pr-4 ${
          reverse ? "animate-marquee-reverse" : "animate-marquee"
        }`}
        style={{ animationDuration: `${duration}s` }}
      >
        {doubled.map((label, i) => (
          <Chip key={`${label}-${i}`} label={label} />
        ))}
      </ul>
    </div>
  );
}

export function SkillMarquee() {
  const all = SKILLS.flatMap((g) => g.items);
  const third = Math.ceil(all.length / 3);
  const rows: [string[], string[], string[]] = [
    all.slice(0, third),
    all.slice(third, third * 2),
    all.slice(third * 2),
  ];

  return (
    <div className="mt-14" data-reveal>
      {/* Tilted stage gives the flowing rows a 3D, in-space feel */}
      <div className="[perspective:1200px]">
        <div className="-mx-5 space-y-4 [transform:rotateX(14deg)_rotateZ(-2deg)] sm:-mx-8">
          <Row items={rows[0]} duration={46} />
          <Row items={rows[1]} reverse duration={58} />
          <Row items={rows[2]} duration={52} />
        </div>
      </div>

      {/* Group legend */}
      <ul className="mt-12 flex flex-wrap gap-x-7 gap-y-2 border-t border-hairline pt-6">
        {SKILLS.map((g) => (
          <li key={g.group} className="label-xs text-ink-muted">
            <span className="text-amber">{String(g.items.length).padStart(2, "0")}</span>
            <span className="mx-2 text-hairline">·</span>
            {g.group}
          </li>
        ))}
      </ul>
    </div>
  );
}