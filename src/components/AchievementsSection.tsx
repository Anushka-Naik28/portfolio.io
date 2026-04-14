import { motion } from "framer-motion";
import { Award, ShieldCheck, Trophy } from "lucide-react";

const achievements = [
  { title: "OpenHack 2025", org: "IISc Bangalore", icon: Trophy },
  { title: "Cybersecurity Analyst Simulation", org: "Tata (Forage)", icon: ShieldCheck },
  { title: "Cybersecurity with ChatGPT", org: "Simplilearn", icon: ShieldCheck },
  { title: "Flipkart Runway Season 5", org: "Flipkart", icon: Trophy },
  { title: "Wipro Navikshaa Certification Test", org: "Wipro", icon: Award },
];

const AchievementsSection = () => (
  <section id="achievements" className="section-padding">
    <div className="container mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <p className="font-mono text-sm text-accent mb-2">05.</p>
        <h2 className="text-3xl md:text-4xl font-bold mb-10">Achievements & Certifications</h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {achievements.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: i * 0.1 }}
              className="glass-card p-5 flex items-start gap-4"
            >
              <div className="p-2 rounded-lg bg-primary/10 shrink-0">
                <item.icon size={18} className="text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-sm mb-1">{item.title}</h3>
                <p className="text-xs text-muted-foreground">{item.org}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  </section>
);

export default AchievementsSection;
