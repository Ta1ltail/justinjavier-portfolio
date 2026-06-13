export interface Chapter {
  index: string;
  title: string;
  body: string;
}

export interface SkillCategory {
  index: string;
  label: string;
  skills: { name: string; note: string }[];
}

export interface ProjectLink {
  label: string;
  href: string;
}

export interface Project {
  slug: string;
  title: string;
  year: string;
  tagline: string;
  problem: string;
  solution: string;
  challenge: string;
  image?: string;
  images?: string[];
  tech: string[];
  metrics: { value: string; label: string }[];
  accent: "blue" | "indigo" | "violet";
  links?: ProjectLink[];
  restrictedNote?: string;
}

export type ModelKey = "kurbs" | "switch" | "basketball";

export interface ShowcaseModel {
  key: ModelKey;
  name: string;
  description: string;
  polyNote: string;
}

export type Game = {
  slug: string;
  title: string;
  engine: string;      
  status: string;       
  description: string;
  mechanics: string[];  
  systems: string[];    
  process: string[];    
  videoSrc?: string;   
};

export interface TimelineEntry {
  year: string;
  type: "Education" | "Freelance" | "Project" | "Achievement";
  title: string;
  body: string;
}

export interface Testimonial {
  quote: string;
  name: string;
  role: string;
}

export interface StackItem {
  name: string;
  detail: string;
  category: StackCategory;
}

export type StackCategory =
  | "Frontend"
  | "Backend"
  | "DevOps"
  | "Design"
  | "3D"
  | "Game Dev";

export const stackCategories: StackCategory[] = [
  "Frontend",
  "Backend",
  "DevOps",
  "Design",
  "3D",
  "Game Dev",
];

export const chapters: Chapter[] = [
  {
    index: "01",
    title: "Development",
    body: "My path into software began with a simple drive to understand how things work beneath the surface. That curiosity matured into a focused discipline for full-stack development. I care about the entire lifecycle of a product, how the interface, application logic, data layer, and deployment pipeline come together into a system that is reliable, maintainable, and genuinely pleasant to use.",
  },
  {
    index: "02",
    title: "Collaboration & Ownership",
    body: "Led the development of a real information system for an organization during my capstone shaped how I approach development as a team effort. Building software that people depend on taught me to communicate with clarity, navigate trade-offs collaboratively, and take full ownership of delivery, from first requirement to a stable, production-ready release.",
  },
  {
    index: "03",
    title: "Design & Craft",
    body: "Alongside development, I work extensively in 3D and interactive media. Tools like Blender sharpened my eye for composition, proportion, lighting, and detail, principles that carry directly into the interfaces I build. With technologies such as Three.js, I bridge design and engineering to create immersive, performant experiences that feel as considered as they are technical.",
  },
];


export const aboutStats = [
  { value: "10+", label: "Projects Built" },
  { value: "30+", label: "Technologies Used" },
  { value: "3+", label: "Years building" },
  { value: "1000+", label: "Hours Learning" },
] as const;

export const skillCategories: SkillCategory[] = [
  {
    index: "01",
    label: "Frontend",
    skills: [
      { name: "React", note: "Component architecture, hooks, suspense" },
      { name: "Next.js", note: "App Router, RSC, edge rendering" },
      { name: "TypeScript", note: "Strict mode, generics, type-safe APIs" },
      { name: "Tailwind CSS", note: "Design tokens, v4 theming" },
      { name: "JavaScript", note: "ES6+, DOM, async patterns" },
      { name: "Bootstrap", note: "Responsive grid, utility components" },
    ],
  },
  {
    index: "02",
    label: "Backend",
    skills: [
      { name: "Node.js", note: "REST APIs, services, tooling" },
      { name: "PHP", note: "Server-side rendering, CMS work" },
      { name: "MySQL", note: "Schema design, indexing" },
      { name: "PostgreSQL", note: "Relational modeling, queries" },
    ],
  },
  {
    index: "03",
    label: "Tools",
    skills: [
      { name: "Git", note: "Branching strategies, clean history" },
      { name: "Figma", note: "Interface design, prototyping" },
      { name: "Vercel", note: "Edge deployment, CI/CD" },
      { name: "npm", note: "Package management, scripting" },
      { name: "Postman", note: "API testing, request collections" },
    ],
  },
  {
    index: "04",
    label: "3D",
    skills: [
      { name: "Blender", note: "Modeling, topology, lighting, render" },
      { name: "ZBrush", note: "Sculpting, high-poly detailing" },
      { name: "Houdini", note: "Procedural modeling, VFX" },
      { name: "Three.js", note: "WebGL scenes, shaders, R3F" },
    ],
  },
  {
    index: "05",
    label: "Game Dev",
    skills: [
      { name: "Unity", note: "C#, gameplay systems, physics" },
      { name: "Godot", note: "GDScript, 2D/3D pipelines" },
      { name: "Unreal Engine", note: "Blueprints, level design" },
    ],
  },
];

