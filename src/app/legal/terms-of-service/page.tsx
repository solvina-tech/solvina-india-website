export default function TermsOfServicePage() {
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
            Terms of Service
          </h1>

          <p className="mt-6 text-sm text-[#596159]">
            Last Updated: September 21, 2026
          </p>

          <div className="mt-12 space-y-8 text-[#111614]">
            <section>
              <h2 className="text-2xl font-medium tracking-[-0.02em]">Acceptance of Terms</h2>
              <p className="mt-4 leading-7 text-[#596159]">
                By accessing and using the Solvina website, you accept and agree to be bound by the terms and provisions of this agreement. If you do not agree to abide by these terms, please do not use this website.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-medium tracking-[-0.02em]">Changes to Terms</h2>
              <p className="mt-4 leading-7 text-[#596159]">
                Solvina reserves the right to modify these terms at any time. All changes are effective immediately when posted. Your continued use of the website following the posting of changes constitutes your acceptance of such changes.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-medium tracking-[-0.02em]">Use of the Website</h2>
              <p className="mt-4 leading-7 text-[#596159]">
                You may use this website for lawful purposes only. You agree not to:
              </p>
              <ul className="mt-3 ml-6 list-disc space-y-2 text-[#596159]">
                <li>Use the website for any illegal purpose</li>
                <li>Attempt to gain unauthorized access to the website or its servers</li>
                <li>Interfere with other users' use of the website</li>
                <li>Introduce viruses or other harmful code into the website</li>
                <li>Use the website to harass, abuse, or harm others</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-medium tracking-[-0.02em]">Intellectual Property Rights</h2>
              <p className="mt-4 leading-7 text-[#596159]">
                All content on this website, including text, graphics, logos, images, and software, is the property of Solvina or its content suppliers and is protected by international copyright laws. You may not reproduce, distribute, or create derivative works without our express written permission.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-medium tracking-[-0.02em]">User Conduct</h2>
              <p className="mt-4 leading-7 text-[#596159]">
                You are solely responsible for your conduct while using this website. You agree to comply with all applicable laws and regulations and to respect the rights of other users.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-medium tracking-[-0.02em]">Limitation of Liability</h2>
              <p className="mt-4 leading-7 text-[#596159]">
                Solvina shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of the website. We provide the website "as is" without any warranties, express or implied.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-medium tracking-[-0.02em]">Indemnification</h2>
              <p className="mt-4 leading-7 text-[#596159]">
                You agree to indemnify and hold Solvina harmless from any claims, damages, or expenses arising from your use of the website or your violation of these terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-medium tracking-[-0.02em]">Termination</h2>
              <p className="mt-4 leading-7 text-[#596159]">
                Solvina reserves the right to terminate or restrict your access to the website at any time, without notice, for any reason, including but not limited to violation of these terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-medium tracking-[-0.02em]">Governing Law</h2>
              <p className="mt-4 leading-7 text-[#596159]">
                These terms shall be governed by and construed in accordance with the laws of India. Any disputes arising under these terms shall be subject to the exclusive jurisdiction of the courts in India.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-medium tracking-[-0.02em]">Contact Information</h2>
              <p className="mt-4 leading-7 text-[#596159]">
                If you have any questions about these Terms of Service, please contact us at:
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
