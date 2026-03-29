import { motion } from "framer-motion";
import { ArrowLeft, FileText, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";

const cvs = [
  {
    emoji: "☕",
    label: "English CV",
    href: "https://drive.google.com/file/d/1T5yUafZI9nRv1aVWeEKBHcU6apZOojP2/view?usp=drive_link",
  },
  {
    emoji: "🍺",
    label: "German CV",
    href: "https://drive.google.com/file/d/15_4pguyDYAYtoqYs_7rwCCzdHknfvZ6D/view?usp=drive_link",
  },
];

const MyCv = () => {
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
          className="mb-12"
        >
          <h1 className="text-3xl md:text-4xl font-bold">
            📄 My <span className="text-gradient">CV</span>
          </h1>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-5 mb-8">
          {cvs.map((cv, i) => (
            <motion.a
              key={cv.label}
              href={cv.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.15 + i * 0.1 }}
              className="group flex flex-col items-center gap-4 p-8 rounded-xl bg-card border border-border/50 hover:border-primary/30 shadow-card transition-colors"
            >
              <span className="text-5xl">{cv.emoji}</span>
              <div className="text-center">
                <h2 className="text-lg font-bold text-foreground">{cv.label}</h2>
                <span className="inline-flex items-center gap-1.5 mt-2 text-sm text-primary font-medium">
                  <FileText className="w-4 h-4" />
                  View / Download (PDF)
                  <ExternalLink className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                </span>
              </div>
            </motion.a>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-center text-xs text-muted-foreground"
        >
          PDF • ATS-friendly • Updated regularly
        </motion.p>
      </div>
    </div>
  );
};

export default MyCv;
