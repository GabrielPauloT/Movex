import TopBar from '@/components/layout/TopBar';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
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

      <div className="flex-1 w-full relative min-h-[85vh] overflow-hidden">
        <iframe
          src="https://moverxsolutions.move.pro"
          className="w-full border-0 absolute"
          style={{
            top: '-85px', // Adjusted to reveal the title
            height: 'calc(100% + 128px)',
          }}
          title="Movex Solutions Volume Calculator"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>

      <Footer />
    </main>
  );
}
