import React from "react";
import { Mail, Phone, ExternalLink, Calendar } from "lucide-react";

const InstagramIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16 16"
    fill="currentColor"
    {...props}
  >
    <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334" />
  </svg>
);

const Contact: React.FC = () => {
  return (
    <div className="fade-in bg-brand-bg pb-24">
      {/* Booking Hero */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-arapey mb-12 text-center">
          Contact & Booking
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-24">
          {/* Mornington */}
          <div className="bg-brand-footer p-12 rounded-[40px] flex flex-col justify-between hover:bg-brand-footer/80 transition-colors">
            <div>
              <h2 className="text-4xl font-arapey mb-4">Mornington</h2>
              <p className="text-xl mb-8 opacity-70">
                3 Main Street, Mornington
              </p>
            </div>
            <a
              href="https://www.peninsula-acupuncture.com.au"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between p-6 bg-brand-text text-white rounded-2xl transition-all hover:scale-[1.02]"
            >
              <span className="text-2xl font-arapey">
                Book Online via Peninsula Acupuncture
              </span>
              <ExternalLink
                size={24}
                className="group-hover:translate-x-1 transition-transform"
              />
            </a>
          </div>

          {/* Dromana */}
          <div className="bg-brand-footer p-12 rounded-[40px] border-2 border-dashed border-brand-text/10 flex flex-col justify-between">
            <div>
              <h2 className="text-4xl font-arapey mb-4">Dromana</h2>
              <p className="text-xl mb-8 opacity-70">
                Coming soon to Dromana...
              </p>
            </div>
            <div className="p-6 bg-brand-text/10 text-brand-text/50 rounded-2xl flex items-center justify-between italic">
              <span className="text-xl">Online booking coming soon</span>
              <Calendar size={24} />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Hours */}
          <div className="bg-brand-footer p-10 rounded-3xl">
            <h3 className="text-3xl font-arapey mb-8 text-center">
              Clinic Hours
            </h3>
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

          {/* Contact Details */}
          <div className="space-y-8">
            <div className="bg-brand-footer p-8 rounded-3xl flex items-center gap-6">
              <Phone className="h-8 w-8" />
              <div>
                <p className="text-sm uppercase tracking-widest opacity-60">
                  Phone
                </p>
                <a href="tel:0411112422" className="text-xl hover:underline">
                  0411 112 422
                </a>
              </div>
            </div>
            <div className="bg-brand-footer p-8 rounded-3xl flex items-center gap-6">
              <Mail className="h-8 w-8" />
              <div>
                <p className="text-sm uppercase tracking-widest opacity-60">
                  Email
                </p>
                <a
                  href="mailto:treesacupuncturewellness@gmail.com"
                  className="text-xl break-all hover:underline"
                >
                  treesacupuncturewellness@gmail.com
                </a>
              </div>
            </div>
            <div className="bg-brand-footer p-8 rounded-3xl flex items-center gap-6">
              <InstagramIcon className="h-8 w-8" />
              <div>
                <p className="text-sm uppercase tracking-widest opacity-60">
                  Instagram
                </p>
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
      </section>
    </div>
  );
};

export default Contact;
