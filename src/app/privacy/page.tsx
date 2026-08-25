import { Scale } from "lucide-react";

export const metadata = {
  title: "Privacy Policy | ARKA ABROAD",
  description: "Privacy Policy for ARKA ABROAD",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="bg-gray-50 min-h-screen py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6 max-w-4xl">
        <div className="bg-white shadow-xl border border-gray-200 rounded-sm p-8 md:p-12 relative overflow-hidden">
          <div className="absolute top-0 right-0 p-8 opacity-5">
            <Scale className="w-64 h-64" />
          </div>
          
          <div className="relative z-10 font-serif text-gray-800 text-sm">
            <div className="border-b border-gray-800 pb-6 mb-6 text-center">
              <h1 className="text-2xl font-bold tracking-tight mb-2 uppercase">Privacy Policy</h1>
              <p className="text-xs font-semibold tracking-widest text-gray-500 uppercase">
                Effective Date: {new Date().toLocaleDateString()}
              </p>
            </div>
            
            <div className="space-y-4 leading-relaxed text-xs text-justify">
              <p>
                This Privacy Policy ("Policy") explains how ARKA ABROAD ("Company", "we", "us", or "our") collects, uses, shares, and protects information about you when you interact with our website, use our consultancy services, or otherwise communicate with us (collectively, the "Services"). By using our Services, you consent to the data practices described in this Policy. If you do not agree with the data practices described in this Policy, you should not use our Services.
              </p>
              
              <h2 className="text-sm font-bold mt-6 mb-2 uppercase tracking-wide border-b border-gray-200 pb-1">1. Information We Collect</h2>
              <p>
                <strong>1.1 Personal Information:</strong> We may collect personal information that you provide to us voluntarily, such as your name, email address, postal address, phone number, date of birth, educational background, test scores, passport details, and financial information. This occurs when you register for an account, apply for a university, sign up for a newsletter, or contact our customer support.
              </p>
              <p>
                <strong>1.2 Automatically Collected Information:</strong> When you access or use our Services, we automatically collect information about you, including log information, device information, and location information. We use cookies, web beacons, and similar tracking technologies to collect this data, which helps us to improve your experience and to understand how our Services are being used.
              </p>
              
              <h2 className="text-sm font-bold mt-6 mb-2 uppercase tracking-wide border-b border-gray-200 pb-1">2. How We Use Your Information</h2>
              <p>
                We use the information we collect to operate and maintain our Services, improve your user experience, process your transactions and applications, and communicate with you. Specifically, we may use your information to: facilitate university and visa applications on your behalf; respond to your comments, questions, and requests; provide customer service; monitor and analyze trends, usage, and activities in connection with our Services; and personalize the Services to match your profile or interests.
              </p>
              
              <h2 className="text-sm font-bold mt-6 mb-2 uppercase tracking-wide border-b border-gray-200 pb-1">3. Sharing of Information</h2>
              <p>
                We do not sell your personal information to third parties. However, to provide our Services, we may share your personal information with: educational institutions to which you are applying; third-party vendors and service providers who perform services on our behalf (such as payment processing, data analysis, email delivery, hosting services, customer service, and marketing assistance); and legal and regulatory authorities when required by law or to protect our rights and the safety of our users.
              </p>

              <h2 className="text-sm font-bold mt-6 mb-2 uppercase tracking-wide border-b border-gray-200 pb-1">4. Data Security & Retention</h2>
              <p>
                We implement a variety of security measures to maintain the safety of your personal information. However, no electronic transmission over the internet or information storage technology can be guaranteed to be 100% secure. We retain your personal information only for as long as is necessary for the purposes set out in this Policy and to the extent necessary to comply with our legal obligations, resolve disputes, and enforce our agreements.
              </p>

              <h2 className="text-sm font-bold mt-6 mb-2 uppercase tracking-wide border-b border-gray-200 pb-1">5. Changes to This Policy</h2>
              <p>
                We may update this Privacy Policy from time to time in order to reflect, for example, changes to our practices or for other operational, legal, or regulatory reasons. We will notify you of any material changes by posting the new Privacy Policy on this page and updating the "Effective Date" at the top.
              </p>

              <h2 className="text-sm font-bold mt-6 mb-2 uppercase tracking-wide border-b border-gray-200 pb-1">6. Contact Us</h2>
              <p>
                If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us at our official support channels or via email at privacy@arkaabroad.com.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
