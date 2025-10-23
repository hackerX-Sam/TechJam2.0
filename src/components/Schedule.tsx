import { useEffect, useRef, useState } from 'react';
import { Calendar, Clock, MapPin } from 'lucide-react';

const scheduleData = [
  {
    day: 'Round 1',
    date: 'Oct 24 - Nov 02, 2025',
    title: 'Submission through Unstop',
    events: [
      {
        time: '12:20 PM IST',
        title: 'Submission Opens',
        location: 'Unstop Platform',
        description: 'Submit your innovative ideas across themes: Open Innovation, Agri Tech, Fin Tech, Blockchain, CyberSecurity, AI/ML'
      },
      {
        time: 'Nov 02, 12:20 PM IST',
        title: 'Submission Deadline',
        location: 'Unstop Platform',
        description: 'Final deadline for idea submission'
      },
    ],
  },
  {
    day: 'Round 2',
    date: 'November 08, 2025',
    title: 'Online Round',
    events: [
      {
        time: '11:00 AM - 02:00 PM IST',
        title: 'Online Presentations',
        location: 'Google Meet',
        description: 'Shortlisted teams present their ideas, problem statements, and solutions (10-15 minutes per team)'
      },
      {
        time: 'Post Event',
        title: 'Results Announcement',
        location: 'Online',
        description: 'Selected teams advance to the On-Campus Hackathon Round at Microsoft Sovereign Office, Noida'
      },
    ],
  },
  {
    day: 'Round 3',
    date: 'November 14, 2025',
    title: 'Offline Hackathon',
    events: [
      {
        time: '11:00 AM',
        title: 'Hackathon Begins',
        location: 'Microsoft Office, Noida',
        description: '8-hour finale to build prototypes and solutions'
      },
      {
        time: 'Throughout',
        title: 'Development Sprint',
        location: 'Microsoft Office, Noida',
        description: 'Build, test, and refine your solutions with refreshments provided'
      },
      {
        time: '05:00 PM',
        title: 'Final Presentations & Judging',
        location: 'Microsoft Office, Noida',
        description: 'Present your solutions and pitch to the judges'
      },
    ],
  },
];

function Schedule() {
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
    <section id="schedule" ref={sectionRef} className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              Event <span className="bg-gradient-to-r from-yellow-400 to-amber-500 bg-clip-text text-transparent">Timeline</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-amber-500 mx-auto rounded-full" />
            <p className="mt-6 text-gray-400 text-lg max-w-2xl mx-auto">
              Three rounds of innovation from submission to the grand finale
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {scheduleData.map((day, dayIndex) => (
              <div
                key={dayIndex}
                className="bg-gradient-to-br from-purple-900/30 to-blue-900/30 backdrop-blur-sm border border-purple-500/20 rounded-2xl p-8 hover:border-yellow-500/50 transition-all duration-300"
              >
                <div className="mb-6">
                  <div className="flex items-center gap-3 mb-2">
                    <Calendar className="w-6 h-6 text-yellow-400" />
                    <h3 className="text-2xl font-bold">{day.day}</h3>
                  </div>
                  <p className="text-gray-400 text-sm">{day.date}</p>
                  <h4 className="text-lg font-semibold text-yellow-400 mt-2">{day.title}</h4>
                </div>

                <div className="space-y-4">
                  {day.events.map((event, eventIndex) => (
                    <div
                      key={eventIndex}
                      className="group p-4 bg-black/40 border border-purple-500/20 rounded-lg hover:border-yellow-500/30 hover:bg-purple-900/20 transition-all duration-300"
                    >
                      <div className="flex items-start gap-3">
                        <Clock className="w-4 h-4 text-blue-400 mt-1 flex-shrink-0" />
                        <div className="flex-1 min-w-0">
                          <p className="text-sm text-yellow-400 font-medium">{event.time}</p>
                          <h5 className="font-semibold mt-1 group-hover:text-yellow-400 transition-colors">
                            {event.title}
                          </h5>
                          <div className="flex items-center gap-1 mt-1">
                            <MapPin className="w-3 h-3 text-gray-500" />
                            <p className="text-sm text-gray-500">{event.location}</p>
                          </div>
                          {event.description && (
                            <p className="text-sm text-gray-400 mt-2 leading-relaxed">
                              {event.description}
                            </p>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Schedule;
