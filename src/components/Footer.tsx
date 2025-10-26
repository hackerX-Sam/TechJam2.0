import { Mail, MapPin, Phone, Github, Linkedin, Twitter, Instagram, Facebook } from 'lucide-react';

function Footer() {
  return (
    <footer id="footer" className="bg-black/50 border-t border-purple-500/20">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <h3 className="text-3xl font-bold mb-4">
              <span className="bg-gradient-to-r from-yellow-400 to-amber-500 bg-clip-text text-transparent">
                TechJam 2.0
              </span>
            </h3>
            <p className="text-gray-400 mb-6">
              Where innovation meets excellence. Join us for the ultimate tech experience.
            </p>
            <div className="flex gap-3">
              <a
                href="#"
                className="p-3 bg-black/50 border border-purple-500/20 rounded-lg hover:bg-yellow-500 hover:border-yellow-500 hover:scale-110 transition-all duration-300"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="p-3 bg-black/50 border border-purple-500/20 rounded-lg hover:bg-yellow-500 hover:border-yellow-500 hover:scale-110 transition-all duration-300"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="p-3 bg-black/50 border border-purple-500/20 rounded-lg hover:bg-yellow-500 hover:border-yellow-500 hover:scale-110 transition-all duration-300"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="p-3 bg-black/50 border border-purple-500/20 rounded-lg hover:bg-yellow-500 hover:border-yellow-500 hover:scale-110 transition-all duration-300"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="p-3 bg-black/50 border border-purple-500/20 rounded-lg hover:bg-yellow-500 hover:border-yellow-500 hover:scale-110 transition-all duration-300"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {['About', 'Events', 'Schedule', 'Sponsors', 'Team', 'FAQ'].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="text-gray-400 hover:text-yellow-400 transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">Events</h4>
            <ul className="space-y-3">
              {['Hackathon', 'AI/ML Challenge', 'UI/UX Design', 'Competitive Coding', 'Hardware Hacks', 'Ideathon'].map((event) => (
                <li key={event}>
                  <a
                    href="#events"
                    className="text-gray-400 hover:text-yellow-400 transition-colors"
                  >
                    {event}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-yellow-400 mt-0.5 flex-shrink-0" />
                <a
                  href="mailto:info@techjam2.0.com"
                  className="text-gray-400 hover:text-blue-400 transition-colors"
                >
                  info@techjam2.0.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-yellow-400 mt-0.5 flex-shrink-0" />
                <a
                  href="tel:+911234567890"
                  className="text-gray-400 hover:text-blue-400 transition-colors"
                >
                  +91 8860867899
                  +91 7905950558 
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-yellow-400 mt-0.5 flex-shrink-0" />
                <span className="text-gray-400">
                  TIIPS Greater Noida Campus<br />
                  New Delhi, India
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-purple-500/20 text-center">
          <p className="text-gray-400">
            © 2025 TechJam 2.0. All rights reserved. Built with passion and innovation.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
