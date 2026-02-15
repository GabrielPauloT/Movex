import { setRequestLocale } from 'next-intl/server';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import TopBar from '@/components/layout/TopBar';
import FadeIn from '@/components/ui/FadeIn';

type Props = {
    params: Promise<{ locale: string }>;
};

export default async function PolicyPage({ params }: Props) {
    const { locale } = await params;
    setRequestLocale(locale);

    return (
        <div className="min-h-screen bg-white">
            <TopBar />
            <Header />

            <main className="py-20 lg:py-32">
                <div className="container mx-auto px-6 max-w-4xl">
                    <FadeIn direction="up">
                        <h1 className="text-4xl lg:text-5xl font-extrabold text-secondary mb-12 tracking-tight">
                            MoverX Solutions Policy
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

                    {/* Privacy Policy */}
                    <FadeIn direction="up" delay={200}>
                        <section className="mb-16">
                            <h2 className="text-3xl font-bold text-secondary mb-6">Privacy Policy</h2>
                            <p className="text-gray-600 mb-6 leading-relaxed">
                                Your privacy matters to us. At MoverX Solutions, we are committed to handling your personal information responsibly and transparently. This Privacy Policy explains what data we collect, how we use it, and the steps we take to safeguard it, in line with the Privacy Act 1988 (Cth) and the Australian Privacy Principles (APPs).
                            </p>

                            <div className="space-y-6">
                                <div>
                                    <h3 className="text-xl font-bold text-secondary mb-3">1. Information We Collect</h3>
                                    <p className="text-gray-600 mb-3 leading-relaxed">
                                        To provide our moving, storage, logistics, and fulfilment services, we may collect the following information:
                                    </p>
                                    <ul className="list-disc pl-6 space-y-2 text-gray-600">
                                        <li>Personal details: name, phone number, email address, residential and delivery addresses.</li>
                                        <li>Booking details: service type, inventory of items, access instructions, and special requirements.</li>
                                        <li>Payment details: billing information for invoicing and processing secure transactions (we do not store full credit card details).</li>
                                        <li>Online interactions: information submitted via forms, emails, or our website (including cookies and analytics data).</li>
                                    </ul>
                                </div>

                                <div>
                                    <h3 className="text-xl font-bold text-secondary mb-3">2. How We Use Your Information</h3>
                                    <p className="text-gray-600 mb-3 leading-relaxed">
                                        We only collect information necessary for our operations, including:
                                    </p>
                                    <ul className="list-disc pl-6 space-y-2 text-gray-600">
                                        <li>Processing bookings, delivering services, and managing storage solutions.</li>
                                        <li>Communicating with you about your booking, service updates, or rescheduling.</li>
                                        <li>Processing payments, invoices, and accounting records.</li>
                                        <li>Improving our services, website functionality, and customer experience.</li>
                                        <li>Meeting our legal and regulatory obligations.</li>
                                    </ul>
                                </div>

                                <div>
                                    <h3 className="text-xl font-bold text-secondary mb-3">3. Data Storage and Security</h3>
                                    <p className="text-gray-600 mb-3 leading-relaxed">
                                        We implement industry-standard security measures to protect your data from unauthorised access, misuse, or loss. While no system can guarantee complete protection, we continuously review our practices to minimise risks.
                                    </p>
                                    <p className="text-gray-600 leading-relaxed">
                                        All digital data is stored securely on servers located in Australia or with trusted third-party providers who comply with privacy laws. Physical records (if applicable) are stored in controlled environments.
                                    </p>
                                </div>

                                <div>
                                    <h3 className="text-xl font-bold text-secondary mb-3">4. Sharing of Information</h3>
                                    <p className="text-gray-600 mb-3 leading-relaxed">
                                        We respect your privacy and do not sell or rent your personal information. Data may only be shared with:
                                    </p>
                                    <ul className="list-disc pl-6 space-y-2 text-gray-600">
                                        <li>Service providers directly involved in fulfilling your booking (e.g., drivers, movers, storage operators).</li>
                                        <li>Financial institutions for payment processing.</li>
                                        <li>Regulatory authorities when required by law.</li>
                                    </ul>
                                    <p className="text-gray-600 mt-3 leading-relaxed">
                                        Any third parties engaged by us are contractually bound to handle your information securely and in compliance with the APPs.
                                    </p>
                                </div>

                                <div>
                                    <h3 className="text-xl font-bold text-secondary mb-3">5. Your Rights</h3>
                                    <p className="text-gray-600 mb-3 leading-relaxed">
                                        Under the Privacy Act, you have the right to:
                                    </p>
                                    <ul className="list-disc pl-6 space-y-2 text-gray-600">
                                        <li>Access the personal information we hold about you.</li>
                                        <li>Request correction of any inaccurate or incomplete information.</li>
                                        <li>Request deletion of your personal information, subject to legal or contractual obligations.</li>
                                        <li>Opt out of receiving marketing communications at any time.</li>
                                    </ul>
                                    <p className="text-gray-600 mt-3 leading-relaxed">
                                        Requests can be made by contacting us at contact@moverxsolutions.com.au. We aim to respond within a reasonable timeframe.
                                    </p>
                                </div>

                                <div>
                                    <h3 className="text-xl font-bold text-secondary mb-3">6. Cookies and Website Usage</h3>
                                    <p className="text-gray-600 leading-relaxed">
                                        Our website may use cookies and analytics tools to monitor traffic, improve functionality, and enhance the user experience. You can disable cookies in your browser settings, but some site features may not function properly.
                                    </p>
                                </div>

                                <div>
                                    <h3 className="text-xl font-bold text-secondary mb-3">7. Updates to This Policy</h3>
                                    <p className="text-gray-600 leading-relaxed">
                                        MoverX Solutions may update this Privacy Policy from time to time to reflect changes in law or business practices. The most recent version will always be available on our website, and the "last updated" date will be clearly displayed.
                                    </p>
                                </div>
                            </div>
                        </section>
                    </FadeIn>

                    {/* Terms & Conditions */}
                    <FadeIn direction="up" delay={300}>
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
