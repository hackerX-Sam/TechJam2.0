import { useEffect, useRef, useState } from 'react';
import { Code, Lightbulb, Trophy, Cpu, Palette, Brain, Mic, Globe } from 'lucide-react';

const events = [
  {
    icon: Code,
    title: 'Hackathon',
    description: '36-hour coding marathon to build innovative solutions',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    icon: Brain,
    title: 'AI/ML Challenge',
    description: 'Showcase your machine learning and AI expertise',
    color: 'from-purple-500 to-pink-500',
  },
  {
    icon: Palette,
    title: 'UI/UX Design',
    description: 'Create stunning user experiences and interfaces',
    color: 'from-orange-500 to-red-500',
  },
  {
    icon: Trophy,
    title: 'Competitive Coding',
    description: 'Test your algorithmic skills in timed challenges',
    color: 'from-green-500 to-emerald-500',
  },
  {
    icon: Cpu,
    title: 'Hardware Hacks',
    description: 'Build innovative IoT and embedded systems',
    color: 'from-yellow-500 to-orange-500',
  },
  {
    icon: Globe,
    title: 'Web Development',
    description: 'Create modern, responsive web applications',
    color: 'from-cyan-500 to-blue-500',
  },
  {
    icon: Mic,
    title: 'Tech Talks',
    description: 'Learn from industry experts and leaders',
    color: 'from-indigo-500 to-purple-500',
  },
  {
    icon: Lightbulb,
    title: 'Ideathon',
    description: 'Pitch your innovative ideas to investors',
    color: 'from-pink-500 to-rose-500',
  },
];

function Events() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="events" ref={sectionRef} className="py-32 px-6 bg-black/30">
      <div className="max-w-7xl mx-auto">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              Featured <span className="bg-gradient-to-r from-yellow-400 to-amber-500 bg-clip-text text-transparent">Events</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-amber-500 mx-auto rounded-full" />
            <p className="mt-6 text-gray-400 text-lg max-w-2xl mx-auto">
              Explore our diverse range of events designed to challenge and inspire
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {events.map((event, index) => (
              <div
                key={index}
                className="group relative p-8 bg-gradient-to-br from-purple-900/30 to-blue-900/30 backdrop-blur-sm border border-purple-500/20 rounded-2xl hover:border-yellow-500/50 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_rgba(251,191,36,0.3)]"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />

                <div className={`relative w-16 h-16 rounded-xl bg-gradient-to-br ${event.color} p-0.5 mb-6`}>
                  <div className="w-full h-full bg-gray-900 rounded-xl flex items-center justify-center">
                    <event.icon className="w-8 h-8 text-white" />
                  </div>
                </div>

                <h3 className="text-2xl font-bold mb-3 group-hover:text-yellow-400 transition-colors">
                  {event.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {event.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Events;
