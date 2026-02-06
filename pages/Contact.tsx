
import React from 'react';
import { Mail, Phone, Instagram, ExternalLink, Calendar } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <div className="fade-in bg-brand-bg pb-24">
      {/* Booking Hero */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-arapey mb-12 text-center">Contact & Booking</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-24">
          {/* Mornington */}
          <div className="bg-brand-footer/40 p-12 rounded-[40px] flex flex-col justify-between hover:bg-brand-footer/60 transition-colors">
            <div>
              <h2 className="text-4xl font-arapey mb-4">Mornington</h2>
              <p className="text-xl mb-8 opacity-70">3 Main Street, Mornington</p>
            </div>
            <a 
              href="https://www.peninsula-acupuncture.com.au" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group flex items-center justify-between p-6 bg-brand-text text-white rounded-2xl transition-all hover:scale-[1.02]"
            >
              <span className="text-2xl font-arapey">Book Online via Peninsula Acupuncture</span>
              <ExternalLink size={24} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          {/* Dromana */}
          <div className="bg-brand-footer/40 p-12 rounded-[40px] border-2 border-dashed border-brand-text/10 flex flex-col justify-between">
            <div>
              <h2 className="text-4xl font-arapey mb-4">Dromana</h2>
              <p className="text-xl mb-8 opacity-70">Coming soon to Dromana...</p>
            </div>
            <div className="p-6 bg-brand-text/10 text-brand-text/50 rounded-2xl flex items-center justify-between italic">
              <span className="text-xl">Online booking coming soon</span>
              <Calendar size={24} />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Details */}
          <div className="lg:col-span-2 space-y-12">
             <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-white/30 p-8 rounded-3xl flex items-center gap-6">
                  <Mail className="h-8 w-8" />
                  <div>
                    <p className="text-sm uppercase tracking-widest opacity-60">Email</p>
                    <a href="mailto:treesacupuncturewellness@gmail.com" className="text-xl break-all hover:underline">
                      treesacupuncturewellness@gmail.com
                    </a>
                  </div>
                </div>
                <div className="bg-white/30 p-8 rounded-3xl flex items-center gap-6">
                  <Phone className="h-8 w-8" />
                  <div>
                    <p className="text-sm uppercase tracking-widest opacity-60">Phone</p>
                    <a href="tel:0411112422" className="text-xl hover:underline">
                      0411 112 422
                    </a>
                  </div>
                </div>
                <div className="bg-white/30 p-8 rounded-3xl flex items-center gap-6">
                  <Instagram className="h-8 w-8" />
                  <div>
                    <p className="text-sm uppercase tracking-widest opacity-60">Instagram</p>
                    <a 
                      href="https://instagram.com/trees_acupuncture_and_wellness" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-xl hover:underline"
                    >
                      trees_acupuncture_and_wellness
                    </a>
                  </div>
                </div>
             </div>
          </div>

          {/* Hours */}
          <div className="bg-brand-footer/30 p-10 rounded-3xl">
            <h3 className="text-3xl font-arapey mb-8 text-center">Clinic Hours</h3>
            <div className="space-y-4 text-xl">
              <div className="flex justify-between border-b border-brand-text/5 pb-2">
                <span>Monday</span>
                <span>9am - 4pm</span>
              </div>
              <div className="flex justify-between border-b border-brand-text/5 pb-2">
                <span>Wednesday</span>
                <span>9am - 4pm</span>
              </div>
              <div className="flex justify-between border-b border-brand-text/5 pb-2">
                <span>Friday</span>
                <span>1pm - 6pm</span>
              </div>
              <div className="flex justify-between">
                <span>Saturday</span>
                <span>8:30am - 3pm</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
