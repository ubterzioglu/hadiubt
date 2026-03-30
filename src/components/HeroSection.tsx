import { motion } from "framer-motion";
import { useState, useEffect, useRef } from "react";

const STAR_COUNT = 150;
const STAR_SIZES = [1, 2, 3];
const STAR_COLORS = ["#ffffff", "#ffffd4", "#ffd4d4", "#d4d4ff", "#d4ffff"];
const TWINKLE_SPEED = 0.02;

const StarField = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    let stars: Array<{
      x: number;
      y: number;
      size: number;
      color: string;
      opacity: number;
      twinkleSpeed: number;
      twinklePhase: number;
    }> = [];

    const resize = () => {
      canvas.width = canvas.offsetWidth * window.devicePixelRatio;
      canvas.height = canvas.offsetHeight * window.devicePixelRatio;
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
      
      // Generate stars if not already generated
      if (stars.length === 0) {
        stars = Array.from({ length: STAR_COUNT }, () => ({
          x: Math.random() * canvas.offsetWidth,
          y: Math.random() * canvas.offsetHeight,
          size: STAR_SIZES[Math.floor(Math.random() * STAR_SIZES.length)],
          color: STAR_COLORS[Math.floor(Math.random() * STAR_COLORS.length)],
          opacity: Math.random() * 0.8 + 0.2,
          twinkleSpeed: Math.random() * 0.02 + 0.01,
          twinklePhase: Math.random() * Math.PI * 2
        }));
      }
    };

    resize();
    window.addEventListener("resize", resize);

    const draw = () => {
      // Clear canvas with very dark background
      ctx.fillStyle = "rgba(0, 0, 0, 0.98)";
      ctx.fillRect(0, 0, canvas.offsetWidth, canvas.offsetHeight);

      // Draw stars
      stars.forEach(star => {
        // Update twinkle phase
        star.twinklePhase += star.twinkleSpeed;
        
        // Calculate opacity with sine wave for smooth twinkling
        const twinkleOpacity = Math.sin(star.twinklePhase) * 0.3 + 0.7;
        const currentOpacity = star.opacity * twinkleOpacity;
        
        // Draw star with glow effect
        ctx.save();
        ctx.globalAlpha = currentOpacity;
        
        // Draw glow
        const gradient = ctx.createRadialGradient(star.x, star.y, 0, star.x, star.y, star.size * 3);
        gradient.addColorStop(0, star.color);
        gradient.addColorStop(0.5, star.color + "40");
        gradient.addColorStop(1, "transparent");
        
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size * 3, 0, Math.PI * 2);
        ctx.fill();
        
        // Draw star core
        ctx.fillStyle = star.color;
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
        ctx.fill();
        
        ctx.restore();
      });

      animId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
      style={{ opacity: 1 }}
    />
  );
};

const HeroSection = () => {
  const menuItems = [
    { name: "About Me", href: "#about-me" },
    { name: "Experience", href: "#experience" },
    { name: "Tech Stack", href: "#tech-stack" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" }
  ];

  const slides = [
    {
      title: "QA Engineer",
      subtitle: "Dortmund, Germany",
      description: "Quality Assurance Professional"
    },
    {
      title: "Automation Expert",
      subtitle: "Test Automation",
      description: "CI/CD & Testing"
    },
    {
      title: "Problem Solver",
      subtitle: "Critical Thinking",
      description: "Analytical Skills"
    }
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden px-4">
      {/* Star field background */}
      <div className="absolute inset-0 pointer-events-none">
        <StarField />
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/30 to-background" />
      </div>

      <div className="relative z-10 w-full max-w-6xl mx-auto px-4">
        {/* Unified Card - Slideshow with Menu Buttons */}
        <div className="relative h-64 lg:h-96 bg-gradient-to-br from-slate-900/50 to-slate-800/50 rounded-2xl p-6 border border-slate-700/50 backdrop-blur-sm">
          {/* yeni.png image - 3x larger, positioned to end exactly at card bottom */}
          <div className="absolute bottom-0 left-4">
            <img
              src="yeni.png"
              alt="Hadi"
              className="w-72 h-96 object-cover rounded-lg opacity-90"
              style={{ clipPath: 'inset(0 0 0 0)' }}
            />
          </div>

          {/* Slide indicators - moved higher */}
          <div className="absolute top-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentSlide ? "bg-white" : "bg-white/50"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

          {/* Menu buttons inside the card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="absolute right-6 top-1/2 transform -translate-y-1/2 space-y-4"
          >
            {menuItems.map((item, index) => (
              <motion.a
                key={item.name}
                href={item.href}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                className="block w-48 py-3 px-6 text-center bg-gradient-to-r from-primary/10 to-primary/20 hover:from-primary/20 hover:to-primary/30 rounded-lg border border-primary/20 hover:border-primary/40 transition-all duration-300 text-lg font-medium text-primary hover:text-primary/80"
              >
                {item.name}
              </motion.a>
            ))}
          </motion.div>

          {/* Slideshow content area with Welcome heading */}
          <div className="absolute top-6 left-6 right-6 bottom-24 flex items-center justify-center">
            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-5xl lg:text-7xl font-bold text-white text-center"
            >
              Welcome
            </motion.h1>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
