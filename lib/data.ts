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

export interface Project {
  slug: string;
  title: string;
  year: string;
  tagline: string;
  problem: string;
  solution: string;
  challenge: string;
  tech: string[];
  metrics: { value: string; label: string }[];
  accent: "blue" | "indigo" | "violet";
}

export type ModelKey = "knot" | "gem" | "column";

export interface ShowcaseModel {
  key: ModelKey;
  name: string;
  description: string;
  polyNote: string;
}

export interface Game {
  slug: string;
  title: string;
  engine: string;
  status: string;
  description: string;
  mechanics: string[];
  systems: string[];
  process: string[];
  videoSrc?: string;
}

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
    body: "I started by breaking websites apart to see how they worked, then rebuilding them better. That curiosity became a full stack practice: typed front-ends in React and Next.js, APIs in Node and PHP, data in MySQL and PostgreSQL. I care about the last 5% — the empty states, the loading choreography, the error nobody planned for.",
  },
  {
    index: "02",
    title: "Worlds",
    body: "Game development taught me systems thinking. In Unity and Unreal I've built gameplay loops, input systems, and mechanics that have to feel right at 16ms per frame. Nothing teaches performance discipline like a frame budget.",
  },
  {
    index: "03",
    title: "Form",
    body: "Blender pulled me into 3D — topology, lighting, materials. Modeling trained my eye for proportion and detail, and Three.js lets me bring that craft back to the web, where geometry and code meet in the browser.",
  },
];

export const aboutStats = [
  { value: "3+", label: "Years building" },
  { value: "20+", label: "Projects shipped" },
  { value: "3", label: "Disciplines" },
  { value: "∞", label: "Curiosity" },
] as const;

export const skillCategories: SkillCategory[] = [
  {
    index: "01",
    label: "Frontend",
    skills: [
      { name: "React", note: "Component architecture, hooks, suspense" },
      { name: "Next.js", note: "App Router, RSC, edge rendering" },
      { name: "TypeScript", note: "Strict mode, generics, type-safe APIs" },
      { name: "Tailwind", note: "Design tokens, v4 theming" },
    ],
  },
  {
    index: "02",
    label: "Backend",
    skills: [
      { name: "Node.js", note: "REST APIs, services, tooling" },
      { name: "Express", note: "Middleware, auth, routing" },
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
      { name: "Docker", note: "Containerized dev environments" },
      { name: "Linux", note: "Daily driver, shell scripting" },
    ],
  },
  {
    index: "04",
    label: "3D",
    skills: [
      { name: "Blender", note: "Modeling, topology, lighting, render" },
      { name: "Three.js", note: "WebGL scenes, shaders, R3F" },
    ],
  },
  {
    index: "05",
    label: "Game Dev",
    skills: [
      { name: "Unity", note: "C#, gameplay systems, physics" },
      { name: "Unreal Engine", note: "Blueprints, level design" },
    ],
  },
];

