import { Plus, BookOpen, Shield, Cpu } from "lucide-react";

export const sidebarData = {
    systemMenu: [
        {
            title: "New Session",
            url: "/",
            icon: Plus,
        },
        {
            title: "Intelligence Overview",
            url: "/overview",
            icon: BookOpen,
        },
        {
            title: "System Infrastructure",
            url: "/about",
            icon: Shield,
        },
    ],
    footerMenu: {
        credits: {
            title: "Compute Credits",
            url: "/credits",
            icon: Cpu,
            unit: "Unit"
        }
    }
};
