import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-footer py-16 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
        <div className="max-w-md text-center md:text-left">
          <p className="text-xl md:text-2xl italic leading-relaxed">
            Trees Acupuncture & Wellness provides a safe and nurturing place for
            your healing and well-being.
          </p>
        </div>

        <div className="flex flex-col items-center md:items-end gap-4">
          <img
            src="/images/trees-logo.png"
            alt="Trees Logo"
            className="h-20 w-auto opacity-80 object-contain"
            onError={(e) => {
              (e.target as HTMLImageElement).src =
                "https://picsum.photos/id/10/200/200";
            }}
          />
          <div className="text-sm tracking-widest uppercase opacity-60">
            &copy; {new Date().getFullYear()} Trees Acupuncture & Wellness
          </div>
          <div className="text-xs opacity-50 mt-2">
            Site built by{" "}
            <a
              href="https://firehouselabs.com.au"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-100 transition-opacity underline"
            >
              Firehouse Labs
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
