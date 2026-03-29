import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

const updates = [
  { date: "15.12.2025", title: "ATS Score Tool Launched", desc: "ATS Score Tool to calculate how ATS-friendly your CV!" },
  { date: "15.12.2025", title: "AI Selection Tool Launched", desc: "AI Tool Selector to help you pick the right AI tool with simple yes/no questions." },
  { date: "15.12.2025", title: "Career Decision Tool Launched", desc: "Career decision tool to help you make clear yes/no decisions with logic and emotion scoring." },
  { date: "14.12.2025", title: "Bookmark Collection Added", desc: "Lots of remarkable bookmarks! Check it out!" },
  { date: "12.12.2025", title: "Explorer is live", desc: "Explorer pages (Articles, Bookmarks, Notes) are now running with a shared data file." },
];

const UpdatesSection = () => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-3xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-2xl md:text-3xl font-bold mb-10 text-center"
        >
          Latest <span className="text-gradient">Updates</span>
        </motion.h2>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 top-0 bottom-0 w-px bg-border" />

          <div className="space-y-6">
            {updates.map((update, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative pl-12"
              >
                {/* Dot */}
                <div className="absolute left-[11px] top-2 w-[10px] h-[10px] rounded-full bg-primary shadow-glow" />

                <div className="group p-4 rounded-lg bg-card/50 border border-border/40 hover:border-primary/20 transition-colors">
                  <span className="text-xs text-muted-foreground font-mono">{update.date}</span>
                  <h3 className="font-semibold text-foreground mt-1 flex items-center gap-2">
                    {update.title}
                    <ExternalLink className="w-3.5 h-3.5 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                  </h3>
                  <p className="text-sm text-muted-foreground mt-1">{update.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default UpdatesSection;
