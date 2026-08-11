"use client";

import { useEffect, useState } from "react";

export default function IntroAnimation() {
  const [visible, setVisible] = useState(true);
  const [stage, setStage] = useState(0);

  useEffect(() => {
    // Start
    const logoTimer = setTimeout(() => {
      setStage(1);
    }, 500);

    // Show tagline
    const taglineTimer = setTimeout(() => {
      setStage(2);
    }, 1300);

    // Start exit
    const exitTimer = setTimeout(() => {
      setStage(3);
    }, 3000);

    // Remove completely
    const removeTimer = setTimeout(() => {
      setVisible(false);
      sessionStorage.setItem("godavari-intro-shown", "true");
    }, 3900);

    return () => {
      clearTimeout(logoTimer);
      clearTimeout(taglineTimer);
      clearTimeout(exitTimer);
      clearTimeout(removeTimer);
    };
  }, []);

  if (!visible) return null;

  return (
    <div
      className={`
        fixed inset-0 z-[99999]
        flex items-center justify-center
        bg-[#f8f6ef]
        transition-opacity duration-[900ms] ease-in-out
        ${stage === 3 ? "opacity-0" : "opacity-100"}
      `}
    >
      <div className="flex flex-col items-center text-center">

        {/* LOGO */}

        <div
          className={`
            transition-all duration-[1200ms] ease-out
            ${
              stage >= 1
                ? "translate-y-0 scale-100 opacity-100"
                : "translate-y-5 scale-90 opacity-0"
            }
          `}
        >
          <img
            src="/logo.png"
            alt="Godavari Basket"
            className="
              w-[280px]
              object-contain
              sm:w-[360px]
              md:w-[440px]
            "
          />
        </div>

        {/* TAGLINE */}

        <div
          className={`
            transition-all duration-[1000ms] ease-out
            ${
              stage >= 2
                ? "translate-y-0 opacity-100"
                : "translate-y-3 opacity-0"
            }
          `}
        >
          <p
            className="
              mt-5
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

          <div className="mt-6 flex items-center justify-center gap-3">

            <span className="h-px w-12 bg-[#8b5e34]/40" />

            <span className="text-sm text-[#264e36]">
              ✦
            </span>

            <span className="h-px w-12 bg-[#8b5e34]/40" />

          </div>
        </div>

      </div>
    </div>
  );
}
