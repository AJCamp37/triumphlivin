import bedroom from '/src/assets/bedroom.jpeg';
import kitchen from '/src/assets/kitchen.jpg';
import common from '/src/assets/common.jpg';
export default function OurHomes() {
  const amenities = [
    {
      icon: 'ri-home-smile-line',
      title: 'Fully Furnished',
      description: 'Move-in ready rooms with comfortable furnishings and essential amenities'
    },
    {
      icon: 'ri-restaurant-line',
      title: 'Shared Kitchen',
      description: 'Modern, well-equipped kitchens for preparing healthy meals'
    },
    {
      icon: 'ri-wifi-line',
      title: 'High-Speed Internet',
      description: 'Complimentary WiFi throughout the property for staying connected'
    },
    {
      icon: 'ri-t-shirt-line',
      title: 'Laundry Facilities',
      description: 'On-site washers and dryers available for all residents'
    },
    {
      icon: 'ri-community-line',
      title: 'Common Areas',
      description: 'Comfortable spaces for socializing, relaxing, and building community'
    },
    {
      icon: 'ri-shield-check-line',
      title: 'Safe & Secure',
      description: '24/7 security measures to ensure a safe living environment'
    },
    {
      icon: 'ri-bus-line',
      title: 'Transportation Access',
      description: 'Convenient location near public transit and essential services'
    },
    {
      icon: 'ri-customer-service-2-line',
      title: 'On-Site Support',
      description: 'Dedicated staff available to assist with your needs'
    }
  ];

  return (
    <section id="our-homes" className="py-24 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-slate-800 mb-4">Our Homes Include</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Every residence is thoughtfully designed to provide comfort, safety, and the resources you need to thrive.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {amenities.map((amenity, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer"
            >
              <div className="w-14 h-14 flex items-center justify-center bg-blue-100 rounded-lg mb-4">
                <i className={`${amenity.icon} text-3xl text-blue-600`}></i>
              </div>
              <h3 className="text-lg font-bold text-slate-800 mb-2">{amenity.title}</h3>
              <p className="text-sm text-slate-600 leading-relaxed">{amenity.description}</p>
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          <div className="rounded-2xl overflow-hidden shadow-lg h-64">
            <img 
              src={bedroom}
              alt="Comfortable bedroom"
              className="w-full h-full object-cover object-top"
            />
          </div>
          <div className="rounded-2xl overflow-hidden shadow-lg h-64">
            <img 
              src={kitchen}
              alt="Shared kitchen"
              className="w-full h-full object-cover object-top"
            />
          </div>
          <div className="rounded-2xl overflow-hidden shadow-lg h-64">
            <img 
              src= {common}
              alt="Common area"
              className="w-full h-full object-cover object-top"
            />
          </div>
        </div>
      </div>
    </section>
  );
}