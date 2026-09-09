import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, X } from "lucide-react";

import certDukeJava from "@/assets/certs/duke-java-programming.jpg";
import certGfg from "@/assets/certs/gfg-160.jpg";
import certIsroRs from "@/assets/certs/isro-remote-sensing-digital-image-analysis.jpg";
import certIbmPython from "@/assets/certs/ibm-python-data-science.jpg";
import certHrPython from "@/assets/certs/hackerrank-python-basic.jpg";
import certHrSql from "@/assets/certs/hackerrank-sql-advanced.jpg";
import certHrReact from "@/assets/certs/hackerrank-frontend-react.jpg";
import certOracle from "@/assets/certs/oracle-foundations-associate.jpg";
import certIsroGis from "@/assets/certs/isro-remote-sensing-gis-gnss.jpg";
import certAzureAi from "@/assets/certs/azure-ai-fundamentals-challenge.jpg";
import certCareerDev from "@/assets/certs/Successful Career Development.jpeg";
import certGenAiPrompt from "@/assets/certs/Generative AI Prompt Engineering Basics.jpeg";
import certSoftwareEngineer from "@/assets/certs/software-engineer-certificate.jpg";

type Cert = {
  title: string;
  issuer: string;
  date: string;
  image: string;
  verify?: string;
};

const CERTS: Cert[] = [
  {
    title: "Software Engineer",
    issuer: "HackerRank",
    date: "2026",
    image: certSoftwareEngineer,
    verify: "https://www.hackerrank.com/certificates/2a9373cf5b8e",
  },
  {
    title: "SQL (Advanced)",
    issuer: "HackerRank",
    date: "Aug 2026",
    image: certHrSql,
    verify: "https://www.hackerrank.com/certificates/iframe/05907507632d",
  },
  {
    title: "OCI 2025 Certified Foundations Associate",
    issuer: "Oracle University",
    date: "Jun 2026",
    image: certOracle,
  },
  {
    title: "Frontend Developer (React)",
    issuer: "HackerRank",
    date: "Jun 2026",
    image: certHrReact,
    verify: "https://www.hackerrank.com/certificates/b44b84f3169d",
  },
  {
    title: "GfG 160 — 160 Days of Problem Solving",
    issuer: "GeeksforGeeks",
    date: "2025",
    image: certGfg,
  },
  {
    title: "Remote Sensing & Digital Image Analysis",
    issuer: "ISRO · IIRS Dehradun",
    date: "Sep 2024",
    image: certIsroRs,
  },
  {
    title: "Python (Basic)",
    issuer: "HackerRank",
    date: "Dec 2023",
    image: certHrPython,
    verify: "https://www.hackerrank.com/certificates/dd5391acd1a4",
  },
  {
    title: "Java Programming: Solving Problems with Software — Honors",
    issuer: "Duke University · Coursera",
    date: "Mar 2023",
    image: certDukeJava,
    verify:
      "https://coursera.org/share/08c571ab9de3a1eb86a2be522f1bab1a",
  },
  {
    title: "Basics of Remote Sensing, GIS & GNSS",
    issuer: "ISRO · IIRS Dehradun",
    date: "Nov 2024",
    image: certIsroGis,
  },
  {
    title: "Azure AI Fundamentals Challenge",
    issuer: "Microsoft Learn Student Ambassadors",
    date: "2024",
    image: certAzureAi,
  },
  {
    title: "Python for Data Science",
    issuer: "IBM · Cognitive Class",
    date: "Dec 2023",
    image: certIbmPython,
    verify: "https://www.credly.com/go/Stz6ZK7u",
  },
  {
    title: "Successful Career Development",
    issuer: "Kennesaw State University · Coursera",
    date: "Jan 2023",
    image: certCareerDev,
    verify:
      "https://www.coursera.com/account/accomplishments/verify/KUVC3WFFS36H",
  },
  {
    title: "Generative AI: Prompt Engineering Basics",
    issuer: "IBM · Coursera",
    date: "2023",
    image: certGenAiPrompt,
    verify:
      "https://coursera.org/share/0a48447eae14e9626019e73280770e8d",
  },
];

