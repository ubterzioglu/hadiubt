import { motion } from "framer-motion";
import { ArrowLeft, Briefcase } from "lucide-react";
import { Link } from "react-router-dom";

interface Achievement {
  text: string;
  tools: string;
}

interface Role {
  title: string;
  company: string;
  period: string;
  achievements: Achievement[];
}

const roles: Role[] = [
  {
    title: "Test Lead",
    company: "Swisslog",
    period: "2021 – 2025 · Dortmund",
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
    period: "2020 – 2021 · Istanbul",
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
    period: "2017 – 2020 · Istanbul",
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
    achievements: [
      { text: "Interior design & vehicle components development", tools: "Catia V4/V5, Siemens NX, SAP, DOORS, SWAN" },
      { text: "Integration team – Project Next Generation Conecto", tools: "Catia V5, Siemens NX, SAP, DOORS" },
      { text: "Factory support for customer special order vehicles (Mannheim)", tools: "Catia V5, SAP, DOORS" },
      { text: "Prototype assembly support for NCI E6 vehicles", tools: "Catia V5, Siemens NX, SAP, DOORS" },
      { text: "Integration support for Setra vehicle assembly projects", tools: "Catia V5, Siemens NX, SAP, DOORS" },
    ],
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45 } },
};

const Experience = () => {
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
            💼 <span className="text-gradient">Experience</span>
          </h1>
          <p className="text-muted-foreground mt-3">
            18+ years across automotive engineering and software quality assurance.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          <div className="absolute left-5 top-0 bottom-0 w-px bg-border" />

          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="space-y-10"
          >
            {roles.map((role) => (
              <motion.div key={role.title + role.period} variants={item} className="relative pl-14">
                {/* Dot */}
                <div className="absolute left-[14px] top-1 w-[14px] h-[14px] rounded-full border-2 border-primary bg-background" />

                <div className="p-6 rounded-xl bg-card border border-border/50 shadow-card">
                  <div className="flex items-start gap-3 mb-1">
                    <Briefcase className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <h2 className="text-xl font-bold text-foreground">{role.title}</h2>
                      <p className="text-sm text-primary font-medium">{role.company}</p>
                      <p className="text-xs text-muted-foreground mt-0.5">{role.period}</p>
                    </div>
                  </div>

                  <ul className="mt-5 space-y-3">
                    {role.achievements.map((a, i) => (
                      <li key={i} className="flex flex-col gap-1">
                        <span className="text-sm text-foreground leading-relaxed">
                          <span className="text-primary mr-1.5">✓</span>
                          {a.text}
                        </span>
                        <span className="text-xs text-muted-foreground/70 pl-5 font-mono">
                          {a.tools}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
