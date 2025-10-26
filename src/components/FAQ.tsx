import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs: FAQItem[] = [
    {
      question: "What is TechJam 2.0?",
      answer: "TechJam 2.0 is a premier technology event bringing together innovators, developers, and tech enthusiasts for a day of learning, networking, and exploring cutting-edge technologies. It features workshops, keynote speakers, hackathons, and opportunities to connect with industry leaders."
    },
    {
      question: "When and where is the event taking place?",
      answer: "TechJam 2.0 will be held on [Date] at [Venue]. The event starts at [Time] and includes full-day activities. Please check the schedule section for detailed timings of each session."
    },
    {
      question: "How do I register for TechJam 2.0?",
      answer: "Registration is simple! Click on the 'Register Now' button on our homepage and fill out the registration form. Early bird tickets are available for a limited time. You'll receive a confirmation email with your ticket and event details."
    },
    {
      question: "Is there a registration fee?",
      answer: "Yes, there is a nominal registration fee to cover event costs. We offer early bird discounts and special rates for students. Group discounts are also available for teams of 5 or more. Check our registration page for current pricing."
    },
    {
      question: "What should I bring to the event?",
      answer: "Bring your laptop, charger, valid ID for registration, and your enthusiasm! If you're participating in the hackathon, make sure to bring any additional hardware or tools you might need. We'll provide WiFi, refreshments, and workspaces."
    },
    {
      question: "Are there any prerequisites to attend?",
      answer: "No specific prerequisites are required! TechJam 2.0 welcomes everyone from beginners to experienced professionals. We have sessions tailored for different skill levels. However, basic familiarity with programming concepts would be helpful for technical workshops."
    },
    {
      question: "Can I participate in the hackathon?",
      answer: "Absolutely! The hackathon is open to all registered attendees. You can participate individually or form teams of up to 4 members. Problem statements will be announced at the event, and exciting prizes await the winners!"
    },
    {
      question: "Will food and refreshments be provided?",
      answer: "Yes! We'll provide lunch, snacks, and beverages throughout the day. Please let us know about any dietary restrictions or allergies during registration, and we'll do our best to accommodate your needs."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 px-4 relative">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
          Frequently Asked Questions
        </h2>
        <p className="text-center text-gray-400 mb-12 max-w-2xl mx-auto font-cursive">
          Got questions? We've got answers! Find everything you need to know about TechJam 2.0.
        </p>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg overflow-hidden transition-all duration-300 hover:border-blue-500/50"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left transition-colors duration-200 hover:bg-white/5"
              >
                <span className="font-semibold text-lg text-white pr-4">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`w-5 h-5 text-blue-400 flex-shrink-0 transition-transform duration-300 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-6 pb-5 pt-2 text-gray-300 leading-relaxed border-t border-white/5">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FAQ;
