import { setRequestLocale, getTranslations } from 'next-intl/server';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import FadeIn from '@/components/ui/FadeIn';
import { Button } from '@/components/ui/Button';
import { Heart, Eye, Clock, Users, Phone, CheckSquare } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

type Props = {
    params: Promise<{ locale: string }>;
};

export default async function AboutPage({ params }: Props) {
    const { locale } = await params;
    setRequestLocale(locale);
    const t = await getTranslations('About');

    const values = [
        { key: 'care', icon: Heart },
        { key: 'transparency', icon: Eye },
        { key: 'reliability', icon: Clock },
        { key: 'community', icon: Users },
    ];

    return (
        <div className="min-h-screen bg-white">
            <Header />

            <main className="pb-20">
                {/* Hero Section */}
                <section className="bg-secondary py-20 lg:py-32">
                    <div className="container mx-auto px-6">
                        <FadeIn direction="up">
                            <div className="max-w-3xl mx-auto text-center">
                                <h1 className="text-4xl lg:text-6xl font-extrabold text-white mb-6 tracking-tight">
                                    {t('title')}
                                </h1>
                                <p className="text-xl text-gray-300 leading-relaxed">
                                    {t('subtitle')}
                                </p>
                            </div>
                        </FadeIn>
                    </div>
                </section>

                {/* Our Story */}
                <section className="py-20 lg:py-24">
                    <div className="container mx-auto px-6">
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
                            <div className="lg:col-span-7">
                                <FadeIn direction="up">
                                    <h2 className="text-3xl lg:text-4xl font-extrabold text-secondary mb-8 tracking-tight">
                                        {t('story.title')}
                                    </h2>
                                </FadeIn>
                                <FadeIn direction="up" delay={100}>
                                    <p className="text-lg text-gray-600 leading-relaxed mb-6">
                                        {t('story.p1')}
                                    </p>
                                </FadeIn>
                                <FadeIn direction="up" delay={200}>
                                    <p className="text-lg text-gray-600 leading-relaxed mb-6">
                                        {t('story.p2')}
                                    </p>
                                </FadeIn>
                            </div>
                            <div className="lg:col-span-5">
                                <FadeIn direction="left" delay={200}>
                                    <div className="rounded-2xl overflow-hidden shadow-xl">
                                        <Image
                                            src="/moverx_contents/about-our-story.png"
                                            alt="MoverX Solutions team"
                                            width={800}
                                            height={1000}
                                            className="w-full h-auto object-cover"
                                        />
                                    </div>
                                </FadeIn>
                            </div>
                        </div>

                        <FadeIn direction="up" delay={300}>
                            <p className="text-lg text-gray-600 leading-relaxed mt-10 mb-10 w-full text-left">
                                {t('story.p3')}
                            </p>
                        </FadeIn>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <FadeIn direction="up" delay={400}>
                                <div className="bg-white p-8 lg:p-10 rounded-2xl border border-gray-100 shadow-[0_4px_30px_rgb(0,0,0,0.03)] h-full">
                                    <div className="flex items-center gap-4 mb-5">
                                        <div className="text-secondary shrink-0">
                                            <svg className="w-10 h-10" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M19 3H5C3.89 3 3 3.9 3 5V19C3 20.1 3.89 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3ZM10 17L5 12L6.41 10.59L10 14.17L17.59 6.58L19 8L10 17Z"/>
                                            </svg>
                                        </div>
                                        <h3 className="text-2xl font-bold text-secondary">{t('story.mission.title')}</h3>
                                    </div>
                                    <p className="text-gray-600 text-[1.05rem] leading-relaxed">
                                        {t('story.mission.description')}
                                    </p>
                                </div>
                            </FadeIn>
                            <FadeIn direction="up" delay={500}>
                                <div className="bg-white p-8 lg:p-10 rounded-2xl border border-gray-100 shadow-[0_4px_30px_rgb(0,0,0,0.03)] h-full">
                                    <div className="flex items-center gap-4 mb-5">
                                        <div className="text-secondary shrink-0 relative flex items-center justify-center">
                                            <Eye className="w-10 h-10" strokeWidth={2.5} />
                                            <div className="absolute -top-1 -right-2 text-secondary">
                                                <svg className="w-5 h-5 bg-white rounded-full p-0.5" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" />
                                                </svg>
                                            </div>
                                        </div>
                                        <h3 className="text-2xl font-bold text-secondary">{t('story.vision.title')}</h3>
                                    </div>
                                    <p className="text-gray-600 text-[1.05rem] leading-relaxed">
                                        {t('story.vision.description')}
                                    </p>
                                </div>
                            </FadeIn>
                        </div>
                    </div>
                </section>

                {/* Values */}
                <section className="py-20 bg-gray-50">
                    <div className="container mx-auto px-6">
                        <FadeIn direction="up">
                            <div className="text-center mb-16">
                                <h2 className="text-3xl lg:text-4xl font-extrabold text-secondary mb-4 tracking-tight">
                                    {t('values.title')}
                                </h2>
                            </div>
                        </FadeIn>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                            {values.map((item, index) => (
                                <FadeIn key={item.key} direction="up" delay={index * 100}>
                                    <div className="bg-white p-8 rounded-xl border-2 border-gray-100 hover:border-primary hover:shadow-lg hover:-translate-y-1 transition-all duration-300 h-full flex flex-col">
                                        <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary-light rounded-xl flex items-center justify-center text-white mb-6 shadow-md">
                                            <item.icon className="w-8 h-8" />
                                        </div>
                                        <h3 className="text-xl font-extrabold text-secondary mb-3">
                                            {t(`values.${item.key}.title`)}
                                        </h3>
                                        <p className="text-[0.9375rem] text-gray-600 leading-relaxed flex-grow">
                                            {t(`values.${item.key}.description`)}
                                        </p>
                                    </div>
                                </FadeIn>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CTA */}
                <section className="py-20 bg-secondary">
                    <div className="container mx-auto px-6">
                        <FadeIn direction="up">
                            <div className="max-w-3xl mx-auto text-center">
                                <h2 className="text-3xl lg:text-4xl font-extrabold text-white mb-6">
                                    Ready to Move With Us?
                                </h2>
                                <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                                    Get in touch today for a free, no-obligation quote.
                                </p>
                                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                    <a href="tel:0370580073">
                                        <Button variant="outline" className="bg-white text-secondary hover:bg-gray-100 border-0 h-14 px-8 text-lg">
                                            <Phone className="w-5 h-5 mr-2" />
                                            03 7058 0073
                                        </Button>
                                    </a>
                                    <Link href={`/${locale}/#quote`}>
                                        <Button className="h-14 px-8 text-lg bg-primary hover:bg-primary-light">
                                            Get Free Quote
                                        </Button>
                                    </Link>
                                </div>
                            </div>
                        </FadeIn>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
}
