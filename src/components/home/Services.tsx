const services = [
  {
    number: '01',
    title: 'Interstate Moving',
    description: 'Melbourne to Sydney, Canberra & Adelaide. Full insurance, GPS tracking, and dedicated support throughout your journey.',
  },
  {
    number: '02',
    title: 'Professional Packing',
    description: 'Expert packing services with premium materials. Fragile item specialists and custom crating available.',
  },
  {
    number: '03',
    title: 'Commercial Moves',
    description: 'Office and warehouse relocations with minimal disruption. After-hours service and project management included.',
  },
  {
    number: '04',
    title: 'Local Moving',
    description: 'Quick and careful moves within Melbourne. Same-day service available for urgent relocations.',
  },
  {
    number: '05',
    title: 'Secure Storage',
    description: 'Climate-controlled storage with 24/7 security. Short or long-term options with flexible access.',
  },
  {
    number: '06',
    title: 'Specialty Items',
    description: 'Pianos, antiques, artwork. Our specialists handle delicate and valuable items with extra care.',
  },
];

export default function Services() {
  return (
    <section className="py-20 lg:py-24 bg-white" id="services">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-block text-sm font-extrabold text-primary uppercase tracking-widest mb-3">Our Services</div>
          <h2 className="text-3xl lg:text-4xl font-extrabold text-secondary mb-4 tracking-tight">Complete Moving Solutions</h2>
          <p className="text-lg text-gray-600 font-medium leading-relaxed">
            Whatever your moving needs, we have the expertise and equipment to handle it with care.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="group bg-white p-8 rounded-xl border-2 border-gray-100 relative overflow-hidden transition-all duration-300 hover:border-primary hover:shadow-xl hover:-translate-y-1"
            >
              {/* Hover Line Effect */}
              <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-primary to-accent scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-top" />
              
              <div className="w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center font-black text-sm mb-6 ml-2">
                {service.number}
              </div>
              
              <div className="ml-2">
                <h3 className="text-xl font-extrabold text-secondary mb-3 group-hover:text-primary transition-colors">{service.title}</h3>
                <p className="text-[0.9375rem] text-gray-600 leading-relaxed">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
