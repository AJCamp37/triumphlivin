import { useState } from 'react';

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      quote: "This program gave me more than just a place to live – it gave me hope and a fresh start. I've found a community that feels like family.",
      name: "Robert M.",
      program: "Veterans Program",
      rating: 5
    },
    {
      quote: "After years of struggling, I finally found a safe and supportive environment. The structure and accountability here helped me rebuild my life one day at a time.",
      name: "Jennifer S.",
      program: "Sober Living",
      rating: 5
    },
    {
      quote: "The re-entry program helped me transition back into society with dignity. From job placement to life skills training, they supported every step of my journey.",
      name: "Marcus T.",
      program: "Re-entry Support",
      rating: 5
    },
    {
      quote: "As a senior, I was worried about finding affordable housing with the care I need. This program exceeded my expectations with compassionate staff and wonderful community.",
      name: "Dorothy L.",
      program: "Seniors Program",
      rating: 5
    }
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const current = testimonials[currentIndex];

  return (
    <section className="py-24 bg-amber-50">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-slate-800 mb-2" style={{ fontFamily: 'Georgia, serif' }}>
            Stories of Hope
          </h2>
        </div>

        <div className="bg-white rounded-3xl p-10 shadow-xl relative">
          <div className="absolute top-8 left-8 bg-slate-800 text-white px-4 py-2 rounded-lg font-semibold">
            <span className="text-yellow-400">★</span> {current.rating}.0
          </div>

          <div className="mt-8 mb-8">
            <i className="ri-double-quotes-l text-5xl text-blue-600 opacity-30"></i>
            <p className="text-2xl text-slate-700 leading-relaxed mt-4 mb-6" style={{ fontFamily: 'Georgia, serif', lineHeight: '1.8' }}>
              {current.quote}
            </p>
          </div>

          <div className="flex items-center gap-4">
            <div>
              <h4 className="text-xl font-bold text-slate-800">{current.name}</h4>
              <p className="text-slate-600">{current.program}</p>
            </div>
          </div>

          <div className="absolute bottom-8 right-8 flex gap-3">
            <button
              onClick={prevTestimonial}
              className="w-12 h-12 flex items-center justify-center rounded-full bg-white border-2 border-slate-300 hover:border-blue-600 hover:text-blue-600 transition-all cursor-pointer"
            >
              <i className="ri-arrow-left-line text-xl"></i>
            </button>
            <button
              onClick={nextTestimonial}
              className="w-12 h-12 flex items-center justify-center rounded-full bg-slate-800 text-white hover:bg-blue-600 transition-all cursor-pointer"
            >
              <i className="ri-arrow-right-line text-xl"></i>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}