import { motion } from "framer-motion";
import { Brain, Blocks, Rocket } from "lucide-react";

const highlights = [
  { icon: Brain, title: "AI & ML", desc: "Building intelligent systems that learn and adapt to solve complex problems." },
  { icon: Blocks, title: "Blockchain", desc: "Developing decentralized solutions with smart contracts and Web3 technologies." },
  { icon: Rocket, title: "Full-Stack", desc: "Creating end-to-end applications with modern frameworks and cloud services." },
];

const AboutSection = () => (
  <section id="about" className="section-padding">
    <div className="container mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <p className="font-mono text-sm text-accent mb-2">01.</p>
        <h2 className="text-3xl md:text-4xl font-bold mb-8">About Me</h2>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              I'm a 3rd year Bachelor of Engineering student specializing in Artificial Intelligence and Machine Learning, maintaining a strong CGPA of 9.2. My journey in tech has been driven by a deep curiosity for how intelligent systems can transform industries.
            </p>
            <p>
              With hands-on experience spanning full-stack web applications, machine learning models, and blockchain-based solutions, I thrive at the intersection of emerging technologies. Whether it's training a neural network, writing a smart contract, or building a responsive UI — I love the creative challenge.
            </p>
            <p>
              My goal is to build impactful, real-world solutions that leverage AI and Web3 to make technology more accessible and equitable.
            </p>
          </div>

          <div className="grid gap-4">
            {highlights.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.15 }}
                className="glass-card p-5 flex items-start gap-4"
              >
                <div className="p-2.5 rounded-lg bg-primary/10">
                  <item.icon size={20} className="text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);

export default AboutSection;
