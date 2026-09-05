import { Github, Linkedin, MessageCircle, Mouse } from "lucide-react";
import photo from "@/assets/tharun.png.asset.json";
import { GITHUB_URL, LINKEDIN_URL } from "@/data/portfolio";

const scrollTo = (id: string) =>
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });

const HeroBackdrop = () => (
  <div className="pointer-events-none absolute inset-0 overflow-hidden bg-background" aria-hidden="true">
    {/* very dark base */}
    <div className="absolute inset-0 bg-[#070710]" />
    {/* base radial glows */}
    <div className="absolute -right-24 -top-10 h-[42rem] w-[42rem] rounded-full bg-primary/15 blur-[130px]" />
    <div className="absolute right-[10%] top-1/2 h-[26rem] w-[26rem] -translate-y-1/2 rounded-full bg-cyanic/8 blur-[110px]" />
    <div
      className="absolute inset-0"
      style={{
        background:
          "radial-gradient(55% 60% at 72% 42%, color-mix(in oklab, var(--neon) 11%, transparent), transparent 70%), radial-gradient(40% 45% at 15% 85%, color-mix(in oklab, var(--cyanic) 6%, transparent), transparent 70%)",
      }}
    />

    {/* concentric neon rings around the photo (desktop/tablet) */}
    <div className="absolute right-0 top-1/2 hidden aspect-square w-[44rem] -translate-y-1/2 translate-x-[12%] sm:block lg:w-[50rem]">
      <div className="absolute inset-0 rounded-full border border-primary/20" />
      <div className="absolute inset-[7%] rounded-full border border-primary/30 shadow-[0_0_45px_-8px_color-mix(in_oklab,var(--neon)_45%,transparent)]" />
      <div className="absolute inset-[15%] rounded-full border border-cyanic/20" />
      <div className="absolute inset-[24%] rounded-full border border-primary/15" />
      {/* glowing arc accents */}
      <svg viewBox="0 0 100 100" className="absolute inset-[7%] h-[86%] w-[86%] animate-[spin_50s_linear_infinite]">
        <circle cx="50" cy="50" r="49" fill="none" stroke="var(--neon)" strokeWidth="0.5" strokeDasharray="20 287" strokeLinecap="round" opacity="0.9" />
      </svg>
      <svg viewBox="0 0 100 100" className="absolute inset-[15%] h-[70%] w-[70%] animate-[spin_70s_linear_infinite_reverse]">
        <circle cx="50" cy="50" r="49" fill="none" stroke="var(--cyanic)" strokeWidth="0.4" strokeDasharray="10 297" strokeLinecap="round" opacity="0.7" />
      </svg>
    </div>

    {/* dotted grids */}
    <div
      className="absolute left-4 top-24 hidden h-40 w-40 opacity-50 md:block"
      style={{
        backgroundImage: "radial-gradient(color-mix(in oklab, var(--neon) 70%, transparent) 1px, transparent 1.5px)",
        backgroundSize: "16px 16px",
      }}
    />
    <div
      className="absolute bottom-16 right-8 hidden h-44 w-44 opacity-40 md:block"
      style={{
        backgroundImage: "radial-gradient(color-mix(in oklab, var(--cyanic) 60%, transparent) 1px, transparent 1.5px)",
        backgroundSize: "18px 18px",
      }}
    />
    <div
      className="absolute left-[42%] top-16 hidden h-24 w-24 opacity-35 lg:block"
      style={{
        backgroundImage: "radial-gradient(color-mix(in oklab, var(--neon) 60%, transparent) 1px, transparent 1.5px)",
        backgroundSize: "14px 14px",
      }}
    />

    {/* glowing particles */}
    {[
      { l: "8%", t: "22%", s: 3, c: "var(--neon)", d: "0s" },
      { l: "18%", t: "70%", s: 2, c: "var(--cyanic)", d: "1s" },
      { l: "44%", t: "14%", s: 2, c: "var(--neon)", d: "2s" },
      { l: "55%", t: "80%", s: 3, c: "var(--neon)", d: "0.6s" },
      { l: "62%", t: "30%", s: 2, c: "var(--cyanic)", d: "1.6s" },
      { l: "88%", t: "18%", s: 3, c: "var(--neon)", d: "2.4s" },
      { l: "92%", t: "60%", s: 2, c: "var(--cyanic)", d: "0.3s" },
      { l: "30%", t: "45%", s: 2, c: "var(--neon)", d: "1.9s" },
      { l: "70%", t: "10%", s: 2, c: "var(--neon)", d: "1.2s" },
      { l: "12%", t: "88%", s: 2, c: "var(--cyanic)", d: "2.8s" },
    ].map((p, i) => (
      <span
        key={i}
        className="floaty absolute rounded-full"
        style={{
          left: p.l,
          top: p.t,
          width: p.s * 2,
          height: p.s * 2,
          background: p.c,
          boxShadow: `0 0 ${p.s * 6}px ${p.s}px color-mix(in oklab, ${p.c} 70%, transparent)`,
          animationDelay: p.d,
        }}
      />
    ))}

    {/* geometric line accents */}
    <div className="absolute left-1/2 top-10 hidden h-px w-56 -translate-x-1/2 bg-gradient-to-r from-transparent via-primary/50 to-transparent lg:block" />
    <div className="absolute bottom-10 left-1/3 hidden h-px w-64 bg-gradient-to-r from-transparent via-cyanic/40 to-transparent lg:block" />
    <div className="absolute right-[6%] top-[12%] hidden h-24 w-24 border-l border-t border-primary/25 lg:block" />
    <div className="absolute bottom-[14%] left-[4%] hidden h-20 w-20 border-b border-r border-cyanic/20 lg:block" />

    {/* keeps left side dark for text readability */}
    <div
      className="absolute inset-0"
      style={{
        background: "linear-gradient(90deg, #070710 0%, color-mix(in oklab, var(--background) 70%, transparent) 30%, transparent 55%)",
      }}
    />
    {/* darken bottom edge so the photo blends into the next section */}
    <div
      className="absolute inset-x-0 bottom-0 h-32"
      style={{ background: "linear-gradient(to bottom, transparent, #070710)" }}
    />
  </div>
);

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden grid-bg">
      <HeroBackdrop />
      <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:py-24">
        <div className="min-w-0">
          <p className="text-xs font-semibold tracking-[0.3em] text-primary">HELLO, I'M</p>
          <h1 className="mt-3 font-display text-5xl font-extrabold leading-[1.05] sm:text-6xl lg:text-7xl">
            THARUN <span className="text-primary">T.B</span>
          </h1>
          <p className="mt-4 font-display text-xl font-semibold sm:text-2xl">
            Aspiring Software Engineer
            <br />
            <span className="text-primary">&amp; Tech Enthusiast</span>
          </p>
          <p className="mt-5 max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-base">
            I build innovative and meaningful digital solutions, continuously learning new
            technologies and sharpening my engineering skills — from clean front-end interfaces to
            reliable back-end logic.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={GITHUB_URL}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-xl glass glow-hover px-5 py-3 text-sm font-medium"
            >
              <Github size={16} /> GitHub
            </a>
            <a
              href={LINKEDIN_URL}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-xl glass glow-hover px-5 py-3 text-sm font-medium"
            >
              <Linkedin size={16} className="text-cyanic" /> LinkedIn
            </a>
            <button
              onClick={() => scrollTo("contact")}
              className="inline-flex items-center gap-2 rounded-xl bg-primary px-5 py-3 text-sm font-medium text-primary-foreground shadow-glow transition-transform hover:-translate-y-0.5"
            >
              <MessageCircle size={16} /> Let's Talk
            </button>
          </div>

          <button
            onClick={() => scrollTo("education")}
            className="mt-10 flex flex-col items-center gap-1 text-[10px] tracking-[0.25em] text-primary"
          >
            <Mouse size={18} />
            SCROLL DOWN
            <span className="animate-bounce">↓</span>
          </button>
        </div>

        <div className="relative mx-auto w-full max-w-md">
          {/* neon ring directly behind the photo (all screens) */}
          <div className="pointer-events-none absolute left-1/2 top-1/2 aspect-square w-[120%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-primary/25" />
          <div className="pointer-events-none absolute left-1/2 top-1/2 aspect-square w-[104%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-primary/40 shadow-[0_0_60px_-10px_color-mix(in_oklab,var(--neon)_60%,transparent)]" />
          <div className="absolute inset-x-6 bottom-0 top-8 rounded-[3rem] bg-primary/35 blur-[90px]" />
          <div className="absolute left-0 top-10 hidden rounded-2xl glass floaty px-4 py-3 font-mono text-sm text-primary sm:block">
            &lt;/&gt;
          </div>
          <div
            className="absolute left-2 top-1/2 hidden rounded-2xl glass floaty px-4 py-3 font-mono text-sm text-cyanic sm:block"
            style={{ animationDelay: "1.2s" }}
          >
            {"{ }"}
          </div>
          <div
            className="absolute bottom-24 left-0 hidden rounded-2xl glass floaty px-4 py-3 sm:block"
            style={{ animationDelay: "2.1s" }}
          >
            <span className="font-mono text-sm font-bold text-cyanic">
              Py<span className="text-chart-4">.</span>
            </span>
          </div>
          <div
            className="absolute right-0 top-16 hidden w-40 rounded-2xl glass floaty p-3 lg:block"
            style={{ animationDelay: "0.6s" }}
          >
            <div className="flex gap-1">
              <span className="h-2 w-2 rounded-full bg-destructive/70" />
              <span className="h-2 w-2 rounded-full bg-chart-4/70" />
              <span className="h-2 w-2 rounded-full bg-chart-2/70" />
            </div>
            <div className="mt-3 space-y-1.5">
              <div className="h-1.5 w-3/4 rounded bg-primary/60" />
              <div className="h-1.5 w-1/2 rounded bg-primary/30" />
              <div className="h-1.5 w-2/3 rounded bg-cyanic/40" />
            </div>
          </div>
          <img
            src={photo.url}
            alt="Tharun T.B, aspiring software engineer"
            width={532}
            height={624}
            className="relative mx-auto -mb-16 w-full max-w-lg scale-110 object-contain object-bottom drop-shadow-[0_25px_60px_rgba(0,0,0,0.6)] lg:-mb-24 lg:scale-125"
          />
          {/* Software Developer label at the bottom of the hero image */}
          <div className="relative z-10 mx-auto mt-2 w-fit">
            <span className="glass glow-hover inline-flex items-center gap-2 rounded-full px-5 py-2 font-mono text-sm font-semibold tracking-wide text-primary">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-primary" />
              Software Developer
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
