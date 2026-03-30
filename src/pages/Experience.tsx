import { motion } from "framer-motion";
import { ArrowLeft, Briefcase, Calendar, MapPin, ChevronRight, GitBranch, Rocket, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";
import { useRef } from "react";

interface Achievement {
  text: string;
  tools: string;
}

interface Role {
  title: string;
  company: string;
  period: string;
  location: string;
  achievements: Achievement[];
  status: "completed" | "current";
}

const roles: Role[] = [
  {
    title: "Test Lead",
    company: "Swisslog",
    period: "2021 – 2025",
    location: "Dortmund, Germany",
    status: "completed",
    achievements: [
      { text: "Designed & executed 1,000+ test cases", tools: "Polarion, Selenium, Java" },
      { text: "Test Lead for one of Swisslog's largest projects with 500 users & 10 modules", tools: "Polarion, WMS, WES" },
      { text: "Executed 20+ FAT & SAT sessions with customers", tools: "WMS, WES, SynQ, Polarion" },
      { text: "Delivered 50+ detailed test & defect reports to Project Management", tools: "Polarion, Excel, SCRUM" },
      { text: "Prepared 5 complete project-level test plans", tools: "Risk-Based Testing, SCRUM, Polarion" },
      { text: "Reviewed automation of 1,000+ test cases", tools: "Selenium, Java, CI Pipelines" },
      { text: "Provided on-site customer support for 5 go-lives / rollouts", tools: "WMS, WES, SynQ, Polarion" },
      { text: "Mentored & onboarded 15+ colleagues", tools: "SCRUM, Knowledge Transfer, Agile Coaching" },
    ],
  },
  {
    title: "Senior Process Manager",
    company: "Daimler – Mercedes-Benz",
    period: "2020 – 2021",
    location: "Istanbul, Turkey",
    status: "completed",
    achievements: [
      { text: "Built the complete test structure for Daimler's Part Management System (SRM)", tools: "JIRA, Xray, HP ALM, Ranorex, C#" },
      { text: "Designed the full test structure for Daimler's internal communication system (DARRS)", tools: "JIRA, HP ALM, Engineering Client, Smaragd" },
      { text: "Selected & evaluated test tools via scoring model", tools: "JIRA, Xray, Ranorex, HP ALM" },
      { text: "Global responsibility for Daimler AG's Part Management System (SRM)", tools: "~40,000 users · Engineering Client, Smaragd, DARRS" },
      { text: "Provided 1st & 2nd level support with 1,000+ resolved tickets", tools: "JIRA Service Desk, Defect & Incident Management" },
      { text: "Process & test automation with 250+ automated/reviewed test cases", tools: "Ranorex, C#, CI Pipelines" },
      { text: "Planned & coordinated 10+ enterprise-level releases for SRM", tools: "JIRA, Confluence, SCRUM" },
      { text: "Prepared 50+ test & management reports for stakeholders", tools: "JIRA Dashboards, Excel, Confluence" },
      { text: "Onboarded & mentored 5+ colleagues", tools: "Agile, Knowledge Transfer, Mentorship" },
    ],
  },
  {
    title: "Senior Test Manager",
    company: "Daimler – Mercedes-Benz",
    period: "2017 – 2020",
    location: "Istanbul, Turkey",
    status: "completed",
    achievements: [
      { text: "Created the software test strategy for Daimler PDM systems", tools: "JIRA, Xray, HP ALM, SCRUM" },
      { text: "Quality & release management for PDM system \"Smaragd\" (10+ releases)", tools: "JIRA, Confluence, SCRUM" },
      { text: "Executed E2E test activities for core PDM modules", tools: "JIRA, HP ALM, E2E Testing" },
      { text: "Managed HP ALM → XRAY migration for Smaragd", tools: "HP ALM, XRAY, JIRA" },
      { text: "Applied SCRUM methodology across test processes", tools: "SCRUM, JIRA, Confluence" },
      { text: "Selected test tools via scoring model & technical evaluation", tools: "Ranorex, JIRA, XRAY, HP ALM, C#" },
      { text: "Built JIRA projects from scratch for Daimler test activities", tools: "JIRA Administration, Workflow Design, Defect Management" },
      { text: "Automated 1,000+ test cases for PDM System \"Smaragd\"", tools: "Ranorex, C#" },
      { text: "Mentored & onboarded 20+ colleagues", tools: "SCRUM, Knowledge Transfer, Agile Coaching" },
    ],
  },
  {
    title: "Development Engineer",
    company: "Daimler – Mercedes-Benz",
    period: "2007 – 2017",
    location: "Istanbul, Turkey",
    status: "completed",
    achievements: [
      { text: "Interior design & vehicle components development", tools: "Catia V4/V5, Siemens NX, SAP, DOORS, SWAN" },
      { text: "Integration team – Project Next Generation Conecto", tools: "Catia V5, Siemens NX, SAP, DOORS" },
      { text: "Factory support for customer special order vehicles (Mannheim)", tools: "Catia V5, SAP, DOORS" },
      { text: "Prototype assembly support for NCI E6 vehicles", tools: "Catia V5, Siemens NX, SAP, DOORS" },
      { text: "Integration support for Setra vehicle assembly projects", tools: "Catia V5, Siemens NX, SAP, DOORS" },
    ],
  },
];

const Experience = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const container = {
    hidden: {},
    show: { transition: { staggerChildren: 0.15 } },
  };

  const item = {
    hidden: { opacity: 0, scale: 0.9 },
    show: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  }

  return (
    <div className="min-h-screen py-12 px-4">
      <div className="max-w-7xl mx-auto">
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
            💼 <span className="text-gradient-cyan">Experience</span>
          </h1>
          <p className="text-muted-foreground mt-3">
            18+ years across automotive engineering and software quality assurance.
          </p>
        </motion.div>

        {/* Pipeline Header */}
        <div className="flex items-center gap-3 mb-8 px-4">
          <GitBranch className="w-5 h-5 text-primary" />
          <span className="font-mono text-sm text-muted-foreground">DEPLOYMENT_PIPELINE</span>
          <div className="flex-1 h-px bg-border/30" />
          <span className="font-mono text-xs text-muted-foreground">4 STAGES</span>
        </div>

        {/* Horizontal Scrollable Pipeline */}
        <div
          ref={scrollContainerRef}
          className="overflow-x-auto pb-8 -webkit-overflow-scrolling-touch"
          style={{ scrollSnapType: "x mandatory" }}
        >
          <div className="flex gap-6 min-w-max px-4">
            {roles.map((role, index) => (
              <motion.div
                key={role.title + role.period}
                variants={item}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-50px" }}
                className="flex-shrink-0 w-[350px] md:w-[400px] scroll-snap-align-start"
              >
                {/* Connection Line */}
                {index > 0 && (
                  <div className="hidden md:flex absolute -left-6 top-1/2 transform -translate-y-1/2 z-0">
                    <div className="w-12 h-px bg-gradient-to-r from-primary/50 to-transparent" />
                  </div>
                )}

                <div className="h-full p-6 rounded-2xl bg-card border border-border/50 hover:border-primary/30 transition-all duration-300 shadow-card hover:shadow-glow-cyan">
                  {/* Status Badge */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                      <div className={`w-3 h-3 rounded-full ${role.status === "current" ? "bg-primary animate-pulse" : "bg-primary/50"}`} />
                      <span className="text-xs font-mono text-muted-foreground uppercase tracking-wider">
                        {role.status}
                      </span>
                    </div>
                    <div className="flex items-center gap-1 text-xs text-muted-foreground">
                      <Calendar className="w-3 h-3" />
                      <span>{role.period}</span>
                    </div>
                  </div>

                  {/* Header */}
                  <div className="flex items-start gap-3 mb-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Briefcase className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h2 className="text-lg font-bold text-foreground">{role.title}</h2>
                      <p className="text-sm text-primary font-medium">{role.company}</p>
                      <div className="flex items-center gap-1 mt-1 text-xs text-muted-foreground">
                        <MapPin className="w-3 h-3" />
                        <span>{role.location}</span>
                      </div>
                    </div>
                  </div>

                  {/* Achievements */}
                  <div className="space-y-2 max-h-[300px] overflow-y-auto scrollbar-thin pr-2">
                    {role.achievements.map((achievement, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.05 }}
                        className="flex flex-col gap-1 p-2 rounded-lg hover:bg-primary/5 transition-colors"
                      >
                        <div className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                          <span className="text-sm text-foreground leading-relaxed">
                            {achievement.text}
                          </span>
                        </div>
                        <span className="text-xs text-muted-foreground/70 pl-6 font-mono">
                          {achievement.tools}
                        </span>
                      </motion.div>
                    ))}
                  </div>

                  {/* View More Button */}
                  <div className="mt-4 pt-4 border-t border-border/30">
                    <button className="w-full flex items-center justify-center gap-2 text-sm text-primary hover:text-primary/80 transition-colors group">
                      <span>View Details</span>
                      <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="flex items-center justify-center gap-2 mt-4 md:hidden">
          <span className="text-xs text-muted-foreground font-mono">← Swipe to navigate →</span>
        </div>

        {/* Pipeline Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="flex items-center justify-center gap-3 mt-8"
        >
          <Rocket className="w-5 h-5 text-primary" />
          <span className="font-mono text-sm text-muted-foreground">
            PIPELINE_COMPLETE
          </span>
          <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
        </motion.div>
      </div>
    </div>
  );
};

export default Experience;
