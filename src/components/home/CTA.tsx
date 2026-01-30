import { Phone } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import ScrollLink from '@/components/ui/ScrollLink';

export default function CTA() {
  return (
    <section className="py-24 px-6 bg-gradient-to-br from-secondary to-secondary-light text-white text-center relative overflow-hidden" id="contact">
      {/* Decorative background */}
      <div className="absolute -top-1/2 -left-[20%] w-[600px] h-[600px] bg-[radial-gradient(circle,rgba(230,126,34,0.2)_0%,transparent_70%)] rounded-full pointer-events-none" />

      <div className="container mx-auto relative z-10 max-w-3xl">
        <h2 className="text-3xl lg:text-4xl font-extrabold mb-6 tracking-tight">Ready to Make Your Move?</h2>
        <p className="text-xl text-gray-200 font-medium mb-10 leading-relaxed">
          Let our family help your family. Get your free quote today—no obligations, no pressure, just honest advice.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="tel:1300480732">
            <Button variant="white" size="lg" className="w-full sm:w-auto font-extrabold text-lg">
              <Phone className="w-5 h-5 mr-2 fill-current" />
              Call 1300 480 732
            </Button>
          </a>
          <ScrollLink href="#quote">
            <Button variant="primary" size="lg" className="w-full sm:w-auto font-extrabold text-lg bg-primary hover:bg-primary-light border-0">
              Calculate Online
            </Button>
          </ScrollLink>
        </div>
      </div>
    </section>
  );
}
