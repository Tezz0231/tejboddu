import { 
  Code2, 
  Globe, 
  Brain, 
  Database, 
  Wrench,
  FileCode,
  Layers
} from "lucide-react";

const skillCategories = [
  {
    title: "Programming Languages",
    icon: Code2,
    skills: ["Python", "Java", "C"],
    color: "from-blue-500 to-cyan-500",
  },
  {
    title: "Web Development",
    icon: Globe,
    skills: ["HTML", "CSS", "JavaScript", "React", "Angular"],
    color: "from-orange-500 to-red-500",
  },
  {
    title: "AI & Deep Learning",
    icon: Brain,
    skills: ["CNN", "ConvNeXt", "TensorFlow", "Generative AI", "Grad-CAM"],
    color: "from-purple-500 to-pink-500",
  },
  {
    title: "Databases",
    icon: Database,
    skills: ["MySQL", "MongoDB"],
    color: "from-green-500 to-emerald-500",
  },
  {
    title: "Tools & Platforms",
    icon: Wrench,
    skills: ["Git", "GitHub", "VS Code", "Jupyter Notebook", "Windows", "Excel"],
    color: "from-gray-500 to-slate-600",
  },
];

export const SkillsSection = () => {
  return (
    <section id="skills" className="section-padding">
      <div className="container-tight">
        {/* Section Header */}
        <div className="text-center space-y-4 mb-16">
          <span className="inline-block text-sm font-semibold text-primary uppercase tracking-wider">
            My Skills
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
            Technical Expertise
          </h2>
          <p className="max-w-2xl mx-auto text-muted-foreground">
            A comprehensive toolkit spanning web development, AI/ML, and software engineering
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <div
              key={category.title}
              className="group glass-card rounded-2xl p-6 hover:border-primary/30 transition-all duration-300 hover:shadow-lg"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Icon */}
              <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${category.color} p-0.5 mb-5`}>
                <div className="w-full h-full rounded-xl bg-card flex items-center justify-center">
                  <category.icon className="w-6 h-6 text-foreground" />
                </div>
              </div>

              {/* Title */}
              <h3 className="text-lg font-semibold text-foreground mb-4">
                {category.title}
              </h3>

              {/* Skills */}
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 text-sm font-medium bg-muted text-muted-foreground rounded-lg hover:bg-primary/10 hover:text-primary transition-colors cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}

          {/* Extra Card - Statistics or Highlight */}
          <div className="group glass-card rounded-2xl p-6 hover:border-primary/30 transition-all duration-300 hover:shadow-lg flex flex-col items-center justify-center text-center">
            <div className="space-y-4">
              <div className="flex items-center justify-center gap-3">
                <FileCode className="w-8 h-8 text-primary" />
                <Layers className="w-8 h-8 text-secondary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground">
                Always Learning
              </h3>
              <p className="text-sm text-muted-foreground">
                Constantly expanding my skill set and staying updated with the latest technologies
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};