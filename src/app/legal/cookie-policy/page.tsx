export default function CookiePolicyPage() {
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
            Cookie Policy
          </h1>

          <p className="mt-6 text-sm text-[#596159]">
            Last Updated: September 21, 2026
          </p>

          <div className="mt-12 space-y-8 text-[#111614]">
            <section>
              <h2 className="text-2xl font-medium tracking-[-0.02em]">What Are Cookies?</h2>
              <p className="mt-4 leading-7 text-[#596159]">
                Cookies are small text files that are stored on your device when you visit a website. They help websites function properly and provide information to website owners.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-medium tracking-[-0.02em]">How We Use Cookies</h2>
              <p className="mt-4 leading-7 text-[#596159]">
                We do not use tracking cookies on our website. We may use essential cookies for basic website functionality such as session management and security purposes.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-medium tracking-[-0.02em]">Types of Cookies We Use</h2>
              <div className="mt-4 space-y-4">
                <div>
                  <h3 className="font-medium">Essential Cookies</h3>
                  <p className="mt-2 leading-7 text-[#596159]">
                    These cookies are necessary for the website to function properly. They enable basic functionality such as page navigation and access to secure areas.
                  </p>
                </div>
                <div>
                  <h3 className="font-medium">No Tracking Cookies</h3>
                  <p className="mt-2 leading-7 text-[#596159]">
                    We do not use analytical, advertising, or targeting cookies to track your behavior across our website.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-medium tracking-[-0.02em]">Third-Party Cookies</h2>
              <p className="mt-4 leading-7 text-[#596159]">
                We do not use third-party tracking services. However, please note that some external services (such as content delivery networks, fonts, or analytics) may set cookies. We recommend checking with your hosting provider about any technical cookies they may set.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-medium tracking-[-0.02em]">Managing Cookies</h2>
              <p className="mt-4 leading-7 text-[#596159]">
                You can control and manage cookies through your web browser settings. Most browsers allow you to:
              </p>
              <ul className="mt-3 ml-6 list-disc space-y-2 text-[#596159]">
                <li>View what cookies are stored and delete them individually</li>
                <li>Block cookies from specific websites</li>
                <li>Block all cookies from being set</li>
                <li>Delete all cookies when you close your browser</li>
              </ul>
              <p className="mt-4 leading-7 text-[#596159]">
                Please note that disabling cookies may affect the functionality of our website.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-medium tracking-[-0.02em]">Contact Us</h2>
              <p className="mt-4 leading-7 text-[#596159]">
                If you have any questions about our use of cookies, please contact us at:
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