export const projects: Project[] = [
  {
    slug: "movieapp",
    image: "/projects/movieapp-thumb.png",
    images: [
      "/projects/movieapp-thumb.png",
      "/projects/movieapp.png",
      "/projects/movieapp-2.png",
      "/projects/movieapp-3.png",
      "/projects/movieapp-4.png",
    ],
    title: "MovieApp",
    year: "2026",
    tagline: "Personal project · Live on Vercel",
    problem:
      "Most movie browsers are cluttered and slow I wanted a clean, fast experience with real data, advanced filtering, and multiple streaming sources in one place.",
    solution:
      "A React + TypeScript app powered by an embedded movie API with live search, genre and year filtering, ratings, and a modern dark UI deployed on Vercel.",
    challenge:
      "Managing multiple API sources with inconsistent data shapes solved with a unified normalization layer that maps every source to the same schema before rendering.",
    tech: ["React", "TypeScript", "Tailwind CSS", "Framer Motion", "Node.js", "Vercel"],
    metrics: [
      { value: "Live", label: "Deployed on Vercel" },
      { value: "Multi", label: "Server sources" },
      { value: "Advanced", label: "Filtering system" },
    ],
    accent: "blue",
    links: [
      { label: "Live site", href: "https://justinjavier-moviepage.vercel.app/" },
      { label: "Source code", href: "https://github.com/Ta1ltail/MovieApp-2026" },
    ],
  },
  {
    slug: "tradihomes",
    image: "/projects/tradihomes-thumb.png",
    images: [
      "/projects/tradihomes-thumb.png",
      "/projects/tradihomes.png",
      "/projects/tradihomes-2.png",
      "/projects/tradihomes-3.png",
      "/projects/tradihomes-4.png",
      "/projects/tradihomes-5.png",
    ],
    title: "TradiHomes HOIS",
    year: "2025",
    tagline: "Capstone project · Homeowners information system",
    problem:
      "A real homeowners association was managing residents, billing, violations, and requests through scattered manual processes with no central system.",
    solution:
      "A full information system built in Laravel with role-based access for admins and residents covering profiling, billing, transactions, requests, forms, and a live dashboard.",
    challenge:
      "Designing a system flexible enough for a real organization's workflows while keeping the UI approachable for non-technical staff solved through iterative feedback sessions with actual users.",
    tech: ["Laravel", "PHP", "MySQL", "Bootstrap", "Livewire", "AdminLTE","JavaScript"],
    metrics: [
      { value: "Multi", label: "Role-based access" },
      { value: "Full", label: "Billing & transactions" },
      { value: "Real", label: "Deployed for org use" },
    ],
    accent: "indigo",
    restrictedNote:
      "Restricted access — built for a private organization. All screenshots use prototype data only; no real resident or billing information is shown, and the live system and source code are not publicly available.",
  },
  {
    slug: "mangaxpress",
    image: "/projects/mangaxpress.png",
    images: [
      "/projects/mangaxpress.png",
      "/projects/mangaxpress-2.png",
      "/projects/mangaxpress-3.png",
      "/projects/mangaxpress-4.png",
    ],
    title: "MangaXpress",
    year: "2024",
    tagline: "E-commerce · Manga store",
    problem:
      "Manga fans had nowhere to browse, buy, and track their collection in one place existing stores were generic and not built around the culture.",
    solution:
      "A PHP-powered e-commerce platform with user and admin roles, a product dashboard, order management, and a design built specifically for manga readers.",
    challenge:
      "Building a full auth and role system from scratch in vanilla PHP without a framework every session, permission check, and cart state handled manually.",
    tech: ["PHP", "JavaScript", "Bootstrap", "MySQL"],
    metrics: [
      { value: "Live", label: "Hosted on InfinityFree" },
      { value: "2", label: "Role dashboards" },
      { value: "Full", label: "Cart & orders" },
    ],
    accent: "violet",
    links: [
      { label: "Live site", href: "https://mangaxpress.infinityfreeapp.com/" },
      { label: "Source code", href: "https://github.com/Ta1ltail/MangaXpress" },
    ],
  },
  {
    slug: "fingerprint-auth",
    image: "/projects/fingerprint-auth-system-2.png",
    images: [
      "/projects/fingerprint-auth-system.png",
      "/projects/fingerprint-auth-system-2.png",
      "/projects/fingerprint-auth-system-3.png",
    ],
    title: "Fingerprint Auth System",
    year: "2025",
    tagline: "Hardware + software · ESP32 security system",
    problem:
      "Most auth demos are software-only I wanted to build something that bridged real hardware with a live web interface for actual physical security.",
    solution:
      "An ESP32 + Arduino fingerprint sensor system with a live Next.js dashboard showing authentication logs, multiple user enrollment, and real-time status updates.",
    challenge:
      "Syncing hardware events to a web UI in real time solved by running a Node.js bridge that listens to serial output from the microcontroller and pushes updates via WebSocket.",
    tech: ["ESP32", "Arduino", "React", "Next.js", "TypeScript", "Tailwind CSS", "Node.js"],
    metrics: [
      { value: "Live", label: "Real-time web logs" },
      { value: "Multi", label: "User enrollment" },
      { value: "HW+SW", label: "Hardware & software" },
    ],
    accent: "blue",
    links: [
      { label: "Source code", href: "https://github.com/Ta1ltail/fingerprint-auth-system" },
    ],
  },
  {
    slug: "syntaxmasters",
    image: "/projects/syntaxmasters-2.png",
    images: [
      "/projects/syntaxmasters.png",
      "/projects/syntaxmasters-2.png",
      "/projects/syntaxmasters-3.png",
      "/projects/syntaxmasters-4.png",
    ],  
    title: "SyntaxMasters",
    year: "2023",
    tagline: "Java desktop game · NetBeans",
    problem:
      "I wanted to understand how desktop applications actually work under the hood GUI events, state management, and persistence without any framework to lean on.",
    solution:
      "A Java desktop game built with JFrame featuring a login system, in-game settings, and a persistent leaderboard all wired up manually through Swing event listeners.",
    challenge:
      "Managing game state and UI updates purely through Swing without modern reactive patterns taught me exactly why frameworks exist and how to work without them.",
    tech: ["Java", "JFrame", "Swing", "NetBeans"],
    metrics: [
      { value: "Pure", label: "Vanilla Java" },
      { value: "3", label: "Core systems" },
      { value: "Desktop", label: "Native app" },
    ],
    accent: "violet",
    links: [
      { label: "Source code", href: "https://github.com/Ta1ltail/SyntaxMasters" },
    ],
  },
];


