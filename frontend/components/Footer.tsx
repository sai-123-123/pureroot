export default function Footer() {
  return (
    <footer id="contact" className="mt-16 bg-forest text-white">

      {/* TRUST STRIP */}
      <div className="border-b border-white/10">
        <div className="container-wide grid grid-cols-2 gap-4 py-6 text-center text-xs sm:grid-cols-4">

          <div>
            <div className="text-sm font-semibold">🌿 Carefully Sourced</div>
            <div className="mt-1 text-white/50">
              Selected with care
            </div>
          </div>

          <div>
            <div className="text-sm font-semibold">🏡 Rooted in Tradition</div>
            <div className="mt-1 text-white/50">
              Inspired by generations
            </div>
          </div>

          <div>
            <div className="text-sm font-semibold">📦 Thoughtfully Packed</div>
            <div className="mt-1 text-white/50">
              Prepared for your home
            </div>
          </div>

          <div>
            <div className="text-sm font-semibold">🇮🇳 Pan-India Delivery</div>
            <div className="mt-1 text-white/50">
              Delivered across India
            </div>
          </div>

        </div>
      </div>

      <div className="container-wide py-14">

        {/* MAIN FOOTER */}
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-5">

          {/* BRAND */}
          <div className="lg:col-span-1">

            <div className="serif text-3xl">
              PureRoot
            </div>

            <p className="mt-4 max-w-xs text-sm leading-6 text-white/65">
              Traditional foods rooted in the flavours of India,
              carefully sourced and brought to your home with care.
            </p>

            <p className="mt-5 text-xs leading-5 text-white/40">
              Rooted in tradition.
              <br />
              Made for everyday living.
            </p>

            {/* SOCIAL PLACEHOLDERS */}
            <div className="mt-6 flex gap-3">
              <a
                href="#"
                aria-label="Instagram"
                className="grid h-9 w-9 place-items-center rounded-full border border-white/15 text-xs transition hover:border-white/40 hover:bg-white/10"
              >
                IG
              </a>

              <a
                href="#"
                aria-label="Facebook"
                className="grid h-9 w-9 place-items-center rounded-full border border-white/15 text-xs transition hover:border-white/40 hover:bg-white/10"
              >
                FB
              </a>

              <a
                href="#"
                aria-label="WhatsApp"
                className="grid h-9 w-9 place-items-center rounded-full border border-white/15 text-xs transition hover:border-white/40 hover:bg-white/10"
              >
                WA
              </a>
            </div>

          </div>

          {/* SHOP */}
          <div>
            <h3 className="font-semibold">
              Shop
            </h3>

            <div className="mt-5 space-y-3 text-sm text-white/65">

              <a href="#ghee" className="block hover:text-white">
                Ghee & Dairy
              </a>

              <a href="#karam" className="block hover:text-white">
                Karam & Podis
              </a>

              <a href="#essentials" className="block hover:text-white">
                Everyday Essentials
              </a>

              <a href="#shop" className="block hover:text-white">
                All Products
              </a>

            </div>
          </div>

          {/* ABOUT */}
          <div id="about">

            <h3 className="font-semibold">
              Discover PureRoot
            </h3>

            <div className="mt-5 space-y-3 text-sm text-white/65">

              <a href="#about" className="block hover:text-white">
                Our Story
              </a>

              <a href="#why" className="block hover:text-white">
                Why PureRoot
              </a>

              <a href="#about" className="block hover:text-white">
                Our Sourcing
              </a>

              <a href="#why" className="block hover:text-white">
                Quality Promise
              </a>

              <a href="#faq" className="block hover:text-white">
                FAQs
              </a>

            </div>

          </div>

          {/* CUSTOMER CARE */}
          <div>

            <h3 className="font-semibold">
              Customer Care
            </h3>

            <div className="mt-5 space-y-3 text-sm text-white/65">

              <a href="#contact" className="block hover:text-white">
                Contact Us
              </a>

              <a href="#contact" className="block hover:text-white">
                WhatsApp Support
              </a>

              <a href="#" className="block hover:text-white">
                Shipping & Delivery
              </a>

              <a href="#" className="block hover:text-white">
                Returns & Refunds
              </a>

              <a href="#" className="block hover:text-white">
                Track Your Order
              </a>

            </div>

          </div>

          {/* BUSINESS */}
          <div>

            <h3 className="font-semibold">
              Visit / Contact
            </h3>

            <div className="mt-5 space-y-4 text-sm leading-6 text-white/65">

              <div>
                <div className="text-xs font-semibold uppercase tracking-wider text-white/80">
                  Business Address
                </div>

                <p className="mt-1">
                  [Your Business Address]
                  <br />
                  [Village / Town]
                  <br />
                  [District, State – PIN]
                  <br />
                  India
                </p>
              </div>

              <div>
                <div className="text-xs font-semibold uppercase tracking-wider text-white/80">
                  Contact
                </div>

                <p className="mt-1">
                  [Phone Number]
                  <br />
                  [Email Address]
                </p>
              </div>

            </div>

          </div>

        </div>

        {/* NEWSLETTER */}
        <div className="mt-14 rounded-2xl border border-white/10 bg-white/5 p-6 md:flex md:items-center md:justify-between md:gap-10">

          <div>
            <h3 className="serif text-2xl">
              Stay connected with PureRoot
            </h3>

            <p className="mt-2 max-w-xl text-sm text-white/55">
              Be the first to know about new products, seasonal
              collections and stories from the roots of PureRoot.
            </p>
          </div>

          <div className="mt-5 flex w-full max-w-md gap-2 md:mt-0">

            <input
              type="email"
              placeholder="Enter your email"
              className="min-w-0 flex-1 rounded-xl border border-white/15 bg-white/10 px-4 py-3 text-sm text-white outline-none placeholder:text-white/40 focus:border-white/30"
            />

            <button
              type="button"
              className="rounded-xl bg-white px-5 py-3 text-sm font-semibold text-forest transition hover:bg-white/90"
            >
              Subscribe
            </button>

          </div>

        </div>

      </div>

      {/* LEGAL / BOTTOM BAR */}
      <div className="border-t border-white/10">

        <div className="container-wide flex flex-col gap-4 py-6 text-xs text-white/40 md:flex-row md:items-center md:justify-between">

          <div>
            © 2026 PureRoot Foods. All rights reserved.
          </div>

          <div className="flex flex-wrap gap-5">

            <a href="#" className="hover:text-white">
              Privacy Policy
            </a>

            <a href="#" className="hover:text-white">
              Terms & Conditions
            </a>

            <a href="#" className="hover:text-white">
              Shipping Policy
            </a>

            <a href="#" className="hover:text-white">
              Refund Policy
            </a>

          </div>

        </div>

      </div>

    </footer>
  );
}
