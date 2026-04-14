import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

const experiences = [
  {
    role: "Blockchain Developer Intern",
    company: "EtherX Innovations Pvt. Ltd",
    period: "Current",
    description: "Developing smart contracts and decentralized applications on Ethereum. Contributing to Web3 solutions for enterprise clients with Solidity, Hardhat, and React.",
    current: true,
  },
  {
    role: "Graphic Designer Intern",
    company: "Galactic 3D Pvt. Ltd",
    period: "Previous",
    description: "Designed brand visuals, marketing assets, and 3D renders. Collaborated with development teams to ensure cohesive product aesthetics.",
  },
  {
    role: "AI & Software Development Intern",
    company: "Pinnacle Labs",
    period: "Previous",
    description: "Built ML models for data analysis and developed software prototypes. Gained hands-on experience with Python, TensorFlow, and agile development workflows.",
  },
];

const ExperienceSection = () => (
  <section id="experience" className="section-padding bg-secondary/30">
    <div className="container mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <p className="font-mono text-sm text-accent mb-2">04.</p>
        <h2 className="text-3xl md:text-4xl font-bold mb-10">Experience</h2>

        <div className="relative">
          <div className="absolute left-4 md:left-6 top-0 bottom-0 w-px bg-border" />

          <div className="space-y-8">
            {experiences.map((exp, i) => (
              <motion.div
                key={exp.role}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.15 }}
                className="relative pl-12 md:pl-16"
              >
                <div className={`absolute left-2.5 md:left-4.5 top-1 w-3 h-3 rounded-full border-2 ${exp.current ? "bg-accent border-accent" : "bg-background border-primary"}`} />

                <div className="glass-card p-6">
                  <div className="flex flex-wrap items-center gap-2 mb-2">
                    <Briefcase size={14} className="text-primary" />
                    <span className="text-xs font-mono text-accent">{exp.period}</span>
                    {exp.current && (
                      <span className="text-[10px] font-mono uppercase tracking-wider text-accent bg-accent/10 px-2 py-0.5 rounded-full">
                        Active
                      </span>
                    )}
                  </div>
                  <h3 className="text-lg font-semibold">{exp.role}</h3>
                  <p className="text-sm text-primary/80 font-medium mb-2">{exp.company}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">{exp.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);

export default ExperienceSection;