export const showcaseModels: ShowcaseModel[] = [
  {
    key: "kurbs",
    name: "Kurbs",
    description: "3D character for built ani-film.",
    polyNote: "~16K tris · Rigged",
  },
  {
    key: "switch",
    name: "Switch",
    description: "Nintendo Switch replica created for a client's business advertisement.",
    polyNote: "~37 tris · Client Work",
  },
  {
    key: "basketball",
    name: "Basketball",
    description: "Spalding NBA basketball built for game cinematics.",
    polyNote: "~25K tris · Game Asset",
  },
];

export const games: Game[] = [
  {
    slug: "home-again",
    title: "Home Again",
    engine: "Unity · C#",
    status: "Playable Build",
    description:
      "A first-person adventure horror experience driven by atmosphere and narrative. Every system, from cinematic sequencing to combat, is designed in service of the story, prioritizing tension, pacing, and immersion over spectacle.",
    mechanics: [
      "First-person movement with a stamina-based pacing system",
      "Responsive melee combat with precise hit detection",
      "Scripted scare sequences synchronized to narrative beats",
      "Cinematic, fully directed cutscene sequences",
    ],
    systems: [
      "Custom first-person character controller",
      "Story progression and event-state system",
      "Universal Render Pipeline (URP) configuration",
      "Trigger-driven scripting framework",
    ],
    process: [
      "Structured the full narrative arc before authoring any level geometry",
      "Curated and optimized assets for consistent URP performance",
      "Refined scare timing through repeated, structured playtesting",
    ],
    videoSrc: "/games/home-again.mp4",
  },
  {
    slug: "unnamed-horror",
    title: "Untitled Horror Sim",
    engine: "Godot · Blender",
    status: "In Development",
    description:
      "A systems-driven first-person horror simulation where tension emerges from mechanics rather than scripting. Every item carried, room entered, and decision made feeds a world that feels governed by consistent rules, until those rules begin to break.",
    mechanics: [
      "Inventory system with contextual item interactions",
      "Explorable environment with discoverable zones",
      "Narrative progression woven into core gameplay",
      "Atmosphere-first pacing built on sustained tension",
    ],
    systems: [
      "Custom inventory and item-management framework",
      "Modular map and zone-streaming system",
      "Original 3D assets authored entirely in Blender",
      "State-machine architecture for branching events",
    ],
    process: [
      "Authoring all 3D assets from scratch in Blender for complete creative control",
      "Establishing core inventory and world systems before finalizing narrative",
      "Validating tension pacing early to avoid predictable, scripted scares",
    ],
    videoSrc: "/games/game-2.mp4",
  },
];


