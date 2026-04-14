import { motion } from "framer-motion";
import { Mail, Download, Send } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./SocialIcons";
import { useState } from "react";

const ContactSection = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    window.location.href = `mailto:anushkanaik285@gmail.com?subject=Contact from ${form.name}&body=${encodeURIComponent(form.message)}%0A%0AFrom: ${form.email}`;
  };

  return (
    <section id="contact" className="section-padding bg-secondary/30">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="font-mono text-sm text-accent mb-2">06.</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
          <p className="text-muted-foreground mb-10 max-w-md">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of something amazing.
          </p>

          <div className="grid md:grid-cols-2 gap-10">
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                required
                maxLength={100}
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full px-4 py-3 rounded-lg bg-background border border-border text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
              />
              <input
                type="email"
                placeholder="Your Email"
                required
                maxLength={255}
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full px-4 py-3 rounded-lg bg-background border border-border text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
              />
              <textarea
                placeholder="Your Message"
                required
                maxLength={1000}
                rows={5}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full px-4 py-3 rounded-lg bg-background border border-border text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all resize-none"
              />
              <button type="submit" className="gradient-btn px-6 py-3 rounded-lg font-medium text-sm inline-flex items-center gap-2">
                <Send size={14} /> Send Message
              </button>
            </form>

            <div className="space-y-6">
              <div>
                <h3 className="font-semibold mb-4">Connect With Me</h3>
                <div className="space-y-3">
                  <a href="mailto:anushkanaik285@gmail.com" className="flex items-center gap-3 text-sm text-muted-foreground hover:text-foreground transition-colors">
                    <Mail size={16} className="text-primary" /> anushkanaik285@gmail.com
                  </a>
                  <a href="https://github.com/Anushka-Naik28" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-sm text-muted-foreground hover:text-foreground transition-colors">
                    <GithubIcon size={16} className="text-primary" /> github.com/Anushka-Naik28
                  </a>
                  <a href="https://www.linkedin.com/in/anushka-d-naik" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-sm text-muted-foreground hover:text-foreground transition-colors">
                    <LinkedinIcon size={16} className="text-primary" /> linkedin.com/in/anushka-d-naik
                  </a>
                </div>
              </div>

              <a
                href="#"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-lg border border-border bg-secondary text-sm font-medium hover:bg-secondary/80 transition-all"
              >
                <Download size={14} /> Download Resume
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
