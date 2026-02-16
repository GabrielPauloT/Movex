import { setRequestLocale } from 'next-intl/server';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import TopBar from '@/components/layout/TopBar';
import FadeIn from '@/components/ui/FadeIn';
import { Button } from '@/components/ui/Button';
import { Check, Truck, Package, Clock, Phone } from 'lucide-react';
import Link from 'next/link';

type Props = {
    params: Promise<{ locale: string }>;
};

export default async function PricingPage({ params }: Props) {
    const { locale } = await params;
    setRequestLocale(locale);

    const trucks = [
        {
            name: '4T Truck',
            price: 'From $129',
            dimensions: '4200L x 2050W x 2200H',
            volume: '19 cubic meters',
            ideal: '1-2 bedroom apartments',
            movers: '2 movers included',
            image: '/small truck.jpg',
            features: [
                'Moving blankets & straps',
                'Hand trolley included',
                'Hydraulic tailgate lift',
                'Professional crew'
            ]
        },
        {
            name: '8T Truck',
            price: 'From $139',
            dimensions: '6400L x 2400W x 2500H',
            volume: '38 cubic meters',
            ideal: '2-3 bedroom apartments',
            movers: '2 movers included',
            popular: true,
            image: '/medium truck.jpeg',
            features: [
                'Moving blankets & straps',
                'Hand trolley included',
                'Hydraulic tailgate lift',
                'Professional crew'
            ]
        },
        {
            name: '10T Truck',
            price: 'From $149',
            dimensions: '7000L x 2400W x 2700H',
            volume: '46 cubic meters',
            ideal: '3-4 bedroom homes',
            movers: '2 movers included',
            image: '/large truck.jpg',
            features: [
                'Moving blankets & straps',
                'Hand trolley included',
                'Hydraulic tailgate & ramp',
                'Professional crew'
            ]
        },
        {
            name: '12T Truck',
            price: 'From $169',
            dimensions: '8000L x 2400W x 2900H',
            volume: '55 cubic meters',
            ideal: '4-5 bedroom homes',
            movers: '2 movers included',
            image: '/large truck.jpg',
            features: [
                'Moving blankets & straps',
                'Hand trolley included',
                'Hydraulic tailgate & ramp',
                'Professional crew'
            ]
        }
    ];

    const estimates = [
        { size: 'Studio Apartment', volume: '7-9 m³', time: '1.5-2.5 hrs', rate: '$129', total: '$193-$322' },
        { size: '1 Bedroom Apartment', volume: '14-16 m³', time: '2-3 hrs', rate: '$129', total: '$258-$387' },
        { size: '2 Bedroom Apartment', volume: '22-24 m³', time: '3-4 hrs', rate: '$129', total: '$387-$516' },
        { size: '3 Bedroom Apartment', volume: '31-33 m³', time: '5-6 hrs', rate: '$129', total: '$516-$774' },
        { size: '2 Bedroom House', volume: '25-27 m³', time: '3.5-5.5 hrs', rate: '$129', total: '$452-$710' },
        { size: '3 Bedroom House', volume: '34-36 m³', time: '6-8 hrs', rate: '$149', total: '$894-$1192' },
        { size: '4 Bedroom House', volume: '47-49 m³', time: '7-9 hrs', rate: '$149', total: '$1043-$1341' },
        { size: '5 Bedroom House', volume: '55+ m³', time: '8-10 hrs', rate: '$149', total: '$1192-$1490' }
    ];

    const factors = [
        {
            title: 'Property Type',
            description: 'Costs vary between apartments and houses due to access, stairs, and elevators.'
        },
        {
            title: 'Distance',
            description: 'Travel distance from pickup to delivery location affects the total cost.'
        },
        {
            title: 'Volume of Items',
            description: 'More furniture and belongings require larger trucks and more time.'
        },
        {
            title: 'Access & Parking',
            description: 'Difficult access, stairs, or limited parking may require additional time.'
        }
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
                                    Transparent Pricing
                                </h1>
                                <p className="text-xl text-gray-300 leading-relaxed">
                                    No hidden fees, no surprises. Clear, upfront pricing for all our moving services.
                                </p>
                            </div>
                        </FadeIn>
                    </div>
                </section>

                {/* Truck Options */}
                <section className="py-20 bg-gray-50">
                    <div className="container mx-auto px-6">
                        <FadeIn direction="up">
                            <div className="text-center mb-16">
                                <div className="inline-block text-sm font-extrabold text-primary uppercase tracking-widest mb-3">Our Fleet</div>
                                <h2 className="text-3xl lg:text-4xl font-extrabold text-secondary mb-4 tracking-tight">
                                    Choose Your Truck Size
                                </h2>
                                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                                    Select the right truck for your move. All trucks come with professional movers and equipment.
                                </p>
                            </div>
                        </FadeIn>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {trucks.map((truck, index) => (
                                <FadeIn key={index} direction="up" delay={index * 50}>
                                    <div className={`relative bg-white rounded-2xl overflow-hidden border-2 ${truck.popular ? 'border-primary shadow-xl' : 'border-gray-200'} hover:shadow-xl transition-all duration-300`}>
                                        {truck.popular && (
                                            <div className="absolute top-4 right-4 z-10 bg-primary text-white px-4 py-1 rounded-full text-sm font-bold">
                                                Most Popular
                                            </div>
                                        )}
                                        
                                        {/* Truck Image */}
                                        <div className="relative h-48 bg-gray-100 overflow-hidden">
                                            <img 
                                                src={truck.image} 
                                                alt={truck.name}
                                                className="w-full h-full object-cover"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                                            <div className="absolute bottom-4 left-4 right-4">
                                                <h3 className="text-2xl font-bold text-white mb-1">{truck.name}</h3>
                                                <div className="text-sm text-white/90">{truck.volume}</div>
                                            </div>
                                        </div>

                                        <div className="p-6">
                                            <div className="text-center mb-6 pb-6 border-b border-gray-200">
                                                <div className="text-3xl font-extrabold text-primary mb-1">{truck.price}</div>
                                                <div className="text-sm text-gray-500">per hour</div>
                                            </div>

                                            <div className="space-y-3 mb-6">
                                                <div className="flex items-center justify-between text-sm">
                                                    <span className="text-gray-500">Dimensions</span>
                                                    <span className="font-semibold text-secondary text-xs">{truck.dimensions}</span>
                                                </div>
                                                <div className="flex items-center justify-between text-sm">
                                                    <span className="text-gray-500">Ideal For</span>
                                                    <span className="font-semibold text-secondary text-xs text-right">{truck.ideal}</span>
                                                </div>
                                                <div className="flex items-center justify-between text-sm">
                                                    <span className="text-gray-500">Team</span>
                                                    <span className="font-semibold text-secondary text-xs">{truck.movers}</span>
                                                </div>
                                            </div>

                                            <div className="border-t border-gray-200 pt-4 mb-6">
                                                <div className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">Included:</div>
                                                <ul className="space-y-2">
                                                    {truck.features.map((feature, i) => (
                                                        <li key={i} className="flex items-start gap-2 text-xs text-gray-600">
                                                            <Check className="w-3.5 h-3.5 text-primary shrink-0 mt-0.5" />
                                                            <span>{feature}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>

                                            <Link href={`/${locale}/#quote`}>
                                                <Button className="w-full" variant={truck.popular ? 'primary' : 'outline'}>
                                                    Get Quote
                                                </Button>
                                            </Link>
                                        </div>
                                    </div>
                                </FadeIn>
                            ))}
                        </div>

                        <FadeIn direction="up" delay={200}>
                            <div className="mt-8 text-center text-sm text-gray-600">
                                <strong>Note:</strong> Fuel charges and minimum booking hours apply. Contact us for exact pricing.
                            </div>
                        </FadeIn>
                    </div>
                </section>

                {/* Price Estimates Table */}
                <section className="py-20 bg-white">
                    <div className="container mx-auto px-6">
                        <FadeIn direction="up">
                            <div className="text-center mb-16">
                                <div className="inline-block text-sm font-extrabold text-primary uppercase tracking-widest mb-3">Estimates</div>
                                <h2 className="text-3xl lg:text-4xl font-extrabold text-secondary mb-4 tracking-tight">
                                    How Much Does It Cost?
                                </h2>
                                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                                    Average pricing based on property size. Final cost depends on distance and specific requirements.
                                </p>
                            </div>
                        </FadeIn>

                        <FadeIn direction="up" delay={100}>
                            <div className="overflow-x-auto">
                                <table className="w-full border-collapse bg-white rounded-xl overflow-hidden shadow-lg">
                                    <thead>
                                        <tr className="bg-secondary text-white">
                                            <th className="px-6 py-4 text-left font-bold">Property Size</th>
                                            <th className="px-6 py-4 text-left font-bold">Volume</th>
                                            <th className="px-6 py-4 text-left font-bold">Avg Time</th>
                                            <th className="px-6 py-4 text-left font-bold">Hourly Rate</th>
                                            <th className="px-6 py-4 text-left font-bold">Est. Total</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {estimates.map((estimate, index) => (
                                            <tr key={index} className={`border-b border-gray-200 ${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'} hover:bg-primary/5 transition-colors`}>
                                                <td className="px-6 py-4 font-semibold text-secondary">{estimate.size}</td>
                                                <td className="px-6 py-4 text-gray-600">{estimate.volume}</td>
                                                <td className="px-6 py-4 text-gray-600">{estimate.time}</td>
                                                <td className="px-6 py-4 text-gray-600">{estimate.rate}</td>
                                                <td className="px-6 py-4 font-bold text-primary">{estimate.total}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </FadeIn>

                        <FadeIn direction="up" delay={200}>
                            <div className="mt-8 p-6 bg-gray-50 rounded-xl border border-gray-200">
                                <p className="text-sm text-gray-600 leading-relaxed">
                                    <strong>Important:</strong> These estimates are based on average conditions. Your actual cost may vary depending on factors such as distance, access difficulty, stairs, parking availability, and additional services required. For an accurate quote tailored to your specific move, please contact our team.
                                </p>
                            </div>
                        </FadeIn>
                    </div>
                </section>

                {/* Factors Affecting Cost */}
                <section className="py-20 bg-gray-50">
                    <div className="container mx-auto px-6">
                        <FadeIn direction="up">
                            <div className="text-center mb-16">
                                <div className="inline-block text-sm font-extrabold text-primary uppercase tracking-widest mb-3">Pricing Factors</div>
                                <h2 className="text-3xl lg:text-4xl font-extrabold text-secondary mb-4 tracking-tight">
                                    What Affects Your Moving Cost?
                                </h2>
                            </div>
                        </FadeIn>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {factors.map((factor, index) => (
                                <FadeIn key={index} direction="up" delay={index * 50}>
                                    <div className="bg-white p-6 rounded-xl border border-gray-200 hover:border-primary hover:shadow-lg transition-all duration-300">
                                        <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                                            <Package className="w-6 h-6 text-primary" />
                                        </div>
                                        <h3 className="text-lg font-bold text-secondary mb-2">{factor.title}</h3>
                                        <p className="text-sm text-gray-600 leading-relaxed">{factor.description}</p>
                                    </div>
                                </FadeIn>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="py-20 bg-secondary">
                    <div className="container mx-auto px-6">
                        <FadeIn direction="up">
                            <div className="max-w-3xl mx-auto text-center">
                                <h2 className="text-3xl lg:text-4xl font-extrabold text-white mb-6">
                                    Ready to Get Your Exact Quote?
                                </h2>
                                <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                                    Contact us today for a free, no-obligation quote tailored to your specific moving needs.
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
