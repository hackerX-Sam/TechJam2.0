import { useEffect, useRef, useState } from 'react';
import { Linkedin, Github } from 'lucide-react';

const CommandCenter = [
  {
    name: 'Harshit Gupta',
    role: 'President',
    title: 'Full-Stack Developer',
    image: 'https://ik.imagekit.io/logicsync/harshit.jpg?updatedAt=1761472121560',
    linkedin: '#',
    github: '#',
  },
  {
    name: 'Dhruv Chaurasiya',
    role: 'Vice-President',
    title: 'AI & ML',
    image: 'https://ik.imagekit.io/logicsync/dhruv.jpg?updatedAt=1761472116216',
    linkedin: '#',
    github: '#',
  },
  {
    name: 'Varun Gupta',
    role: 'Secretary',
    title: 'Full-Stack Developer',
    image: 'https://ik.imagekit.io/logicsync/varun.jpg?updatedAt=1761472119018',
    linkedin: '#',
    github: '#',
  },
];

const managementTeam = [
  {
    name: 'Mani Goel',
    role: 'Development Lead',
    image: 'https://ik.imagekit.io/logicsync/mani.jpg?updatedAt=1761473181679',
    linkedin: '#',
    github: '#',
  },
  {
    name: 'Samiran Das',
    role: 'Tech Lead',
    image: 'https://ik.imagekit.io/logicsync/stage%20.jpg?updatedAt=1759674099852',
    linkedin: 'https://www.linkedin.com/in/samiran-das-33531123b/',
    github: 'https://github.com/hackerX-Sam',
  },
  {
    name: 'Saksham chauhan',
    role: 'Event Coordinator Lead',
    image: 'https://ik.imagekit.io/logicsync/WhatsApp%20Image%202025-10-26%20at%2011.24.40_08c42c1f.jpg?updatedAt=1761471293990',
    linkedin: '#',
    github: '#',
  },
  {
    name: 'K Varshini',
    role: 'Management Lead',
    image: 'https://ik.imagekit.io/logicsync/WhatsApp%20Image%202025-10-26%20at%2010.57.33_2a95ecda.jpg?updatedAt=1761471290203',
    linkedin: '#',
    github: '#',
  },
  {
    name: 'Akshara Pathak',
    role: 'Design Co-Lead',
    image: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=400',
    linkedin: '#',
    github: '#',
  },
  {
    name: 'Aashish Dagar',
    role: 'Event Coordinator Co-Lead',
    image: 'https://images.pexels.com/photos/1065084/pexels-photo-1065084.jpeg?auto=compress&cs=tinysrgb&w=400',
    linkedin: '#',
    github: '#',
  },
];

function Team() {
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
    <section id="team" ref={sectionRef} className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              Meet the <span className="bg-gradient-to-r from-yellow-400 to-amber-500 bg-clip-text text-transparent">Team</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-amber-500 mx-auto rounded-full" />
            <p className="mt-6 text-gray-400 max-w-2xl mx-auto font-cursive">
              The brilliant minds bringing TechJam 2.0 to life
            </p>
          </div>

          {/* CommandCenter Section */}
          <div className="mb-24">
            <h3 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Command Center
            </h3>
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {CommandCenter.map((member, index) => (
                <div
                  key={index}
                  className="group relative"
                >
                  <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-900/80 to-slate-800/80 backdrop-blur-xl border-2 border-violet-500/30 hover:border-cyan-400/60 transition-all duration-500 hover:scale-105 hover:shadow-[0_0_60px_rgba(34,211,238,0.4)] p-8">
                    <div className="absolute inset-0 bg-gradient-to-br from-violet-600/10 to-cyan-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                    <div className="relative">
                      <div className="w-48 h-48 mx-auto mb-6 rounded-full overflow-hidden border-4 border-violet-500/50 group-hover:border-cyan-400/70 transition-all duration-500 group-hover:shadow-[0_0_30px_rgba(34,211,238,0.5)]">
                        <img
                          src={member.image}
                          alt={member.name}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                        />
                      </div>

                      <div className="text-center">
                        <h3 className="text-2xl font-bold mb-2 group-hover:text-cyan-400 transition-colors duration-300">
                          {member.name}
                        </h3>
                        <p className="text-violet-400 text-lg font-semibold mb-1">{member.role}</p>
                        <p className="text-gray-400 text-sm mb-6">{member.title}</p>

                        <div className="flex gap-4 justify-center">
                          <a
                            href={member.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-3 bg-black/50 rounded-xl hover:bg-gradient-to-r hover:from-violet-600 hover:to-cyan-600 hover:scale-110 transition-all duration-300 hover:shadow-[0_0_20px_rgba(139,92,246,0.6)]"
                          >
                            <Linkedin className="w-5 h-5" />
                          </a>
                          <a
                            href={member.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-3 bg-black/50 rounded-xl hover:bg-gradient-to-r hover:from-violet-600 hover:to-cyan-600 hover:scale-110 transition-all duration-300 hover:shadow-[0_0_20px_rgba(139,92,246,0.6)]"
                          >
                            <Github className="w-5 h-5" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Management Team Section */}
          <div>
            <h3 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-emerald-400 to-cyan-500 bg-clip-text text-transparent">
              Management Team
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {managementTeam.map((member, index) => (
                <div
                  key={index}
                  className="group relative"
                >
                  <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-slate-900/60 to-slate-800/60 backdrop-blur-lg border border-cyan-500/20 hover:border-cyan-400/50 transition-all duration-400 hover:scale-105 hover:shadow-[0_0_40px_rgba(34,211,238,0.3)] p-6">
                    <div className="relative">
                      <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden border-2 border-cyan-500/40 group-hover:border-cyan-400/70 transition-all duration-400">
                        <img
                          src={member.image}
                          alt={member.name}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                      </div>

                      <div className="text-center">
                        <h3 className="text-xl font-bold mb-1 group-hover:text-cyan-400 transition-colors duration-300">
                          {member.name}
                        </h3>
                        <p className="text-cyan-400/80 text-sm mb-4">{member.role}</p>

                        <div className="flex gap-3 justify-center">
                          <a
                            href={member.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 bg-black/40 rounded-lg hover:bg-cyan-600 hover:scale-110 transition-all duration-300 hover:shadow-[0_0_15px_rgba(34,211,238,0.5)]"
                          >
                            <Linkedin className="w-4 h-4" />
                          </a>
                          <a
                            href={member.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 bg-black/40 rounded-lg hover:bg-cyan-600 hover:scale-110 transition-all duration-300 hover:shadow-[0_0_15px_rgba(34,211,238,0.5)]"
                          >
                            <Github className="w-4 h-4" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Team;
