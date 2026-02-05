import TopBar from '@/components/layout/TopBar';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/home/Hero';
import StatsBar from '@/components/home/StatsBar';
import Features from '@/components/home/Features';
import Process from '@/components/home/Process';
import Services from '@/components/home/Services';
import Pricing from '@/components/home/Pricing';
import Testimonials from '@/components/home/Testimonials';
import FAQ from '@/components/home/FAQ';
import CTA from '@/components/home/CTA';
import FadeIn from '@/components/ui/FadeIn';
import Link from 'next/link';
import { MessageCircle, Phone } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { setRequestLocale } from 'next-intl/server';

import { getGooglePlaceDetails } from '@/lib/googleMaps';

export default async function Home({
  params
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  const googleData = await getGooglePlaceDetails(locale);

  return (
    <div className="min-h-screen bg-white">
      <TopBar />
      <Header />

      <main className="overflow-hidden pb-24 lg:pb-0">
        <Hero rating={googleData.rating} />

        <StatsBar
          rating={googleData.rating}
          reviewCount={googleData.user_ratings_total}
        />
        <Features />
        <Services />
        <Process />
        <Pricing />
        <Testimonials reviews={googleData.reviews} />
        <FAQ />
        <CTA />
      </main>

      <Footer />

      {/* WhatsApp Floating Button */}
      {/* Sticky Mobile CTA */}
      <div className="fixed bottom-0 left-0 right-0 p-4 bg-white border-t border-gray-200 lg:hidden z-40 flex gap-3 shadow-[0_-4px_20px_rgba(0,0,0,0.05)]">
        <a href="tel:1300480732" className="flex-1">
          <Button variant="outline" className="w-full h-12 text-base font-bold border-2 border-secondary text-secondary hover:bg-secondary hover:text-white">
            <Phone className="w-5 h-5 mr-2" />
            Call
          </Button>
        </a>
        <a href="#quote" className="flex-1">
          <Button className="w-full h-12 text-base font-bold shadow-lg shadow-primary/20">
            Get Quote
          </Button>
        </a>
      </div>

      {/* WhatsApp Floating Button - Adjusted for mobile sticky bar */}
      <a
        href="https://wa.me/61390127145"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-24 lg:bottom-8 right-4 lg:right-8 w-14 h-14 lg:w-16 lg:h-16 bg-[#25D366] rounded-full flex items-center justify-center text-white shadow-[0_4px_20px_rgba(37,211,102,0.4)] hover:scale-110 transition-transform z-50 animate-in fade-in zoom-in duration-500 delay-1000"
      >
        <MessageCircle className="w-7 h-7 lg:w-8 lg:h-8 fill-current" />
      </a>
    </div>
  );
}