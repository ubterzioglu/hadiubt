import { motion } from "framer-motion";
import { useEffect, useRef } from "react";

const GOOGLE_COLORS = ["#4285F4", "#EA4335", "#FBBC05", "#34A853"];
const MATRIX_CHARS = "アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン0123456789ABCDEF";
const FONT_SIZE = 22;
const SPEED_MIN = 0.15;
const SPEED_MAX = 0.25;

const CodeRain = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    let columns: number;
    let drops: number[];
    let speeds: number[];
    let colors: string[];
    let trails: number[];

    const resize = () => {
      canvas.width = canvas.offsetWidth * window.devicePixelRatio;
      canvas.height = canvas.offsetHeight * window.devicePixelRatio;
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
      columns = Math.floor(canvas.offsetWidth / FONT_SIZE);
      drops = Array.from({ length: columns }, () => Math.random() * -50);
      speeds = Array.from({ length: columns }, () => SPEED_MIN + Math.random() * (SPEED_MAX - SPEED_MIN));
      colors = Array.from({ length: columns }, () => GOOGLE_COLORS[Math.floor(Math.random() * 4)]);
      trails = Array.from({ length: columns }, () => 8 + Math.floor(Math.random() * 16));
    };

    resize();
    window.addEventListener("resize", resize);

    const draw = () => {
      // Fade trail — lower alpha = longer trails
      ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
      ctx.fillRect(0, 0, canvas.offsetWidth, canvas.offsetHeight);

      ctx.font = `bold ${FONT_SIZE}px monospace`;

      for (let i = 0; i < columns; i++) {
        const char = MATRIX_CHARS[Math.floor(Math.random() * MATRIX_CHARS.length)];
        const x = i * FONT_SIZE;
        const y = drops[i] * FONT_SIZE;

        // Bright head character
        ctx.shadowColor = colors[i];
        ctx.shadowBlur = 12;
        ctx.fillStyle = "#fff";
        ctx.globalAlpha = 0.9;
        ctx.fillText(char, x, y);

        // Trail characters (dimmer)
        ctx.shadowBlur = 0;
        ctx.fillStyle = colors[i];
        for (let t = 1; t < trails[i]; t++) {
          const trailY = y - t * FONT_SIZE;
          if (trailY < 0) break;
          const trailChar = MATRIX_CHARS[Math.floor(Math.random() * MATRIX_CHARS.length)];
          ctx.globalAlpha = (0.6 / trails[i]) * (trails[i] - t);
          ctx.fillText(trailChar, x, trailY);
        }

        ctx.globalAlpha = 1;
        ctx.shadowBlur = 0;

        if (y > canvas.offsetHeight && Math.random() > 0.95) {
          drops[i] = 0;
          speeds[i] = 0.3 + Math.random() * 0.4;
          colors[i] = GOOGLE_COLORS[Math.floor(Math.random() * 4)];
          trails[i] = 8 + Math.floor(Math.random() * 16);
        }
        drops[i] += speeds[i];
      }

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
      style={{ opacity: 0.5 }}
    />
  );
};

const HeroSection = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden px-4">
      {/* Code rain background */}
      <div className="absolute inset-0 pointer-events-none">
        <CodeRain />
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/30 to-background" />
      </div>

      <div className="relative z-10 text-center max-w-2xl mx-auto">
        {/* Profile image */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: "spring", stiffness: 200, damping: 20, delay: 0.2 }}
          className="mx-auto mb-8"
        >
          <div className="w-36 h-36 mx-auto rounded-full bg-gradient-hero p-1">
            <img
              src="https://ubterzioglu.de/img/picprofile.png"
              alt="Umut Barış Terzioğlu"
              className="w-full h-full rounded-full object-cover"
            />
          </div>
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-4xl md:text-6xl font-bold tracking-tight mb-4"
        >
          Umut Barış{" "}
          <span className="text-gradient">Terzioğlu</span>
        </motion.h1>

        {/* Tagline */}
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-lg md:text-xl text-muted-foreground mb-3"
        >
          QA Engineer · Dortmund, Germany
        </motion.p>

        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.75 }}
          className="text-sm text-muted-foreground/70 italic"
        >
          "Umut" means hope · "Barış" means peace 🕊️
        </motion.p>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="mt-16"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-muted-foreground/40 text-sm"
          >
            Who are you? Choose your path ↓
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
