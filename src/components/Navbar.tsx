import { useEffect, useState } from "react";
import { Code2, Menu, X } from "lucide-react";

const links = [
  { id: "home", label: "HOME" },
  { id: "education", label: "EDUCATION" },
  { id: "about", label: "ABOUT" },
  { id: "skills", label: "SKILLS" },
  { id: "certifications", label: "CERTIFICATIONS" },
  { id: "projects", label: "PROJECTS" },
  { id: "contact", label: "CONTACT" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const sections = links
      .map((l) => document.getElementById(l.id))
      .filter((el): el is HTMLElement => Boolean(el));

    const onScroll = () => {
      const y = window.scrollY + 120;
      let current = "home";
      for (const section of sections) {
        if (section.offsetTop <= y) current = section.id;
      }
      setActive(current);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const go = (id: string) => {
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/70 backdrop-blur-xl">
      <nav className="mx-auto grid max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-4 py-3 sm:px-6 lg:py-4">
        <button onClick={() => go("home")} className="flex min-w-0 items-center gap-3 text-left">
          <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-primary/15 text-primary ring-1 ring-primary/40">
            <Code2 size={18} />
          </span>
          <span className="min-w-0">
            <span className="block truncate font-display text-base font-bold tracking-wide">
              THARUN T.B
            </span>
            <span className="block truncate text-[10px] tracking-[0.2em] text-muted-foreground">
              ASPIRING SOFTWARE ENGINEER
            </span>
          </span>
        </button>

        <ul className="hidden items-center gap-6 lg:flex">
          {links.map((l) => (
            <li key={l.id}>
              <button
                onClick={() => go(l.id)}
                className={`relative py-2 text-xs font-medium tracking-[0.12em] transition-colors ${
                  active === l.id ? "text-foreground" : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {l.label}
                <span
                  className={`absolute inset-x-0 -bottom-0.5 h-0.5 rounded-full bg-primary transition-transform duration-300 ${
                    active === l.id ? "scale-x-100" : "scale-x-0"
                  }`}
                />
              </button>
            </li>
          ))}
        </ul>

        <button
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
          className="grid h-10 w-10 shrink-0 place-items-center rounded-xl glass lg:hidden"
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </nav>

      {open ? (
        <ul className="border-t border-border/60 bg-background/95 px-4 pb-4 lg:hidden">
          {links.map((l) => (
            <li key={l.id}>
              <button
                onClick={() => go(l.id)}
                className={`w-full border-b border-border/40 py-3 text-left text-sm tracking-[0.12em] ${
                  active === l.id ? "text-primary" : "text-muted-foreground"
                }`}
              >
                {l.label}
              </button>
            </li>
          ))}
        </ul>
      ) : null}
    </header>
  );
}
