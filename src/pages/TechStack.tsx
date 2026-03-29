import { motion } from "framer-motion";
import { ArrowLeft, Cog, Code, Globe, GitBranch, ClipboardList, Monitor, FlaskConical } from "lucide-react";
import { Link } from "react-router-dom";

const categories = [
  {
    icon: Cog,
    title: "Automation & Frameworks",
    items: ["Selenium", "Ranorex", "Maven", "TestNG", "JUnit", "Cucumber", "Gherkin"],
  },
  {
    icon: Code,
    title: "Programming Languages",
    items: ["Java", "C#", "Python"],
  },
  {
    icon: Globe,
    title: "API & Integration Testing",
    items: ["REST", "SOAP", "Postman", "SoapUI", "API Mocking"],
  },
  {
    icon: GitBranch,
    title: "CI/CD & DevOps Pipeline",
    items: ["Jenkins", "Docker", "Git", "GitHub"],
  },
  {
    icon: ClipboardList,
    title: "Test Management & Tracking",
    items: ["JIRA", "Xray", "HP ALM", "Polarion"],
  },
  {
    icon: Monitor,
    title: "Development & IDE Tools",
    items: ["IntelliJ IDEA", "Visual Studio", "VS Code", "Eclipse"],
  },
  {
    icon: FlaskConical,
    title: "Methodologies & QA Approach",
    items: ["Agile", "SCRUM", "Waterfall", "CI/CD"],
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45 } },
};

const TechStack = () => {
  return (
    <div className="min-h-screen py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, x: -12 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3 }}
        >
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-10"
          >
            <ArrowLeft className="w-4 h-4" />
            Back
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <h1 className="text-3xl md:text-4xl font-bold">
            🧰 Tech <span className="text-gradient">Stack</span>
          </h1>
          <p className="text-muted-foreground mt-3">
            Tools, languages, and frameworks I work with daily.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="grid md:grid-cols-2 gap-5"
        >
          {categories.map((cat) => (
            <motion.div
              key={cat.title}
              variants={item}
              className="p-6 rounded-xl bg-card border border-border/50 hover:border-primary/25 transition-colors shadow-card"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center">
                  <cat.icon className="w-4.5 h-4.5 text-primary" />
                </div>
                <h2 className="font-semibold text-foreground">{cat.title}</h2>
              </div>
              <div className="flex flex-wrap gap-2">
                {cat.items.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1.5 text-xs font-medium rounded-full bg-secondary text-secondary-foreground border border-border/30"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default TechStack;
