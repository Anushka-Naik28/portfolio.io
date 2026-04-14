import { motion } from "framer-motion";
import { ExternalLink, Blocks, Globe, Brain, Sparkles } from "lucide-react";
import { GithubIcon } from "./SocialIcons";
import { useState } from "react";

type Project = {
  title: string;
  description: string;
  tech: string[];
  category: string;
  github?: string;
};

const projects: Project[] = [
  {
    title: "Study Token System",
    description: "A blockchain-based reward system that incentivizes student learning through tokenized achievements. Students earn tokens for completing courses, assignments, and collaborative activities on a transparent, decentralized ledger.",
    tech: ["Solidity", "Ethereum", "React", "Web3.js", "Hardhat"],
    category: "Blockchain",
    github: "https://github.com/Anushka-Naik28",
  },
  {
    title: "Shop-AI",
    description: "An AI-powered e-commerce platform featuring intelligent product recommendations, natural language search, and personalized shopping experiences. Integrates ML models to predict user preferences and optimize conversions.",
    tech: ["React", "Node.js", "Python", "TensorFlow", "MongoDB"],
    category: "Web Development",
    github: "https://github.com/Anushka-Naik28",
  },
  {
    title: "Chatbot Web App",
    description: "A conversational AI chatbot with context-aware responses, multi-turn dialogue management, and a sleek web interface. Built for customer support automation with high accuracy and fast response times.",
    tech: ["React", "NLP", "Python", "Flask", "REST API"],
    category: "Web Development",
    github: "https://github.com/Anushka-Naik28",
  },
  {
    title: "Smart Nearby Recommender",
    description: "A location-aware recommendation engine that suggests nearby services, restaurants, and points of interest using collaborative filtering and geospatial analysis. Achieves personalized results through user behavior modeling.",
    tech: ["Python", "Scikit-Learn", "Pandas", "Geolocation API", "Flask"],
    category: "Machine Learning",
    github: "https://github.com/Anushka-Naik28",
  },
  {
    title: "Weather Prediction Model",
    description: "A machine learning model leveraging historical weather data to forecast temperature, humidity, and precipitation with high accuracy. Employs ensemble methods and time-series analysis for reliable predictions.",
    tech: ["Python", "TensorFlow", "Pandas", "Matplotlib", "NumPy"],
    category: "Machine Learning",
    github: "https://github.com/Anushka-Naik28",
  },
  {
    title: "Story Telling App",
    description: "A generative AI application that creates engaging, personalized stories based on user prompts. Leverages large language models and creative writing techniques to produce unique narratives across multiple genres.",
    tech: ["Python", "LLM", "React", "Generative AI", "REST API"],
    category: "Generative AI",
    github: "https://github.com/Anushka-Naik28",
  },
];

const categories = ["All", "Blockchain", "Web Development", "Machine Learning", "Generative AI"];

const categoryIcons: Record<string, typeof Blocks> = {
  Blockchain: Blocks,
  "Web Development": Globe,
  "Machine Learning": Brain,
  "Generative AI": Sparkles,
};

const ProjectsSection = () => {
  const [active, setActive] = useState("All");
  const filtered = active === "All" ? projects : projects.filter((p) => p.category === active);

  return (
    <section id="projects" className="section-padding">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="font-mono text-sm text-accent mb-2">03.</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Projects</h2>

          <div className="flex flex-wrap gap-2 mb-10">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`text-xs font-mono px-4 py-2 rounded-lg transition-all ${
                  active === cat
                    ? "gradient-btn"
                    : "bg-secondary text-muted-foreground hover:text-foreground"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((project, i) => {
              const Icon = categoryIcons[project.category] || Brain;
              return (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="glass-card p-6 flex flex-col"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-2 rounded-lg bg-primary/10">
                      <Icon size={20} className="text-primary" />
                    </div>
                    <div className="flex gap-2">
                      {project.github && (
                        <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
                          <GithubIcon size={18} />
                        </a>
                      )}
                      <ExternalLink size={18} className="text-muted-foreground" />
                    </div>
                  </div>

                  <span className="text-[10px] font-mono uppercase tracking-wider text-accent mb-2">
                    {project.category}
                  </span>
                  <h3 className="text-lg font-semibold mb-2">{project.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4 flex-1 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {project.tech.map((t) => (
                      <span key={t} className="text-[10px] font-mono px-2 py-1 rounded bg-secondary text-muted-foreground">
                        {t}
                      </span>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
