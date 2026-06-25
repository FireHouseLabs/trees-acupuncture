import React, { useEffect } from "react";

const BookOnline: React.FC = () => {
  useEffect(() => {
    const handleMessage = (e: MessageEvent) => {
      if (typeof e.data !== "string") return;
      const iframe = document.getElementById(
        "cliniko-40459941",
      ) as HTMLIFrameElement | null;
      if (!iframe) return;
      if (e.data.search("cliniko-bookings-resize") > -1) {
        const height = Number(e.data.split(":")[1]);
        iframe.style.height = height + "px";
      }
      if (e.data.search("cliniko-bookings-page") > -1) {
        iframe.scrollIntoView();
      }
    };
    window.addEventListener("message", handleMessage);
    return () => window.removeEventListener("message", handleMessage);
  }, []);

  return (
    <div className="fade-in bg-brand-bg pb-24">
      <section className="py-20 px-6 max-w-5xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-arapey mb-12 text-center">
          Book Online
        </h1>
        <div className="bg-brand-footer rounded-[40px] overflow-hidden">
          <iframe
            id="cliniko-40459941"
            src="https://trees-acupuncture-and-wellness.au5.cliniko.com/bookings?embedded=true"
            frameBorder={0}
            scrolling="auto"
            width="100%"
            height="1000"
            style={{ pointerEvents: "auto", display: "block" }}
            title="Book an appointment"
          />
        </div>
      </section>
    </div>
  );
};

export default BookOnline;
