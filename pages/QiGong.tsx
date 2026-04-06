import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { MapPin, Clock8, ArrowRight, DollarSign } from "lucide-react";
import { Link } from "react-router-dom";

const QiGong: React.FC = () => {
  const qigongInfo = [
    {
      title: "Classic Medicine",
      img: "/images/qigong-001.jpg",
      description:
        "Qi Gong is one of the branches of Classical Oriental Medicine like that of acupuncture and herbal medicine.",
    },
    {
      title: "Gentle Movement",
      img: "/images/qigong-002.jpg",
      description:
        "Qi Gong incorporates breath with forms (gentle movements) in a mindful way.",
    },
    {
      title: "Mind Training",
      img: "/images/qigong-003.jpg",
      description:
        "Qi Gong can be described as 'movement therapy' with 'mind training' and translates to 'energy work or cultivation'.",
    },
    {
      title: "Release blockages",
      img: "/images/qigong-004.jpg",
      description:
        "It helps the body's qi (energy) move freely and releases stagnation or blockages held in the body, easing physical, emotional and mental tension.",
    },
    {
      title: "For anyone",
      img: "/images/qigong-005.jpg",
      description:
        "There are no prerequisites or fitness levels needed for people wishing to participate in Qi Gong to improve their health, well-being and mindfulness.",
    },
    {
      title: "Busy minds",
      img: "/images/qigong-001.jpg",
      description:
        "It is perfect for people with busy minds, the distraction of thoughts and to do lists or those just wanting a gentle practice to improve their well-being.",
    },
  ];

  const [activeInfoIndex, setActiveInfoIndex] = useState<number | null>(null);
  const activeInfo =
    activeInfoIndex === null ? null : qigongInfo[activeInfoIndex];

  const modal =
    activeInfo &&
    createPortal(
      <div
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-6 py-10"
        role="dialog"
        aria-modal="true"
        aria-labelledby="qigong-modal-title"
        onClick={() => setActiveInfoIndex(null)}
      >
        <div
          className="relative w-full max-w-3xl max-h-[85vh] overflow-y-auto rounded-3xl bg-brand-bg p-8 shadow-2xl"
          onClick={(event) => event.stopPropagation()}
        >
          <button
            type="button"
            className="absolute right-6 top-6 text-brand-text/70 hover:text-brand-text"
            onClick={() => setActiveInfoIndex(null)}
            aria-label="Close details"
          >
            ✕
          </button>
          <div className="flex flex-col gap-6">
            <div className="space-y-2">
              <p className="text-sm uppercase tracking-[0.3em] text-brand-text/70">
                Qi Gong
              </p>
              <h3
                id="qigong-modal-title"
                className="text-3xl md:text-4xl font-arapey"
              >
                {activeInfo.title}
              </h3>
            </div>
            <div className="space-y-4 text-base md:text-lg leading-relaxed text-brand-text/90">
              <p>{activeInfo.description}</p>
            </div>
          </div>
        </div>
      </div>,
      document.body,
    );

  useEffect(() => {
    if (!activeInfo) {
      return;
    }
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setActiveInfoIndex(null);
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [activeInfo]);
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

      {/* Qi Gong Info Tiles */}
      <section className="py-16 px-6 bg-brand-footer/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-arapey text-center mb-12">
            About Qi Gong
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {qigongInfo.map((info, idx) => (
              <button
                key={idx}
                type="button"
                className="group relative overflow-hidden rounded-2xl h-80 shadow-md"
                onClick={() => setActiveInfoIndex(idx)}
                aria-label={`Learn more about ${info.title}`}
              >
                <img
                  src={info.img}
                  alt={info.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center p-4">
                  <h3 className="text-white text-xl md:text-2xl font-arapey tracking-widest uppercase text-center">
                    {info.title}
                  </h3>
                </div>
              </button>
            ))}
          </div>
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
              <div className="flex items-start gap-4">
                <DollarSign className="mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-2xl font-arapey mb-1">Cost</h3>
                  <p className="text-xl">$160 for a 10 week term pass</p>
                </div>
              </div>
              <div className="pt-6">
                <p className="text-sm uppercase tracking-widest font-bold opacity-60">
                  Status
                </p>
                <p className="text-2xl italic">Term 2: 21st April to 23rd June</p>
              </div>
              <div className="pt-2">
                <Link
                  to="/contact"
                  className="px-8 py-3 bg-brand-text text-white rounded-full transition-transform hover:scale-105 inline-flex items-center gap-2"
                >
                  Book Qi Gong <ArrowRight size={20} />
                </Link>
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

      {modal}
    </div>
  );
};

export default QiGong;
