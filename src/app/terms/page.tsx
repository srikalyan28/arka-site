import { Scale } from "lucide-react";

export const metadata = {
  title: "Terms & Conditions | ARKA ABROAD",
  description: "Terms and Conditions for ARKA ABROAD",
};

export default function TermsPage() {
  return (
    <div className="bg-gray-50 min-h-screen py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6 max-w-4xl">
        <div className="bg-white shadow-xl border border-gray-200 rounded-sm p-8 md:p-12 relative overflow-hidden">
          <div className="absolute top-0 right-0 p-8 opacity-5">
            <Scale className="w-64 h-64" />
          </div>
          
          <div className="relative z-10 font-serif text-gray-800 text-sm">
            <div className="border-b border-gray-800 pb-6 mb-6 text-center">
              <h1 className="text-2xl font-bold tracking-tight mb-2 uppercase">Terms & Conditions</h1>
              <p className="text-xs font-semibold tracking-widest text-gray-500 uppercase">
                Effective Date: {new Date().toLocaleDateString()}
              </p>
            </div>
            
            <div className="space-y-4 leading-relaxed text-xs text-justify">
              <p>
                These Terms and Conditions ("Terms") govern your use of the ARKA ABROAD website and all related services provided by ARKA ABROAD ("we", "our", or "us"). By accessing or using our website and services, you agree to comply with and be bound by these Terms. If you disagree with any part of these Terms, you must not use our website or services.
              </p>
              
              <h2 className="text-sm font-bold mt-6 mb-2 uppercase tracking-wide border-b border-gray-200 pb-1">1. User Eligibility & Obligations</h2>
              <p>
                <strong>1.1 Eligibility:</strong> By using our services, you represent and warrant that you are at least 18 years of age or accessing the services under the supervision of a parent or legal guardian.
              </p>
              <p>
                <strong>1.2 Accurate Information:</strong> You agree to provide current, complete, and accurate information when registering for an account or submitting an application. You are solely responsible for updating your information to keep it accurate and complete. Providing false or misleading information may result in the immediate termination of our services and potential rejection of your applications by educational institutions.
              </p>
              
              <h2 className="text-sm font-bold mt-6 mb-2 uppercase tracking-wide border-b border-gray-200 pb-1">2. Scope of Services</h2>
              <p>
                ARKA ABROAD acts as an educational consultancy, providing guidance and assistance with university selection, application preparation, essay review, and visa application procedures. We act as an intermediary between the student and educational institutions. We do not guarantee admission, scholarship awards, or visa approvals, as these decisions are made independently by the respective institutions and government authorities.
              </p>
              
              <h2 className="text-sm font-bold mt-6 mb-2 uppercase tracking-wide border-b border-gray-200 pb-1">3. Intellectual Property Rights</h2>
              <p>
                Unless otherwise stated, ARKA ABROAD and/or its licensors own the intellectual property rights for all material on the website, including text, graphics, logos, images, audio clips, digital downloads, and data compilations. All intellectual property rights are reserved. You may access this from ARKA ABROAD for your own personal use subjected to restrictions set in these terms and conditions. You must not republish, sell, rent, reproduce, duplicate, or copy material from ARKA ABROAD without prior written consent.
              </p>

              <h2 className="text-sm font-bold mt-6 mb-2 uppercase tracking-wide border-b border-gray-200 pb-1">4. Limitation of Liability</h2>
              <p>
                To the maximum extent permitted by applicable law, ARKA ABROAD shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly, or any loss of data, use, goodwill, or other intangible losses, resulting from (a) your access to or use of or inability to access or use the services; (b) any conduct or content of any third party on the services; (c) any content obtained from the services; or (d) unauthorized access, use, or alteration of your transmissions or content.
              </p>

              <h2 className="text-sm font-bold mt-6 mb-2 uppercase tracking-wide border-b border-gray-200 pb-1">5. Indemnification</h2>
              <p>
                You agree to indemnify, defend and hold harmless ARKA ABROAD, its officers, directors, employees, agents, and third parties, for any losses, costs, liabilities, and expenses (including reasonable attorney's fees) relating to or arising out of your use of or inability to use the website or services, any user postings made by you, your violation of any terms of this Agreement or your violation of any rights of a third party, or your violation of any applicable laws, rules or regulations.
              </p>

              <h2 className="text-sm font-bold mt-6 mb-2 uppercase tracking-wide border-b border-gray-200 pb-1">6. Governing Law & Dispute Resolution</h2>
              <p>
                These Terms shall be governed and construed in accordance with the laws of the jurisdiction in which ARKA ABROAD is headquartered, without regard to its conflict of law provisions. Any dispute arising out of or related to these Terms shall be subject to the exclusive jurisdiction of the courts located within that jurisdiction.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
