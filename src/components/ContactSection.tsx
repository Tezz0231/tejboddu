import { useState } from "react";
import { Mail, Phone, Linkedin, Github, Code, Send, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "tej91101@gmail.com",
    href: "mailto:tej91101@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91 7672034910",
    href: "tel:+917672034910",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/tej-boddu",
    href: "https://www.linkedin.com/in/tej-boddu",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "github.com/Tezz0231",
    href: "https://github.com/Tezz0231",
  },
  {
    icon: Code,
    label: "LeetCode",
    value: "leetcode.com/u/Tez0231",
    href: "https://leetcode.com/u/Tez0231/",
  },
];

export const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));

    toast({
      title: "Message sent!",
      description: "Thank you for reaching out. I'll get back to you soon.",
    });

    setFormData({ name: "", email: "", message: "" });
    setIsSubmitting(false);
  };

  return (
    <section id="contact" className="section-padding bg-muted/30">
      <div className="container-tight">
        {/* Section Header */}
        <div className="text-center space-y-4 mb-16">
          <span className="inline-block text-sm font-semibold text-primary uppercase tracking-wider">
            Get In Touch
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
            Let's Connect
          </h2>
          <p className="max-w-2xl mx-auto text-muted-foreground">
            Have a project in mind or want to discuss opportunities? I'd love to hear from you.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="space-y-2">
              <h3 className="text-2xl font-bold text-foreground">
                Contact Information
              </h3>
              <p className="text-muted-foreground">
                Feel free to reach out through any of these channels
              </p>
            </div>

            <div className="space-y-4">
              {contactInfo.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="flex items-center gap-4 p-4 glass-card rounded-xl hover:border-primary/30 transition-all group"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">{item.label}</p>
                    <p className="font-medium text-foreground">{item.value}</p>
                  </div>
                </a>
              ))}
            </div>

            <div className="flex items-center gap-3 p-4 glass-card rounded-xl">
              <MapPin className="w-5 h-5 text-primary shrink-0" />
              <p className="text-muted-foreground">
                Based in India, available for remote opportunities worldwide
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="glass-card rounded-2xl p-6 md:p-8">
            <h3 className="text-xl font-bold text-foreground mb-6">
              Send a Message
            </h3>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="space-y-2">
                <label
                  htmlFor="name"
                  className="text-sm font-medium text-foreground"
                >
                  Name
                </label>
                <Input
                  id="name"
                  name="name"
                  placeholder="Your name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="bg-background"
                />
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="email"
                  className="text-sm font-medium text-foreground"
                >
                  Email
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="your.email@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="bg-background"
                />
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="message"
                  className="text-sm font-medium text-foreground"
                >
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Tell me about your project or opportunity..."
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="bg-background resize-none"
                />
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full gradient-bg text-primary-foreground gap-2"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  "Sending..."
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    Send Message
                  </>
                )}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};