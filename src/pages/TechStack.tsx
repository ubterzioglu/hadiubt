import { motion } from "framer-motion";
import { ArrowLeft, Cog, Code, Globe, GitBranch, ClipboardList, Monitor, FlaskConical, Zap } from "lucide-react";
import { Link } from "react-router-dom";
import { Progress } from "@/components/ui/progress";

interface TechCategory {
  icon: React.ElementType;
  title: string;
  items: TechItem[];
}

interface TechItem {
  name: string;
  proficiency: number; // 1-5 scale
  relatedProject?: string;
  icon?: React.ElementType;
}

const categories: TechCategory[] = [
  {
    icon: Cog,
    title: "Automation & Frameworks",
    items: [
      { name: "Selenium", proficiency: 5, relatedProject: "WMS Test Automation" },
      { name: "Ranorex", proficiency: 4, relatedProject: "PDM System Testing" },
      { name: "Maven", proficiency: 4 },
      { name: "TestNG", proficiency: 5, relatedProject: "API Testing" },
      { name: "JUnit", proficiency: 5 },
      { name: "Cucumber", proficiency: 4, relatedProject: "BDD Framework" },
      { name: "Gherkin", proficiency: 4 },
    ],
  },
  {
    icon: Code,
    title: "Programming Languages",
    items: [
      { name: "Java", proficiency: 5, relatedProject: "Enterprise Applications" },
      { name: "C#", proficiency: 4, relatedProject: "Ranorex Automation" },
      { name: "Python", proficiency: 4, relatedProject: "Scripting & Utilities" },
    ],
  },
  {
    icon: Globe,
    title: "API & Integration Testing",
    items: [
      { name: "REST", proficiency: 5 },
      { name: "SOAP", proficiency: 4 },
      { name: "Postman", proficiency: 5, relatedProject: "API Testing" },
      { name: "SoapUI", proficiency: 4 },
      { name: "API Mocking", proficiency: 4 },
    ],
  },
  {
    icon: GitBranch,
    title: "CI/CD & DevOps",
    items: [
      { name: "Jenkins", proficiency: 5, relatedProject: "CI/CD Pipelines" },
      { name: "Docker", proficiency: 4 },
      { name: "Git", proficiency: 5 },
      { name: "GitHub", proficiency: 5, relatedProject: "Version Control" },
    ],
  },
  {
    icon: ClipboardList,
    title: "Test Management",
    items: [
      { name: "JIRA", proficiency: 5, relatedProject: "Project Management" },
      { name: "Xray", proficiency: 5 },
      { name: "HP ALM", proficiency: 5, relatedProject: "Test Case Management" },
      { name: "Polarion", proficiency: 5 },
    ],
  },
  {
    icon: Monitor,
    title: "Development & IDE",
    items: [
      { name: "IntelliJ IDEA", proficiency: 5 },
      { name: "Visual Studio", proficiency: 4 },
      { name: "VS Code", proficiency: 5 },
      { name: "Eclipse", proficiency: 4 },
    ],
  },
  {
    icon: FlaskConical,
    title: "Methodologies",
    items: [
      { name: "Agile", proficiency: 5 },
      { name: "SCRUM", proficiency: 5, relatedProject: "Team Workflow" },
      { name: "Waterfall", proficiency: 4 },
      { name: "CI/CD", proficiency: 5 },
    ],
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const TechStack = () => {
  return (
    <div className="min-h-screen py-12 px-4">
      <div className="max-w-6xl mx-auto">
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
            🧰 Tech <span className="text-gradient-cyan">Stack</span>
          </h1>
          <p className="text-muted-foreground mt-3">
            Tools, languages, and frameworks I work with daily. Hover to see related projects.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {categories.map((category, catIndex) => (
            <motion.div
              key={category.title}
              variants={item}
              className="p-6 rounded-xl bg-card border border-border/50 hover:border-primary/25 transition-all duration-300 shadow-card"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <category.icon className="w-5 h-5 text-primary" />
                </div>
                <h2 className="font-semibold text-foreground">{category.title}</h2>
              </div>

              <div className="space-y-4">
                {category.items.map((tech, techIndex) => (
                  <motion.div
                    key={tech.name}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: techIndex * 0.05 }}
                    className="group"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium text-foreground">{tech.name}</span>
                      <span className="text-xs text-muted-foreground font-mono">
                        {tech.proficiency}/5
                      </span>
                    </div>
                    <div className="relative h-2 bg-muted/30 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${(tech.proficiency / 5) * 100}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: techIndex * 0.1 }}
                        className="h-full bg-gradient-to-r from-primary to-secondary rounded-full"
                      />
                      {/* Glow effect */}
                      <div className="absolute inset-0 bg-primary/20 blur-sm opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                    {tech.relatedProject && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        whileHover={{ opacity: 1, height: "auto" }}
                        className="overflow-hidden"
                      >
                        <p className="text-xs text-primary/70 font-mono mt-1">
                          → {tech.relatedProject}
                        </p>
                      </motion.div>
                    )}
                  </motion.div>
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
