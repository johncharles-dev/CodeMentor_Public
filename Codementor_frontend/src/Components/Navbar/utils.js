import { Code, Wrench, FileText, RefreshCcw, CheckCircle, BookOpen, Globe } from "lucide-react";

export const Menus = [
  {
    name: "Home",
    to: "/",
  },
  {
    name: "Code Services",
    subMenuHeading: ["Assistant Tools", "Enhancement Tools"],
    subMenu: [
      {
        name: "Code Debugger",
        desc: "Fix errors quickly",
        icon: Code,
        to: "/debugger",
      },
      {
        name: "Code Refactoring",
        desc: "Enhance readability",
        icon: RefreshCcw,
        to: "/refactoring",
      },
      {
        name: "Code Review",
        desc: "Ensure quality",
        icon: CheckCircle,
        to: "/review",
      },
      {
        name: "Code Explainer",
        desc: "Understand code better",
        icon: BookOpen,
        to: "/explainer",
      },
      {
        name: "Code Optimization",
        desc: "Improve performance",
        icon: Wrench,
        to: "/optimization",
      },
      {
        name: "Code Documentation",
        desc: "Generate clean docs",
        icon: FileText,
        to: "/documentation",
      },
      {
        name: "Multi-Language Translator",
        desc: "Convert code between languages",
        icon: Globe,
        to: "/translator",
      },
    ],
    gridCols: 2,
  },
  {
    name: "About",
    to: "/about",
  },
  {
    name: "Contact",
    to: "/contact",
  },
  
];
