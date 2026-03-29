import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const highlights = [
  "15+ years of experience",
  "Test Management & Automation",
  "Agile / SCRUM",
  "CI/CD Pipelines",
  "FAT & SAT Coordination",
  "Enterprise QA Systems",
  "Team Mentoring",
  "Cross-functional Leadership",
];

const AboutMe = () => {
  return (
    <div className="min-h-screen py-12 px-4">
      <div className="max-w-3xl mx-auto">
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
          className="mb-10"
        >
          <h1 className="text-3xl md:text-4xl font-bold">
            🙋‍♂️ About <span className="text-gradient">Me</span>
          </h1>
        </motion.div>

        {/* Profile + Bio */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="flex flex-col md:flex-row gap-8 items-start mb-12"
        >
          <div className="flex-shrink-0">
            <div className="w-32 h-32 rounded-2xl bg-gradient-hero p-1">
              <img
                src="https://ubterzioglu.de/img/picprofile.png"
                alt="Umut Barış Terzioğlu"
                className="w-full h-full rounded-2xl object-cover"
              />
            </div>
          </div>
          <div>
            <h2 className="text-xl font-bold text-foreground mb-1">Umut Barış Terzioğlu</h2>
            <p className="text-sm text-primary font-medium mb-4">Senior Software QA Engineer · Dortmund, Germany</p>
            <p className="text-muted-foreground leading-relaxed">
              Senior Software Quality Assurance Engineer with 15+ years of experience in test management, test automation, and process optimization. Proven expertise in leading global testing initiatives, implementing automation frameworks, and managing cross-functional teams. Specialized in Agile/SCRUM methodologies, CI/CD pipelines, and quality assurance for enterprise systems. Strong background in coordinating FAT and SAT activities, mentoring teams, and delivering high-quality software solutions.
            </p>
          </div>
        </motion.div>

        {/* Highlights */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <h3 className="text-lg font-semibold text-foreground mb-4">Key Strengths</h3>
          <div className="flex flex-wrap gap-2">
            {highlights.map((h) => (
              <span
                key={h}
                className="px-4 py-2 text-sm font-medium rounded-full bg-primary/10 text-primary border border-primary/20"
              >
                {h}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutMe;
