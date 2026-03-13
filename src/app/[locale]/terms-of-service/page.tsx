import { setRequestLocale } from 'next-intl/server';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import FadeIn from '@/components/ui/FadeIn';

type Props = {
    params: Promise<{ locale: string }>;
};

export default async function TermsOfServicePage({ params }: Props) {
    const { locale } = await params;
    setRequestLocale(locale);

    return (
        <div className="min-h-screen bg-white">
            <Header />

            <main className="py-20 lg:py-32">
                <div className="container mx-auto px-6 max-w-4xl">
                    <FadeIn direction="up">
                        <h1 className="text-4xl lg:text-5xl font-extrabold text-secondary mb-12 tracking-tight">
                            Terms of Service
                        </h1>
                    </FadeIn>

                    {/* Refund & Cancellation Policy */}
                    <FadeIn direction="up" delay={100}>
                        <section className="mb-16">
                            <h2 className="text-3xl font-bold text-secondary mb-6">Refund & Cancellation Policy</h2>
                            <p className="text-gray-600 mb-6 leading-relaxed">
                                We value your time and trust. Our Refund & Cancellation Policy has been designed to provide transparency and fairness, while also ensuring that we can allocate our resources effectively. This policy is consistent with the Australian Consumer Law (ACL), which provides guarantees to consumers regarding services delivered with due care and skill.
                            </p>

                            <div className="space-y-6">
                                <div>
                                    <h3 className="text-xl font-bold text-secondary mb-3">1. Booking Deposits</h3>
                                    <p className="text-gray-600 leading-relaxed">
                                        To secure your service, a minimum 2 hours deposit is required at the time of booking. This deposit confirms your reservation, covers administrative costs, and will be deducted from the final invoice upon completion of the service.
                                    </p>
                                </div>

                                <div>
                                    <h3 className="text-xl font-bold text-secondary mb-3">2. Cancellations</h3>
                                    <ul className="space-y-3 text-gray-600">
                                        <li className="leading-relaxed">
                                            <strong>Up to 24 hours prior to the service:</strong> If you notify us with more than 24 hours prior to the scheduled start time, a cancellation fee of $50.00 will be applied.
                                        </li>
                                        <li className="leading-relaxed">
                                            <strong>Within 24 hours of service:</strong> Cancellations made within 24 hours of the scheduled start time will result in forfeiture of the deposit.
                                        </li>
                                        <li className="leading-relaxed">
                                            <strong>After dispatch or commencement:</strong> If our team has already been dispatched or the service has commenced, no refunds will be provided.
                                        </li>
                                    </ul>
                                    <p className="text-gray-600 mt-3 leading-relaxed">
                                        This policy allows us to manage crew scheduling, vehicle allocation, and client commitments fairly.
                                    </p>
                                </div>

                                <div>
                                    <h3 className="text-xl font-bold text-secondary mb-3">3. Rescheduling</h3>
                                    <p className="text-gray-600 leading-relaxed">
                                        If your plans change, we will make every reasonable effort to reschedule your service to a new date and time that is convenient for you. Rescheduling is subject to availability and may incur additional charges if significant adjustments are required.
                                    </p>
                                </div>

                                <div>
                                    <h3 className="text-xl font-bold text-secondary mb-3">4. Refunds</h3>
                                    <p className="text-gray-600 mb-3 leading-relaxed">
                                        Refunds are generally not issued once a service has commenced. However, under the ACL, if we fail to provide the service as agreed or if there is a major failure, you may be entitled to an appropriate remedy, which could include:
                                    </p>
                                    <ul className="list-disc pl-6 space-y-2 text-gray-600">
                                        <li>Re-performance of the service at no extra cost.</li>
                                        <li>A partial refund proportionate to the service not delivered.</li>
                                        <li>A full refund where the service cannot be reasonably remedied.</li>
                                    </ul>
                                </div>

                                <div>
                                    <h3 className="text-xl font-bold text-secondary mb-3">5. Client Responsibilities</h3>
                                    <p className="text-gray-600 mb-3 leading-relaxed">
                                        To avoid disputes, clients are responsible for:
                                    </p>
                                    <ul className="list-disc pl-6 space-y-2 text-gray-600">
                                        <li>Providing accurate booking information.</li>
                                        <li>Ensuring access, parking, and permits are available.</li>
                                        <li>Notifying us promptly of any changes or cancellations.</li>
                                    </ul>
                                    <p className="text-gray-600 mt-3 leading-relaxed">
                                        Failure to provide accurate information may affect eligibility for refunds or rescheduling.
                                    </p>
                                </div>

                                <div>
                                    <h3 className="text-xl font-bold text-secondary mb-3">6. Our Commitment</h3>
                                    <p className="text-gray-600 leading-relaxed">
                                        MoverX Solutions is committed to acting fairly and in good faith. While deposits are non-refundable, we will always work with you to find practical solutions, including rescheduling or applying credit towards future services where reasonable.
                                    </p>
                                </div>
                            </div>
                        </section>
                    </FadeIn>

                    {/* Terms & Conditions */}
                    <FadeIn direction="up" delay={200}>
                        <section className="mb-16">
                            <h2 className="text-3xl font-bold text-secondary mb-6">Terms & Conditions</h2>
                            <p className="text-gray-600 mb-6 leading-relaxed">
                                Welcome to MoverX Solutions. By engaging our services, you agree to be bound by the following Terms & Conditions. These terms are designed to ensure transparency, fairness, and compliance with the Australian Consumer Law (ACL). Please read them carefully before booking.
                            </p>

                            <div className="space-y-6">
                                <div>
                                    <h3 className="text-xl font-bold text-secondary mb-3">1. Bookings and Deposits</h3>
                                    <p className="text-gray-600 leading-relaxed">
                                        All bookings must be made with accurate information about the service requested, including addresses, access details, and items to be transported or stored. To confirm a booking, a minimum 2 hours deposit is required. This deposit secures your time slot, resources, and vehicles, and will be deducted from the final invoice. Without this deposit, bookings remain provisional and are not guaranteed.
                                    </p>
                                </div>

                                <div>
                                    <h3 className="text-xl font-bold text-secondary mb-3">2. Cancellations and Rescheduling</h3>
                                    <p className="text-gray-600 mb-3 leading-relaxed">
                                        We understand that plans can change. If you need to reschedule your service, we will make every effort to accommodate your request without penalty.
                                    </p>
                                    <ul className="list-disc pl-6 space-y-2 text-gray-600">
                                        <li>Cancellations within 24 hours of the scheduled start time will forfeit the deposit.</li>
                                        <li>If the crew has already been dispatched or work has commenced, no refunds will be available.</li>
                                    </ul>
                                    <p className="text-gray-600 mt-3 leading-relaxed">
                                        This policy reflects the operational costs incurred when resources are allocated and last-minute changes occur.
                                    </p>
                                </div>

                                <div>
                                    <h3 className="text-xl font-bold text-secondary mb-3">3. Scope of Services</h3>
                                    <p className="text-gray-600 mb-3 leading-relaxed">
                                        MoverX Solutions provides:
                                    </p>
                                    <ul className="list-disc pl-6 space-y-2 text-gray-600">
                                        <li>Residential and commercial relocations (local and interstate from Melbourne to Sydney, Canberra, and Adelaide).</li>
                                        <li>Storage solutions for short and long-term needs.</li>
                                        <li>Delivery services, 3PL, and fulfilment for business logistics.</li>
                                        <li>Packing and unpacking services (minimum hourly charges apply).</li>
                                    </ul>
                                    <p className="text-gray-600 mt-3 leading-relaxed">
                                        We do not disconnect or reinstall electrical appliances, nor do we handle items deemed unsafe by our team. Hazardous goods and illegal items are strictly prohibited.
                                    </p>
                                </div>

                                <div>
                                    <h3 className="text-xl font-bold text-secondary mb-3">4. Client Responsibilities</h3>
                                    <p className="text-gray-600 mb-3 leading-relaxed">
                                        Clients are required to:
                                    </p>
                                    <ul className="list-disc pl-6 space-y-2 text-gray-600">
                                        <li>Provide safe access to properties (stairs, lifts, parking).</li>
                                        <li>Arrange all necessary permits for parking or building access.</li>
                                        <li>Clearly identify fragile or high-value items before the move.</li>
                                        <li>Ensure goods are appropriately packed if professional packing has not been booked.</li>
                                    </ul>
                                    <p className="text-gray-600 mt-3 leading-relaxed">
                                        MoverX Solutions reserves the right to refuse service if conditions present risks to staff safety or breach legal requirements.
                                    </p>
                                </div>

                                <div>
                                    <h3 className="text-xl font-bold text-secondary mb-3">5. Payment Terms</h3>
                                    <p className="text-gray-600 leading-relaxed">
                                        Full payment is due upon completion of the service. Accepted payment methods are cash, Visa, MasterCard, and American Express. Please note that a 2% surcharge applies to card transactions. Failure to settle payments promptly may incur additional storage or redelivery charges.
                                    </p>
                                </div>

                                <div>
                                    <h3 className="text-xl font-bold text-secondary mb-3">6. Liability and Damages</h3>
                                    <p className="text-gray-600 mb-3 leading-relaxed">
                                        While every precaution is taken to protect your belongings, accidents may occur.
                                    </p>
                                    <ul className="list-disc pl-6 space-y-2 text-gray-600">
                                        <li>Claims for loss or damage must be reported on the same day of the service.</li>
                                        <li>Our liability is limited to repair, replacement, or compensation at our discretion, in line with industry standards and the ACL.</li>
                                        <li>We are not liable for pre-existing damage, improper packaging, or items not disclosed prior to the move.</li>
                                    </ul>
                                </div>

                                <div>
                                    <h3 className="text-xl font-bold text-secondary mb-3">7. Insurance</h3>
                                    <p className="text-gray-600 leading-relaxed">
                                        We strongly recommend that clients arrange their own comprehensive insurance to cover goods in transit or storage. MoverX Solutions can provide guidance on suitable insurers, but ultimate responsibility lies with the client.
                                    </p>
                                </div>

                                <div>
                                    <h3 className="text-xl font-bold text-secondary mb-3">8. Storage Terms</h3>
                                    <p className="text-gray-600 leading-relaxed">
                                        When utilising our storage solutions, clients are responsible for ensuring furniture and goods are adequately protected. Additional charges apply for protective materials supplied by MoverX. Access to stored goods must be arranged with prior notice.
                                    </p>
                                </div>

                                <div>
                                    <h3 className="text-xl font-bold text-secondary mb-3">9. Governing Law</h3>
                                    <p className="text-gray-600 leading-relaxed">
                                        These Terms & Conditions are governed by the laws of Victoria, Australia and comply with the Australian Consumer Law. By booking our services, you acknowledge and agree to these terms in full.
                                    </p>
                                </div>
                            </div>
                        </section>
                    </FadeIn>
                </div>
            </main>

            <Footer />
        </div>
    );
}
