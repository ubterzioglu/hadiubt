import { motion } from "framer-motion";
import { ExternalLink, Github, Star, GitBranch, Code2, Briefcase, Rocket } from "lucide-react";
import { Link } from "react-router-dom";

interface BentoCardProps {
  title: string;
  description: string;
  icon: React.ElementType;
  size: "large" | "medium" | "small";
  gradient?: string;
  href?: string;
  stats?: { label: string; value: string }[];
  tags?: string[];
  index: number;
}

const BentoCard = ({
  title,
  description,
  icon: Icon,
  size,
  gradient = "from-primary/20 to-secondary/10",
  href,
  stats,
  tags,
  index,
}: BentoCardProps) => {
  const sizeClasses = {
    large: "md:col-span-2 md:row-span-2",
    medium: "md:col-span-1 md:row-span-2",
    small: "md:col-span-1 md:row-span-1",
  };

  const content = (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -5, scale: 1.02 }}
      className={`
        group relative h-full min-h-[200px] p-6 rounded-2xl
        bg-gradient-to-br ${gradient}
        border border-border/30 hover:border-primary/50
        backdrop-blur-sm shadow-card hover:shadow-glow-cyan
        transition-all duration-300 cursor-pointer
        ${sizeClasses[size]}
      `}
    >
      {/* Glow Effect */}
      <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary/10 to-secondary/10 blur-xl" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col h-full">
        {/* Header */}
        <div className="flex items-start justify-between mb-4">
          <div className="p-3 rounded-xl bg-primary/10 border border-primary/20 group-hover:shadow-glow-cyan transition-all duration-300">
            <Icon className="w-6 h-6 text-primary" />
          </div>
          {href && <ExternalLink className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />}
        </div>

        {/* Title & Description */}
        <div className="flex-1">
          <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
            {title}
          </h3>
          <p className="text-sm text-muted-foreground leading-relaxed">
            {description}
          </p>
        </div>

        {/* Stats */}
        {stats && (
          <div className="flex gap-4 mt-4 pt-4 border-t border-border/30">
            {stats.map((stat) => (
              <div key={stat.label}>
                <p className="text-xl font-bold text-primary">{stat.value}</p>
                <p className="text-xs text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        )}

        {/* Tags */}
        {tags && (
          <div className="flex flex-wrap gap-2 mt-4">
            {tags.map((tag) => (
              <span
                key={tag}
                className="px-2 py-1 text-xs font-mono text-muted-foreground bg-card/50 border border-border/30 rounded-md"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </motion.div>
  );

  if (href) {
    return <Link to={href}>{content}</Link>;
  }

  return content;
};

const BentoGrid = () => {
  const cards: BentoCardProps[] = [
    {
      title: "Corporate Projects",
      description: "Enterprise-level QA leadership for global systems. Led testing initiatives for major automotive and logistics companies.",
      icon: Briefcase,
      size: "large",
      gradient: "from-primary/25 to-primary/5",
      href: "/corporate-projects",
      stats: [
        { label: "Years", value: "15+" },
        { label: "Projects", value: "50+" },
      ],
      tags: ["Swisslog", "Daimler", "Mercedes-Benz"],
      index: 0,
    },
    {
      title: "GitHub Activity",
      description: "Active contributor with focus on QA automation and testing frameworks.",
      icon: Github,
      size: "medium",
      gradient: "from-secondary/20 to-secondary/5",
      href: "https://github.com/ubterzioglu",
      stats: [
        { label: "Repos", value: "25+" },
        { label: "Commits", value: "500+" },
      ],
      index: 1,
    },
    {
      title: "Test Automation",
      description: "Selenium, Ranorex, and custom frameworks for E2E testing.",
      icon: Code2,
      size: "small",
      gradient: "from-primary/15 to-accent/5",
      tags: ["Selenium", "Java", "Python"],
      index: 2,
    },
    {
      title: "Private Projects",
      description: "Personal experiments and open-source contributions showcasing innovative solutions.",
      icon: Rocket,
      size: "small",
      gradient: "from-accent/20 to-primary/5",
      href: "/private-projects",
      index: 3,
    },
    {
      title: "Tech Stack",
      description: "Comprehensive toolkit spanning automation frameworks, CI/CD pipelines, and enterprise tools.",
      icon: Star,
      size: "medium",
      gradient: "from-primary/20 to-secondary/10",
      href: "/tech-stack",
      stats: [
        { label: "Tools", value: "30+" },
        { label: "Languages", value: "5+" },
      ],
      index: 4,
    },
    {
      title: "CI/CD Pipelines",
      description: "Jenkins, Docker, and Git-based deployment workflows.",
      icon: GitBranch,
      size: "small",
      gradient: "from-secondary/15 to-primary/5",
      tags: ["Jenkins", "Docker", "Git"],
      index: 5,
    },
  ];

  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="font-mono text-sm text-primary/70 tracking-wider">
            {"// FEATURED_WORK"}
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2">
            <span className="text-gradient-cyan">Projects</span> & Contributions
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            A selection of work spanning enterprise QA, automation frameworks, and personal projects.
          </p>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {cards.map((card) => (
            <BentoCard key={card.title} {...card} />
          ))}
        </div>

        {/* View All Link */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center mt-12"
        >
          <Link
            to="/corporate-projects"
            className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-mono text-sm group transition-colors"
          >
            <span>View all projects</span>
            <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default BentoGrid;
