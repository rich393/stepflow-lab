import React from 'react';
import { motion } from 'framer-motion';
import { LogoWordmark } from './Logo';
import { ArrowLeft } from 'lucide-react';
import { navigate } from '../App';

export const Terms: React.FC = () => {
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
        <h1 className="text-4xl md:text-5xl font-bold tracking-tighter mb-2 text-white">Terms of Use</h1>
        <p className="text-gray-400 text-sm mb-12">Last updated: 5 February 2026</p>

        {/* 1. Introduction */}
        <section className="mb-12">
          <h2 className="text-xl font-semibold text-white mb-4">1. Introduction</h2>
          <p className="text-gray-300 leading-relaxed mb-4">
            This page (our "Terms of Use") and the documents referred to in it, together with our{' '}
            <a href="/privacy" onClick={(e) => { e.preventDefault(); navigate('/privacy'); }} className="text-brand-primary hover:text-brand-accent transition-colors">Privacy Policy</a>{' '}
            (the "Agreement"), set out the terms on which you may make use of this website and the services offered by Stepflow Lab.
          </p>
          <p className="text-gray-300 leading-relaxed mb-4">
            Please read this Agreement carefully before you start to use our site. By using our site, you indicate that you accept this Agreement and agree to abide by its terms. If you are using our site on behalf of your organisation, you are also indicating that you accept this Agreement on behalf of your organisation, and references to "you" shall be deemed to include your organisation.
          </p>
          <p className="text-gray-300 leading-relaxed mb-4">
            If you do not agree to this Agreement, please refrain from using our site.
          </p>
          <p className="text-gray-300 leading-relaxed">
            If you have any questions about any aspect of these terms, you can contact us by emailing{' '}
            <a href="mailto:hello@stepflowlab.com" className="text-brand-primary hover:text-brand-accent transition-colors">hello@stepflowlab.com</a>.
          </p>
        </section>

        {/* 2. Information About Us */}
        <section className="mb-12">
          <h2 className="text-xl font-semibold text-white mb-4">2. Information About Us</h2>
          <p className="text-gray-300 leading-relaxed">
            This website is owned and operated by Stepflow Lab, a trading name of RGH COMMERCE LTD ("we", "our", "us"). RGH COMMERCE LTD is registered in England and Wales under company number <strong className="text-white">14990250</strong>.
          </p>
        </section>

        {/* 3. Our Services */}
        <section className="mb-12">
          <h2 className="text-xl font-semibold text-white mb-4">3. Our Services</h2>
          <p className="text-gray-300 leading-relaxed mb-4">
            Stepflow Lab provides AI consultancy, workflow automation, and related implementation services to business clients ("Services"). These Services may include, but are not limited to:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-gray-300 mb-4">
            <li>AI strategy and readiness assessments</li>
            <li>Workflow design, automation, and optimisation</li>
            <li>AI tool selection, integration, and deployment</li>
            <li>Training and ongoing support relating to AI-led processes</li>
            <li>Cold email campaign management and lead generation services</li>
          </ul>
          <p className="text-gray-300 leading-relaxed">
            Specific engagements are governed by separate service agreements or statements of work entered into between us and the client. In the event of any conflict between these Terms of Use and the terms of a specific service agreement, the terms of the service agreement shall prevail.
          </p>
        </section>

        {/* 4. Security */}
        <section className="mb-12">
          <h2 className="text-xl font-semibold text-white mb-4">4. Security</h2>
          <p className="text-gray-300 leading-relaxed">
            We will not store or use any of your sensitive data except as set out in these Terms of Use and our Privacy Policy. We implement appropriate technical and organisational measures to protect the data we process.
          </p>
        </section>

        {/* 5. Access and Registration */}
        <section className="mb-12">
          <h2 className="text-xl font-semibold text-white mb-4">5. Access and Registration</h2>
          <p className="text-gray-300 leading-relaxed mb-4">
            Access to our site is permitted on a temporary basis, and we reserve the right to withdraw or amend the service we provide on our site without notice. We will not be liable if, for any reason, our site is unavailable at any time or for any period.
          </p>
          <p className="text-gray-300 leading-relaxed mb-4">
            From time to time, we may restrict access to some parts of our site, or our entire site, to users who have registered with us. If you register with us, the information you provide must be true, accurate, current, and complete. You are responsible for maintaining this information to ensure it remains accurate and up to date.
          </p>
          <p className="text-gray-300 leading-relaxed">
            You are responsible for making all arrangements necessary for you to have access to our site. You are also responsible for ensuring that all persons who access our site through your internet connection are aware of this Agreement and that they comply with its terms.
          </p>
        </section>

        {/* 6. Site Content and Changes */}
        <section className="mb-12">
          <h2 className="text-xl font-semibold text-white mb-4">6. Site Content and Changes</h2>
          <p className="text-gray-300 leading-relaxed">
            We aim to update our site regularly and may change the content at any time. If the need arises, we may suspend access to our site or close it indefinitely. Any material on our site may be out of date at any given time, and we are under no obligation to update such material.
          </p>
        </section>

        {/* 7. Reliance on Information */}
        <section className="mb-12">
          <h2 className="text-xl font-semibold text-white mb-4">7. Reliance on Information</h2>
          <p className="text-gray-300 leading-relaxed mb-4">
            Commentaries, case studies, and other materials posted on our site are provided for general information purposes only and are not intended to amount to professional advice on which reliance should be placed. We disclaim all liability and responsibility arising from any reliance placed on such materials by any visitor to our site or by anyone who may be informed of any of its contents.
          </p>
          <p className="text-gray-300 leading-relaxed">
            AI technologies, tools, and best practices evolve rapidly. Information on our site regarding specific AI platforms, capabilities, or performance outcomes may not reflect the latest developments at the time of reading.
          </p>
        </section>

        {/* 8. Intellectual Property */}
        <section className="mb-12">
          <h2 className="text-xl font-semibold text-white mb-4">8. Intellectual Property</h2>
          <p className="text-gray-300 leading-relaxed mb-4">
            We are the owner or the licensee of all intellectual property rights in and to our site, any software used in connection with our site, and all content contained within our site, including but not limited to text, images, graphics, logos, designs, and other materials ("Content").
          </p>
          <p className="text-gray-300 leading-relaxed mb-4">
            Subject to your compliance with these Terms of Use, we grant you a personal, limited, non-transferable, non-sublicensable, revocable, and non-exclusive licence to access and use our site for your own internal business purposes.
          </p>
          <p className="text-gray-300 leading-relaxed mb-4">You agree not to:</p>
          <ul className="list-disc pl-6 space-y-2 text-gray-300 mb-4">
            <li>Access the site by any means other than the interfaces we provide</li>
            <li>Modify, rent, lease, loan, sell, distribute, or create derivative works based on our site or Content, in whole or in part</li>
            <li>Use any automated tools, bots, scrapers, or similar technology to access or extract data from our site without our prior written consent</li>
            <li>Remove, alter, or obscure any copyright, trade mark, or other proprietary notices on our site</li>
          </ul>
          <p className="text-gray-300 leading-relaxed mb-4">
            You may print off one copy and may download extracts of any Content from our site for your personal reference, and you may draw the attention of others within your organisation to Content posted on our site.
          </p>
          <p className="text-gray-300 leading-relaxed mb-4">
            You must not modify any materials you have printed off or downloaded, and you must not use any illustrations, graphics, or other visual elements separately from any accompanying text. Our status as the authors of Content on our site must always be acknowledged.
          </p>
          <p className="text-gray-300 leading-relaxed">
            Breach of this clause will be deemed a material breach of these Terms of Use. If we determine (in our sole discretion) that you have committed such a breach, your licence under this clause will immediately terminate, and you must return or destroy all copies of the Content you have made.
          </p>
        </section>

        {/* 9. Intellectual Property in Our Services */}
        <section className="mb-12">
          <h2 className="text-xl font-semibold text-white mb-4">9. Intellectual Property in Our Services</h2>
          <p className="text-gray-300 leading-relaxed mb-4">
            Unless otherwise agreed in a separate written service agreement, the following shall apply to the intellectual property arising from our Services:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-gray-300">
            <li>We retain all intellectual property rights in our pre-existing materials, methodologies, frameworks, tools, templates, and know-how, including any AI workflows, automation architectures, or systems we develop or use in the course of providing Services.</li>
            <li>Where we create bespoke deliverables for you as part of a service engagement, the ownership and licensing of such deliverables shall be set out in the applicable service agreement or statement of work.</li>
            <li>Nothing in these Terms of Use shall be construed as granting you any right, title, or interest in our proprietary methodologies, tools, or processes.</li>
          </ul>
        </section>

        {/* 10. Your Information and Confidentiality */}
        <section className="mb-12">
          <h2 className="text-xl font-semibold text-white mb-4">10. Your Information and Confidentiality</h2>
          <p className="text-gray-300 leading-relaxed mb-4">
            You retain all intellectual property rights in any information, data, or materials ("Your Materials") that you provide to us via our site or in connection with our Services.
          </p>
          <p className="text-gray-300 leading-relaxed mb-4">
            By providing Your Materials to us, you grant us a non-exclusive, royalty-free licence to use, copy, store, and process Your Materials solely for the purposes of providing our Services to you and for our internal product development and improvement purposes.
          </p>
          <p className="text-gray-300 leading-relaxed mb-4">
            Any of Your Materials which are expressly marked as confidential, or which could reasonably be expected to be regarded as confidential, will be treated as confidential and will only be used and disclosed in accordance with these Terms of Use and our Privacy Policy. We shall only disclose such information where:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-gray-300">
            <li>It is or becomes publicly available other than through a breach of these terms by us</li>
            <li>It was lawfully known to us before receiving it from you</li>
            <li>It is received by us from a third party without knowledge of breach of any obligation owed to you</li>
            <li>It is expressly authorised by you to be disclosed</li>
            <li>It was independently developed by us without reference to your information</li>
            <li>We are required by law or regulation to disclose it</li>
          </ul>
        </section>

        {/* 11. Third-Party AI Tools and Services */}
        <section className="mb-12">
          <h2 className="text-xl font-semibold text-white mb-4">11. Third-Party AI Tools and Services</h2>
          <p className="text-gray-300 leading-relaxed mb-4">
            Our Services may involve the use of third-party AI platforms, tools, and software. You acknowledge and agree that:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-gray-300">
            <li>The outputs generated by AI tools are dependent on the quality and nature of the inputs provided, and we do not guarantee that any AI-generated output will be error-free, complete, or fit for any particular purpose without human review</li>
            <li>Third-party AI platforms are subject to their own terms of service, acceptable use policies, and limitations, which may affect how your data is processed</li>
            <li>We will take reasonable steps to inform you where third-party tools are being used as part of our Services and to ensure appropriate data handling practices are followed</li>
            <li>We are not liable for any changes, outages, or discontinuation of third-party tools or platforms, though we will use reasonable endeavours to mitigate any impact on our Services to you</li>
          </ul>
        </section>

        {/* 12. Data Protection */}
        <section className="mb-12">
          <h2 className="text-xl font-semibold text-white mb-4">12. Data Protection</h2>
          <p className="text-gray-300 leading-relaxed mb-4">
            Where our Services involve the processing of personal data, the parties acknowledge that:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-gray-300">
            <li>Where you provide personal data to us and we determine the purposes and means of processing, we act as a data controller and will process such data in accordance with our Privacy Policy and applicable data protection law, including the UK GDPR and the Data Protection Act 2018.</li>
            <li>Where we process personal data on your behalf (for example, when managing contact databases for lead generation or email campaigns), a separate Data Processing Agreement shall be entered into between us, setting out the scope, nature, and purposes of such processing.</li>
          </ul>
        </section>

        {/* 13. Limitation of Liability */}
        <section className="mb-12">
          <h2 className="text-xl font-semibold text-white mb-4">13. Limitation of Liability</h2>
          <p className="text-gray-300 leading-relaxed mb-4">
            Whilst we take every reasonable precaution and care in relation to our site and our Services, the material displayed on our site is provided without any guarantees, conditions, or warranties as to its accuracy. To the extent permitted by law, we expressly exclude all conditions, warranties, and other terms which might otherwise be implied by statute, common law, or the law of equity.
          </p>
          <p className="text-gray-300 leading-relaxed mb-4">
            We accept no liability under or in connection with this Agreement (whether such liability arises in contract, tort including negligence, or otherwise) for any:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-gray-300 mb-4">
            <li>Loss of income or revenue</li>
            <li>Loss of business</li>
            <li>Loss of profits or contracts</li>
            <li>Loss of anticipated savings</li>
            <li>Loss of data</li>
            <li>Waste of management or office time</li>
          </ul>
          <p className="text-gray-300 leading-relaxed mb-4">
            (whether arising directly or indirectly), or for any indirect or consequential loss or damage of any kind however arising.
          </p>
          <p className="text-gray-300 leading-relaxed mb-4">
            To the extent permitted by applicable law, our total aggregate liability to you under or in connection with this Agreement shall not exceed the total fees paid by you to us under the relevant service agreement in the twelve (12) months preceding the event giving rise to the claim, or £5,000, whichever is the greater.
          </p>
          <p className="text-gray-300 leading-relaxed">
            Nothing in these Terms of Use shall limit or exclude our liability for:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-gray-300 mt-2">
            <li>Death or personal injury caused by our negligence</li>
            <li>Fraud or fraudulent misrepresentation</li>
            <li>Any other liability that cannot be lawfully excluded or limited under the laws of England and Wales</li>
          </ul>
        </section>

        {/* 14. Indemnity */}
        <section className="mb-12">
          <h2 className="text-xl font-semibold text-white mb-4">14. Indemnity</h2>
          <p className="text-gray-300 leading-relaxed mb-4">
            You agree to indemnify and hold us, our officers, directors, agents, partners, and employees harmless from any losses, damages, costs, expenses (including reasonable legal fees), and other liabilities arising out of any claim, demand, or proceeding brought by any third party due to or arising out of:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-gray-300">
            <li>Your use of our site or Services</li>
            <li>Your breach of this Agreement</li>
            <li>Your violation of any rights of another person or entity</li>
            <li>Any claim that Your Materials infringe the intellectual property rights of a third party</li>
          </ul>
        </section>

        {/* 15. Force Majeure */}
        <section className="mb-12">
          <h2 className="text-xl font-semibold text-white mb-4">15. Force Majeure</h2>
          <p className="text-gray-300 leading-relaxed">
            We shall not be liable for any delay or failure to provide our Services or perform any obligation under these Terms of Use if the delay or failure is caused by circumstances beyond our reasonable control, including but not limited to acts of God, government actions, pandemic, fire, flood, utility failures, internet disruptions, cyberattacks, or failures of third-party AI platforms or cloud services.
          </p>
        </section>

        {/* 16. Termination */}
        <section className="mb-12">
          <h2 className="text-xl font-semibold text-white mb-4">16. Termination</h2>
          <p className="text-gray-300 leading-relaxed mb-4">
            We may terminate or suspend your access to our site and Services immediately, without prior notice, if you breach any provision of this Agreement.
          </p>
          <p className="text-gray-300 leading-relaxed">
            Upon termination, all rights granted to you under this Agreement shall immediately cease. Clauses that by their nature should survive termination shall continue in full force and effect, including (without limitation) intellectual property provisions, limitations of liability, indemnity, and confidentiality obligations.
          </p>
        </section>

        {/* 17. General Provisions */}
        <section className="mb-12">
          <h2 className="text-xl font-semibold text-white mb-4">17. General Provisions</h2>
          <p className="text-gray-300 leading-relaxed mb-4">
            <strong className="text-white">Entire Agreement.</strong> This Agreement constitutes the entire agreement between you and us in relation to your use of our site and supersedes all previous agreements in respect of such use, except where a separate service agreement has been entered into.
          </p>
          <p className="text-gray-300 leading-relaxed mb-4">
            <strong className="text-white">Severability.</strong> If any provision of this Agreement is found to be invalid or unenforceable by a court of competent jurisdiction, that provision shall be severed and the remaining provisions shall continue in full force and effect.
          </p>
          <p className="text-gray-300 leading-relaxed mb-4">
            <strong className="text-white">No Waiver.</strong> No failure or delay by us in exercising any right under this Agreement shall operate as a waiver of that right, nor shall any single or partial exercise of any right preclude any further exercise of that right or any other right.
          </p>
          <p className="text-gray-300 leading-relaxed mb-4">
            <strong className="text-white">Assignment.</strong> You may not assign, transfer, or sub-contract any of your rights or obligations under this Agreement without our prior written consent. We may assign or transfer our rights and obligations under this Agreement without your consent.
          </p>
          <p className="text-gray-300 leading-relaxed">
            <strong className="text-white">Third Party Rights.</strong> This Agreement does not confer any rights on any person or party other than the parties to this Agreement and, where applicable, their successors and permitted assigns pursuant to the Contracts (Rights of Third Parties) Act 1999.
          </p>
        </section>

        {/* 18. Complaints */}
        <section className="mb-12">
          <h2 className="text-xl font-semibold text-white mb-4">18. Complaints</h2>
          <p className="text-gray-300 leading-relaxed">
            If you have a complaint about our Services, please contact us using the details set out below so that we can investigate. We will aim to deal quickly and fairly with any complaints in accordance with our obligations under applicable law.
          </p>
        </section>

        {/* 19. Governing Law and Jurisdiction */}
        <section className="mb-12">
          <h2 className="text-xl font-semibold text-white mb-4">19. Governing Law and Jurisdiction</h2>
          <p className="text-gray-300 leading-relaxed mb-4">
            This Agreement and any dispute or claim arising out of or in connection with it (including non-contractual disputes or claims) shall be governed by and construed in accordance with the laws of England and Wales.
          </p>
          <p className="text-gray-300 leading-relaxed">
            The courts of England and Wales shall have exclusive jurisdiction to settle any dispute or claim arising out of or in connection with this Agreement.
          </p>
        </section>

        {/* 20. Contact Us */}
        <section className="mb-12">
          <h2 className="text-xl font-semibold text-white mb-4">20. Contact Us</h2>
          <p className="text-gray-300 leading-relaxed mb-4">
            If you have any questions about these Terms of Use, please email us at:{' '}
            <a href="mailto:hello@stepflowlab.com" className="text-brand-primary hover:text-brand-accent transition-colors">hello@stepflowlab.com</a>
          </p>
          <p className="text-gray-300 leading-relaxed">
            Stepflow Lab is a trading name of RGH COMMERCE LTD (company number 14990250), registered in England and Wales.
          </p>
        </section>

        <p className="text-gray-500 text-sm italic">These Terms of Use were last reviewed on 5 February 2026.</p>

        {/* Footer */}
        <footer className="mt-16 border-t border-white/10 pt-8 text-gray-500 text-sm">
          <p>© {new Date().getFullYear()} Stepflow Lab. All rights reserved.</p>
        </footer>
      </motion.article>
    </div>
  );
};
