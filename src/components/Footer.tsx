import { motion } from "framer-motion";
import { Github, Linkedin } from "lucide-react";

const Footer = () => {
  const socialLinks = [
    {
      name: "LinkedIn",
      href: "https://linkedin.com/in/ubterzioglu",
      icon: Linkedin,
    },
    {
      name: "GitHub",
      href: "https://github.com/ubterzioglu",
      icon: Github,
    },
  ];

  return (
    <footer className="py-12 px-4 border-t border-border/30">
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-lg font-bold"
        >
          <span className="text-gradient-cyan">Uğur Terzioğlu</span>
        </motion.div>

        {/* Social Links */}
        <div className="flex items-center gap-6">
          {socialLinks.map((link, index) => (
            <motion.a
              key={link.name}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className="group flex items-center gap-2 px-4 py-2 rounded-lg border border-border/30 hover:border-primary/50 hover:bg-primary/5 transition-all duration-300"
            >
              <link.icon className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
              <span className="font-mono text-sm text-muted-foreground group-hover:text-primary transition-colors">
                {link.name}
              </span>
            </motion.a>
          ))}
        </div>

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center text-xs text-muted-foreground"
        >
          © 2025 Uğur Barış Terzioğlu · All rights reserved.
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
