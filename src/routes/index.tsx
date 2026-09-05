import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import {
  About,
  Certifications,
  Contact,
  Education,
  Footer,
  Projects,
  Skills,
} from "@/components/Sections";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Tharun T.B — Aspiring Software Engineer Portfolio" },
      {
        name: "description",
        content:
          "Portfolio of Tharun T.B, B.Tech AI & Data Science student and aspiring software engineer building web and ML projects with Python, Streamlit and modern web tech.",
      },
      { property: "og:title", content: "Tharun T.B — Aspiring Software Engineer Portfolio" },
      {
        property: "og:description",
        content:
          "Projects, skills and certifications of Tharun T.B, an aspiring software engineer and AI & Data Science student.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
        <Hero />
        <Education />
        <About />
        <Skills />
        <Certifications />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
