import { siteConfig } from "@/data/siteConfig";
import { Mail, Phone, MapPin, MessageCircle } from "lucide-react";
import ConsultationForm from "@/components/forms/ConsultationForm";

export const metadata = {
  title: "Book Free Counselling | ARKA ABROAD",
  description: "Schedule a free consultation with our expert study abroad counsellors.",
};

export default function BookConsultationPage() {
  return (
    <div className="bg-[var(--background)] min-h-screen py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6 max-w-7xl">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-[var(--primary)] mb-6">
            Let's plan your next step.
          </h1>
          <p className="text-lg text-[var(--muted)] leading-relaxed">
            Fill out the form below to schedule a free, no-obligation counselling session with one of our international education experts.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12 items-start">
          
          {/* Contact Info (Left - 2 cols) */}
          <div className="lg:col-span-2 space-y-8">
            <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm">
              <h3 className="text-2xl font-bold text-[var(--primary)] mb-8">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-50 text-[var(--primary)] rounded-full flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Our Office</h4>
                    <p className="text-gray-600 text-sm leading-relaxed">{siteConfig.contact.address}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-50 text-[var(--primary)] rounded-full flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Phone</h4>
                    <div className="flex flex-col gap-1">
                      {siteConfig.contact.phones.map((phone, i) => (
                        <a key={i} href={`tel:${phone.replace(/[^0-9+]/g, '')}`} className="text-gray-600 text-sm hover:text-[var(--accent)] transition-colors">{phone}</a>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-50 text-[var(--primary)] rounded-full flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Email</h4>
                    <a href={`mailto:${siteConfig.contact.email}`} className="text-gray-600 text-sm hover:text-[var(--accent)] transition-colors">{siteConfig.contact.email}</a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-green-50 text-green-600 rounded-full flex items-center justify-center shrink-0">
                    <MessageCircle className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">WhatsApp</h4>
                    <div className="flex flex-col gap-1">
                      {siteConfig.contact.phones.map((phone, i) => (
                        <a key={i} href={`https://wa.me/${phone.replace(/[^0-9]/g, '')}`} target="_blank" rel="noopener noreferrer" className="text-gray-600 text-sm hover:text-green-600 transition-colors">
                          Message us on WhatsApp ({phone})
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Lead Form (Right - 3 cols) */}
          <div className="lg:col-span-3">
             <div className="mb-6">
                <h2 className="text-2xl font-bold text-[var(--primary)]">Request Counselling</h2>
                <p className="text-gray-500 text-sm mt-1">Fill out the form and we'll get back to you within 24 hours.</p>
             </div>
             <ConsultationForm />
          </div>

        </div>
      </div>
    </div>
  );
}
