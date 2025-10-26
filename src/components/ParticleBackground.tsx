import { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  opacity: number;
  twinkleSpeed: number;
  twinkleOffset: number;
}

function ParticleBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const mouseRef = useRef({ x: -1000, y: -1000 });
  const animationFrameRef = useRef<number>();
  const timeRef = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initializeParticles();
    };

    const initializeParticles = () => {
      const particleCount = Math.floor((canvas.width * canvas.height) / 4000);

      particlesRef.current = Array.from({ length: particleCount }, () => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        size: Math.random() * 1.5 + 0.5,
        opacity: Math.random() * 0.8 + 0.2,
        twinkleSpeed: Math.random() * 0.03 + 0.01,
        twinkleOffset: Math.random() * Math.PI * 2,
      }));
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };

    window.addEventListener('mousemove', handleMouseMove);

    const animate = () => {
      timeRef.current++;

      ctx.fillStyle = 'rgba(10, 5, 20, 0.1)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      particlesRef.current.forEach((particle) => {
        particle.x += particle.vx;
        particle.y += particle.vy;

        const dx = mouseRef.current.x - particle.x;
        const dy = mouseRef.current.y - particle.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < 150) {
          const force = (150 - distance) / 150;
          const angle = Math.atan2(dy, dx);
          const repelStrength = force * 4;

          particle.vx -= Math.cos(angle) * repelStrength * 0.15;
          particle.vy -= Math.sin(angle) * repelStrength * 0.15;

          particle.vx = Math.max(-3, Math.min(3, particle.vx));
          particle.vy = Math.max(-3, Math.min(3, particle.vy));
        } else {
          particle.vx *= 0.98;
          particle.vy *= 0.98;

          const baseSpeed = 0.5;
          if (Math.abs(particle.vx) < 0.1) {
            particle.vx += (Math.random() - 0.5) * 0.1;
          }
          if (Math.abs(particle.vy) < 0.1) {
            particle.vy += (Math.random() - 0.5) * 0.1;
          }

          const currentSpeed = Math.sqrt(particle.vx ** 2 + particle.vy ** 2);
          if (currentSpeed > 0 && currentSpeed < baseSpeed) {
            particle.vx = (particle.vx / currentSpeed) * baseSpeed;
            particle.vy = (particle.vy / currentSpeed) * baseSpeed;
          }
        }

        if (particle.x < 0 || particle.x > canvas.width) {
          particle.vx *= -1;
          particle.x = Math.max(0, Math.min(canvas.width, particle.x));
        }
        if (particle.y < 0 || particle.y > canvas.height) {
          particle.vy *= -1;
          particle.y = Math.max(0, Math.min(canvas.height, particle.y));
        }

        const twinkle = Math.sin(timeRef.current * particle.twinkleSpeed + particle.twinkleOffset) * 0.4 + 0.6;
        const finalOpacity = particle.opacity * twinkle;

        const gradient = ctx.createRadialGradient(
          particle.x,
          particle.y,
          0,
          particle.x,
          particle.y,
          particle.size * 4
        );

        gradient.addColorStop(0, `rgba(255, 255, 255, ${finalOpacity})`);
        gradient.addColorStop(0.3, `rgba(255, 255, 255, ${finalOpacity * 0.6})`);
        gradient.addColorStop(1, 'rgba(255, 255, 255, 0)');

        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size * 4, 0, Math.PI * 2);
        ctx.fill();

        ctx.fillStyle = `rgba(255, 255, 255, ${finalOpacity})`;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fill();
      });

      animationFrameRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, []);

  return (
    <>
      <div
        className="fixed top-0 left-0 w-full h-full z-0"
        style={{
          background: `
            radial-gradient(ellipse at 50% 30%, rgba(88, 28, 135, 0.3) 0%, transparent 50%),
            radial-gradient(ellipse at 20% 70%, rgba(29, 78, 216, 0.25) 0%, transparent 50%),
            radial-gradient(ellipse at 80% 60%, rgba(124, 58, 237, 0.2) 0%, transparent 50%),
            linear-gradient(to bottom, #0a0514 0%, #000000 50%, #0c1132 100%)
          `
        }}
      />
      <canvas
        ref={canvasRef}
        className="fixed top-0 left-0 w-full h-full pointer-events-none z-0"
      />
    </>
  );
}

export default ParticleBackground;
