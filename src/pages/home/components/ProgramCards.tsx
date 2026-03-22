export default function ProgramCards() {
  const programs = [
    {
      id: 'seniors',
      title: 'Seniors',
      gradient: 'from-blue-400 to-blue-300',
      icon: 'ri-heart-pulse-line',
      features: [
        'Age-appropriate accommodations',
        'Community activities',
        '24/7 support services'
      ]
    },
    {
      id: 'veterans',
      title: 'Veterans',
      gradient: 'from-emerald-500 to-emerald-400',
      icon: 'ri-shield-star-line',
      features: [
        'Peer support programs',
        'Career transition help',
        'Mental health resources'
      ]
    },
    {
      id: 'sober-living',
      title: 'Sober Living',
      gradient: 'from-purple-400 to-purple-300',
      icon: 'ri-heart-add-line',
      features: [
        'Structured environment',
        'Recovery support meetings',
        'Life skills training',
        'Accountability partners'
      ]
    },
    {
      id: 're-entry',
      title: 'Re-entry Support',
      gradient: 'from-amber-400 to-amber-300',
      icon: 'ri-door-open-line',
      features: [
        'Job placement assistance',
        'Legal support services',
        'Education programs'
      ]
    }
  ];

  return (
    <section id="programs" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-slate-800 mb-4">Who We Serve</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            We provide comprehensive housing and support services tailored to meet the unique needs of each community we serve.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {programs.map((program) => (
            <div
              key={program.id}
              className={`bg-gradient-to-br ${program.gradient} rounded-2xl p-8 text-white hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 cursor-pointer`}
            >
              <div className="w-16 h-16 flex items-center justify-center mb-6">
                <i className={`${program.icon} text-5xl`}></i>
              </div>
              
              <h3 className="text-2xl font-bold mb-6">{program.title}</h3>
              
              <ul className="space-y-3 mb-6">
                {program.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-2 text-white/90">
                    <i className="ri-check-line text-xl flex-shrink-0 mt-0.5"></i>
                    <span className="text-sm leading-relaxed">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}