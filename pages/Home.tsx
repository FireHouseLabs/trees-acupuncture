import React from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Home: React.FC = () => {
  return (
    <div className="fade-in">
      {/* Hero Section */}
      <section className="relative h-[80vh] overflow-hidden">
        <img
          src="/images/hero-waterfall.jpg"
          alt="Waterfall nature"
          className="w-full h-full object-cover brightness-75"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-6">
          <h1 className="text-4xl md:text-7xl font-arapey mb-6 tracking-wide drop-shadow-lg">
            Trees Acupuncture & Wellness
          </h1>
          <div className="space-y-2 text-xl md:text-3xl font-arapey opacity-90 tracking-widest">
            <p>Acupuncture & Chinese Herbal Medicine</p>
            <p>Facial Rejuvenation & Cosmetic Acupuncture</p>
            <p>Esoteric Acupuncture</p>
            <p>Qi Gong</p>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-24 px-6 bg-brand-bg">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-3xl md:text-5xl font-arapey italic">
            Welcome to a space of restoration
          </h2>
          <p className="text-xl md:text-2xl leading-relaxed opacity-80">
            Inspired by the wisdom of nature, we provide traditional Chinese
            healing modalities designed to restore harmony and equilibrium to
            the physical body, heart-mind, and awakening the spiritual being.
          </p>
          <div className="flex flex-wrap justify-center gap-6 pt-8">
            <Link
              to="/contact"
              className="px-8 py-3 bg-brand-text text-white rounded-full transition-transform hover:scale-105 inline-flex items-center gap-2"
            >
              Book Mornington <ArrowRight size={20} />
            </Link>
            <Link
              to="/about"
              className="px-8 py-3 border border-brand-text text-brand-text rounded-full transition-transform hover:scale-105"
            >
              Our Story
            </Link>
          </div>
        </div>
      </section>

      {/* Services Visual */}
      <section className="py-16 px-6 bg-brand-footer/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-arapey text-center mb-12">
            Our Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Acupuncture",
                img: "/images/acupuncture.jpg",
              },
              {
                title: "Chinese Herbal Medicine",
                img: "/images/herbal-medicine.jpg",
              },
              {
                title: "Facial Rejuvenation & Cosmetic Acupuncture",
                img: "/images/face-acupuncture.jpg",
              },
              {
                title: "Cupping & Moxabustion",
                img: "/images/moxibustion.webp",
              },
            ].map((service, idx) => (
              <div
                key={idx}
                className="group relative overflow-hidden rounded-2xl h-80 shadow-md"
              >
                <img
                  src={service.img}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center p-4">
                  <h3 className="text-white text-xl md:text-2xl font-arapey tracking-widest uppercase text-center">
                    {service.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
