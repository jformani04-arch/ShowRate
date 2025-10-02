import { Link } from "react-router-dom";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen mt-15 flex flex-col items-center py-12 px-4">
      <div className="max-w-4xl w-full bg-[#3C3D37] shadow-lg rounded-2xl p-8 text-[#ECDFCC]">
        {/* Header */}
        <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>
        <p className="mb-8 text-[#ECDFCC]/80">
          At ShowRate, we respect your privacy. This policy explains how we
          collect, use, and protect your personal information.
        </p>

        {/* Content */}
        <div className="space-y-6 text-sm leading-relaxed">
          <section>
            <h2 className="text-xl font-semibold mb-2">
              1. Information We Collect
            </h2>
            <p>
              When you create an account, we collect your username, email
              address, and password. We also store your movie lists, ratings,
              and preferences so you can access them anytime.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2">
              2. How We Use Your Information
            </h2>
            <p>
              We use your information to provide and improve ShowRate,
              personalize your experience, and allow you to share your movie
              ratings with others if you choose to. We will never sell your
              personal data to third parties.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2">3. Cookies</h2>
            <p>
              ShowRate may use cookies to keep you logged in and improve site
              performance. You can disable cookies in your browser settings, but
              some features may not work properly.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2">4. Data Security</h2>
            <p>
              We take reasonable measures to protect your personal information
              from unauthorized access, loss, or misuse. However, no online
              platform can be 100% secure.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2">
              5. Third-Party Services
            </h2>
            <p>
              ShowRate may link to third-party websites (like trailers or
              external movie info). We are not responsible for the privacy
              practices of those sites.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2">6. Your Rights</h2>
            <p>
              You can update or delete your account and personal information at
              any time. If you need help, contact us at{" "}
              <Link to="/contact" className="text-indigo-400 underline">
                support@showrate.com
              </Link>
              .
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2">
              7. Changes to This Policy
            </h2>
            <p>
              We may update this Privacy Policy from time to time. Any changes
              will be posted on this page with the updated date.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2">8. Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy, please
              contact us at{" "}
              <Link to="/contact" className="text-indigo-400 underline">
                support@showrate.com
              </Link>
              .
            </p>
          </section>
        </div>
        <p className="mt-10 text-xs text-[#ECDFCC]/70">
          Last updated: {new Date().toLocaleDateString()}
        </p>
      </div>
    </div>
  );
}
