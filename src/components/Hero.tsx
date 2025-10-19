import { ChevronRight } from 'lucide-react';

function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 relative">
      <div className="max-w-6xl mx-auto text-center">
        <div className="space-y-8 animate-fade-in">
          <div className="inline-block">
            <span className="px-4 py-2 bg-blue-500/10 border border-blue-500/30 rounded-full text-blue-400 text-sm font-medium backdrop-blur-sm">
              National Level Tech Fest
            </span>
          </div>

          <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tight">
            <span className="bg-gradient-to-r from-blue-400 via-blue-500 to-cyan-400 bg-clip-text text-transparent">
              TechJam
            </span>
            <span className="text-white"> 2.0</span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            The Ultimate Tech & Innovation Fest
          </p>

          <p className="text-base md:text-lg text-gray-500 max-w-2xl mx-auto">
            Join us for an extraordinary journey of innovation, competition, and collaboration.
            Where ideas meet execution and dreams become reality.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <button className="group relative px-8 py-4 bg-blue-600 rounded-lg font-semibold text-lg overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(59,130,246,0.5)]">
              <span className="relative z-10 flex items-center gap-2">
                Register Now
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </button>

            <button className="px-8 py-4 border border-gray-700 rounded-lg font-semibold text-lg hover:border-blue-500 hover:bg-blue-500/5 transition-all duration-300">
              Learn More
            </button>
          </div>

          <div className="pt-16 flex justify-center gap-12 text-center">
            <div className="space-y-2">
              <p className="text-3xl md:text-4xl font-bold text-blue-400">500+</p>
              <p className="text-sm text-gray-500">Participants</p>
            </div>
            <div className="space-y-2">
              <p className="text-3xl md:text-4xl font-bold text-blue-400">20+</p>
              <p className="text-sm text-gray-500">Events</p>
            </div>
            <div className="space-y-2">
              <p className="text-3xl md:text-4xl font-bold text-blue-400">₹5L+</p>
              <p className="text-sm text-gray-500">Prize Pool</p>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-gray-600 rounded-full p-1">
          <div className="w-1.5 h-3 bg-blue-500 rounded-full mx-auto animate-scroll" />
        </div>
      </div>
    </section>
  );
}

export default Hero;
