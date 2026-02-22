import TopBar from '@/components/layout/TopBar';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import VolumeCalculator from '@/components/volume/VolumeCalculator';
import { setRequestLocale } from 'next-intl/server';

export default async function VolumeCalculatorPage({
  params
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <main className="min-h-screen flex flex-col bg-gray-50">
      <TopBar />
      <Header />

      <div className="flex-1 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <VolumeCalculator />
      </div>

      <Footer />
    </main>
  );
}
