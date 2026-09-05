import {
  Award,
  BadgeCheck,
  Briefcase,
  Calendar,
  Code2,
  FileCode2,
  Github,
  Globe,
  GraduationCap,
  LayoutDashboard,
  Linkedin,
  Mail,
  Palette,
  Phone,
  Send,
  ArrowUpRight,
  ArrowUp,
  User,
  University,
} from "lucide-react";
import { Reveal, SectionHeading } from "./Reveal";
import {
  certifications,
  EMAIL,
  GITHUB_URL,
  LINKEDIN_URL,
  PHONE,
  projects,
  skills,
} from "@/data/portfolio";

const iconMap = {
  Code2,
  FileCode2,
  Palette,
  Globe,
  Github,
  LayoutDashboard,
} as const;

const panel =
  "rounded-3xl glass p-6 sm:p-8";

export function Education() {
  return (
    <section id="education" className="mx-auto max-w-7xl px-4 py-10 sm:px-6">
      <Reveal>
        <div className={panel}>
          <SectionHeading
            icon={<GraduationCap size={20} />}
            title="EDUCATION"
            subtitle="ACADEMIC BACKGROUND"
          />
          <div className="mt-8 grid gap-6 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)]">
            <div className="border-l-2 border-primary/60 pl-5">
              <h3 className="text-lg font-semibold text-primary">
                B.Tech – Artificial Intelligence &amp; Data Science
              </h3>
              <p className="mt-3 flex items-center gap-2 text-sm text-muted-foreground">
                <University size={15} className="shrink-0" /> Arunachal Hitech Engineering College
              </p>
              <p className="mt-2 flex items-center gap-2 text-sm text-muted-foreground">
                <Calendar size={15} className="shrink-0" /> Class of 2028
              </p>
              <span className="mt-4 inline-block rounded-lg bg-primary/15 px-3 py-1 text-xs text-primary ring-1 ring-primary/30">
                Currently Pursuing
              </span>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                { label: "12th Percentage", value: "67%" },
                { label: "10th Percentage", value: "70%" },
              ].map((s) => (
                <div key={s.label} className="rounded-2xl glass glow-hover p-5 text-center">
                  <p className="text-xs text-muted-foreground">{s.label}</p>
                  <p className="mt-2 font-display text-4xl font-bold text-primary">{s.value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}

export function About() {
  return (
    <section id="about" className="mx-auto max-w-7xl px-4 py-10 sm:px-6">
      <Reveal>
        <div className={panel}>
          <SectionHeading icon={<User size={20} />} title="ABOUT ME" />
          <div className="mt-8 grid items-center gap-8 lg:grid-cols-2">
            <div className="rounded-2xl glass p-6">
              <div className="flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-destructive/70" />
                <span className="h-2.5 w-2.5 rounded-full bg-chart-4/70" />
                <span className="h-2.5 w-2.5 rounded-full bg-chart-2/70" />
              </div>
              <pre className="mt-4 overflow-x-auto font-mono text-xs leading-6 text-muted-foreground sm:text-sm">
                <code>{`const tharun = {
  role: "Aspiring Software Engineer",
  field: "AI & Data Science",
  focus: ["Web Dev", "Python", "ML Apps"],
  learning: true,
};`}</code>
              </pre>
            </div>
            <div className="space-y-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
              <p>
                Hello, I'm Tharun T.B, a B.Tech AI &amp; Data Science student passionate about
                software development, web technologies and practical problem solving.
              </p>
              <p>
                I enjoy building real-world projects and learning new technologies to grow as a
                better engineer every day.
              </p>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}

export function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-7xl px-4 py-10 sm:px-6">
      <Reveal>
        <div className={panel}>
          <SectionHeading icon={<Code2 size={20} />} title="SKILLS & TECHNOLOGIES" />
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {skills.map((skill, i) => {
              const Icon = iconMap[skill.icon];
              return (
                <Reveal key={skill.name} delay={i * 60}>
                  <div className="flex h-full items-center gap-4 rounded-2xl glass glow-hover p-5">
                    <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-primary/15 text-primary ring-1 ring-primary/30">
                      <Icon size={22} />
                    </span>
                    <div className="min-w-0">
                      <h3 className="truncate font-semibold">{skill.name}</h3>
                      <p className="text-xs text-muted-foreground">{skill.description}</p>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </Reveal>
    </section>
  );
}

export function Certifications() {
  return (
    <section id="certifications" className="mx-auto max-w-7xl px-4 py-10 sm:px-6">
      <Reveal>
        <div className={panel}>
          <SectionHeading icon={<Award size={20} />} title="CERTIFICATIONS" />
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {certifications.map((cert, i) => (
              <Reveal key={cert} delay={i * 50}>
                <div className="flex h-full items-center gap-3 rounded-2xl border border-primary/25 glass glow-hover p-5">
                  <BadgeCheck size={20} className="shrink-0 text-primary" />
                  <p className="text-sm">{cert}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
}

export function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-7xl px-4 py-10 sm:px-6">
      <Reveal>
        <div className={panel}>
          <SectionHeading icon={<Briefcase size={20} />} title="PROJECTS" />
          <div className="mt-8 grid gap-6 lg:grid-cols-2">
            {projects.map((project, i) => (
              <Reveal key={project.name} delay={i * 80}>
                <article className="flex h-full flex-col overflow-hidden rounded-2xl glass glow-hover">
                  <img
                    src={project.image}
                    alt={`${project.name} preview`}
                    loading="lazy"
                    width={1200}
                    height={750}
                    className="aspect-[16/10] w-full object-cover"
                  />
                  <div className="flex flex-1 flex-col items-center gap-3 p-6 text-center">
                    <h3 className="font-display text-lg font-bold uppercase text-primary">
                      {project.name}
                    </h3>
                    <p className="text-sm text-muted-foreground">{project.description}</p>
                    <div className="flex flex-wrap justify-center gap-2">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="rounded-lg bg-primary/10 px-2.5 py-1 text-[11px] text-primary ring-1 ring-primary/25"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-auto inline-flex items-center gap-2 rounded-xl glass px-4 py-2 text-sm transition-colors hover:bg-primary/20"
                    >
                      View Project <ArrowUpRight size={15} />
                    </a>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
}

export function Contact() {
  const cards = [
    { icon: Phone, label: "Phone", value: PHONE, href: `tel:${PHONE}` },
    { icon: Mail, label: "Email", value: EMAIL, href: `mailto:${EMAIL}` },
    { icon: Linkedin, label: "LinkedIn", value: "LinkedIn Profile", href: LINKEDIN_URL },
    { icon: Github, label: "GitHub", value: "GitHub Profile", href: GITHUB_URL },
  ];

  return (
    <section id="contact" className="mx-auto max-w-7xl px-4 py-10 sm:px-6">
      <Reveal>
        <div className={panel}>
          <SectionHeading icon={<Send size={20} />} title="LET'S TALK" />
          <div className="mt-8 grid gap-5 sm:grid-cols-2">
            {cards.map((card) => {
              const external = card.href.startsWith("http");
              return (
                <a
                  key={card.label}
                  href={card.href}
                  {...(external ? { target: "_blank", rel: "noreferrer" } : {})}
                  className="flex items-center gap-4 rounded-2xl glass glow-hover p-5"
                >
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-primary/15 text-primary ring-1 ring-primary/30">
                    <card.icon size={19} />
                  </span>
                  <span className="min-w-0">
                    <span className="block text-xs text-muted-foreground">{card.label}</span>
                    <span className="block truncate text-sm">{card.value}</span>
                  </span>
                </a>
              );
            })}
          </div>
          <div className="mt-8 flex justify-center">
            <button
              onClick={() =>
                document.getElementById("home")?.scrollIntoView({ behavior: "smooth" })
              }
              className="inline-flex items-center gap-2 rounded-xl bg-primary px-5 py-3 text-sm font-medium text-primary-foreground shadow-glow transition-transform hover:-translate-y-0.5"
            >
              <ArrowUp size={16} /> BACK TO HOME
            </button>
          </div>
        </div>
      </Reveal>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="mt-6 border-t border-border/60 py-8">
      <div className="mx-auto grid max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-4 sm:px-6">
        <p className="truncate text-sm text-muted-foreground">
          © 2026 <span className="font-semibold text-primary">THARUN T.B</span>
        </p>
        <div className="flex shrink-0 gap-3">
          <a
            href={GITHUB_URL}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="grid h-10 w-10 place-items-center rounded-xl glass glow-hover"
          >
            <Github size={17} />
          </a>
          <a
            href={LINKEDIN_URL}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="grid h-10 w-10 place-items-center rounded-xl glass glow-hover"
          >
            <Linkedin size={17} />
          </a>
        </div>
      </div>
    </footer>
  );
}
