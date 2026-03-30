import { motion } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import { Github, Linkedin, FileText, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

// Particle system for interactive background
interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  opacity: number;
}

const ParticleField = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: 0, y: 0 });
  const particlesRef = useRef<Particle[]>([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;
    const particleCount = 80;
    const connectionDistance = 150;
    const mouseInfluence = 100;

    const resize = () => {
      canvas.width = canvas.offsetWidth * window.devicePixelRatio;
      canvas.height = canvas.offsetHeight * window.devicePixelRatio;
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
    };

    const initParticles = () => {
      particlesRef.current = Array.from({ length: particleCount }, () => ({
        x: Math.random() * canvas.offsetWidth,
        y: Math.random() * canvas.offsetHeight,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        size: Math.random() * 2 + 1,
        opacity: Math.random() * 0.5 + 0.2,
      }));
    };

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      };
    };

    const draw = () => {
      ctx.fillStyle = "rgba(11, 17, 32, 0.1)";
      ctx.fillRect(0, 0, canvas.offsetWidth, canvas.offsetHeight);

      particlesRef.current.forEach((particle, i) => {
        // Mouse influence
        const dx = mouseRef.current.x - particle.x;
        const dy = mouseRef.current.y - particle.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < mouseInfluence) {
          const force = (mouseInfluence - dist) / mouseInfluence;
          particle.vx -= (dx / dist) * force * 0.02;
          particle.vy -= (dy / dist) * force * 0.02;
        }

        // Update position
        particle.x += particle.vx;
        particle.y += particle.vy;

        // Boundary check
        if (particle.x < 0 || particle.x > canvas.offsetWidth) particle.vx *= -1;
        if (particle.y < 0 || particle.y > canvas.offsetHeight) particle.vy *= -1;

        // Draw particle
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(0, 242, 254, ${particle.opacity})`;
        ctx.fill();

        // Draw connections
        particlesRef.current.slice(i + 1).forEach((other) => {
          const dx = particle.x - other.x;
          const dy = particle.y - other.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < connectionDistance) {
            ctx.beginPath();
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(other.x, other.y);
            ctx.strokeStyle = `rgba(0, 242, 254, ${0.1 * (1 - dist / connectionDistance)})`;
            ctx.stroke();
          }
        });
      });

      animationId = requestAnimationFrame(draw);
    };

    resize();
    initParticles();
    window.addEventListener("resize", resize);
    canvas.addEventListener("mousemove", handleMouseMove);
    draw();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resize);
      canvas.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
      style={{ opacity: 0.6 }}
    />
  );
};

const HeroSection = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Particle Field Background */}
      <div className="absolute inset-0 pointer-events-none">
        <ParticleField />
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/20 to-background" />
      </div>

      {/* Main Content */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isLoaded ? "visible" : "hidden"}
        className="relative z-10 w-full max-w-6xl mx-auto px-4 py-20"
      >
        <div className="flex flex-col items-center text-center">
          {/* Tagline */}
          <motion.div variants={itemVariants} className="mb-6">
            <span className="font-mono text-sm text-primary/70 tracking-wider">
              {"// PORTFOLIO_2025"}
            </span>
          </motion.div>

          {/* Main Title */}
          <motion.h1
            variants={itemVariants}
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4"
          >
            <span className="text-foreground">Uğur Terzioğlu</span>
          </motion.h1>

          {/* Subtitle with Gradient */}
          <motion.div
            variants={itemVariants}
            className="text-xl md:text-2xl lg:text-3xl font-mono mb-8"
          >
            <span className="text-gradient-cyan">Architecting Scalable Systems</span>
            <span className="inline-block w-3 h-6 ml-1 bg-primary animate-pulse" />
          </motion.div>

          {/* Description */}
          <motion.p
            variants={itemVariants}
            className="text-muted-foreground text-lg md:text-xl max-w-2xl mb-12 leading-relaxed"
          >
            Senior Software QA Engineer with 15+ years in test management, automation, 
            and enterprise systems. Specialized in Agile/SCRUM, CI/CD pipelines, and 
            delivering high-quality software solutions.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 mb-16"
          >
            <Link
              to="/corporate-projects"
              className="group px-8 py-4 bg-gradient-to-r from-primary to-secondary text-background font-semibold rounded-lg shadow-glow-cyan hover:shadow-glow-blue transition-all duration-300 flex items-center gap-2"
            >
              <span>Projeleri Gör</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/my-cv"
              className="group px-8 py-4 border border-primary/30 text-primary font-semibold rounded-lg hover:border-primary hover:bg-primary/5 transition-all duration-300 flex items-center gap-2"
            >
              <FileText className="w-4 h-4" />
              <span>CV İndir</span>
            </Link>
          </motion.div>

          {/* Social Links */}
          <motion.div
            variants={itemVariants}
            className="flex items-center gap-6"
          >
            <a
              href="https://linkedin.com/in/ubterzioglu"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors duration-300"
            >
              <div className="p-3 rounded-lg border border-border/50 group-hover:border-primary/50 group-hover:shadow-glow-cyan transition-all duration-300">
                <Linkedin className="w-5 h-5" />
              </div>
              <span className="font-mono text-sm hidden sm:block">LinkedIn</span>
            </a>
            <a
              href="https://github.com/ubterzioglu"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors duration-300"
            >
              <div className="p-3 rounded-lg border border-border/50 group-hover:border-primary/50 group-hover:shadow-glow-cyan transition-all duration-300">
                <Github className="w-5 h-5" />
              </div>
              <span className="font-mono text-sm hidden sm:block">GitHub</span>
            </a>
          </motion.div>

          {/* Tech Stack Preview */}
          <motion.div
            variants={itemVariants}
            className="mt-16 flex flex-wrap justify-center gap-3"
          >
            {["Java", "Selenium", "JIRA", "Docker", "Jenkins", "Python"].map((tech, index) => (
              <span
                key={tech}
                className="px-4 py-2 text-sm font-mono text-muted-foreground bg-card/50 border border-border/30 rounded-full hover:border-primary/50 hover:text-primary transition-all duration-300"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {tech}
              </span>
            ))}
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="flex flex-col items-center gap-2 text-muted-foreground">
          <span className="text-xs font-mono">Scroll</span>
          <div className="w-6 h-10 border-2 border-border/50 rounded-full flex justify-center pt-2">
            <div className="w-1.5 h-1.5 bg-primary rounded-full animate-bounce" />
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
