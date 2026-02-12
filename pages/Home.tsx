import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Home: React.FC = () => {
  const services = [
    {
      title: "Acupuncture",
      img: "/images/acupuncture.jpg",
      description: [
        "Acupuncture involves the insertion of fine single use needles into the skin at specific acupuncture points to assist the body’s innate ability to promote healing, restore balance and relieve pain.",
        "From a Chinese medicine perspective these acupoints promote the smooth flow of qi (energy) and blood through a network of meridians (channels) within the body, restoring balance.",
        "Western medicine suggests acupuncture stimulates sensory nerves, muscles and connective tissue, improves blood circulation, supports immune function, releases endorphins (natural painkillers) and influences neurochemistry within the body.",
        "Acupuncture is commonly used to assist with a broad range of conditions such as chronic pain, headaches, stress, anxiety, insomnia, digestive and musculoskeletal issues.",
      ],
      extra: {
        heading: "Esoteric Acupuncture",
        description:
          "Esoteric Acupuncture is a holistic, spiritual approach to healing that was developed by Dr. Mikio Sankey. It incorporates Traditional Chinese acupuncture points and philosophies with the Chakra system, sacred geometry and quantum physics. Specific needling patterns are used to raise consciousness, balance energy centres, assist and support one’s spiritual and energic growth.",
      },
    },
    {
      title: "Chinese Herbal Medicine",
      img: "/images/herbal-medicine.jpg",
      description: [
        "Chinese herbal medicine uses multi-herb formulas tailored according to an individual’s pattern of imbalance. To create a harmonised and balanced formula, the selected herbs play a specific role, with each ingredient contributing to the overall therapeutic strategy.",
        "Within a formula, Chinese herbal medicine predominantly uses plants and occasionally mineral and animal products. Often accompanied with acupuncture, Chinese herbal medicine may assist with conditions including fatigue, insomnia, digestive and gynaecological disorders.",
      ],
    },
    {
      title: "Facial Rejuvenation & Cosmetic Acupuncture",
      img: "/images/face-acupuncture.jpg",
      description: [
        "Facial rejuvenation and cosmetic acupuncture are holistic, non-surgical Chinese medicine treatments that involve the insertion of ultra-fine needles into specific facial, muscular, and motor points. Body acupuncture points are also included to help address internal imbalances and support the upward flow of qi (energy) to the face.",
        "The gentle insertion of these needles creates controlled micro-stimulation in the skin, activating the body’s natural healing response and encouraging collagen and elastin production. Treatment may also help stimulate circulation, improve muscle tone, enhance skin hydration and complexion, and relax tense or overactive facial muscles.",
        "Potential benefits include a reduction in fine lines and wrinkles, improved firmness and elasticity, enhanced skin texture and tone, reduced puffiness and redness, and a brighter, more radiant complexion.",
        "From a therapeutic perspective, facial acupuncture may also support conditions such as Bell’s palsy, facial paralysis, facial asymmetry, drooping eyelids, teeth grinding (bruxism), TMJ tension, earache, tinnitus, sinus congestion, and headaches.",
      ],
    },
    {
      title: "Cupping & Moxibustion",
      img: "/images/moxibustion.webp",
      description: [
        "Cupping therapy uses gentle suction to lift the skin into specially designed cups. It may help improve circulation, ease muscle tension, support the body’s natural detoxification processes, relieve pain, and promote relaxation.",
        "Moxibustion is a heat based therapy using Mugwort (moxa) that is burned near the skin’s surface creating warmth while stimulating specific acupoints. Assisting to alleviate digestive issues, pain, menstrual cramps, and gynaecological conditions as well as turning breech babies.",
        "Moxibustion improves circulation, stimulates healing and energises the body by strengthening qi.",
      ],
    },
  ];

  const [activeServiceIndex, setActiveServiceIndex] = useState<number | null>(
    null,
  );
  const activeService =
    activeServiceIndex === null ? null : services[activeServiceIndex];

  const modal =
    activeService &&
    createPortal(
      <div
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-6 py-10"
        role="dialog"
        aria-modal="true"
        aria-labelledby="service-modal-title"
        onClick={() => setActiveServiceIndex(null)}
      >
        <div
          className="relative w-full max-w-3xl max-h-[85vh] overflow-y-auto rounded-3xl bg-brand-bg p-8 shadow-2xl"
          onClick={(event) => event.stopPropagation()}
        >
          <button
            type="button"
            className="absolute right-6 top-6 text-brand-text/70 hover:text-brand-text"
            onClick={() => setActiveServiceIndex(null)}
            aria-label="Close service details"
          >
            ✕
          </button>
          <div className="flex flex-col gap-6">
            <div className="space-y-2">
              <p className="text-sm uppercase tracking-[0.3em] text-brand-text/70">
                Service
              </p>
              <h3
                id="service-modal-title"
                className="text-3xl md:text-4xl font-arapey"
              >
                {activeService.title}
              </h3>
            </div>
            <div className="space-y-4 text-base md:text-lg leading-relaxed text-brand-text/90">
              {activeService.description.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
            {activeService.extra && (
              <div className="space-y-3 pt-2">
                <h4 className="text-2xl font-arapey">
                  {activeService.extra.heading}
                </h4>
                <p className="text-base md:text-lg leading-relaxed text-brand-text/90">
                  {activeService.extra.description}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>,
      document.body,
    );

  useEffect(() => {
    if (!activeService) {
      return;
    }
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setActiveServiceIndex(null);
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [activeService]);

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
            {services.map((service, idx) => (
              <button
                key={idx}
                type="button"
                className="group relative overflow-hidden rounded-2xl h-80 shadow-md"
                onClick={() => setActiveServiceIndex(idx)}
                aria-label={`Learn more about ${service.title}`}
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
              </button>
            ))}
          </div>
        </div>
      </section>

      {modal}
    </div>
  );
};

export default Home;