export const projects: Project[] = [
  {
    slug: "aurora-dashboard",
    title: "Aurora Dashboard",
    year: "2025",
    tagline: "Real-time analytics platform",
    problem:
      "Teams were drowning in raw event data with no way to see trends in real time — existing tools were slow, cluttered, and expensive.",
    solution:
      "A streaming analytics dashboard with live WebSocket updates, virtualized tables for 100k+ rows, and a query builder anyone can use.",
    challenge:
      "Keeping 60fps chart updates while ingesting thousands of events per second — solved with batched rendering and a worker-thread aggregation layer.",
    tech: ["Next.js", "TypeScript", "PostgreSQL", "WebSockets", "Docker"],
    metrics: [
      { value: "120ms", label: "P95 query time" },
      { value: "100k+", label: "Rows virtualized" },
      { value: "99.9%", label: "Uptime" },
    ],
    accent: "blue",
  },
  {
    slug: "voidrunner",
    title: "Voidrunner",
    year: "2024",
    tagline: "3D arcade game built in Unity",
    problem:
      "Most indie runners feel identical — I wanted movement that felt weighty, readable, and skill-expressive on both keyboard and gamepad.",
    solution:
      "A custom character controller with coyote time, input buffering, and momentum-based dashes, wrapped in a procedurally generated track system.",
    challenge:
      "Procedural generation that stays fair — solved with a difficulty curve validator that simulates runs before a chunk is allowed to spawn.",
    tech: ["Unity", "C#", "Blender", "Shader Graph"],
    metrics: [
      { value: "60fps", label: "On mid-range GPUs" },
      { value: "12", label: "Procedural biomes" },
      { value: "<2s", label: "Level load time" },
    ],
    accent: "violet",
  },
  {
    slug: "atelier-commerce",
    title: "Atelier Commerce",
    year: "2024",
    tagline: "Headless e-commerce storefront",
    problem:
      "A boutique client's legacy store took 6+ seconds to load and converted poorly on mobile, where 70% of their traffic lived.",
    solution:
      "A headless storefront with edge-cached product pages, optimistic cart updates, and a checkout flow rebuilt around mobile-first interaction.",
    challenge:
      "Cache invalidation across 2,000 SKUs with live inventory — solved with tag-based revalidation triggered by warehouse webhooks.",
    tech: ["Next.js", "Node.js", "MySQL", "Stripe API", "Tailwind"],
    metrics: [
      { value: "0.9s", label: "LCP on mobile" },
      { value: "+38%", label: "Conversion lift" },
      { value: "100", label: "Lighthouse perf" },
    ],
    accent: "indigo",
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
    slug: "voidrunner",
    title: "Voidrunner",
    engine: "Unity · C#",
    status: "Playable build",
    description:
      "A 3D arcade runner built around movement that feels weighty and skill-expressive. Every system — from the camera to the spawn logic — serves game feel first.",
    mechanics: [
      "Momentum-based dash with cancel windows",
      "Coyote time + 120ms input buffering",
      "Procedural track chunks with fairness validation",
      "Dynamic camera FOV tied to velocity",
    ],
    systems: [
      "Custom character controller",
      "Object pooling for zero-GC spawning",
      "Save system with binary serialization",
      "Adaptive difficulty curve",
    ],
    process: [
      "Greybox prototype to lock game feel before any art",
      "Blender-to-Unity pipeline for modular track assets",
      "Profiler-driven optimization passes to hold 60fps",
    ],
  },
  {
    slug: "emberfall",
    title: "Emberfall",
    engine: "Unreal Engine · Blueprints",
    status: "Prototype",
    description:
      "A first-person exploration prototype focused on atmosphere — dynamic lighting, environmental storytelling, and an interaction system built entirely in Blueprints.",
    mechanics: [
      "Physics-based object interaction",
      "Light-as-resource exploration loop",
      "Diegetic UI with zero HUD elements",
    ],
    systems: [
      "Blueprint interaction framework",
      "Level streaming for seamless zones",
      "Lumen-lit environments tuned for mid-range GPUs",
    ],
    process: [
      "Mood boards and lighting studies before blockout",
      "Iterative playtests focused on wayfinding without markers",
    ],
  },
];

export const timeline: TimelineEntry[] = [
  {
    year: "2022",
    type: "Education",
    title: "Started programming",
    body: "First lines of HTML, CSS, and JavaScript. Built and rebuilt the same site five times, learning more each pass.",
  },
  {
    year: "2023",
    type: "Project",
    title: "First full stack application",
    body: "Shipped a complete app with PHP and MySQL — authentication, CRUD, deployment. Learned what 'production' really means.",
  },
  {
    year: "2023",
    type: "Education",
    title: "Entered 3D and game development",
    body: "Picked up Blender for modeling and Unity for gameplay. The frame budget became my strictest teacher.",
  },
  {
    year: "2024",
    type: "Freelance",
    title: "First client work",
    body: "Delivered a headless e-commerce storefront for a boutique client — 0.9s LCP and a 38% conversion lift.",
  },
  {
    year: "2024",
    type: "Project",
    title: "Voidrunner playable build",
    body: "Took a game from greybox to playable: custom controller, procedural levels, and a Blender asset pipeline.",
  },
  {
    year: "2025",
    type: "Achievement",
    title: "Modern stack mastery",
    body: "Adopted Next.js App Router, React Server Components, and TypeScript strict mode as my daily foundation.",
  },
];

export const stackItems: StackItem[] = [
  { name: "React", detail: "UI architecture", category: "Frontend" },
  { name: "Next.js", detail: "Full stack framework", category: "Frontend" },
  { name: "TypeScript", detail: "Type safety everywhere", category: "Frontend" },
  { name: "Tailwind CSS", detail: "Design system engine", category: "Frontend" },
  { name: "Framer Motion", detail: "Micro-interactions", category: "Frontend" },
  { name: "Node.js", detail: "Runtime & tooling", category: "Backend" },
  { name: "Express", detail: "API services", category: "Backend" },
  { name: "PHP", detail: "Server-side apps", category: "Backend" },
  { name: "MySQL", detail: "Relational data", category: "Backend" },
  { name: "PostgreSQL", detail: "Advanced queries", category: "Backend" },
  { name: "Git", detail: "Version control", category: "DevOps" },
  { name: "Docker", detail: "Containerization", category: "DevOps" },
  { name: "Linux", detail: "Daily environment", category: "DevOps" },
  { name: "Vercel", detail: "Edge deployment", category: "DevOps" },
  { name: "Figma", detail: "Interface design", category: "Design" },
  { name: "Design tokens", detail: "Systematic theming", category: "Design" },
  { name: "Blender", detail: "Modeling & rendering", category: "3D" },
  { name: "Three.js", detail: "WebGL experiences", category: "3D" },
  { name: "React Three Fiber", detail: "Declarative 3D", category: "3D" },
  { name: "Unity", detail: "C# gameplay systems", category: "Game Dev" },
  { name: "Unreal Engine", detail: "Blueprints & lighting", category: "Game Dev" },
];