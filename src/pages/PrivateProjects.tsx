import { motion } from "framer-motion";
import { ArrowLeft, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

const projects = [
  {
    title: "UBT – Testing",
    desc: "A personal quality assurance brand focused on sharing real-world testing experience and best practices. The platform covers test strategies, tools, and career-related insights, serving as a professional personal knowledge hub.",
  },
  {
    title: "All in 2 Minutes!",
    desc: "A short-form content series designed to explain complex topics in under two minutes. The concept focuses on speed, clarity, and entertainment—combining educational value with engaging presentation.",
  },
  {
    title: "Press Enter to Code",
    desc: "A personal tech and coding content channel focused on development, testing, and productivity. Content includes programming concepts, automation topics, and learning strategies targeting both developers and QA professionals.",
  },
  {
    title: "Software Tester Network",
    desc: "A professional QA community created to connect software testers globally. Knowledge sharing, technical discussions, and career-focused content are actively supported, promoting collaboration across different QA expertise levels.",
  },
  {
    title: "CAL Community",
    desc: "A digital alumni and social community platform built to strengthen long-term connections. The project focuses on engagement, event sharing, and collective interaction, achieving strong organic growth in a short time.",
  },
  {
    title: "Picked Scenes!",
    desc: "A curated digital project highlighting powerful moments from films and series. Each post focuses on storytelling, emotion, and cinematic impact, combining visual culture with short-form editorial content.",
  },
  {
    title: "Loved Your T-Shirt",
    desc: "A social content concept built around street culture, identity, and visual expression through clothing. The project connects fashion, humor, and spontaneous interaction, emphasizing creativity in everyday moments.",
  },
  {
    title: "Factovium",
    desc: "An educational micro-content platform built around daily \"Did you know?\" facts. The project focuses on curiosity, learning, and knowledge sharing, designed to be short, informative, and engaging.",
  },
  {
    title: "Don't Follow Just Like",
    desc: "An entertainment-focused digital brand built on irony, humor, and experimental social content. The concept plays with reversed social-media dynamics and is designed purely for engagement and creative expression.",
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

const PrivateProjects = () => {
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
            🌟 Private <span className="text-gradient">Projects</span>
          </h1>
          <p className="text-muted-foreground mt-3">
            Personal brands, communities, and creative content projects.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="grid gap-5"
        >
          {projects.map((project) => (
            <motion.article
              key={project.title}
              variants={item}
              className="group p-6 rounded-xl bg-card border border-border/50 hover:border-primary/25 transition-colors shadow-card"
            >
              <div className="flex items-start gap-4">
                <div className="mt-1 flex-shrink-0 w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                  <Sparkles className="w-5 h-5 text-accent" />
                </div>
                <div className="flex-1 min-w-0">
                  <h2 className="text-xl font-bold text-foreground">
                    {project.title}
                  </h2>
                  <p className="text-sm text-muted-foreground mt-3 leading-relaxed">
                    {project.desc}
                  </p>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default PrivateProjects;