export function Certifications() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  const [maxShift, setMaxShift] = useState(0);
  const [progress, setProgress] = useState(0);

  // Selected certificate for popup
  const [selectedCert, setSelectedCert] = useState<Cert | null>(null);

  useEffect(() => {
    const track = trackRef.current;

    if (!track) return;

    const measure = () => {
      const viewport =
        track.parentElement?.clientWidth ?? window.innerWidth;

      setMaxShift(Math.max(0, track.scrollWidth - viewport));
    };

    measure();

    const images = Array.from(track.querySelectorAll("img"));
    const pending = images.filter((img) => !img.complete);

    pending.forEach((img) => {
      img.addEventListener("load", measure);
    });

    window.addEventListener("resize", measure);

    return () => {
      pending.forEach((img) => {
        img.removeEventListener("load", measure);
      });

      window.removeEventListener("resize", measure);
    };
  }, []);

  // Horizontal scroll tracking
  useEffect(() => {
    let raf = 0;

    const onScroll = () => {
      cancelAnimationFrame(raf);

      raf = requestAnimationFrame(() => {
        const el = sectionRef.current;

        if (!el) return;

        const total = el.offsetHeight - window.innerHeight;

        if (total <= 0) return;

        const p = Math.min(
          1,
          Math.max(
            0,
            -el.getBoundingClientRect().top / total
          )
        );

        setProgress(p);
      });
    };

    onScroll();

    window.addEventListener("scroll", onScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(raf);
    };
  }, [maxShift]);

  // Close popup with Escape key + lock background scroll
  useEffect(() => {
    if (!selectedCert) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setSelectedCert(null);
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = originalOverflow;
    };
  }, [selectedCert]);

  const activeIndex = Math.min(
    CERTS.length - 1,
    Math.round(progress * (CERTS.length - 1))
  );

  return (
    <>
      <div
        ref={sectionRef}
        className="relative"
        style={{
          height:
            maxShift > 0
              ? `calc(100vh + ${maxShift}px)`
              : "250vh",
        }}
      >
        <div className="sticky top-0 flex h-screen flex-col justify-center overflow-hidden">
          {/* Header */}
          <div className="mb-8 flex items-center justify-between gap-4 px-0">
            <p className="label-xs text-ink-muted">
              {CERTS.length} certifications — keep scrolling to browse
            </p>

            <p className="label-xs text-amber">
              {String(activeIndex + 1).padStart(2, "0")} /{" "}
              {String(CERTS.length).padStart(2, "0")}
            </p>
          </div>

          {/* Certification Track */}
          <div
            ref={trackRef}
            className="flex w-max gap-5 will-change-transform"
            style={{
              transform: `translate3d(${-progress * maxShift}px, 0, 0)`,
            }}
          >
            {CERTS.map((cert, i) => (
              <article
                key={cert.title}
                className="group w-[82vw] max-w-[380px] shrink-0 overflow-hidden rounded-xl border border-hairline bg-ground-2 transition-colors duration-500 hover:border-amber/40 sm:w-[340px]"
              >
                {/* Certificate Image */}
                <div
                  className="relative aspect-[4/3] cursor-zoom-in overflow-hidden bg-ground"
                  onClick={() => setSelectedCert(cert)}
                  role="button"
                  tabIndex={0}
                  aria-label={`View ${cert.title} certificate`}
                  onKeyDown={(event) => {
                    if (event.key === "Enter" || event.key === " ") {
                      event.preventDefault();
                      setSelectedCert(cert);
                    }
                  }}
                >
                  <img
                    src={cert.image}
                    alt={`${cert.title} — ${cert.issuer} certificate`}
                    loading={i < 3 ? "eager" : "lazy"}
                    className="h-full w-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-ground/70 via-transparent to-transparent opacity-60 transition-opacity duration-500 group-hover:opacity-0" />

                  <span className="label-xs absolute left-3 top-3 rounded-full bg-ground/70 px-3 py-1 text-ink backdrop-blur-sm">
                    {String(i + 1).padStart(2, "0")}
                  </span>

                  {/* Click to view indicator */}
                  <div className="pointer-events-none absolute bottom-3 right-3 rounded-full bg-ground/70 px-3 py-1.5 text-xs text-ink opacity-0 backdrop-blur-sm transition-opacity duration-300 group-hover:opacity-100">
                    Click to view
                  </div>
                </div>

                {/* Certificate Information */}
                <div className="flex flex-col gap-2 p-5">
                  <div className="flex items-center gap-2">
                    <span className="label-xs text-amber">
                      {cert.issuer}
                    </span>

                    <span className="h-px w-5 bg-ink/30" />

                    <span className="label-xs text-ink-muted">
                      {cert.date}
                    </span>
                  </div>

                  <h3 className="display text-[17px] leading-snug">
                    {cert.title}
                  </h3>

                  {/* Verification Link */}
                  {cert.verify ? (
                    <a
                      href={cert.verify}
                      target="_blank"
                      rel="noreferrer"
                      onClick={(event) => event.stopPropagation()}
                      className="label-xs mt-1 inline-flex w-fit items-center gap-1.5 rounded-full border border-hairline px-3.5 py-1.5 text-ink-2 transition-colors hover:border-amber hover:text-amber"
                    >
                      Verify
                      <ArrowUpRight className="h-3 w-3" />
                    </a>
                  ) : null}
                </div>
              </article>
            ))}
          </div>

          {/* Scroll Progress */}
          <div className="mt-8 h-px w-full bg-hairline">
            <div
              className="h-px bg-amber transition-[width] duration-150 ease-out"
              style={{
                width: `${Math.max(4, progress * 100)}%`,
              }}
            />
          </div>
        </div>
      </div>

      {/* Certificate Popup / Lightbox */}
      {selectedCert && (
        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/85 p-4 backdrop-blur-md sm:p-8"
          onClick={() => setSelectedCert(null)}
          role="dialog"
          aria-modal="true"
          aria-label={`${selectedCert.title} certificate`}
        >
          {/* Close Button */}
          <button
            type="button"
            onClick={() => setSelectedCert(null)}
            className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-black/50 text-white transition-all duration-300 hover:border-amber hover:bg-black/80 hover:text-amber sm:right-6 sm:top-6"
            aria-label="Close certificate preview"
          >
            <X className="h-5 w-5" />
          </button>

          {/* Popup Content */}
          <div
            className="relative flex max-h-[92vh] max-w-[95vw] items-center justify-center sm:max-h-[90vh] sm:max-w-[90vw]"
            onClick={(event) => event.stopPropagation()}
          >
            <img
              src={selectedCert.image}
              alt={`${selectedCert.title} — ${selectedCert.issuer} certificate`}
              className="max-h-[88vh] max-w-full rounded-lg object-contain shadow-2xl"
            />

            {/* Certificate Info */}
            <div className="absolute bottom-3 left-3 right-3 rounded-lg bg-black/70 px-4 py-3 text-white backdrop-blur-md sm:bottom-4 sm:left-4 sm:right-4">
              <p className="text-sm font-medium">
                {selectedCert.title}
              </p>
              <p className="mt-1 text-xs text-white/60">
                {selectedCert.issuer} · {selectedCert.date}
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}