export default function TermsOfService() {
  return (
    <div className="min-h-screen mt-15 flex flex-col items-center py-12 px-4">
      <div className="max-w-4xl w-full bg-[#3C3D37] shadow-lg rounded-2xl p-8 text-[#ECDFCC]">

        {/* Header */}
        <h1 className="text-3xl font-bold mb-6">Terms of Service</h1>
        <p className="mb-8 text-[#ECDFCC]/80">
          Welcome to ShowRate. By using our website, you agree to the following Terms of Service. 
          Please read them carefully before using our platform.
        </p>

        {/* Content */}
        <div className="space-y-6 text-sm leading-relaxed">

          <section>
            <h2 className="text-xl font-semibold mb-2">1. Acceptance of Terms</h2>
            <p>
              By creating an account or using ShowRate, you agree to be bound by these Terms of Service. 
              If you do not agree, please do not use the site.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2">2. User Accounts</h2>
            <p>
              You are responsible for maintaining the confidentiality of your account and password. 
              You agree to provide accurate information and notify us of any unauthorized use of your account.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2">3. User Content</h2>
            <p>
              By posting ratings, lists, or reviews on ShowRate, you grant us a non-exclusive license to display 
              that content on our platform. You remain the owner of your content.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2">4. Prohibited Activities</h2>
            <p>
              You agree not to use ShowRate for unlawful purposes, spam, harassment, or any activity 
              that could harm the platform or its users. Accounts found violating these rules may be suspended or terminated.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2">5. Service Availability</h2>
            <p>
              We strive to keep ShowRate running smoothly but do not guarantee uninterrupted service. 
              We may update, change, or temporarily disable features without prior notice.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2">6. Limitation of Liability</h2>
            <p>
              ShowRate is provided "as is" without warranties of any kind. We are not responsible for any damages 
              resulting from the use or inability to use our platform.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2">7. Changes to Terms</h2>
            <p>
              We may update these Terms of Service at any time. Changes will be effective upon posting to this page. 
              Your continued use of ShowRate means you accept the updated terms.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2">8. Contact Us</h2>
            <p>
              If you have questions about these Terms of Service, please contact us at{" "}
              <a href="mailto:support@showrate.com" className="text-indigo-400 underline">
                support@showrate.com
              </a>.
            </p>
          </section>
        </div>

        {/* Footer */}
        <p className="mt-10 text-xs text-[#ECDFCC]/70">
          Last updated: {new Date().toLocaleDateString()}
        </p>
      </div>
    </div>
  );
}
