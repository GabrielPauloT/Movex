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
import { MessageCircle } from 'lucide-react';
import { setRequestLocale } from 'next-intl/server';

export default async function Home({
  params
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <div className="min-h-screen bg-white">
      <TopBar />
      <Header />

      <main className="overflow-hidden">
        <Hero />

        <StatsBar />
        <Features />
        <Services />
        <Process />
        <Pricing />
        <Testimonials />
        <FAQ />
        <CTA />
      </main>

      <Footer />

      {/* WhatsApp Floating Button */}
      <a
        href="https://wa.me/61390127145"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 w-16 h-16 bg-[#25D366] rounded-full flex items-center justify-center text-white shadow-[0_4px_20px_rgba(37,211,102,0.4)] hover:scale-110 transition-transform z-50 animate-in fade-in zoom-in duration-500 delay-1000"
      >
        <MessageCircle className="w-8 h-8 fill-current" />
      </a>
    </div>
  );
}