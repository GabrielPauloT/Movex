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
import Link from 'next/link';
import { MessageCircle } from 'lucide-react';

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <TopBar />
      <Header />

      <Hero />
      <StatsBar />
      <Features />
      <Services />
      <Process />
      <Pricing />
      <Testimonials />
      <FAQ />
      <CTA />

      <Footer />

      {/* WhatsApp Floating Button */}
      <a
        href="https://wa.me/61390127145"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 w-16 h-16 bg-[#25D366] rounded-full flex items-center justify-center text-white shadow-[0_4px_20px_rgba(37,211,102,0.4)] hover:scale-110 transition-transform z-50"
      >
        <MessageCircle className="w-8 h-8 fill-current" />
      </a>
    </main>
  );
}