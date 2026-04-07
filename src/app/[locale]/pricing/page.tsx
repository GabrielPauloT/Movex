import { setRequestLocale } from 'next-intl/server';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import FadeIn from '@/components/ui/FadeIn';
import { Button } from '@/components/ui/Button';
import { Check, Package, Phone, Shield, Truck, Wrench, BedDouble, ArrowUpDown, Users, type LucideIcon } from 'lucide-react';
import { GiBeltBuckles } from 'react-icons/gi';
import Link from 'next/link';
import { formatPrice, calculateEstimateRange, type TruckKey } from '@/data/truck-pricing';
import { PHONE_DISPLAY, PHONE_TEL_HREF } from '@/data/contact';

type Props = {
    params: Promise<{ locale: string }>;
};

export default async function PricingPage({ params }: Props) {
    const { locale } = await params;
    setRequestLocale(locale);

    const trucks = [
        {
            name: '4.5T Truck',
            price: `From ${formatPrice('4_5T')}`,
            volume: 'Up to 20m³',
            ideal: 'Studio / 1 bedroom apartment',
            movers: '2 movers included',
            image: '/trucks/truck-4_5t.png',
            features: [
                'Moving blankets & straps',
                'Hand trolleys',
                'Shrink wrap',
                'Mattress protector',
                'Hydraulic tailgate',
                'Professional crew'
            ]
        },
        {
            name: '8T Truck',
            price: `From ${formatPrice('8T')}`,
            volume: 'Up to 40m³',
            ideal: '2-3 bedroom houses',
            movers: '2 movers included',
            popular: true,
            image: '/trucks/truck-8t.png',
            features: [
                'Moving blankets & straps',
                'Hand trolleys',
                'Shrink wrap',
                'Mattress protector',
                'Hydraulic tailgate',
                'Professional crew'
            ]
        },
        {
            name: '12T Truck',
            price: `From ${formatPrice('12T')}`,
            volume: 'Up to 50m³',
            ideal: '4 bedroom houses',
            movers: '3 movers recommended',
            image: '/trucks/truck-12t.png',
            features: [
                'Moving blankets & straps',
                'Hand trolleys',
                'Shrink wrap',
                'Mattress protector',
                'Hydraulic tailgate',
                'Professional crew'
            ]
        },
        {
            name: '16T Truck',
            price: `From ${formatPrice('16T')}`,
            volume: 'Up to 70m³',
            ideal: '5+ bedroom homes',
            movers: '4 movers required',
            image: '/trucks/truck-16t.png',
            features: [
                'Moving blankets & straps',
                'Hand trolleys',
                'Shrink wrap',
                'Mattress protector',
                'Hydraulic tailgate',
                'Professional crew'
            ]
        }
    ];

    const estimates: Array<{
        size: string;
        volume: string;
        minHours: number;
        maxHours: number;
        truck: TruckKey;
    }> = [
        { size: 'Studio Apartment', volume: '8-10 m³', minHours: 1.5, maxHours: 2.5, truck: '4_5T' },
        { size: '1 Bedroom Apartment', volume: '10-15 m³', minHours: 2, maxHours: 3, truck: '4_5T' },
        { size: '2 Bedroom Apartment', volume: '20-24 m³', minHours: 3, maxHours: 4, truck: '4_5T' },
        { size: '3 Bedroom Apartment', volume: '25-30 m³', minHours: 5, maxHours: 6, truck: '8T' },
        { size: '2 Bedroom House', volume: '20-25 m³', minHours: 4, maxHours: 5, truck: '4_5T' },
        { size: '3 Bedroom House', volume: '25-35 m³', minHours: 5, maxHours: 7, truck: '8T' },
        { size: '4 Bedroom House', volume: '35-50 m³', minHours: 8, maxHours: 9, truck: '12T' },
        { size: '5 Bedroom House', volume: '55+ m³', minHours: 10, maxHours: 12, truck: '16T' }
    ];

    const included: { label: string; icon: React.ComponentType<{ className?: string }> }[] = [
        { label: 'Moving blankets', icon: Shield },
        { label: 'Hand trolleys', icon: ArrowUpDown },
        { label: 'Shrink wrap', icon: Package },
        { label: 'Mattress protector', icon: BedDouble },
        { label: 'Hydraulic Tailgate', icon: Truck },
        { label: 'Tool box with portable drill', icon: Wrench },
        { label: 'Professional crew', icon: Users },
        { label: 'Straps', icon: GiBeltBuckles },
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
                                                <div className="text-sm text-gray-500">per hour + GST included</div>
                                            </div>

                                            <div className="space-y-3 mb-6">
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
                            <div className="mt-8 text-center">
                                <p className="text-sm text-gray-500">
                                    Contact us for exact pricing tailored to your specific move.
                                </p>
                            </div>
                        </FadeIn>
                    </div>
                </section>

                {/* What's Included */}
                <section className="py-20 bg-white">
                    <div className="container mx-auto px-6">
                        <FadeIn direction="up">
                            <div className="text-center mb-12">
                                <div className="inline-block text-sm font-extrabold text-primary uppercase tracking-widest mb-3">Included</div>
                                <h2 className="text-3xl lg:text-4xl font-extrabold text-secondary mb-4 tracking-tight">
                                    What&apos;s Included With Every Move
                                </h2>
                                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                                    Every booking comes fully equipped. No extra charges for standard equipment.
                                </p>
                            </div>
                        </FadeIn>

                        <FadeIn direction="up" delay={100}>
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
                                {included.map((item, index) => (
                                    <div key={index} className="flex items-center gap-3 bg-gray-50 rounded-xl p-4 border border-gray-200">
                                        <div className="w-9 h-9 bg-gradient-to-br from-primary to-primary-light rounded-lg flex items-center justify-center text-white shrink-0">
                                            <item.icon className="w-4.5 h-4.5" />
                                        </div>
                                        <span className="text-sm font-medium text-secondary">{item.label}</span>
                                    </div>
                                ))}
                            </div>
                        </FadeIn>
                    </div>
                </section>

                {/* Price Estimates Table */}
                <section className="py-20 bg-gray-50">
                    <div className="container mx-auto px-6">
                        <FadeIn direction="up">
                            <div className="text-center mb-16">
                                <div className="inline-block text-sm font-extrabold text-primary uppercase tracking-widest mb-3">Estimates</div>
                                <h2 className="text-3xl lg:text-4xl font-extrabold text-secondary mb-4 tracking-tight">
                                    Moving Price Guide
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
                                                <td className="px-6 py-4 text-gray-600">{`${estimate.minHours}-${estimate.maxHours} hrs`}</td>
                                                <td className="px-6 py-4 text-gray-600">{formatPrice(estimate.truck)}</td>
                                                <td className="px-6 py-4 font-bold text-primary">{calculateEstimateRange(estimate.minHours, estimate.maxHours, estimate.truck)}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </FadeIn>

                        <FadeIn direction="up" delay={200}>
                            <div className="mt-8 p-6 bg-white rounded-xl border border-gray-200">
                                <p className="text-sm text-gray-600 leading-relaxed">
                                    <strong>Important:</strong> These estimates are based on average conditions. Your actual cost may vary depending on factors such as distance, access difficulty, stairs, parking availability, and additional services required. All prices are per hour + GST included. For an accurate quote tailored to your specific move, please contact our team.
                                </p>
                            </div>
                        </FadeIn>
                    </div>
                </section>

                {/* Factors Affecting Cost */}
                <section className="py-20 bg-white">
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
                                    <div className="bg-gray-50 p-6 rounded-xl border border-gray-200 hover:border-primary hover:shadow-lg transition-all duration-300">
                                        <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                                            <span className="text-lg font-extrabold text-primary">{index + 1}</span>
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
                                    <a href={PHONE_TEL_HREF}>
                                        <Button variant="outline" className="bg-white text-secondary hover:bg-gray-100 border-0 h-14 px-8 text-lg">
                                            <Phone className="w-5 h-5 mr-2" />
                                            {PHONE_DISPLAY}
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
