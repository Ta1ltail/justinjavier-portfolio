export const site = {
  name: "Justin Javier", // ← swap [MY NAME] here
  initials: "JJ",
  role: "Full Stack Developer · 3D Artist · Game Developer",
  headline: "Building Digital Experiences Beyond Code",
  description:
    "Full stack developer, 3D modeler, and game developer crafting fast, detailed, handcrafted digital products.",
  url: "https://yourdomain.com",
  email: "you@example.com",
  links: {
    github: "https://github.com/yourhandle",
    linkedin: "https://linkedin.com/in/yourhandle",
    discord: "yourhandle",
  },
  nav: [
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#work" },
    { label: "3D", href: "#three-d" },
    { label: "Games", href: "#games" },
    { label: "Contact", href: "#contact" },
  ],
} as const;

export type Site = typeof site;
