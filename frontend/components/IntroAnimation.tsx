"use client";

import { useEffect, useState } from "react";

export default function IntroAnimation() {
  const [show, setShow] = useState(false);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    // Show only once per browser session
    const alreadyShown = sessionStorage.getItem(
      "godavari-intro-shown"
    );

    if (alreadyShown) {
      setVisible(false);
      return;
    }

    setShow(true);

    const hideTimer = setTimeout(() => {
      setShow(false);

      sessionStorage.setItem(
        "godavari-intro-shown",
        "true"
      );

      setTimeout(() => {
        setVisible(false);
      }, 500);
    }, 1200);

    return () => clearTimeout(hideTimer);
  }, []);

  if (!visible) return null;

  return (
    <div
      className={`
        fixed inset-0 z-[9999]
        flex items-center justify-center
        bg-[#f8f6ef]
        transition-opacity duration-500
        ${show ? "opacity-100" : "opacity-0"}
      `}
    >
      <div
        className={`
          flex flex-col items-center px-6 text-center
          transition-all duration-700
          ${
            show
              ? "translate-y-0 scale-100 opacity-100"
              : "translate-y-[-10px] scale-95 opacity-0"
          }
        `}
      >
        {/* LOGO */}

        <img
          src="/logo.png"
          alt="Godavari Basket"
          className="
            w-[280px]
            sm:w-[380px]
            md:w-[460px]
            object-contain
          "
        />

        {/* TAGLINE */}

        <p
          className="
            mt-3
            text-[10px]
            font-medium
            uppercase
            tracking-[0.35em]
            text-[#264e36]
            sm:text-xs
          "
        >
          Authentic Goodness From Godavari
        </p>

        {/* SMALL DIVIDER */}

        <div className="mt-5 flex items-center gap-3">

          <span className="h-px w-10 bg-[#8b5e34]/50" />

          <span className="text-[#264e36]">
            ✦
          </span>

          <span className="h-px w-10 bg-[#8b5e34]/50" />

        </div>

      </div>
    </div>
  );
}
