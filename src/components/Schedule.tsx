import { useEffect, useRef, useState } from 'react';
import { Calendar, Clock, MapPin } from 'lucide-react';

const scheduleData = [
  {
    day: 'Day 1',
    date: 'March 15, 2025',
    events: [
      { time: '09:00 AM', title: 'Registration & Check-in', location: 'Main Lobby' },
      { time: '10:00 AM', title: 'Opening Ceremony', location: 'Auditorium' },
      { time: '11:30 AM', title: 'Hackathon Begins', location: 'Tech Lab' },
      { time: '02:00 PM', title: 'Workshop: AI Fundamentals', location: 'Hall A' },
      { time: '05:00 PM', title: 'Networking Session', location: 'Lounge' },
    ],
  },
  {
    day: 'Day 2',
    date: 'March 16, 2025',
    events: [
      { time: '09:00 AM', title: 'Tech Talk: Industry Insights', location: 'Auditorium' },
      { time: '11:00 AM', title: 'UI/UX Design Competition', location: 'Design Studio' },
      { time: '02:00 PM', title: 'Competitive Coding Round', location: 'Lab B' },
      { time: '04:00 PM', title: 'Hardware Hacks Presentation', location: 'Innovation Hub' },
      { time: '07:00 PM', title: 'Cultural Night', location: 'Open Arena' },
    ],
  },
  {
    day: 'Day 3',
    date: 'March 17, 2025',
    events: [
      { time: '09:00 AM', title: 'Final Hackathon Sprint', location: 'Tech Lab' },
      { time: '12:00 PM', title: 'Project Submissions', location: 'Submission Desk' },
      { time: '02:00 PM', title: 'Final Presentations', location: 'Auditorium' },
      { time: '05:00 PM', title: 'Award Ceremony', location: 'Auditorium' },
      { time: '07:00 PM', title: 'Closing Ceremony', location: 'Auditorium' },
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
    <section ref={sectionRef} className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              Event <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Schedule</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto rounded-full" />
            <p className="mt-6 text-gray-400 text-lg max-w-2xl mx-auto">
              Three days packed with innovation, learning, and excitement
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {scheduleData.map((day, dayIndex) => (
              <div
                key={dayIndex}
                className="bg-gradient-to-br from-gray-800/40 to-gray-900/40 backdrop-blur-sm border border-gray-800 rounded-2xl p-8 hover:border-blue-500/50 transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-6">
                  <Calendar className="w-6 h-6 text-blue-400" />
                  <div>
                    <h3 className="text-2xl font-bold">{day.day}</h3>
                    <p className="text-gray-400">{day.date}</p>
                  </div>
                </div>

                <div className="space-y-4">
                  {day.events.map((event, eventIndex) => (
                    <div
                      key={eventIndex}
                      className="group p-4 bg-gray-900/50 border border-gray-800 rounded-lg hover:border-blue-500/30 hover:bg-gray-900/70 transition-all duration-300"
                    >
                      <div className="flex items-start gap-3">
                        <Clock className="w-4 h-4 text-blue-400 mt-1 flex-shrink-0" />
                        <div className="flex-1 min-w-0">
                          <p className="text-sm text-blue-400 font-medium">{event.time}</p>
                          <h4 className="font-semibold mt-1 group-hover:text-blue-400 transition-colors">
                            {event.title}
                          </h4>
                          <div className="flex items-center gap-1 mt-1">
                            <MapPin className="w-3 h-3 text-gray-500" />
                            <p className="text-sm text-gray-500">{event.location}</p>
                          </div>
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
