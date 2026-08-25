import { Scale } from "lucide-react";

export const metadata = {
  title: "Disclaimer | ARKA ABROAD",
  description: "Disclaimer for ARKA ABROAD",
};

export default function DisclaimerPage() {
  return (
    <div className="bg-gray-50 min-h-screen py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6 max-w-4xl">
        <div className="bg-white shadow-xl border border-gray-200 rounded-sm p-8 md:p-12 relative overflow-hidden">
          <div className="absolute top-0 right-0 p-8 opacity-5">
            <Scale className="w-64 h-64" />
          </div>
          
          <div className="relative z-10 font-serif text-gray-800 text-sm">
            <div className="border-b border-gray-800 pb-6 mb-6 text-center">
              <h1 className="text-2xl font-bold tracking-tight mb-2 uppercase">Disclaimer</h1>
              <p className="text-xs font-semibold tracking-widest text-gray-500 uppercase">
                Effective Date: {new Date().toLocaleDateString()}
              </p>
            </div>
            
            <div className="space-y-4 leading-relaxed text-xs text-justify">
              <p>
                The information provided by ARKA ABROAD ("we," "us," or "our") on this website (and our mobile application) is for general informational purposes only. All information on the site and our mobile application is provided in good faith, however, we make no representation or warranty of any kind, express or implied, regarding the accuracy, adequacy, validity, reliability, availability, or completeness of any information on the site or our mobile application.
              </p>
              
              <h2 className="text-sm font-bold mt-6 mb-2 uppercase tracking-wide border-b border-gray-200 pb-1">1. Educational & Admissions Disclaimer</h2>
              <p>
                ARKA ABROAD acts solely as an educational consultant to provide guidance and assistance in the university application process. We do not guarantee admission, placement, or acceptance into any specific educational institution, college, or university program. The final decision regarding admissions rests entirely and exclusively with the admissions committee of the respective educational institutions. The criteria for admission are determined independently by each institution and are subject to change without prior notice.
              </p>
              
              <h2 className="text-sm font-bold mt-6 mb-2 uppercase tracking-wide border-b border-gray-200 pb-1">2. Visa & Immigration Disclaimer</h2>
              <p>
                While ARKA ABROAD provides advice and assistance regarding visa applications and immigration processes based on current regulations, we are not a government agency or an immigration law firm. The granting of a visa or study permit is solely at the discretion of the immigration authorities or consulate of the destination country. We accept no liability for any delays, rejections, or changes in immigration policies that may affect the outcome of a visa application.
              </p>
              
              <h2 className="text-sm font-bold mt-6 mb-2 uppercase tracking-wide border-b border-gray-200 pb-1">3. Financial & Scholarship Disclaimer</h2>
              <p>
                Any information provided on our website regarding scholarships, financial aid, or tuition fees is subject to change by the granting institutions. ARKA ABROAD does not guarantee the awarding of any scholarship, financial aid, or loan. Students and parents are advised to independently verify all financial requirements, deadlines, and eligibility criteria directly with the respective institutions or financial organizations.
              </p>
              
              <h2 className="text-sm font-bold mt-6 mb-2 uppercase tracking-wide border-b border-gray-200 pb-1">4. External Links Disclaimer</h2>
              <p>
                The site may contain (or you may be sent through the site) links to other websites or content belonging to or originating from third parties or links to websites and features in banners or other advertising. Such external links are not investigated, monitored, or checked for accuracy, adequacy, validity, reliability, availability, or completeness by us. We do not warrant, endorse, guarantee, or assume responsibility for the accuracy or reliability of any information offered by third-party websites linked through the site.
              </p>
              
              <h2 className="text-sm font-bold mt-6 mb-2 uppercase tracking-wide border-b border-gray-200 pb-1">5. Professional Advice Disclaimer</h2>
              <p>
                The site cannot and does not contain legal, financial, or tax advice. The educational and immigration information is provided for general informational and educational purposes only and is not a substitute for professional advice. Accordingly, before taking any actions based upon such information, we encourage you to consult with the appropriate professionals.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
