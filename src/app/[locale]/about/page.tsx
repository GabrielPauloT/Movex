import { setRequestLocale, getTranslations } from 'next-intl/server';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import TopBar from '@/components/layout/TopBar';
import FadeIn from '@/components/ui/FadeIn';
import { Button } from '@/components/ui/Button';
import { Heart, Eye, Clock, Users, Phone } from 'lucide-react';
import Link from 'next/link';

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
            <TopBar />
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
                <section className="py-20">
                    <div className="container mx-auto px-6">
                        <div className="max-w-3xl mx-auto">
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
                            <FadeIn direction="up" delay={300}>
                                <p className="text-lg text-gray-600 leading-relaxed">
                                    {t('story.p3')}
                                </p>
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
                                    {/* TODO: Update phone number when client provides new number */}
                                    <a href="tel:1300480732">
                                        <Button variant="outline" className="bg-white text-secondary hover:bg-gray-100 border-0 h-14 px-8 text-lg">
                                            <Phone className="w-5 h-5 mr-2" />
                                            1300 480 732
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
