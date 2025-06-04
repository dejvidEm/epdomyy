// Basic placeholder for privacy policy page
import AnimatedSection from "@/components/animated-section"

export default function PrivacyPolicyPage() {
  return (
    <>
      <AnimatedSection className="bg-primary text-primary-foreground py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Privacy Policy</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">Your privacy is important to us.</p>
        </div>
      </AnimatedSection>
      <AnimatedSection className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6 prose prose-lg max-w-4xl">
          <h2>1. Introduction</h2>
          <p>
            Welcome to TurnKey Homes. We are committed to protecting your personal information and your right to
            privacy. If you have any questions or concerns about our policy, or our practices with regards to your
            personal information, please contact us.
          </p>
          <h2>2. Information We Collect</h2>
          <p>
            We collect personal information that you voluntarily provide to us when you express an interest in obtaining
            information about us or our products and services, when you participate in activities on the Website or
            otherwise when you contact us.
          </p>
          <p>
            The personal information that we collect depends on the context of your interactions with us and the
            Website, the choices you make and the products and features you use. The personal information we collect may
            include the following: Name, Phone Number, Email Address, Mailing Address, Job Titles, Contact Preferences,
            Contact or Authentication Data, Billing Addresses, Debit/Credit Card Numbers, etc.
          </p>

          <h2>3. How We Use Your Information</h2>
          <p>
            We use personal information collected via our Website for a variety of business purposes described below. We
            process your personal information for these purposes in reliance on our legitimate business interests, in
            order to enter into or perform a contract with you, with your consent, and/or for compliance with our legal
            obligations.
          </p>

          <h2>4. Will Your Information Be Shared With Anyone?</h2>
          <p>
            We only share information with your consent, to comply with laws, to provide you with services, to protect
            your rights, or to fulfill business obligations.
          </p>

          {/* Add more sections as needed: Cookies, Data Retention, Your Rights, Policy Updates, Contact Us */}

          <h2>5. Contact Us</h2>
          <p>
            If you have questions or comments about this policy, you may email us at privacy@turnkeyhomes.com or by post
            to:
          </p>
          <p>
            TurnKey Homes
            <br />
            123 Construction Ave
            <br />
            Buildtown, ST 54321
            <br />
            USA
          </p>
        </div>
      </AnimatedSection>
    </>
  )
}
