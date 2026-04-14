import { Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./SocialIcons";

const Footer = () => (
  <footer className="border-t border-border py-8 px-4">
    <div className="container mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
      <p className="text-sm text-muted-foreground">
        © {new Date().getFullYear()} Anushka D. Naik. Built with React & Tailwind.
      </p>
      <div className="flex items-center gap-4">
        <a href="https://github.com/Anushka-Naik28" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
          <GithubIcon size={16} />
        </a>
        <a href="https://www.linkedin.com/in/anushka-d-naik" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
          <LinkedinIcon size={16} />
        </a>
        <a href="mailto:anushkanaik285@gmail.com" className="text-muted-foreground hover:text-foreground transition-colors">
          <Mail size={16} />
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;
