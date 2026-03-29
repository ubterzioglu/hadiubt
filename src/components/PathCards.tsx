import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const paths = [
  { emoji: "😶‍🌫️", title: "I don't know!", desc: "Let me show you around.", color: "from-primary/20 to-primary/5" },
  { emoji: "👔", title: "Recruiter", desc: "Hiring view: CV, highlights, and quick fit.", color: "from-accent/20 to-accent/5" },
  { emoji: "📚", title: "Explorer", desc: "Knowledge corner: links, articles, reviews, and notes.", color: "from-primary/15 to-accent/10" },
  { emoji: "🤝", title: "Colleague", desc: "How I work, collaborate, and support.", color: "from-accent/15 to-primary/10" },
  { emoji: "📊", title: "QA Engineer", desc: "My QA mindset, tools, and test approach.", color: "from-primary/20 to-primary/5" },
  { emoji: "🧐", title: "Curious Visitor", desc: "Quick tour: what I do, in plain language.", color: "from-accent/20 to-accent/5" },
  { emoji: "👽", title: "Alien", desc: "Fun mode: welcome, Earth visitor.", color: "from-primary/10 to-accent/15" },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

const PathCards = () => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-3xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-2xl md:text-3xl font-bold mb-10 text-center"
        >
          Choose your <span className="text-gradient">path</span>
        </motion.h2>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="grid gap-3"
        >
          {paths.map((path) => (
            <motion.div
              key={path.title}
              variants={item}
              whileHover={{ x: 6, scale: 1.01 }}
              className={`group relative flex items-center gap-4 p-5 rounded-xl bg-gradient-to-r ${path.color} border border-border/50 cursor-pointer transition-colors hover:border-primary/30`}
            >
              <span className="text-3xl flex-shrink-0">{path.emoji}</span>
              <div className="flex-1 min-w-0">
                <h3 className="font-semibold text-foreground text-lg">{path.title}</h3>
                <p className="text-sm text-muted-foreground">{path.desc}</p>
              </div>
              <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors flex-shrink-0" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default PathCards;
