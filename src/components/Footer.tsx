import { Github, Linkedin, Code, Heart } from "lucide-react";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-card/50">
      <div className="container-tight py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Logo & Copyright */}
          <div className="flex flex-col items-center md:items-start gap-2">
            <a href="#home" className="text-xl font-bold tracking-tight">
              <span className="text-foreground">Tej</span>
              <span className="gradient-text">Boddu</span>
            </a>
            <p className="text-sm text-muted-foreground flex items-center gap-1">
              Made with <Heart className="w-3 h-3 text-red-500 fill-red-500" /> © {currentYear}
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-3">
            <a
              href="https://github.com/Tezz0231"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-lg bg-muted hover:bg-muted/80 transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href="https://www.linkedin.com/in/tej-boddu"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-lg bg-muted hover:bg-muted/80 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href="https://leetcode.com/u/Tez0231/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-lg bg-muted hover:bg-muted/80 transition-colors"
              aria-label="LeetCode"
            >
              <Code className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};