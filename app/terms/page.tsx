import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms of Service | Vanguard Plumbing',
  description: 'Terms of Service for Vanguard Plumbing, serving Plano, TX and surrounding counties.',
}

export default function TermsPage() {
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
        <h1 className="text-[#0f2044] font-black text-3xl sm:text-4xl uppercase mb-2">Terms of Service</h1>
        <p className="text-gray-500 text-sm mb-10">Effective Date: January 1, 2025 | Last Updated: July 2, 2026</p>

        <div className="prose prose-sm max-w-none text-gray-700 space-y-8 leading-relaxed">

          <section>
            <h2 className="text-[#0f2044] font-black text-xl uppercase mb-3">1. Acceptance of Terms</h2>
            <p>By accessing or using the website of Vanguard Plumbing (&ldquo;Company,&rdquo; &ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;), scheduling any service, or submitting any information through our contact form, you agree to be bound by these Terms of Service. If you do not agree with these terms, please do not use our website or services.</p>
          </section>

          <section>
            <h2 className="text-[#0f2044] font-black text-xl uppercase mb-3">2. Services Provided</h2>
            <p>Vanguard Plumbing provides residential and commercial plumbing services in Plano, TX and the surrounding counties of Collin, Denton, and Dallas. Services include but are not limited to leak detection and repair, drain and sewer services, water heater installation and repair, fixture installation, emergency plumbing, and repiping. Service availability may vary by location and is subject to technician scheduling and dispatch capacity.</p>
          </section>

          <section>
            <h2 className="text-[#0f2044] font-black text-xl uppercase mb-3">3. Estimates and Pricing</h2>
            <p>All estimates provided by Vanguard Plumbing are based on information available at the time of evaluation. Final pricing may vary if additional issues are discovered during the course of work that were not apparent or disclosed at the time of the estimate. Customers will be notified of any significant changes to the scope of work and associated costs before additional work proceeds. We strive to maintain full transparency in all pricing.</p>
          </section>

          <section>
            <h2 className="text-[#0f2044] font-black text-xl uppercase mb-3">4. Payment Terms</h2>
            <p>Payment is due upon completion of services rendered, unless a prior written agreement has been made for alternative arrangements. We accept all major credit cards, debit cards, personal checks, and cash. Returned checks are subject to a returned check fee of $35. Late payments may be subject to interest and collection procedures.</p>
          </section>

          <section>
            <h2 className="text-[#0f2044] font-black text-xl uppercase mb-3">5. Warranties and Workmanship Guarantee</h2>
            <p>Vanguard Plumbing guarantees the quality of our workmanship on all repairs and installations. If a completed repair or installation fails as a direct result of our workmanship within the applicable warranty period (typically 90 days for labor, manufacturer warranty for parts), we will return to remedy the issue at no additional charge. This warranty does not cover damage resulting from misuse, pre-existing conditions, acts of nature, or modifications made by third parties after our service.</p>
          </section>

          <section>
            <h2 className="text-[#0f2044] font-black text-xl uppercase mb-3">6. Limitation of Liability</h2>
            <p>To the fullest extent permitted by applicable law, Vanguard Plumbing shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from or related to our services or the use of our website. Our total liability for any claim arising out of a service shall not exceed the amount paid for that specific service.</p>
          </section>

          <section>
            <h2 className="text-[#0f2044] font-black text-xl uppercase mb-3">7. Customer Responsibilities</h2>
            <p>Customers are responsible for providing accurate information regarding their plumbing issues, granting technicians safe and reasonable access to all areas requiring service, ensuring that pets are secured during the service visit, and informing our team of any known hazardous conditions on the property. Failure to disclose relevant information may affect our ability to provide a safe and effective service.</p>
          </section>

          <section>
            <h2 className="text-[#0f2044] font-black text-xl uppercase mb-3">8. Cancellation and Rescheduling</h2>
            <p>Customers may cancel or reschedule appointments at any time. We ask that cancellations be made at least 2 hours in advance of the scheduled appointment window to avoid any cancellation fees. Emergency service dispatches that are cancelled after a technician has been dispatched may incur a trip charge.</p>
          </section>

          <section>
            <h2 className="text-[#0f2044] font-black text-xl uppercase mb-3">9. Website Use</h2>
            <p>The content on this website, including text, images, logos, and other materials, is the property of Vanguard Plumbing and is protected by applicable copyright and intellectual property laws. You may not reproduce, distribute, or create derivative works from any content on this site without our express written permission. This website is provided for informational purposes only and does not constitute a binding service agreement.</p>
          </section>

          <section>
            <h2 className="text-[#0f2044] font-black text-xl uppercase mb-3">10. Contact Form Submissions</h2>
            <p>Submitting a contact form on our website does not create a confirmed service appointment. All submissions will be reviewed by our team and we will contact you to confirm scheduling. By submitting a form, you consent to being contacted by Vanguard Plumbing via phone or text message regarding your inquiry.</p>
          </section>

          <section>
            <h2 className="text-[#0f2044] font-black text-xl uppercase mb-3">11. Governing Law</h2>
            <p>These Terms of Service shall be governed by and construed in accordance with the laws of the State of Texas, without regard to its conflict of law provisions. Any disputes arising under these terms shall be subject to the exclusive jurisdiction of the courts of Collin County, Texas.</p>
          </section>

          <section>
            <h2 className="text-[#0f2044] font-black text-xl uppercase mb-3">12. Changes to These Terms</h2>
            <p>Vanguard Plumbing reserves the right to update or modify these Terms of Service at any time. Changes will be effective immediately upon posting to this page. Continued use of our website or services after any changes constitutes your acceptance of the revised terms. We encourage you to review this page periodically.</p>
          </section>

          <section>
            <h2 className="text-[#0f2044] font-black text-xl uppercase mb-3">13. Contact Us</h2>
            <p>If you have any questions about these Terms of Service, please contact us by phone at <a href="tel:5554082930" className="text-[#c8102e] font-bold hover:underline">(555) 408-2930</a> or in writing at 4821 Haverford Drive, Suite 110, Plano, TX 75024.</p>
          </section>
        </div>
      </main>
    </div>
  )
}
