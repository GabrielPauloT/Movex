import { ShieldCheck, Users, Wallet, MapPin } from 'lucide-react';

const features = [
  {
    icon: ShieldCheck,
    title: 'Fully Insured Protection',
    description: 'Comprehensive Transit and Public Liability insurance on every move. Your peace of mind is our priority.',
  },
  {
    icon: Users,
    title: 'Family-Owned Since 2009',
    description: "Three generations of moving expertise. We're not a corporation—we're a family serving families.",
  },
  {
    icon: Wallet,
    title: 'No Hidden Fees',
    description: 'What you see is what you pay. Clear, upfront pricing with no surprises on moving day.',
  },
  {
    icon: MapPin,
    title: 'Real-Time Tracking',
    description: 'GPS tracking and live updates throughout your move. Always know where your belongings are.',
  },
];

export default function Features() {
  return (
    <section className="py-20 lg:py-24 bg-white" id="features">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-block text-sm font-extrabold text-primary uppercase tracking-widest mb-3">Why Choose MoverX</div>
          <h2 className="text-3xl lg:text-4xl font-extrabold text-secondary mb-4 tracking-tight">Experience, Trust & Care</h2>
          <p className="text-lg text-gray-600 font-medium leading-relaxed">
            As a family-owned business, we understand what matters most: treating your belongings like our own and making your move as stress-free as possible.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group bg-white p-8 rounded-xl border-2 border-gray-100 hover:border-primary hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center text-white mb-6 shadow-md group-hover:shadow-primary/30 transition-shadow">
                <feature.icon className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-extrabold text-secondary mb-3 group-hover:text-primary transition-colors">{feature.title}</h3>
              <p className="text-[0.9375rem] text-gray-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
