import React from "react";

const About: React.FC = () => {
  return (
    <div className="fade-in bg-brand-bg pb-24">
      {/* Tribute Header */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-12">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-6xl font-arapey">About Marni</h1>
            <p className="text-2xl md:text-3xl italic text-brand-text/80">
              Welcome to Trees Acupuncture and Wellness...
            </p>
            <div className="h-1 w-24 bg-brand-text/20"></div>
          </div>
          <div className="flex justify-center">
            <div className="relative w-64 h-64 md:w-80 md:h-80">
              <img
                src="/images/marni-profile.jpg"
                alt="Marni Rosbrook"
                className="rounded-full w-full h-full object-cover border-8 border-brand-footer shadow-xl"
                onError={(e) => {
                  (e.target as HTMLImageElement).src =
                    "https://picsum.photos/id/64/800/800";
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* The Story */}
      <section className="px-6 py-12">
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="bg-brand-footer/30 p-8 md:p-12 rounded-3xl shadow-sm italic leading-relaxed text-xl">
            "Trees Acupuncture and Wellness is founded in the memory of Marni’s
            younger sister Tasha Michelle Rees (14-3-1973 to 6-1-2020). She was
            the one that inspired and encouraged Marni to continue her studies
            and follow her passion and life’s path."
          </div>

          <div className="space-y-6 text-xl md:text-2xl leading-relaxed text-brand-text/90">
            <p>
              Marni has completed a Bachelor of Health Science (Chinese
              Medicine), is a registered Acupuncturist and Chinese Herbal
              Medicine practitioner with AHPRA and a member of AACMA. Her
              maturity and life wisdom brings a caring and nurturing approach to
              her patients' health and well-being.
            </p>

            <h2 className="text-3xl font-arapey mt-12 mb-6">
              More about Marni
            </h2>
            <p>
              Marni discovered Chinese medicine on her own IVF journey after
              having a miscarriage even though the transfer was successful and
              the pregnancy had been confirmed. A good friend suggested Chinese
              medicine and acupuncture to help her prepare for the next
              transfer.
            </p>
            <p>
              Marni had always been interested in natural therapies, so she
              booked an appointment and started treatment. This began Marni’s
              destiny from patient to practitioner. She now has two beautiful
              children and lives locally on the Mornington Peninsula.
            </p>
            <p>
              Marni has special interests in women’s health, pregnancy and
              fertility and working with people wanting to expand their
              consciousness and mindfulness. She enjoys providing the
              tranquility of facial acupuncture treatments and working with
              people wanting support with energy, stress, anxiety, sleep,
              digestion, immunity and general well-being.
            </p>
          </div>

          <div className="pt-12 text-center">
            <div className="max-w-2xl mx-auto italic text-2xl border-t border-brand-text/10 pt-8">
              "Chinese Medicine is a beautiful modality for restoring harmony
              and equilibrium to the physical body, heart-mind and awakening the
              spiritual being. It is elegantly subtle yet potently powerful."
              <p className="mt-4 font-bold not-italic font-arapey uppercase tracking-widest text-lg">
                — Marni Rosbrook
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
