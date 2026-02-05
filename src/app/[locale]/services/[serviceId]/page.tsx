import { getTranslations, setRequestLocale } from 'next-intl/server';
import { notFound } from 'next/navigation';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import TopBar from '@/components/layout/TopBar';
import CTA from '@/components/home/CTA';
import { Check, ArrowRight, Phone, Calendar, Shield } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import Link from 'next/link';
import FadeIn from '@/components/ui/FadeIn';

type Props = {
    params: Promise<{ locale: string; serviceId: string }>;
};

const VALID_SERVICES = ['interstate', 'packing', 'commercial', 'local', 'storage', 'specialty'];

export function generateStaticParams() {
    return VALID_SERVICES.map((serviceId) => ({ serviceId }));
}

export default async function ServicePage({ params }: Props) {
    const { locale, serviceId } = await params;

    if (!VALID_SERVICES.includes(serviceId)) {
        notFound();
    }

    setRequestLocale(locale);
    const t = await getTranslations(`ServiceDetails.${serviceId}`);
    const tCommon = await getTranslations('Services'); // For "Other Services" title if needed

    // Safe checks for arrays
    const features = (t.raw('features') || []) as string[];
    const benefits = (t.raw('benefits') || []) as string[];

    return (
        <div className="min-h-screen bg-white">
            <TopBar />
            <Header />

            <main>
                {/* Service Hero */}
                <section className="relative bg-secondary py-20 lg:py-32 overflow-hidden">
                    <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1600585152220-90363fe7e115?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-10 mix-blend-overlay" />
                    <div className="absolute inset-0 bg-gradient-to-b from-secondary/50 to-secondary" />

                    <div className="container mx-auto px-6 relative z-10">
                        <FadeIn direction="up">
                            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium text-white/90 mb-6 border border-white/20">
                                <Link href={`/${locale}`} className="hover:text-primary transition-colors">Home</Link>
                                <span className="text-white/40">/</span>
                                <span className="text-primary">{t('title')}</span>
                            </div>

                            <h1 className="text-4xl lg:text-6xl font-extrabold text-white mb-6 tracking-tight max-w-4xl">
                                {t('title')}
                            </h1>
                            <p className="text-xl text-gray-300 max-w-2xl leading-relaxed font-light">
                                {t('subtitle')}
                            </p>
                        </FadeIn>
                    </div>
                </section>

                <div className="container mx-auto px-6 py-20">
                    <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-16">
                        {/* Main Content */}
                        <div>
                            <FadeIn direction="up" delay={100}>
                                <h2 className="text-3xl font-bold text-secondary mb-6">Overview</h2>
                                <div className="prose prose-lg text-gray-600 mb-12 leading-relaxed">
                                    <p>{t('description')}</p>
                                </div>
                            </FadeIn>

                            <FadeIn direction="up" delay={200}>
                                <h3 className="text-2xl font-bold text-secondary mb-8 flex items-center gap-3">
                                    <span className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                                        <Shield className="w-5 h-5" />
                                    </span>
                                    Key Features
                                </h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
                                    {features.map((feature, idx) => (
                                        <div key={idx} className="flex items-start gap-4 p-6 rounded-2xl bg-gray-50 border border-gray-100 hover:border-primary/20 hover:bg-white hover:shadow-lg transition-all duration-300 group">
                                            <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-primary shadow-sm border border-gray-100 group-hover:scale-110 transition-transform flex-shrink-0">
                                                <Check className="w-4 h-4 stroke-[3]" />
                                            </div>
                                            <span className="font-medium text-gray-700 pt-1 group-hover:text-secondary transition-colors">{feature}</span>
                                        </div>
                                    ))}
                                </div>
                            </FadeIn>

                            <FadeIn direction="up" delay={300}>
                                <div className="bg-secondary rounded-3xl p-8 lg:p-12 text-white relative overflow-hidden">
                                    <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />

                                    <h3 className="text-2xl font-bold mb-8 relative z-10">Why Choose This Service?</h3>
                                    <div className="space-y-6 relative z-10">
                                        {benefits.map((benefit, idx) => (
                                            <div key={idx} className="flex items-center gap-4">
                                                <div className="w-2 h-2 rounded-full bg-primary" />
                                                <span className="text-lg font-medium text-white/90">{benefit}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </FadeIn>
                        </div>

                        {/* Sidebar */}
                        <aside className="lg:sticky lg:top-32 h-fit space-y-8">
                            {/* Quick Quote Card */}
                            <FadeIn direction="left" delay={200}>
                                <div className="bg-white rounded-2xl shadow-xl shadow-gray-200/50 p-8 border border-gray-100">
                                    <h3 className="text-xl font-bold text-secondary mb-2">Ready to Move?</h3>
                                    <p className="text-gray-500 text-sm mb-6">Get a free, no-obligation quote in minutes.</p>

                                    <div className="space-y-4">
                                        <Link href="/#quote" className="block w-full">
                                            <Button className="w-full text-lg h-12">Get Free Quote</Button>
                                        </Link>
                                        <a href="tel:1300480732" className="block w-full">
                                            <Button variant="outline" className="w-full text-lg h-12 border-2">
                                                <Phone className="w-4 h-4 mr-2" />
                                                1300 480 732
                                            </Button>
                                        </a>
                                    </div>

                                    <div className="mt-6 pt-6 border-t border-gray-100">
                                        <div className="flex items-center gap-3 text-sm text-gray-500">
                                            <Calendar className="w-4 h-4 text-primary" />
                                            <span>Available 7 days a week</span>
                                        </div>
                                    </div>
                                </div>
                            </FadeIn>

                            {/* Navigation */}
                            <FadeIn direction="left" delay={300}>
                                <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100">
                                    <h3 className="font-bold text-secondary mb-6">Other Services</h3>
                                    <div className="space-y-3">
                                        {VALID_SERVICES.filter(s => s !== serviceId).map(s => (
                                            <Link
                                                key={s}
                                                href={`/${locale}/services/${s}`}
                                                className="flex items-center justify-between p-3 rounded-lg bg-white border border-gray-200 text-gray-600 hover:text-primary hover:border-primary/50 transition-all group"
                                            >
                                                {/* This is a bit tricky because we need the title of *other* services. 
                           Ideally I'd use t(`../${s}.title`) but useTranslations is scoped.
                           I'll assume the user is okay with the English ID or I need to fetch a broader scope.
                           Actually, I can just use a localized map here if I had one, OR I can change the scope of useTranslations to root.
                        */}
                                                <span className="capitalize font-medium">{tCommon(`items.${s}.title`)}</span>
                                                <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all" />
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            </FadeIn>
                        </aside>
                    </div>
                </div>

                <CTA />
            </main>

            <Footer />
        </div>
    );
}
