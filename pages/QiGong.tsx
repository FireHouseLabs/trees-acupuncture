import React from "react";
import { MapPin, Clock } from "lucide-react";

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
                <Clock className="mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-2xl font-arapey mb-1">Tuesday Morning</h3>
                  <p className="text-xl">8:00am — 9:00am</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <MapPin className="mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-2xl font-arapey mb-1">Location</h3>
                  <p className="text-xl">Indah Health Studio</p>
                  <p className="opacity-70">49 Kareela Road, Frankston</p>
                </div>
              </div>
              <div className="pt-6">
                <p className="text-sm uppercase tracking-widest font-bold opacity-60">
                  Status
                </p>
                <p className="text-2xl italic">Coming Soon @ Indah</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="pt-12">
              <img
                src="https://images.unsplash.com/photo-1518199266791-5375a83190b7?w=600&auto=format&fit=crop"
                alt="Meditation"
                className="rounded-3xl h-64 w-full object-cover shadow-lg"
              />
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=600&auto=format&fit=crop"
                alt="Yoga/QiGong"
                className="rounded-3xl h-96 w-full object-cover shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default QiGong;
