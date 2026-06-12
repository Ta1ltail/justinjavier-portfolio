import type { ComponentType } from "react";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiFramer,
  SiNodedotjs,
  SiExpress,
  SiPhp,
  SiMysql,
  SiPostgresql,
  SiGit,
  SiDocker,
  SiLinux,
  SiVercel,
  SiFigma,
  SiBlender,
  SiThreedotjs,
  SiUnity,
  SiUnrealengine,
} from "react-icons/si";
import { Layers } from "lucide-react";
import { cn } from "@/lib/utils";

interface IconEntry {
  Icon: ComponentType<{ className?: string; style?: React.CSSProperties }>;
  color?: string; // official brand color; undefined = follow theme
}

const icons: Record<string, IconEntry> = {
  React: { Icon: SiReact, color: "#61DAFB" },
  "Next.js": { Icon: SiNextdotjs },
  TypeScript: { Icon: SiTypescript, color: "#3178C6" },
  Tailwind: { Icon: SiTailwindcss, color: "#06B6D4" },
  "Tailwind CSS": { Icon: SiTailwindcss, color: "#06B6D4" },
  "Framer Motion": { Icon: SiFramer },
  "Node.js": { Icon: SiNodedotjs, color: "#5FA04E" },
  Express: { Icon: SiExpress },
  PHP: { Icon: SiPhp, color: "#777BB4" },
  MySQL: { Icon: SiMysql, color: "#4479A1" },
  PostgreSQL: { Icon: SiPostgresql, color: "#4169E1" },
  Git: { Icon: SiGit, color: "#F05032" },
  Docker: { Icon: SiDocker, color: "#2496ED" },
  Linux: { Icon: SiLinux, color: "#FCC624" },
  Vercel: { Icon: SiVercel },
  Figma: { Icon: SiFigma, color: "#F24E1E" },
  Blender: { Icon: SiBlender, color: "#E87D0D" },
  "Three.js": { Icon: SiThreedotjs },
  "React Three Fiber": { Icon: SiThreedotjs },
  Unity: { Icon: SiUnity },
  "Unreal Engine": { Icon: SiUnrealengine },
};

export function TechIcon({
  name,
  className,
}: {
  name: string;
  className?: string;
}) {
  const entry = icons[name];
  if (!entry)
    return <Layers className={cn("text-muted-foreground", className)} />;
  const { Icon, color } = entry;
  return (
    <Icon
      className={cn(!color && "text-foreground", className)}
      style={color ? { color } : undefined}
    />
  );
}
