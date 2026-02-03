import ScrollLink from '@/components/ui/ScrollLink';
import { Facebook, Instagram, Linkedin, Phone, MapPin, Mail, Clock } from 'lucide-react';
import { useTranslations } from 'next-intl';

export default function Footer() {
  const t = useTranslations('Footer');

  const serviceKeys = ['interstate', 'local', 'packing', 'storage', 'commercial'];
  const companyKeys = ['about', 'reviews', 'faq', 'careers', 'payment'];

  return (
    <footer className="bg-gray-900 text-gray-400 pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* About */}
          <div>
            <h3 className="text-white font-black text-2xl mb-2">{t('header.about')}</h3>
            <div className="text-primary text-sm font-bold uppercase tracking-wider mb-4">{t('header.tagline')}</div>
            <p className="text-[0.9375rem] leading-relaxed mb-6 text-gray-400">
              {t('header.description')}
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
            <h4 className="text-white font-extrabold text-[0.9375rem] uppercase tracking-wider mb-6">{t('titles.services')}</h4>
            <ul className="flex flex-col gap-3">
              {serviceKeys.map((key) => (
                <li key={key}>
                  <ScrollLink href="#services" className="text-[0.9375rem] hover:text-primary transition-colors">
                    {t(`services.${key}`)}
                  </ScrollLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white font-extrabold text-[0.9375rem] uppercase tracking-wider mb-6">{t('titles.company')}</h4>
            <ul className="flex flex-col gap-3">
              {companyKeys.map((key) => (
                <li key={key}>
                  <ScrollLink href="#" className="text-[0.9375rem] hover:text-primary transition-colors">
                    {t(`company.${key}`)}
                  </ScrollLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-extrabold text-[0.9375rem] uppercase tracking-wider mb-6">{t('titles.getInTouch')}</h4>
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
                  <strong className="text-white block mb-1">{t('hours.title')}</strong>
                  {t('hours.weekdays')}<br />
                  {t('hours.weekend')}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500 text-center md:text-left">
          <div>{t('legal.rights')}</div>
          <div className="flex gap-6">
            <ScrollLink href="#" className="hover:text-white transition-colors">{t('legal.privacy')}</ScrollLink>
            <ScrollLink href="#" className="hover:text-white transition-colors">{t('legal.terms')}</ScrollLink>
          </div>
        </div>
      </div>
    </footer>
  );
}
