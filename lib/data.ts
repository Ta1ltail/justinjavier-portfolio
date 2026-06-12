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

export type ModelKey = "knot" | "gem" | "column";

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
    title: "Code",
    body: "I started learning programming by building things and figuring out how they worked behind the scenes. What began as curiosity eventually turned into a passion for full-stack development. I enjoy understanding how every part of a system connects from the user interface to the backend, database, and deployment infrastructure.",
  },
  {
    index: "02",
    title: "Leadership & Projects",
    body: "One of the most valuable experiences in my journey was leading a team during our capstone project, where we developed a real information system for an actual organization. Working on a project that people genuinely relied on taught me how to communicate effectively, solve problems collaboratively, and take responsibility for delivering a reliable product.",
  },
  {
    index: "03",
    title: "Design & Creativity",
    body: "Beyond software development, I enjoy working with 3D design and interactive experiences. Using Blender introduced me to concepts like composition, proportion, lighting, and attention to detail. These skills influence how I approach user interfaces and web experiences, while technologies like Three.js allow me to combine creativity and development into immersive digital products.",
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
    image: "/projects/movieapp.png",
    images: [
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
    image: "/projects/tradihomes.png",
    images: [
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
    tech: ["Laravel", "PHP", "MySQL", "Bootstrap", "Livewire", "JavaScript"],
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
    image: "/projects/fingerprint-auth-system.png",
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
    image: "/projects/syntaxmasters.png",
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
    key: "knot",
    name: "Knot Study",
    description: "Topology exercise in continuous curvature and clean edge flow.",
    polyNote: "Procedural · 4.6k tris",
  },
  {
    key: "gem",
    name: "Gem Study",
    description: "Faceted form exploring how flat shading reads under hard light.",
    polyNote: "Procedural · 320 tris",
  },
  {
    key: "column",
    name: "Column Study",
    description: "Capsule primitive pushed toward architectural proportion.",
    polyNote: "Procedural · 2.1k tris",
  },
];

export const games: Game[] = [
  {
    slug: "home-again",
    title: "Home Again",
    engine: "Unity · C#",
    status: "Playable build",
    description:
      "A 3D first-person adventure horror game built around atmosphere and storytelling. Every system from the cinematic sequences to the combat serves the narrative first.",
    mechanics: [
      "First-person movement with stamina system",
      "Melee combat with hit detection",
      "Scripted jumpscares tied to story beats",
      "Cinematic cutscene sequences",
    ],
    systems: [
      "FPS character controller",
      "Story progression system",
      "Universal Render Pipeline setup",
      "Trigger-based event system",
    ],
    process: [
      "Laid out the story beats before building any level geometry",
      "Sourced and integrated free assets, optimized for URP",
      "Iterated on scare timing through repeated playtests",
    ],
    videoSrc: "/games/home-again.mp4",  
  },
  {
    slug: "unnamed-horror",
    title: "Untitled Horror Sim",
    engine: "Godot · Blender",
    status: "In progress",
    description:
      "A first-person simulation horror game with a focus on tension through systems every item you carry, every room you enter, and every decision you make feeds into a world that feels like it has rules, until it doesn't.",
    mechanics: [
      "Inventory system with item interactions",
      "Explorable map with discoverable zones",
      "Narrative-driven progression",
      "Atmosphere-first horror pacing",
    ],
    systems: [
      "Custom inventory and item framework",
      "Map and zone management system",
      "Original 3D assets modeled in Blender",
      "Story state machine for branching events",
    ],
    process: [
      "Designing all 3D assets from scratch in Blender for full creative control",
      "Building the inventory and map systems before locking the story",
      "Playtesting tension pacing early to avoid scripted-feeling scares",
    ],
    videoSrc: "/games/game-2.mp4",
  },
];

export const timeline: TimelineEntry[] = [
  {
    year: "2020",
    type: "Education",
    title: "Started programming",
    body: "Wrote my first lines of HTML, CSS, and JavaScript, building simple static pages and slowly learning how the web actually works under the hood.",
  },
  {
    year: "2021",
    type: "Project",
    title: "First game from scratch",
    body: "Started building a small game from the ground up, getting hands-on with game loops, basic mechanics, and the early steps of systems thinking.",
  },
  {
    year: "2023",
    type: "Education",
    title: "Started BSIT at Cavite State University",
    body: "Began my freshman year as a BSIT student at Cavite State University, while also taking on freelance work as a 3D modeler.",
  },
  {
    year: "2024",
    type: "Project",
    title: "Built first web applications",
    body: "Developed web applications and strengthened the fundamentals through coursework, applying what I learned in school directly to real projects.",
  },
  {
    year: "2025",
    type: "Achievement",
    title: "Modern stack and capstone project",
    body: "Adopted modern frameworks like Next.js and TypeScript, taking on more complex builds and shipping a full-scale capstone project.",
  },
  {
    year: "2026",
    type: "Education",
    title: "Continuous growth",
    body: "Still learning, still building — exploring new tools and deepening skills across full stack development, 3D, and game development.",
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