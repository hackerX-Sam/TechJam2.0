import { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  opacity: number;
  color: { r: number; g: number; b: number };
  glowIntensity: number;
  twinkleSpeed: number;
  twinkleOffset: number;
}

interface NebulaCloud {
  x: number;
  y: number;
  radius: number;
  color: string;
  opacity: number;
  pulseSpeed: number;
  pulseOffset: number;
}

function ParticleBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const nebulaCloudsRef = useRef<NebulaCloud[]>([]);
  const mouseRef = useRef({ x: 0, y: 0 });
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
      initializeElements();
    };

    const initializeElements = () => {
      const particleCount = Math.floor((canvas.width * canvas.height) / 6000);

      const colorPalette = [
        { r: 147, g: 51, b: 234 },
        { r: 59, g: 130, b: 246 },
        { r: 251, g: 191, b: 36 },
        { r: 236, g: 72, b: 153 },
        { r: 139, g: 92, b: 246 },
        { r: 167, g: 139, b: 250 },
      ];

      particlesRef.current = Array.from({ length: particleCount }, () => {
        const colorIndex = Math.floor(Math.random() * colorPalette.length);
        return {
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.4,
          vy: (Math.random() - 0.5) * 0.4,
          size: Math.random() * 2 + 0.5,
          opacity: Math.random() * 0.8 + 0.2,
          color: colorPalette[colorIndex],
          glowIntensity: Math.random() * 0.5 + 0.5,
          twinkleSpeed: Math.random() * 0.02 + 0.01,
          twinkleOffset: Math.random() * Math.PI * 2,
        };
      });

      nebulaCloudsRef.current = Array.from({ length: 5 }, () => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 300 + 200,
        color: colorPalette[Math.floor(Math.random() * colorPalette.length)],
        opacity: Math.random() * 0.03 + 0.01,
        pulseSpeed: Math.random() * 0.001 + 0.0005,
        pulseOffset: Math.random() * Math.PI * 2,
      }));
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };

    window.addEventListener('mousemove', handleMouseMove);

    const drawNebulaClouds = () => {
      nebulaCloudsRef.current.forEach((cloud) => {
        const pulse = Math.sin(timeRef.current * cloud.pulseSpeed + cloud.pulseOffset) * 0.3 + 1;
        const gradient = ctx.createRadialGradient(
          cloud.x,
          cloud.y,
          0,
          cloud.x,
          cloud.y,
          cloud.radius * pulse
        );

        const color =
          typeof cloud.color === 'string'
            ? cloud.color
            : `${cloud.color.r}, ${cloud.color.g}, ${cloud.color.b}`;

        gradient.addColorStop(0, `rgba(${color}, ${cloud.opacity * pulse})`);
        gradient.addColorStop(0.5, `rgba(${color}, ${cloud.opacity * 0.5 * pulse})`);
        gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');

        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
      });
    };

    const animate = () => {
      timeRef.current++;

      ctx.fillStyle = 'rgba(10, 5, 20, 0.15)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      drawNebulaClouds();

      particlesRef.current.forEach((particle, i) => {
        particle.x += particle.vx;
        particle.y += particle.vy;

        const dx = mouseRef.current.x - particle.x;
        const dy = mouseRef.current.y - particle.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < 200) {
          const force = (200 - distance) / 200;
          const angle = Math.atan2(dy, dx);
          const repelStrength = force * 3;

          particle.vx -= Math.cos(angle) * repelStrength * 0.1;
          particle.vy -= Math.sin(angle) * repelStrength * 0.1;

          particle.vx = Math.max(-2, Math.min(2, particle.vx));
          particle.vy = Math.max(-2, Math.min(2, particle.vy));
        } else {
          particle.vx *= 0.99;
          particle.vy *= 0.99;
        }

        if (particle.x < 0 || particle.x > canvas.width) {
          particle.vx *= -1;
          particle.x = Math.max(0, Math.min(canvas.width, particle.x));
        }
        if (particle.y < 0 || particle.y > canvas.height) {
          particle.vy *= -1;
          particle.y = Math.max(0, Math.min(canvas.height, particle.y));
        }

        const twinkle = Math.sin(timeRef.current * particle.twinkleSpeed + particle.twinkleOffset) * 0.3 + 0.7;
        const finalOpacity = particle.opacity * twinkle;

        const gradient = ctx.createRadialGradient(
          particle.x,
          particle.y,
          0,
          particle.x,
          particle.y,
          particle.size * 3
        );

        gradient.addColorStop(0, `rgba(${particle.color.r}, ${particle.color.g}, ${particle.color.b}, ${finalOpacity})`);
        gradient.addColorStop(0.5, `rgba(${particle.color.r}, ${particle.color.g}, ${particle.color.b}, ${finalOpacity * 0.5})`);
        gradient.addColorStop(1, `rgba(${particle.color.r}, ${particle.color.g}, ${particle.color.b}, 0)`);

        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size * 3, 0, Math.PI * 2);
        ctx.fill();

        ctx.fillStyle = `rgba(255, 255, 255, ${finalOpacity * 0.8})`;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size * 0.7, 0, Math.PI * 2);
        ctx.fill();

        particlesRef.current.forEach((otherParticle, j) => {
          if (i <= j) return;
          const dx = particle.x - otherParticle.x;
          const dy = particle.y - otherParticle.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 150) {
            const opacity = 0.1 * (1 - distance / 150);
            const gradient = ctx.createLinearGradient(
              particle.x,
              particle.y,
              otherParticle.x,
              otherParticle.y
            );

            gradient.addColorStop(0, `rgba(${particle.color.r}, ${particle.color.g}, ${particle.color.b}, ${opacity})`);
            gradient.addColorStop(1, `rgba(${otherParticle.color.r}, ${otherParticle.color.g}, ${otherParticle.color.b}, ${opacity})`);

            ctx.strokeStyle = gradient;
            ctx.lineWidth = 0.5;
            ctx.beginPath();
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(otherParticle.x, otherParticle.y);
            ctx.stroke();
          }
        });
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
