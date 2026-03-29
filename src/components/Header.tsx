import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const navItems = [
  { label: "My CV", href: "/my-cv" },
  { label: "About me", href: "/about-me" },
  { label: "Key Achievements", href: "#achievements" },
  { label: "Tech Stack", href: "/tech-stack" },
  { label: "Experience", href: "/experience" },
  { label: "Corporate Projects", href: "/corporate-projects" },
  { label: "Private Projects", href: "/private-projects" },
  { label: "Articles", href: "#articles" },
  { label: "My Bookmarks", href: "#bookmarks" },
  { label: "Useful Apps", href: "#apps" },
  { label: "Contact", href: "#contact" },
];

const Header = () => {
  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur-md"
    >
      <nav className="max-w-7xl mx-auto px-4 py-3 overflow-x-auto scrollbar-hide">
        <ul className="flex items-center gap-0 whitespace-nowrap justify-center">
          {navItems.map((item, i) => (
            <li key={item.label} className="flex items-center">
              {i > 0 && (
                <span className="mx-3 h-4 w-px bg-border" aria-hidden="true" />
              )}
              {item.href.startsWith("/") ? (
                <Link
                  to={item.href}
                  className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200"
                >
                  {item.label}
                </Link>
              ) : (
                <a
                  href={item.href}
                  className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200"
                >
                  {item.label}
                </a>
              )}
            </li>
          ))}
        </ul>
      </nav>
    </motion.header>
  );
};

export default Header;
