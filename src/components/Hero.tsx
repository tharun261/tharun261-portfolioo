import { Github, Linkedin, MessageCircle, Mouse } from "lucide-react";
import photo from "@/assets/tharun.png.asset.json";
import { GITHUB_URL, LINKEDIN_URL } from "@/data/portfolio";

const scrollTo = (id: string) =>
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden grid-bg">
      <div className="pointer-events-none absolute -right-24 top-0 h-[36rem] w-[36rem] rounded-full bg-primary/25 blur-[120px]" />
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
          <div className="absolute inset-x-6 bottom-0 top-8 rounded-[3rem] bg-primary/30 blur-[90px]" />
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
            className="relative mx-auto w-full max-w-sm object-contain drop-shadow-[0_25px_60px_rgba(0,0,0,0.6)]"
          />
        </div>
      </div>
    </section>
  );
}
