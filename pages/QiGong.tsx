import React from "react";
import { MapPin, Clock8 } from "lucide-react";

const QiGong: React.FC = () => {
  return (
    <div className="fade-in">
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <img
          src="/images/qigong.png"
          alt="Peaceful beach"
          className="absolute inset-0 w-full h-full object-cover brightness-50"
          style={{ objectPosition: "50% 75%" }}
        />
        <div className="relative z-10 text-center text-white px-6">
          <h1 className="text-5xl md:text-8xl font-arapey mb-4">Qi Gong</h1>
          <p className="text-2xl md:text-3xl italic opacity-90 tracking-widest uppercase">
            Energy & Vitality
          </p>
        </div>
      </section>

      <section className="py-24 px-6 bg-brand-bg">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <h2 className="text-4xl md:text-5xl font-arapey">
              Join our community
            </h2>
            <p className="text-xl md:text-2xl leading-relaxed opacity-80">
              Qi Gong is an ancient Chinese healing art that combines breathing,
              meditation, and physical movements to improve physical, emotional,
              and spiritual well-being.
            </p>

            <div className="bg-brand-footer/40 p-10 rounded-3xl space-y-6">
              <div className="flex items-start gap-4">
                <Clock8 className="mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-2xl font-arapey mb-1">Tuesday Morning</h3>
                  <p className="text-xl">8:00am — 9:00am</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <MapPin className="mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-2xl font-arapey mb-1">Location</h3>
                  <p className="text-xl">
                    <a
                      href="https://www.indahhealth.com.au"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline hover:opacity-70"
                    >
                      Indah Health Studio
                    </a>
                  </p>
                  <p className="opacity-70">49 Kareela Road, Frankston</p>
                </div>
              </div>
              <div className="pt-6">
                <p className="text-sm uppercase tracking-widest font-bold opacity-60">
                  Status
                </p>
                <p className="text-2xl italic">Starting 24th February 2026</p>
              </div>
            </div>
          </div>

          <div>
            <img
              src="/images/qigong-lady.jpg"
              alt="QiGong"
              className="rounded-3xl h-96 w-full object-cover shadow-lg"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default QiGong;
