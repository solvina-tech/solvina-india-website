export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-[#f4f5f2] px-6 py-24 sm:px-10 lg:px-16 lg:py-32">
        <div className="mx-auto max-w-[1280px]">
          <div className="mb-7 flex items-center gap-4">
            <span className="h-px w-12 bg-[#E3A526]" />
            <span className="text-xs font-semibold tracking-[0.28em] text-[#E3A526] uppercase">
              Legal
            </span>
          </div>

          <h1 className="text-[clamp(2.5rem,5vw,4.5rem)] leading-[0.9] font-medium tracking-[-0.065em] text-[#111614]">
            Privacy Policy
          </h1>

          <p className="mt-6 text-sm text-[#596159]">
            Last Updated: September 21, 2026
          </p>

          <div className="mt-12 space-y-8 text-[#111614]">
            <section>
              <h2 className="text-2xl font-medium tracking-[-0.02em]">Introduction</h2>
              <p className="mt-4 leading-7 text-[#596159]">
                At Solvina, we value your privacy and are committed to protecting your personal information. This Privacy Policy explains how we collect, use, and safeguard your data when you visit our website.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-medium tracking-[-0.02em]">Information We Collect</h2>
              <p className="mt-4 leading-7 text-[#596159]">
                We do not collect personal information on our website. We may collect basic technical information such as IP addresses and browser type for security and website maintenance purposes only.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-medium tracking-[-0.02em]">How We Use Your Information</h2>
              <p className="mt-4 leading-7 text-[#596159]">
                Any technical data collected is used solely for website security, maintenance, and improving user experience. We do not sell, trade, or rent your information to third parties.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-medium tracking-[-0.02em]">Data Security</h2>
              <p className="mt-4 leading-7 text-[#596159]">
                We implement reasonable security measures to protect your information. However, no method of transmission over the internet is completely secure, and we cannot guarantee absolute security.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-medium tracking-[-0.02em]">Your Privacy Rights</h2>
              <p className="mt-4 leading-7 text-[#596159]">
                You have the right to know what information we collect about you and how it is used. You can contact us at any time with privacy questions or concerns.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-medium tracking-[-0.02em]">Changes to This Policy</h2>
              <p className="mt-4 leading-7 text-[#596159]">
                We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new policy on this page with an updated revision date.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-medium tracking-[-0.02em]">Contact Us</h2>
              <p className="mt-4 leading-7 text-[#596159]">
                If you have any questions about this Privacy Policy, please contact us at:
              </p>
              <p className="mt-2 text-[#596159]">
                <strong>Email:</strong> enquiry@solvina.com
              </p>
            </section>
          </div>
        </div>
      </main>
  );
}
