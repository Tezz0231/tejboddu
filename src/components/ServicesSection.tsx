import { Briefcase, Users, Rocket, CheckCircle } from "lucide-react";

const availabilities = [
  {
    title: "Internships",
    description: "Ready to learn and contribute in a professional environment",
    icon: Briefcase,
  },
  {
    title: "Entry-Level Roles",
    description: "Prepared to take on responsibilities and grow with your team",
    icon: Users,
  },
  {
    title: "Project Collaborations",
    description: "Open to working on innovative and impactful projects",
    icon: Rocket,
  },
];

export const ServicesSection = () => {
  return (
    <section id="services" className="section-padding">
      <div className="container-tight">
        {/* Section Header */}
        <div className="text-center space-y-4 mb-16">
          <span className="inline-block text-sm font-semibold text-primary uppercase tracking-wider">
            Availability
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
            Open to Opportunities
          </h2>
          <p className="max-w-2xl mx-auto text-muted-foreground">
            Eager to learn, contribute, and work on innovative solutions that make a difference
          </p>
        </div>

        {/* Availability Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {availabilities.map((item, index) => (
            <div
              key={item.title}
              className="group relative glass-card rounded-2xl p-6 text-center hover:border-primary/30 transition-all duration-300 hover:shadow-lg overflow-hidden"
            >
              {/* Background Glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity" />
              
              <div className="relative space-y-4">
                <div className="w-16 h-16 mx-auto rounded-2xl gradient-bg p-0.5">
                  <div className="w-full h-full rounded-2xl bg-card flex items-center justify-center">
                    <item.icon className="w-7 h-7 text-primary" />
                  </div>
                </div>

                <h3 className="text-xl font-semibold text-foreground">
                  {item.title}
                </h3>

                <p className="text-sm text-muted-foreground">
                  {item.description}
                </p>

                <div className="flex items-center justify-center gap-2 text-primary">
                  <CheckCircle className="w-4 h-4" />
                  <span className="text-sm font-medium">Available Now</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Box */}
        <div className="relative glass-card rounded-2xl p-8 md:p-12 text-center overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-secondary/5 to-primary/5" />
          <div className="relative space-y-4">
            <h3 className="text-2xl md:text-3xl font-bold text-foreground">
              Let's Build Something Great Together
            </h3>
            <p className="max-w-xl mx-auto text-muted-foreground">
              I'm actively looking for opportunities to apply my skills in web development and AI. 
              If you have a project or position that aligns with my expertise, I'd love to hear from you!
            </p>
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-8 py-3 mt-4 text-base font-semibold text-primary-foreground gradient-bg rounded-lg shadow-glow hover:opacity-90 transition-opacity"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Get In Touch
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};