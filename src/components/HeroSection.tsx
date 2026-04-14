import { motion } from "framer-motion";
import { ArrowDown, Mail } from "lucide-react";
import { GithubIcon } from "./SocialIcons";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center section-padding pt-24">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-32 w-64 h-64 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute bottom-1/4 -right-32 w-80 h-80 rounded-full bg-accent/10 blur-3xl" />
      </div>

      <div className="container mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl"
        >
          <p className="font-mono text-sm text-accent mb-4">Hey there, I'm</p>
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-4 leading-tight">
            Anushka D. <span className="gradient-text">Naik</span>
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl font-medium text-muted-foreground mb-4">
            AI/ML Engineer · Blockchain Developer · Full-Stack Developer
          </p>
          <p className="text-base md:text-lg text-muted-foreground/80 mb-8 max-w-xl font-mono text-sm">
            "Turning Ideas into Impact with Code, AI & Innovation"
          </p>
          <p className="text-muted-foreground mb-10 max-w-lg leading-relaxed">
            A passionate 3rd year AIML student crafting innovative solutions at the intersection of artificial intelligence, blockchain, and full-stack development.
          </p>

          <div className="flex flex-wrap gap-4">
            <a href="#projects" className="gradient-btn px-6 py-3 rounded-lg font-medium text-sm inline-flex items-center gap-2">
              View Projects <ArrowDown size={16} />
            </a>
            <a
              href="https://github.com/Anushka-Naik28"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-lg font-medium text-sm border border-border bg-secondary hover:bg-secondary/80 transition-all inline-flex items-center gap-2"
            >
              <GithubIcon size={16} /> GitHub
            </a>
            <a
              href="#contact"
              className="px-6 py-3 rounded-lg font-medium text-sm border border-primary/30 text-primary hover:bg-primary/10 transition-all inline-flex items-center gap-2"
            >
              <Mail size={16} /> Contact Me
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
