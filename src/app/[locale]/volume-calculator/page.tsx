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
    <main className="min-h-screen bg-gray-50">
      <TopBar />
      <Header />

      <div className="container mx-auto px-6 py-12">
        <VolumeCalculator />
      </div>

      <Footer />
    </main>
  );
}
