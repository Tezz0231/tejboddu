import { GraduationCap, Download, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";

const education = [
  {
    degree: "B.Tech in Artificial Intelligence",
    institution: "Anurag University",
    period: "2022 - 2026",
    score: "CGPA: 7.19",
  },
  {
    degree: "Intermediate",
    institution: "Narayana Junior College",
    period: "2020 - 2022",
    score: "Percentage: 72.6%",
  },
  {
    degree: "SSC",
    institution: "Narayana High School",
    period: "2019 - 2020",
    score: "CGPA: 10.0",
  },
];

export const AboutSection = () => {
  const handleDownloadResume = () => {
    const link = document.createElement('a');
    link.href = '/tejboddu/TEJ_BODDU.pdf';
    link.download = 'TEJ_BODDU.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="about" className="section-padding bg-muted/30">
      <div className="container-tight">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left Column - Bio */}
          <div className="space-y-6">
            <div className="space-y-4">
              <span className="inline-block text-sm font-semibold text-primary uppercase tracking-wider">
                About Me
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
                Passionate Developer & Problem Solver
              </h2>
            </div>

            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                I'm a Computer Science graduate with a strong foundation in{" "}
                <span className="text-foreground font-medium">Artificial Intelligence</span>,{" "}
                <span className="text-foreground font-medium">deep learning</span>, and{" "}
                <span className="text-foreground font-medium">full-stack web development</span>.
              </p>
              <p>
                I combine technical expertise with a creative mindset to build impactful, scalable, 
                and user-friendly applications. I'm a strong communicator, fast learner, and 
                dedicated team player who thrives in collaborative environments.
              </p>
              <p>
                Currently seeking opportunities to apply my skills in real-world projects and 
                contribute to innovative solutions that make a difference.
              </p>
            </div>

            <Button
              size="lg"
              className="gradient-bg text-primary-foreground gap-2"
              onClick={handleDownloadResume}
            >
              <Download className="w-4 h-4" />
              Download Resume
            </Button>
          </div>

          {/* Right Column - Education Timeline */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="p-3 rounded-xl bg-primary/10">
                <GraduationCap className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground">Education</h3>
            </div>

            <div className="relative space-y-0">
              {/* Timeline Line */}
              <div className="absolute left-[19px] top-3 bottom-3 w-0.5 bg-border" />

              {education.map((edu, index) => (
                <div key={index} className="relative pl-12 pb-8 last:pb-0 group">
                  {/* Timeline Dot */}
                  <div className="absolute left-0 top-1.5 w-10 h-10 rounded-full bg-muted border-2 border-primary/30 flex items-center justify-center group-hover:border-primary transition-colors">
                    <Calendar className="w-4 h-4 text-primary" />
                  </div>

                  <div className="glass-card rounded-xl p-5 hover:border-primary/30 transition-all">
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
                      <div>
                        <h4 className="font-semibold text-foreground">{edu.degree}</h4>
                        <p className="text-sm text-muted-foreground">{edu.institution}</p>
                      </div>
                      <div className="flex flex-col items-start sm:items-end gap-1">
                        <span className="text-xs font-medium text-primary bg-primary/10 px-2 py-1 rounded-full">
                          {edu.period}
                        </span>
                        <span className="text-sm font-medium text-foreground">{edu.score}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
