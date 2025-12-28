import { ExternalLink, Github, Brain, Vote } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "Pneumonia Detection from Chest X-Rays",
    description:
      "Ensemble deep learning model using ConvNeXt-Tiny + EfficientNetV2-S achieving ~90% accuracy. Integrated explainable AI using Grad-CAM heatmaps for visual interpretation of model predictions.",
    highlights: [
      "~90% accuracy using ensemble model",
      "Explainable AI with Grad-CAM heatmaps",
      "Real-time inference pipeline with <5s latency",
    ],
    technologies: ["PyTorch", "Deep Learning", "CNN", "Explainable AI"],
    icon: Brain,
    gradient: "from-purple-500 to-pink-500",
  },
  {
    title: "Online Voting System",
    description:
      "A secure and user-friendly online voting platform built with the MEAN stack. Features include user authentication, admin panel for election management, and encrypted vote submission.",
    highlights: [
      "Secure authentication system",
      "Admin panel for election management",
      "Encrypted vote submission",
    ],
    technologies: ["MongoDB", "Express.js", "Angular", "Node.js"],
    icon: Vote,
    gradient: "from-blue-500 to-cyan-500",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="section-padding bg-muted/30">
      <div className="container-tight">
        {/* Section Header */}
        <div className="text-center space-y-4 mb-16">
          <span className="inline-block text-sm font-semibold text-primary uppercase tracking-wider">
            My Work
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
            Featured Projects
          </h2>
          <p className="max-w-2xl mx-auto text-muted-foreground">
            A selection of projects showcasing my expertise in AI, deep learning, and full-stack development
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <article
              key={project.title}
              className="group glass-card rounded-2xl overflow-hidden hover:border-primary/30 transition-all duration-300 hover:shadow-lg"
            >
              {/* Project Header */}
              <div className={`h-3 bg-gradient-to-r ${project.gradient}`} />
              
              <div className="p-6 md:p-8 space-y-5">
                {/* Icon & Title */}
                <div className="flex items-start gap-4">
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${project.gradient} p-0.5 shrink-0`}>
                    <div className="w-full h-full rounded-xl bg-card flex items-center justify-center">
                      <project.icon className="w-6 h-6 text-foreground" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-1">
                      {project.title}
                    </h3>
                  </div>
                </div>

                {/* Description */}
                <p className="text-muted-foreground leading-relaxed">
                  {project.description}
                </p>

                {/* Highlights */}
                <ul className="space-y-2">
                  {project.highlights.map((highlight, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                      <span className="text-muted-foreground">{highlight}</span>
                    </li>
                  ))}
                </ul>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Actions */}
                <div className="flex gap-3 pt-2">
                  <Button variant="outline" size="sm" className="gap-2">
                    <Github className="w-4 h-4" />
                    View Code
                  </Button>
                  <Button size="sm" className="gap-2 gradient-bg text-primary-foreground">
                    <ExternalLink className="w-4 h-4" />
                    Live Demo
                  </Button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};