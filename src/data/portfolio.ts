import breedImg from "@/assets/project-breed.jpg";
import factCheckImg from "@/assets/project-factcheck.jpg";

// Replace this with your real LinkedIn profile URL when ready.
export const LINKEDIN_URL = "https://www.linkedin.com/in/your-profile";
export const GITHUB_URL = "https://github.com/tharun261";
export const EMAIL = "tharunff283@gmail.com";
export const PHONE = "9087480890";

export const skills = [
  { name: "Python", description: "Programming Language", icon: "Code2" },
  { name: "HTML", description: "Markup Language", icon: "FileCode2" },
  { name: "CSS", description: "Styling Language", icon: "Palette" },
  {
    name: "Web Development",
    description: "Building Modern Web Applications",
    icon: "Globe",
  },
  {
    name: "GitHub",
    description: "Version Control & Collaboration",
    icon: "Github",
  },
  { name: "Streamlit", description: "Building ML Web Apps", icon: "LayoutDashboard" },
] as const;

export const certifications = [
  "MongoDB Basics for Students",
  "Vector Search Fundamentals",
  "AI Data Strategy with MongoDB",
  "Python Course for Beginners – Scaler Topics",
  "CSS with AI – Unstop",
  "Building AI Agents with MongoDB",
  "HTML with AI",
  "UI/UX Webinar",
];

export type Project = {
  name: string;
  description: string;
  image: string;
  technologies: string[];
  github: string;
};

export const projects: Project[] = [
  {
    name: "Animal Breed Classification System",
    description: "AI-powered breed classification app",
    image: breedImg,
    technologies: ["Python", "Streamlit", "Deep Learning"],
    github: "https://github.com/tharun261/automated_dog_breed_identifier",
  },
  {
    name: "Fact Check AI",
    description: "AI-powered news verification",
    image: factCheckImg,
    technologies: ["Python", "NLP", "Streamlit"],
    github: "https://github.com/tharun261/fact-check-ai",
  },
];
