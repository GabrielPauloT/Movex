import TopBar from '@/components/layout/TopBar';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import VolumeCalculator from '@/components/volume/VolumeCalculator';

export default function VolumeCalculatorPage() {
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
