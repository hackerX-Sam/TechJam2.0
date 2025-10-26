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

interface NebulaCloud {
  x: number;
  y: number;
  radius: number;
  color: string;
  opacity: number;
  pulseSpeed: number;
  pulseOffset: number;
  driftVx: number;
  driftVy: number;
}

function ParticleBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const nebulaCloudsRef = useRef<NebulaCloud[]>([]);
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
      initializeElements();
    };

    const initializeElements = () => {
      const particleCount = Math.floor((canvas.width * canvas.height) / 7000);

      particlesRef.current = Array.from({ length: particleCount }, () => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        size: Math.random() * 1.5 + 0.4,
        opacity: Math.random() * 0.7 + 0.3,
        twinkleSpeed: Math.random() * 0.02 + 0.008,
        twinkleOffset: Math.random() * Math.PI * 2,
      }));

      nebulaCloudsRef.current = [
        {
          x: canvas.width * 0.5,
          y: canvas.height * 0.3,
          radius: 400,
          color: '88, 28, 135',
          opacity: 0.15,
          pulseSpeed: 0.0008,
          pulseOffset: 0,
          driftVx: 0.05,
          driftVy: 0.02,
        },
        {
          x: canvas.width * 0.2,
          y: canvas.height * 0.6,
          radius: 350,
          color: '29, 78, 216',
          opacity: 0.12,
          pulseSpeed: 0.001,
          pulseOffset: Math.PI,
          driftVx: -0.03,
          driftVy: 0.04,
        },
        {
          x: canvas.width * 0.8,
          y: canvas.height * 0.5,
          radius: 380,
          color: '124, 58, 237',
          opacity: 0.1,
          pulseSpeed: 0.0012,
          pulseOffset: Math.PI / 2,
          driftVx: 0.04,
          driftVy: -0.03,
        },
        {
          x: canvas.width * 0.6,
          y: canvas.height * 0.8,
          radius: 300,
          color: '59, 130, 246',
          opacity: 0.08,
          pulseSpeed: 0.0009,
          pulseOffset: Math.PI * 1.5,
          driftVx: -0.02,
          driftVy: -0.05,
        },
      ];
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };

    window.addEventListener('mousemove', handleMouseMove);

    const drawNebulaClouds = () => {
      nebulaCloudsRef.current.forEach((cloud) => {
        cloud.x += cloud.driftVx;
        cloud.y += cloud.driftVy;

        if (cloud.x < -cloud.radius) cloud.x = canvas.width + cloud.radius;
        if (cloud.x > canvas.width + cloud.radius) cloud.x = -cloud.radius;
        if (cloud.y < -cloud.radius) cloud.y = canvas.height + cloud.radius;
        if (cloud.y > canvas.height + cloud.radius) cloud.y = -cloud.radius;

        const pulse = Math.sin(timeRef.current * cloud.pulseSpeed + cloud.pulseOffset) * 0.3 + 1;
        const gradient = ctx.createRadialGradient(
          cloud.x,
          cloud.y,
          0,
          cloud.x,
          cloud.y,
          cloud.radius * pulse
        );

        gradient.addColorStop(0, `rgba(${cloud.color}, ${cloud.opacity * pulse * 0.8})`);
        gradient.addColorStop(0.3, `rgba(${cloud.color}, ${cloud.opacity * 0.6 * pulse})`);
        gradient.addColorStop(0.6, `rgba(${cloud.color}, ${cloud.opacity * 0.3 * pulse})`);
        gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');

        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(cloud.x, cloud.y, cloud.radius * pulse, 0, Math.PI * 2);
        ctx.fill();
      });
    };

    const animate = () => {
      timeRef.current++;

      ctx.fillStyle = 'rgba(5, 3, 15, 0.25)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      drawNebulaClouds();

      particlesRef.current.forEach((particle) => {
        particle.x += particle.vx;
        particle.y += particle.vy;

        const dx = mouseRef.current.x - particle.x;
        const dy = mouseRef.current.y - particle.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < 120) {
          const force = (120 - distance) / 120;
          const angle = Math.atan2(dy, dx);
          const repelStrength = force * 3.5;

          particle.vx -= Math.cos(angle) * repelStrength * 0.12;
          particle.vy -= Math.sin(angle) * repelStrength * 0.12;

          particle.vx = Math.max(-2.5, Math.min(2.5, particle.vx));
          particle.vy = Math.max(-2.5, Math.min(2.5, particle.vy));
        } else {
          particle.vx *= 0.985;
          particle.vy *= 0.985;

          const baseSpeed = 0.3;
          if (Math.abs(particle.vx) < 0.08) {
            particle.vx += (Math.random() - 0.5) * 0.08;
          }
          if (Math.abs(particle.vy) < 0.08) {
            particle.vy += (Math.random() - 0.5) * 0.08;
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

        const twinkle = Math.sin(timeRef.current * particle.twinkleSpeed + particle.twinkleOffset) * 0.35 + 0.65;
        const finalOpacity = particle.opacity * twinkle;

        const gradient = ctx.createRadialGradient(
          particle.x,
          particle.y,
          0,
          particle.x,
          particle.y,
          particle.size * 5
        );

        gradient.addColorStop(0, `rgba(255, 255, 255, ${finalOpacity})`);
        gradient.addColorStop(0.2, `rgba(220, 230, 255, ${finalOpacity * 0.7})`);
        gradient.addColorStop(0.5, `rgba(200, 220, 255, ${finalOpacity * 0.4})`);
        gradient.addColorStop(1, 'rgba(180, 200, 255, 0)');

        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size * 5, 0, Math.PI * 2);
        ctx.fill();

        ctx.fillStyle = `rgba(255, 255, 255, ${finalOpacity * 0.9})`;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size * 0.8, 0, Math.PI * 2);
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
            radial-gradient(ellipse at 50% 50%, rgba(30, 15, 60, 0.4) 0%, transparent 60%),
            radial-gradient(ellipse at 20% 30%, rgba(20, 10, 40, 0.3) 0%, transparent 50%),
            radial-gradient(ellipse at 80% 70%, rgba(25, 15, 50, 0.3) 0%, transparent 50%),
            linear-gradient(to bottom, #000000 0%, #0a0520 30%, #050315 60%, #000000 100%)
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
