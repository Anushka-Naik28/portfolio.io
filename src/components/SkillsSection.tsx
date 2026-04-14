import { motion } from "framer-motion";

const skillCategories = [
  {
    title: "AI / Machine Learning",
    skills: ["TensorFlow", "PyTorch", "Scikit-Learn", "NLP", "Computer Vision", "Deep Learning", "Pandas", "NumPy"],
  },
  {
    title: "Web Development",
    skills: ["React", "Next.js", "Node.js", "Tailwind CSS", "TypeScript", "MongoDB", "REST APIs", "Express.js"],
  },
  {
    title: "Blockchain",
    skills: ["Solidity", "Ethereum", "Smart Contracts", "Web3.js", "Hardhat", "IPFS", "DeFi"],
    core: true,
  },
  {
    title: "Programming",
    skills: ["Python", "Java", "JavaScript", "C++", "SQL"],
  },
  {
    title: "Tools & Technologies",
    skills: ["Git", "Docker", "VS Code", "Jupyter", "Postman", "Firebase", "Linux"],
  },
  {
    title: "Problem Solving",
    skills: ["Data Structures", "Algorithms", "System Design", "Analytical Thinking", "Debugging"],
  },
];

const SkillsSection = () => (
  <section id="skills" className="section-padding bg-secondary/30">
    <div className="container mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <p className="font-mono text-sm text-accent mb-2">02.</p>
        <h2 className="text-3xl md:text-4xl font-bold mb-10">Skills & Technologies</h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((cat, i) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className={`glass-card p-6 ${cat.core ? "border-primary/40 ring-1 ring-primary/20" : ""}`}
            >
              <div className="flex items-center gap-2 mb-4">
                {cat.core && <span className="glow-dot" />}
                <h3 className="font-semibold text-lg">{cat.title}</h3>
                {cat.core && (
                  <span className="text-[10px] font-mono uppercase tracking-wider text-accent bg-accent/10 px-2 py-0.5 rounded-full">
                    Core
                  </span>
                )}
              </div>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className="text-xs font-mono px-3 py-1.5 rounded-md bg-secondary text-muted-foreground hover:text-foreground hover:bg-primary/10 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  </section>
);

export default SkillsSection;
