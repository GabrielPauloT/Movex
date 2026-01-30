import ScrollLink from '@/components/ui/ScrollLink';
import { Check, Minus } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { cn } from '@/lib/utils';

const packages = [
  {
    name: 'Essential',
    subtitle: 'Core moving services',
    price: '1,500',
    description: 'Perfect for 1-2 bedroom moves',
    features: [
      { text: 'Professional loading & unloading', included: true },
      { text: 'Basic insurance coverage', included: true },
      { text: 'Standard packing materials', included: true },
      { text: 'GPS tracking', included: true },
      { text: 'Full packing service', included: false },
      { text: 'Furniture assembly', included: false },
    ],
    highlight: false,
  },
  {
    name: 'Complete',
    subtitle: 'Full-service moving',
    price: '2,500',
    description: 'Ideal for 3-4 bedroom homes',
    features: [
      { text: 'Everything in Essential', included: true },
      { text: 'Full packing service', included: true },
      { text: 'Premium insurance', included: true },
      { text: 'Furniture disassembly & assembly', included: true },
      { text: '30 days free storage', included: true },
      { text: 'Priority scheduling', included: true },
    ],
    highlight: true,
  },
  {
    name: 'Premium',
    subtitle: 'White-glove service',
    price: '4,000',
    description: 'For 4+ bedrooms or luxury moves',
    features: [
      { text: 'Everything in Complete', included: true },
      { text: 'Dedicated move coordinator', included: true },
      { text: 'Custom crating for valuables', included: true },
      { text: '90 days free storage', included: true },
      { text: 'Same-day service available', included: true },
      { text: 'Post-move cleaning', included: true },
    ],
    highlight: false,
  },
];

export default function Pricing() {
  return (
    <section className="py-20 lg:py-24 bg-gray-50" id="pricing">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-block text-sm font-extrabold text-primary uppercase tracking-widest mb-3">Pricing</div>
          <h2 className="text-3xl lg:text-4xl font-extrabold text-secondary mb-4 tracking-tight">Honest, Transparent Packages</h2>
          <p className="text-lg text-gray-600 font-medium leading-relaxed">
            All packages include full insurance. Choose the level of service that&apos;s right for you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          {packages.map((pkg, index) => (
            <div
              key={index}
              className={cn(
                "bg-white rounded-2xl p-8 border-2 transition-all duration-300 relative",
                pkg.highlight
                  ? "border-primary shadow-xl scale-100 lg:scale-105 z-10"
                  : "border-gray-200 hover:border-primary/50 hover:shadow-lg"
              )}
            >
              {pkg.highlight && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-primary to-accent text-white px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest shadow-lg">
                  Most Popular
                </div>
              )}

              <h3 className="text-2xl font-black text-secondary mb-1">{pkg.name}</h3>
              <p className="text-sm text-gray-500 font-medium mb-6">{pkg.subtitle}</p>

              <div className="flex items-baseline mb-2">
                <span className="text-5xl font-black text-primary tracking-tight">${pkg.price}</span>
                <span className="text-xl font-bold text-primary ml-1">+</span>
              </div>
              <p className="text-sm text-gray-500 mb-8 pb-8 border-b border-gray-100">{pkg.description}</p>

              <ul className="space-y-4 mb-8">
                {pkg.features.map((feature, idx) => (
                  <li key={idx} className={cn("flex items-start gap-3 text-sm", feature.included ? "text-gray-700" : "text-gray-400")}>
                    {feature.included ? (
                      <Check className="w-5 h-5 text-primary shrink-0" />
                    ) : (
                      <Minus className="w-5 h-5 text-gray-300 shrink-0" />
                    )}
                    <span className="font-medium">{feature.text}</span>
                  </li>
                ))}
              </ul>

              <ScrollLink href="#quote" className="block">
                <Button
                  variant={pkg.highlight ? 'primary' : 'secondary'}
                  className="w-full"
                  size="lg"
                >
                  Get Quote
                </Button>
              </ScrollLink>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
