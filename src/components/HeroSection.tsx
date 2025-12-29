import { ArrowDown, Github, Linkedin, Code } from "lucide-react";
import { Button } from "@/components/ui/button";

export const HeroSection = () => {
  const scrollToSection = (id: string) => {
    const element = document.querySelector(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-muted/30" />
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />
      
      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.02)_1px,transparent_1px)] dark:bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px]" />

      <div className="relative z-10 container-tight text-center">
        <div className="space-y-8">
          {/* Profile Picture Placeholder */}
          <div className="flex justify-center opacity-0 animate-fade-up">
            <div className="relative">
              <div className="w-40 h-40 md:w-48 md:h-48 rounded-full bg-gradient-to-br from-primary to-secondary p-1">
                <div className="w-full h-full rounded-full bg-muted flex items-center justify-center overflow-hidden">
                  <div className="text-5xl md:text-6xl font-bold gradient-text">TB</div>
                </div>
              </div>
              <div className="absolute -bottom-2 -right-2 w-14 h-14 rounded-full gradient-bg flex items-center justify-center animate-pulse-glow">
                <Code className="w-6 h-6 text-primary-foreground" />
              </div>
            </div>
          </div>

          {/* Name & Title */}
          <div className="space-y-4">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight opacity-0 animate-fade-up delay-100">
              <span className="text-foreground">Tej </span>
              <span className="gradient-text">Boddu</span>
            </h1>
            
            <p className="text-lg md:text-xl lg:text-2xl text-muted-foreground font-medium opacity-0 animate-fade-up delay-200">
              Aspiring Web Developer | AI & Deep Learning Enthusiast
            </p>
          </div>

          {/* Tagline */}
          <p className="max-w-2xl mx-auto text-base md:text-lg text-muted-foreground opacity-0 animate-fade-up delay-300">
            Building impactful, scalable, and user-friendly applications with a passion for 
            problem-solving, innovation, and continuous learning.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 opacity-0 animate-fade-up delay-400">
            <Button
              size="lg"
              className="gradient-bg text-primary-foreground px-8 py-6 text-base font-semibold shadow-glow hover:opacity-90 transition-opacity"
              onClick={() => scrollToSection("#projects")}
            >
              View Projects
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="px-8 py-6 text-base font-semibold border-2 hover:bg-muted/50"
              onClick={() => scrollToSection("#contact")}
            >
              Contact Me
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex items-center justify-center gap-4 opacity-0 animate-fade-up delay-500">
            <a
              href="https://github.com/Tezz0231"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-muted hover:bg-muted/80 transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/tej-boddu"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-muted hover:bg-muted/80 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="https://leetcode.com/u/Tez0231/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-muted hover:bg-muted/80 transition-colors"
              aria-label="LeetCode"
            >
              <Code className="w-5 h-5" />
            </a>
          </div>
        </div>


      </div>
    </section>
  );
};