import { motion } from "framer-motion";
import { ArrowLeft, Building2 } from "lucide-react";
import { Link } from "react-router-dom";

const projects = [
  {
    title: "Smaragd",
    company: "Daimler / Mercedes-Benz",
    desc: "A global Product Data Management system used by thousands of engineers across Mercedes-Benz. Test strategy, quality processes, and release management were established and executed throughout the project lifecycle. The system supported highly complex engineering workflows and integrations.",
  },
  {
    title: "SRM",
    company: "Daimler / Mercedes-Benz",
    desc: "A critical Supply & Parts Management platform serving tens of thousands of internal users. End-to-end testing, test automation processes, and global rollout support were delivered. The project played a key role in ensuring stability across global supply chain operations.",
  },
  {
    title: "DARRS",
    company: "Daimler / Mercedes-Benz",
    desc: "An internal communication and reporting system used for operational and management-level decision processes. Functional, integration, and user acceptance testing activities were carried out. The system directly supported data-driven corporate operations.",
  },
  {
    title: "TKL",
    company: "Swisslog",
    desc: "A warehouse automation and robotics integration project for logistics operations. Software and hardware synchronization tests were executed across robotic and conveyor systems. The project required high reliability under real-time operational conditions.",
  },
  {
    title: "Kruitbosch",
    company: "Swisslog",
    desc: "A warehouse management system supporting retail distribution operations. Order picking, stock management, and shipment processes were tested across automated workflows. Close interaction between physical automation and software systems was a key success factor.",
  },
  {
    title: "Albert Heijn",
    company: "Swisslog",
    desc: "A high-volume warehouse automation project for one of Europe's largest retail chains. System validation, go-live support, and data integrity testing were delivered under heavy operational load. The project operated in a high-availability production environment.",
  },
  {
    title: "EDEKA",
    company: "Swisslog",
    desc: "A large-scale automation project for Germany's leading supermarket group. Pre-go-live validation, integration testing, and operational stability checks were conducted. The system ensured uninterrupted warehouse operations during transition phases.",
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45 } },
};

const CorporateProjects = () => {
  return (
    <div className="min-h-screen py-12 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Back link */}
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

        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <h1 className="text-3xl md:text-4xl font-bold">
            🚀 Corporate <span className="text-gradient">Projects</span>
          </h1>
          <p className="text-muted-foreground mt-3">
            Enterprise-grade projects delivered across automotive and logistics industries.
          </p>
        </motion.div>

        {/* Projects grid */}
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
                <div className="mt-1 flex-shrink-0 w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Building2 className="w-5 h-5 text-primary" />
                </div>
                <div className="flex-1 min-w-0">
                  <h2 className="text-xl font-bold text-foreground">
                    {project.title}
                  </h2>
                  <span className="text-sm text-primary font-medium">
                    {project.company}
                  </span>
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

export default CorporateProjects;
