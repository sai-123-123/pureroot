"use client";

import { useEffect, useState } from "react";

export default function IntroAnimation() {
  const [show, setShow] = useState(false);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const alreadyShown = sessionStorage.getItem(
      "godavari-intro-shown"
    );

    if (alreadyShown) {
      setVisible(false);
      return;
    }

    // Start animation
    setShow(true);

    // Keep intro visible for 2.4 seconds
    const hideTimer = setTimeout(() => {
      setShow(false);

      sessionStorage.setItem(
        "godavari-intro-shown",
        "true"
      );

      // Wait for fade-out to finish
      const removeTimer = setTimeout(() => {
        setVisible(false);
      }, 700);

      return () => clearTimeout(removeTimer);
    }, 2400);

    return () => clearTimeout(hideTimer);
  }, []);

  if (!visible) return null;

  return (
    <div
      className={`
        fixed inset-0 z-[99999]
        flex items-center justify-center
        bg-[#f8f6ef]
        transition-opacity duration-700
        ${show ? "opacity-100" : "opacity-0"}
      `}
    >
      <div
        className={`
          flex flex-col items-center
          px-6 text-center
          transition-all duration-1000
          ease-out
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
            object-contain
            sm:w-[380px]
            md:w-[460px]
          "
        />

        {/* TAGLINE */}

        <p
          className="
            mt-4
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

        {/* DIVIDER */}

        <div
          className="
            mt-6
            flex
            items-center
            gap-3
            text-[#264e36]
          "
        >
          <span className="h-px w-10 bg-[#8b5e34]/40" />

          <span className="text-sm">
            ✦
          </span>

          <span className="h-px w-10 bg-[#8b5e34]/40" />
        </div>

      </div>
    </div>
  );
}
