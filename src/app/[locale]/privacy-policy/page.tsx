import { setRequestLocale } from 'next-intl/server';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import FadeIn from '@/components/ui/FadeIn';

type Props = {
    params: Promise<{ locale: string }>;
};

export default async function PrivacyPolicyPage({ params }: Props) {
    const { locale } = await params;
    setRequestLocale(locale);

    return (
        <div className="min-h-screen bg-white">
            <Header />

            <main className="py-20 lg:py-32">
                <div className="container mx-auto px-6 max-w-4xl">
                    <FadeIn direction="up">
                        <h1 className="text-4xl lg:text-5xl font-extrabold text-secondary mb-12 tracking-tight">
                            Privacy Policy
                        </h1>
                    </FadeIn>

                    <FadeIn direction="up" delay={100}>
                        <section className="mb-16">
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
                                        MoverX Solutions may update this Privacy Policy from time to time to reflect changes in law or business practices. The most recent version will always be available on our website, and the &quot;last updated&quot; date will be clearly displayed.
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
