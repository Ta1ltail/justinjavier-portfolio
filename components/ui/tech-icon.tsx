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
  SiJavascript,
  SiBootstrap,
  SiPostman,
  SiHoudini,
  SiGodotengine,
  SiCss,
  SiNpm,
  SiRedis,
  SiCanva,
} from "react-icons/si";
import {
  Layers,
  Globe,
  Server,
  Box,
  Cloud,
  Image as ImageIcon,
} from "lucide-react";
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
  JavaScript: { Icon: SiJavascript, color: "#F7DF1E" },
  Bootstrap: { Icon: SiBootstrap, color: "#7952B3" },
  CSS: { Icon: SiCss, color: "#663399" },
  "Node.js": { Icon: SiNodedotjs, color: "#5FA04E" },
  Express: { Icon: SiExpress },
  PHP: { Icon: SiPhp, color: "#777BB4" },
  MySQL: { Icon: SiMysql, color: "#4479A1" },
  PostgreSQL: { Icon: SiPostgresql, color: "#4169E1" },
  REST: { Icon: Server },
  Redis: { Icon: SiRedis, color: "#FF4438" },
  Git: { Icon: SiGit, color: "#F05032" },
  Docker: { Icon: SiDocker, color: "#2496ED" },
  Linux: { Icon: SiLinux, color: "#FCC624" },
  Vercel: { Icon: SiVercel },
  Hostinger: { Icon: Globe },
  AWS: { Icon: Cloud, color: "#FF9900" },
  npm: { Icon: SiNpm, color: "#CB3837" },
  Postman: { Icon: SiPostman, color: "#FF6C37" },
  Figma: { Icon: SiFigma, color: "#F24E1E" },
  Canva: { Icon: SiCanva, color: "#00C4CC" },
  "Adobe Photoshop": { Icon: ImageIcon, color: "#31A8FF" },
  "Design tokens": { Icon: Layers },
  Blender: { Icon: SiBlender, color: "#E87D0D" },
  ZBrush: { Icon: Box },
  Houdini: { Icon: SiHoudini, color: "#FF4713" },
  "Three.js": { Icon: SiThreedotjs },
  "React Three Fiber": { Icon: SiThreedotjs },
  Unity: { Icon: SiUnity },
  Godot: { Icon: SiGodotengine, color: "#478CBF" },
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
