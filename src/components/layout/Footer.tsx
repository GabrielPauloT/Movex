import ScrollLink from '@/components/ui/ScrollLink';
import { Facebook, Instagram, Linkedin, Phone, MapPin, Mail, Clock } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* About */}
          <div>
            <h3 className="text-white font-black text-2xl mb-2">MoverX Solutions</h3>
            <div className="text-primary text-sm font-bold uppercase tracking-wider mb-4">Removals & Storage</div>
            <p className="text-[0.9375rem] leading-relaxed mb-6 text-gray-400">
              Family-owned and operated since 2009. Professional moving and storage services across Melbourne, Sydney, Canberra, and Adelaide. Three generations of moving expertise.
            </p>
            <div className="flex gap-4">
              <ScrollLink href="#" className="w-9 h-9 bg-gray-800 rounded-full flex items-center justify-center hover:bg-primary hover:text-white transition-all">
                <Facebook className="w-4 h-4" />
              </ScrollLink>
              <ScrollLink href="#" className="w-9 h-9 bg-gray-800 rounded-full flex items-center justify-center hover:bg-primary hover:text-white transition-all">
                <Linkedin className="w-4 h-4" />
              </ScrollLink>
              <ScrollLink href="#" className="w-9 h-9 bg-gray-800 rounded-full flex items-center justify-center hover:bg-primary hover:text-white transition-all">
                <Instagram className="w-4 h-4" />
              </ScrollLink>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-extrabold text-[0.9375rem] uppercase tracking-wider mb-6">Services</h4>
            <ul className="flex flex-col gap-3">
              {['Interstate Moving', 'Local Moving', 'Packing Services', 'Storage Solutions', 'Commercial Moves'].map((item) => (
                <li key={item}>
                  <ScrollLink href="#services" className="text-[0.9375rem] hover:text-primary transition-colors">
                    {item}
                  </ScrollLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white font-extrabold text-[0.9375rem] uppercase tracking-wider mb-6">Company</h4>
            <ul className="flex flex-col gap-3">
              {['About Us', 'Reviews', 'FAQ', 'Careers', 'Make a Payment'].map((item) => (
                <li key={item}>
                  <ScrollLink href="#" className="text-[0.9375rem] hover:text-primary transition-colors">
                    {item}
                  </ScrollLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-extrabold text-[0.9375rem] uppercase tracking-wider mb-6">Get in Touch</h4>
            <div className="flex flex-col gap-5">
              <a href="tel:1300480732" className="flex items-center gap-3 text-2xl font-black text-primary hover:text-primary-light transition-colors">
                <Phone className="w-6 h-6 fill-current" />
                1300 480 732
              </a>
              <div className="flex gap-3 text-[0.9375rem] leading-relaxed">
                <MapPin className="w-5 h-5 text-gray-600 shrink-0 mt-0.5" />
                <div>
                  191 Kensington Rd<br />
                  West Melbourne VIC 3003
                </div>
              </div>
              <div className="flex gap-3 text-[0.9375rem]">
                <Mail className="w-5 h-5 text-gray-600 shrink-0" />
                <a href="mailto:contact@moverxsolutions.com.au" className="hover:text-primary transition-colors">
                  contact@moverxsolutions.com.au
                </a>
              </div>
              <div className="flex gap-3 text-[0.9375rem] leading-relaxed">
                <Clock className="w-5 h-5 text-gray-600 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white block mb-1">Hours</strong>
                  Mon-Fri: 8AM - 5PM<br />
                  Sat: 9AM - 4PM | Sun: Closed
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500 text-center md:text-left">
          <div>© 2024 MoverX Solutions. All rights reserved. ABN: 55 608 835 794</div>
          <div className="flex gap-6">
            <ScrollLink href="#" className="hover:text-white transition-colors">Privacy Policy</ScrollLink>
            <ScrollLink href="#" className="hover:text-white transition-colors">Terms of Service</ScrollLink>
          </div>
        </div>
      </div>
    </footer>
  );
}
