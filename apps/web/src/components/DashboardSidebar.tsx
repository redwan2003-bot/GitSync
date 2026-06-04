import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, FolderGit2, PenTool, Settings, Activity, ShieldCheck } from "lucide-react";

const navItems = [
  { name: "Dashboard", href: "/dashboard", icon: Home },
  { name: "Repositories", href: "/dashboard/repositories", icon: FolderGit2 },
  { name: "Drafts", href: "/dashboard/drafts", icon: PenTool },
  { name: "Project Cards", href: "/dashboard/project-cards", icon: ShieldCheck },
  { name: "Settings", href: "/dashboard/settings", icon: Settings },
  { name: "Audit", href: "/dashboard/audit", icon: Activity },
];

export default function DashboardSidebar() {
  const pathname = usePathname();
  return (
    <nav className="flex flex-col gap-2 p-4 w-64 bg-primary/10 backdrop-blur-md border-r border-primary/20 h-full">
      {navItems.map((item) => {
        const Icon = item.icon;
        const isActive = pathname === item.href;
        return (
          <Link
            key={item.href}
            href={item.href}
            className={`flex items-center gap-3 px-3 py-2 rounded-md transition-colors duration-200 ${isActive ? "bg-primary text-background" : "text-foreground hover:bg-primary/20"}`}
          >
            <Icon aria-hidden="true" className="size-5" />
            <span className="font-body text-sm">{item.name}</span>
          </Link>
        );
      })}
    </nav>
  );
}
