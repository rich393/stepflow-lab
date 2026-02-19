import React from 'react';
import { motion } from 'framer-motion';
import { LogoWordmark } from './Logo';
import { ArrowLeft } from 'lucide-react';
import { navigate } from '../App';

export const PrivacyPolicy: React.FC = () => {
  return (
    <div className="min-h-screen bg-brand-dark text-white">
      {/* Top bar */}
      <nav className="sticky top-0 z-50 px-6 py-6 bg-brand-dark/80 backdrop-blur-md border-b border-white/5">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <a href="/" onClick={(e) => { e.preventDefault(); navigate('/'); }} className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors text-sm">
            <ArrowLeft className="w-4 h-4" />
            Back to home
          </a>
          <a href="/" onClick={(e) => { e.preventDefault(); navigate('/'); }} className="cursor-pointer">
            <LogoWordmark logoClassName="w-8 h-8 pointer-events-none" textClassName="text-xl" className="pointer-events-none" />
          </a>
        </div>
      </nav>

      {/* Content */}
      <motion.article
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto px-6 py-16 prose prose-invert prose-sm sm:prose-base"
        style={{ maxWidth: '56rem' }}
      >
        <h1 className="text-4xl md:text-5xl font-bold tracking-tighter mb-2 text-white">Privacy Policy</h1>
        <p className="text-gray-400 text-sm mb-12">Last updated: 5 February 2026</p>

        {/* Introduction */}
        <section className="mb-12">
          <h2 className="text-xl font-semibold text-white mb-4">Introduction</h2>
          <p className="text-gray-300 leading-relaxed mb-4">
            Stepflow Lab (a trading name of RGH COMMERCE LTD, "we", "our", "us") is committed to protecting the privacy and security of the personal data we collect about customers and users of our services ("you/your").
          </p>
          <p className="text-gray-300 leading-relaxed mb-4">
            The purpose of this privacy notice is to explain what personal data we collect about you when you use our website or when we provide our services to you. When we do this, we are the data controller.
          </p>
          <p className="text-gray-300 leading-relaxed mb-4">
            Please read this privacy notice carefully, as it provides important information about how we handle your personal information and your rights.
          </p>
          <p className="text-gray-300 leading-relaxed mb-4">
            You should revisit this privacy notice regularly, as we may update it occasionally to reflect changes in how we deliver our services.
          </p>
          <p className="text-gray-300 leading-relaxed">
            If you have any questions about any aspect of this privacy notice, you can contact us by emailing{' '}
            <a href="mailto:hello@stepflowlab.com" className="text-brand-primary hover:text-brand-accent transition-colors">hello@stepflowlab.com</a>.
          </p>
        </section>

        {/* Personal Data We Collect */}
        <section className="mb-12">
          <h2 className="text-xl font-semibold text-white mb-4">Personal Data We Collect</h2>
          <p className="text-gray-300 leading-relaxed mb-4">
            We collect, use and are responsible for certain personal data about you. When we do so, we are subject to the UK General Data Protection Regulation ("UK GDPR"). The personal data we may collect includes (but is not limited to):
          </p>
          <ul className="list-disc pl-6 space-y-3 text-gray-300">
            <li>
              Contact information such as your name, phone number, email address, company name, job title, and location, which we collect when you fill in our contact form or engage with our services.
            </li>
            <li>
              Business information you provide to us as part of our AI consultancy and automation services, including details about your workflows, processes, and technology systems.
            </li>
            <li>
              Communications data, including records of correspondence between us and any feedback you provide.
            </li>
            <li>
              Any other information you may provide as part of our market research or service delivery.
            </li>
          </ul>
        </section>

        {/* How Your Personal Data Is Collected */}
        <section className="mb-12">
          <h2 className="text-xl font-semibold text-white mb-4">How Your Personal Data Is Collected</h2>
          <p className="text-gray-300 leading-relaxed">
            We collect personal data directly from you — in person, by telephone, video call, text, email, and/or via our website.
          </p>
        </section>

        {/* Purposes and Legal Basis */}
        <section className="mb-12">
          <h2 className="text-xl font-semibold text-white mb-4">Purposes for Which We Use Personal Data and the Legal Basis</h2>
          <p className="text-gray-300 leading-relaxed mb-6">
            When providing services to you, we may use your personal data for the following purposes and on the following lawful bases:
          </p>
          <div className="overflow-x-auto -mx-6 px-6">
            <table className="w-full text-sm text-left border-collapse">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="py-3 pr-6 text-white font-semibold">Purpose</th>
                  <th className="py-3 text-white font-semibold">Lawful Basis for Processing</th>
                </tr>
              </thead>
              <tbody className="text-gray-300">
                <tr className="border-b border-white/5">
                  <td className="py-3 pr-6">To provide our AI consultancy, workflow automation, and related services to you</td>
                  <td className="py-3">Performance of contract</td>
                </tr>
                <tr className="border-b border-white/5">
                  <td className="py-3 pr-6">To respond to enquiries and communicate with you about our services</td>
                  <td className="py-3">Performance of contract / Legitimate interest</td>
                </tr>
                <tr className="border-b border-white/5">
                  <td className="py-3 pr-6">To comply with any legal obligations we may have</td>
                  <td className="py-3">Legal obligation</td>
                </tr>
                <tr className="border-b border-white/5">
                  <td className="py-3 pr-6">To send you marketing communications about our services or other information relating to our business which we think may be of interest to you</td>
                  <td className="py-3">Consent</td>
                </tr>
                <tr className="border-b border-white/5">
                  <td className="py-3 pr-6">To contact you when you provide us with feedback</td>
                  <td className="py-3">Legitimate interest to ensure our services meet your expectations</td>
                </tr>
                <tr className="border-b border-white/5">
                  <td className="py-3 pr-6">To administer and protect our business and website</td>
                  <td className="py-3">Legitimate interest to keep our services running securely</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-gray-300 leading-relaxed mt-6">
            Where personal data is processed because it is necessary for the performance of a contract to which you are a party, we will be unable to provide our services without the required information.
          </p>
        </section>

        {/* Sharing Your Data */}
        <section className="mb-12">
          <h2 className="text-xl font-semibold text-white mb-4">Sharing Your Data</h2>
          <p className="text-gray-300 leading-relaxed mb-4">
            For some business activities, we share your personal data with our vendors and third-party service providers. This may include:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-gray-300 mb-6">
            <li>Cloud service providers and data hosting services</li>
            <li>Email marketing platforms</li>
            <li>Payment processors</li>
            <li>AI and automation tool providers necessary for service delivery</li>
            <li>Professional advisers including accountants and legal advisers</li>
          </ul>
          <p className="text-gray-300 leading-relaxed mb-4">
            Personal data may also be shared with government authorities and/or law enforcement officials for the prevention or detection of crime if required by law or if required for a legal or contractual claim.
          </p>
          <p className="text-gray-300 leading-relaxed mb-4">
            The personal data we collect from you may be processed outside the UK. We have taken appropriate steps to ensure that personal data processed outside the UK has an essentially equivalent level of protection as it has within the UK. We do this by ensuring that:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-gray-300">
            <li>Your personal data is only processed in a country which the UK government has confirmed has an adequate level of protection (an adequacy regulation), or</li>
            <li>We enter into Standard Contractual Clauses (SCCs) with our providers and ensure that supplementary measures are applied where necessary.</li>
          </ul>
        </section>

        {/* How Long We Keep Your Data */}
        <section className="mb-12">
          <h2 className="text-xl font-semibold text-white mb-4">How Long We Keep Your Data</h2>
          <p className="text-gray-300 leading-relaxed mb-4">
            We will retain your personal data for as long as is necessary to provide you with our services and for a reasonable period thereafter to enable us to meet our contractual and legal obligations and to deal with complaints and claims.
          </p>
          <p className="text-gray-300 leading-relaxed">
            At the end of the retention period, your personal data will be securely deleted or anonymised, for example, by aggregation with other data so that it can be used in a non-identifiable way for statistical analysis and business planning.
          </p>
        </section>

        {/* How We Protect Your Data */}
        <section className="mb-12">
          <h2 className="text-xl font-semibold text-white mb-4">How We Protect Your Data</h2>
          <p className="text-gray-300 leading-relaxed">
            We endeavour to process all personal data securely and have implemented appropriate technical and organisational measures to protect the data we process from unauthorised disclosure, use, alteration, or destruction.
          </p>
        </section>

        {/* Your Rights and Options */}
        <section className="mb-12">
          <h2 className="text-xl font-semibold text-white mb-4">Your Rights and Options</h2>
          <p className="text-gray-300 leading-relaxed mb-4">
            You have the following rights in respect of your personal data:
          </p>
          <ul className="space-y-4 text-gray-300">
            <li>
              <strong className="text-white">Right of access:</strong> You have the right to access your personal data and request copies of it and information about our processing of it.
            </li>
            <li>
              <strong className="text-white">Right to rectification:</strong> If the personal data we hold about you is incorrect or incomplete, you can ask us to rectify it or add to it.
            </li>
            <li>
              <strong className="text-white">Right to withdraw consent:</strong> Where we are using your personal data with your consent, you can withdraw your consent at any time.
            </li>
            <li>
              <strong className="text-white">Right to object:</strong> Where we use your personal data because it is in our legitimate interests, you can object to us using it this way.
            </li>
            <li>
              <strong className="text-white">Right to object to direct marketing:</strong> Where we use your personal data for direct marketing, including profiling for direct marketing purposes, you can object to us doing so.
            </li>
            <li>
              <strong className="text-white">Right to restriction:</strong> You can ask us to restrict the use of your personal data if:
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>It is not accurate</li>
                <li>It has been used unlawfully, but you do not want us to delete it</li>
                <li>We do not need it anymore, but you want us to keep it for use in legal claims</li>
                <li>You have already asked us to stop using your data but are waiting for confirmation on whether we can comply with your request</li>
              </ul>
            </li>
            <li>
              <strong className="text-white">Right to portability:</strong> You can request a machine-readable copy of your personal data to transfer to another service provider.
            </li>
            <li>
              <strong className="text-white">Right regarding automated decision-making:</strong> You have the right not to be subject to a decision based solely on automated processing (including profiling) that produces legal effects concerning you or similarly significantly affects you.
            </li>
          </ul>
          <p className="text-gray-300 leading-relaxed mt-6 mb-4">
            You will not have to pay a fee to access your personal data or exercise any other rights. However, we may charge a reasonable fee if your access request is clearly unfounded or excessive. Alternatively, we may refuse to comply with the request in such circumstances.
          </p>
          <p className="text-gray-300 leading-relaxed mb-4">
            If you wish to exercise your rights, please contact us at:{' '}
            <a href="mailto:hello@stepflowlab.com" className="text-brand-primary hover:text-brand-accent transition-colors">hello@stepflowlab.com</a>
          </p>
          <p className="text-gray-300 leading-relaxed">
            You can also lodge a complaint with the Information Commissioner's Office. They can be contacted using the information provided at:{' '}
            <a href="https://ico.org.uk/concerns/" target="_blank" rel="noopener noreferrer" className="text-brand-primary hover:text-brand-accent transition-colors">https://ico.org.uk/concerns/</a>
          </p>
        </section>

        {/* Third-Party Websites */}
        <section className="mb-12">
          <h2 className="text-xl font-semibold text-white mb-4">Third-Party Websites</h2>
          <p className="text-gray-300 leading-relaxed">
            Our website may contain hyperlinks to websites owned and operated by third parties. These third-party websites have privacy notices separate from ours, so we strongly suggest you review them separately before submitting your data. We have no control over and are not responsible for these third parties' collection, use, and disclosure of your personal information.
          </p>
        </section>

        {/* Contact Us */}
        <section className="mb-12">
          <h2 className="text-xl font-semibold text-white mb-4">Contact Us</h2>
          <p className="text-gray-300 leading-relaxed mb-4">
            If you have any questions about this Privacy Policy or wish to exercise your rights, please email us at:{' '}
            <a href="mailto:hello@stepflowlab.com" className="text-brand-primary hover:text-brand-accent transition-colors">hello@stepflowlab.com</a>
          </p>
          <p className="text-gray-300 leading-relaxed">
            Stepflow Lab is a trading name of RGH COMMERCE LTD.
          </p>
        </section>

        <p className="text-gray-500 text-sm italic">This privacy policy was last reviewed on 5 February 2026.</p>

        {/* Footer */}
        <footer className="mt-16 border-t border-white/10 pt-8 text-gray-500 text-sm">
          <p>© {new Date().getFullYear()} Stepflow Lab. All rights reserved.</p>
        </footer>
      </motion.article>
    </div>
  );
};