export const timeline: TimelineEntry[] = [
  {
    year: "2020",
    type: "Education",
    title: "First Steps into Programming",
    body: "Wrote my first lines of HTML, CSS, and JavaScript, building static pages and developing an early, practical understanding of how the web works beneath the surface.",
  },
  {
    year: "2021",
    type: "Project",
    title: "First Game Built from Scratch",
    body: "Developed a small game from the ground up, gaining hands-on experience with game loops, core mechanics, and the fundamentals of systems-level thinking.",
  },
  {
    year: "2023",
    type: "Education",
    title: "Began BSIT at Cavite State University",
    body: "Started my Bachelor of Science in Information Technology at Cavite State University while taking on freelance work as a 3D modeler, balancing formal study with applied creative practice.",
  },
  {
    year: "2024",
    type: "Project",
    title: "First Production Web Applications",
    body: "Built complete web applications and reinforced core engineering fundamentals through coursework, translating academic concepts directly into working, real-world projects.",
  },
  {
    year: "2025",
    type: "Achievement",
    title: "Modern Stack & Capstone Delivery",
    body: "Adopted a modern engineering stack centered on Next.js and TypeScript, took on increasingly complex builds, and led the delivery of a full-scale capstone information system.",
  },
  {
    year: "2026",
    type: "Education",
    title: "Continuous Growth",
    body: "Continually learning and building, deepening expertise across full-stack engineering, 3D, and game development while exploring new tools and techniques.",
  },
];


export const stackItems: StackItem[] = [
  { name: "React", detail: "UI architecture", category: "Frontend" },
  { name: "Next.js", detail: "Full stack framework", category: "Frontend" },
  { name: "TypeScript", detail: "Type safety everywhere", category: "Frontend" },
  { name: "Tailwind CSS", detail: "Design system engine", category: "Frontend" },
  { name: "JavaScript", detail: "Core language", category: "Frontend" },
  { name: "Bootstrap", detail: "Responsive components", category: "Frontend" },
  { name: "Framer Motion", detail: "Micro-interactions", category: "Frontend" },
  { name: "CSS", detail: "Styling fundamentals", category: "Frontend" },
  { name: "Node.js", detail: "Runtime & tooling", category: "Backend" },
  { name: "Express", detail: "API services", category: "Backend" },
  { name: "PHP", detail: "Server-side apps", category: "Backend" },
  { name: "MySQL", detail: "Relational data", category: "Backend" },
  { name: "PostgreSQL", detail: "Advanced queries", category: "Backend" },
  { name: "REST", detail: "API design", category: "Backend" },
  { name: "Redis", detail: "Caching & sessions", category: "Backend" },
  { name: "Git", detail: "Version control", category: "DevOps" },
  { name: "Docker", detail: "Containerization", category: "DevOps" },
  { name: "Vercel", detail: "Edge deployment", category: "DevOps" },
  { name: "Hostinger", detail: "Web hosting", category: "DevOps" },
  { name: "AWS", detail: "Cloud infrastructure", category: "DevOps" },
  { name: "Figma", detail: "Interface design", category: "Design" },
  { name: "Canva", detail: "Quick visual assets", category: "Design" },
  { name: "Design tokens", detail: "Systematic theming", category: "Design" },
  { name: "Adobe Photoshop", detail: "Image editing", category: "Design" },
  { name: "Blender", detail: "Modeling & rendering", category: "3D" },
  { name: "ZBrush", detail: "Digital sculpting", category: "3D" },
  { name: "Houdini", detail: "Procedural VFX", category: "3D" },
  { name: "Three.js", detail: "WebGL experiences", category: "3D" },
  { name: "React Three Fiber", detail: "Declarative 3D", category: "3D" },
  { name: "Unity", detail: "C# gameplay systems", category: "Game Dev" },
  { name: "Godot", detail: "GDScript pipelines", category: "Game Dev" },
  { name: "Unreal Engine", detail: "Blueprints & lighting", category: "Game Dev" },
];