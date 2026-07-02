import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy | Vanguard Plumbing',
  description: 'Privacy Policy for Vanguard Plumbing, serving Plano, TX and surrounding counties.',
}

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header Bar */}
      <div className="bg-[#0f2044] text-white py-4 px-4">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <Link href="/" className="text-white font-black text-lg uppercase tracking-tight hover:text-[#c8102e] transition-colors">
            ← Vanguard Plumbing
          </Link>
          <a href="tel:5554082930" className="text-[#c8102e] font-bold text-sm hover:text-white transition-colors">
            (555) 408-2930
          </a>
        </div>
      </div>

      <main className="max-w-4xl mx-auto px-4 sm:px-6 py-16">
        <h1 className="text-[#0f2044] font-black text-3xl sm:text-4xl uppercase mb-2">Privacy Policy</h1>
        <p className="text-gray-500 text-sm mb-10">Effective Date: January 1, 2025 | Last Updated: July 2, 2026</p>

        <div className="prose prose-sm max-w-none text-gray-700 space-y-8 leading-relaxed">

          <section>
            <h2 className="text-[#0f2044] font-black text-xl uppercase mb-3">1. Introduction</h2>
            <p>Vanguard Plumbing (&ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;) is committed to protecting your personal information and your right to privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or schedule plumbing services with us. Please read this policy carefully. If you do not agree with the terms of this policy, please discontinue use of our website.</p>
          </section>

          <section>
            <h2 className="text-[#0f2044] font-black text-xl uppercase mb-3">2. Information We Collect</h2>
            <p>We may collect the following categories of personal information:</p>
            <ul className="list-disc list-inside space-y-2 mt-3 text-sm">
              <li><strong>Contact Information:</strong> Name, phone number, and service address provided through our contact form or over the phone.</li>
              <li><strong>Service Information:</strong> Details about the plumbing issue you are experiencing and the property where service is requested.</li>
              <li><strong>Communication Records:</strong> Records of correspondence between you and Vanguard Plumbing, including phone calls, text messages, and form submissions.</li>
              <li><strong>Usage Data:</strong> Information automatically collected when you visit our website, including IP address, browser type, pages visited, and time spent on pages.</li>
              <li><strong>Cookies and Tracking:</strong> We may use cookies and similar technologies to enhance your browsing experience and analyze website traffic.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-[#0f2044] font-black text-xl uppercase mb-3">3. How We Use Your Information</h2>
            <p>We use the information we collect for the following purposes:</p>
            <ul className="list-disc list-inside space-y-2 mt-3 text-sm">
              <li>To schedule, confirm, and provide plumbing services you have requested.</li>
              <li>To communicate with you about your service appointment, follow-up, and satisfaction.</li>
              <li>To send you service reminders, promotional offers, or updates (with your consent).</li>
              <li>To process payments and maintain billing records.</li>
              <li>To improve our website, services, and customer experience.</li>
              <li>To comply with applicable laws and regulatory requirements.</li>
              <li>To protect our legal rights and prevent fraud or misuse of our services.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-[#0f2044] font-black text-xl uppercase mb-3">4. Sharing of Your Information</h2>
            <p>Vanguard Plumbing does not sell, rent, or trade your personal information to third parties. We may share your information only in the following limited circumstances:</p>
            <ul className="list-disc list-inside space-y-2 mt-3 text-sm">
              <li><strong>Service Providers:</strong> Trusted third-party vendors who assist us in operating our website, processing payments, or conducting business — all of whom are bound by confidentiality obligations.</li>
              <li><strong>Legal Requirements:</strong> When we are required by law, court order, or governmental authority to disclose information.</li>
              <li><strong>Business Transfers:</strong> In the event of a merger, acquisition, or sale of assets, your information may be transferred as part of that transaction.</li>
              <li><strong>Safety Purposes:</strong> When disclosure is necessary to protect the safety of our customers, employees, or the general public.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-[#0f2044] font-black text-xl uppercase mb-3">5. Data Security</h2>
            <p>We implement industry-standard security measures to protect your personal information from unauthorized access, disclosure, alteration, or destruction. These measures include secure data storage, encrypted communications where applicable, and restricted access to personal data. However, no method of transmission over the internet or electronic storage is 100% secure, and we cannot guarantee absolute security.</p>
          </section>

          <section>
            <h2 className="text-[#0f2044] font-black text-xl uppercase mb-3">6. Cookies</h2>
            <p>Our website may use cookies and similar tracking technologies to improve functionality and analyze how visitors use our site. You can control cookie settings through your browser preferences. Disabling cookies may affect some features of our website. We do not use cookies to track you across third-party websites for advertising purposes.</p>
          </section>

          <section>
            <h2 className="text-[#0f2044] font-black text-xl uppercase mb-3">7. Third-Party Links</h2>
            <p>Our website may contain links to third-party websites, including Google Maps. We are not responsible for the privacy practices of those websites. We encourage you to review the privacy policies of any third-party sites you visit.</p>
          </section>

          <section>
            <h2 className="text-[#0f2044] font-black text-xl uppercase mb-3">8. Data Retention</h2>
            <p>We retain personal information for as long as necessary to fulfill the purposes outlined in this policy, to comply with our legal obligations, resolve disputes, and enforce our agreements. When information is no longer needed, we will securely delete or anonymize it.</p>
          </section>

          <section>
            <h2 className="text-[#0f2044] font-black text-xl uppercase mb-3">9. Your Rights</h2>
            <p>Depending on your location and applicable law, you may have the following rights regarding your personal information:</p>
            <ul className="list-disc list-inside space-y-2 mt-3 text-sm">
              <li>The right to access the personal information we hold about you.</li>
              <li>The right to request correction of inaccurate or incomplete information.</li>
              <li>The right to request deletion of your personal information, subject to applicable legal requirements.</li>
              <li>The right to opt out of receiving marketing communications from us.</li>
            </ul>
            <p className="mt-3">To exercise any of these rights, please contact us by phone at <a href="tel:5554082930" className="text-[#c8102e] font-bold hover:underline">(555) 408-2930</a>.</p>
          </section>

          <section>
            <h2 className="text-[#0f2044] font-black text-xl uppercase mb-3">10. Children&apos;s Privacy</h2>
            <p>Our website and services are not directed to individuals under the age of 18. We do not knowingly collect personal information from minors. If we become aware that we have collected personal information from a child under 18, we will take steps to delete that information promptly.</p>
          </section>

          <section>
            <h2 className="text-[#0f2044] font-black text-xl uppercase mb-3">11. Changes to This Policy</h2>
            <p>We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated effective date. We encourage you to review this page periodically to stay informed about how we protect your information. Continued use of our website after changes are posted constitutes your acceptance of the revised policy.</p>
          </section>

          <section>
            <h2 className="text-[#0f2044] font-black text-xl uppercase mb-3">12. Contact Us</h2>
            <p>If you have any questions, concerns, or requests regarding this Privacy Policy, please contact us:</p>
            <div className="mt-3 space-y-1 text-sm">
              <p><strong>Vanguard Plumbing</strong></p>
              <p>4821 Haverford Drive, Suite 110</p>
              <p>Plano, TX 75024</p>
              <p>Phone: <a href="tel:5554082930" className="text-[#c8102e] font-bold hover:underline">(555) 408-2930</a></p>
            </div>
          </section>
        </div>
      </main>
    </div>
  )
}
