export const site = {
  name: "Justin Javier", 
  initials: "JJ",
  role: "Full Stack Developer · 3D Artist · Game Developer",
  headline: "Building Digital Experiences Beyond Code",
  description:
    "Full stack developer, 3D modeler, and game developer crafting fast, detailed, handcrafted digital products.",
  url: "https://justinjavier-portfolio.vercel.app",
  email: "jjavier292002@gmail.com",
  links: {
    github: "https://github.com/Ta1ltail",
    linkedin: "https://www.linkedin.com/in/justin-javier292002/",
    instagram: "https://www.instagram.com/ta1ltail/",
  },
  nav: [
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#work" },
    { label: "Stack", href: "#stack" },
    { label: "3D", href: "#three-d" },
    { label: "Games", href: "#games" },
    { label: "Contact", href: "#contact" },
  ],
} as const;

export type Site = typeof site;