import { useEffect, useRef, useState } from 'react';
import { Award, Building2, Briefcase, Star } from 'lucide-react';

const sponsors = {
  title: [
    { name: 'TechCorp Global', tier: 'Title Sponsor', icon: Building2 },
  ],
  platinum: [
    { name: 'CloudScale Inc', tier: 'Platinum', icon: Award },
    { name: 'DataFlow Systems', tier: 'Platinum', icon: Award },
  ],
  gold: [
    { name: 'CodeNest Labs', tier: 'Gold', icon: Star },
    { name: 'InnovateTech', tier: 'Gold', icon: Star },
    { name: 'QuantumSoft', tier: 'Gold', icon: Star },
  ],
  silver: [
    { name: 'WebForge', tier: 'Silver', icon: Briefcase },
    { name: 'DevOps Pro', tier: 'Silver', icon: Briefcase },
    { name: 'AIVision Co', tier: 'Silver', icon: Briefcase },
    { name: 'CyberShield', tier: 'Silver', icon: Briefcase },
  ],
};

function Sponsors() {
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
    <section id="sponsors" ref={sectionRef} className="py-32 px-6 bg-black/30">
      <div className="max-w-7xl mx-auto">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              Our <span className="bg-gradient-to-r from-yellow-400 to-amber-500 bg-clip-text text-transparent">Sponsors</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-amber-500 mx-auto rounded-full" />
            <p className="mt-6 text-gray-400 max-w-2xl mx-auto font-cursive">
              Powered by industry leaders who believe in innovation
            </p>
          </div>

          <div className="space-y-12">
            <div className="flex justify-center">
              {sponsors.title.map((sponsor, index) => (
                <div
                  key={index}
                  className="group relative p-12 bg-gradient-to-br from-yellow-500/10 to-orange-500/10 backdrop-blur-sm border-2 border-yellow-500/30 rounded-3xl hover:border-yellow-500/60 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_50px_rgba(234,179,8,0.3)] max-w-md"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl" />
                  <div className="relative flex flex-col items-center text-center">
                    <sponsor.icon className="w-20 h-20 text-yellow-500 mb-4" />
                    <h3 className="text-3xl font-bold mb-2">{sponsor.name}</h3>
                    <p className="text-yellow-500 font-semibold text-lg">{sponsor.tier}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {sponsors.platinum.map((sponsor, index) => (
                <div
                  key={index}
                  className="group relative p-10 bg-gradient-to-br from-purple-900/30 to-blue-900/30 backdrop-blur-sm border border-purple-500/30 rounded-2xl hover:border-purple-400/50 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_rgba(168,85,247,0.3)]"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
                  <div className="relative flex flex-col items-center text-center">
                    <sponsor.icon className="w-16 h-16 text-purple-400 mb-4" />
                    <h3 className="text-2xl font-bold mb-2">{sponsor.name}</h3>
                    <p className="text-purple-400 font-semibold">{sponsor.tier}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {sponsors.gold.map((sponsor, index) => (
                <div
                  key={index}
                  className="group relative p-8 bg-gradient-to-br from-purple-900/30 to-blue-900/30 backdrop-blur-sm border border-purple-500/20 rounded-2xl hover:border-yellow-600/50 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(202,138,4,0.3)]"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-yellow-600/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
                  <div className="relative flex flex-col items-center text-center">
                    <sponsor.icon className="w-12 h-12 text-yellow-600 mb-4" />
                    <h3 className="text-xl font-bold mb-2">{sponsor.name}</h3>
                    <p className="text-yellow-600 font-semibold text-sm">{sponsor.tier}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {sponsors.silver.map((sponsor, index) => (
                <div
                  key={index}
                  className="group relative p-6 bg-gradient-to-br from-purple-900/30 to-blue-900/30 backdrop-blur-sm border border-purple-500/20 rounded-xl hover:border-gray-500/50 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(156,163,175,0.3)]"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-gray-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl" />
                  <div className="relative flex flex-col items-center text-center">
                    <sponsor.icon className="w-10 h-10 text-gray-400 mb-3" />
                    <h3 className="text-lg font-bold mb-1">{sponsor.name}</h3>
                    <p className="text-gray-400 font-semibold text-xs">{sponsor.tier}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-16 text-center">
            <button className="px-8 py-4 bg-gradient-to-r from-yellow-500 to-amber-600 rounded-lg font-semibold text-lg hover:scale-105 hover:shadow-[0_0_30px_rgba(251,191,36,0.6)] transition-all duration-300 text-black">
              Become a Sponsor
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Sponsors;
