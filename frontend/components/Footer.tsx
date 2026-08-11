export default function Footer() {
  return (
    <footer id="contact" className="mt-16 bg-forest text-white">
      <div className="container-wide grid gap-10 py-14 md:grid-cols-4">

        <div>
          <div className="serif text-3xl">PureRoot</div>

          <p className="mt-3 text-sm leading-6 text-white/70">
            Traditional foods, carefully sourced from trusted makers and
            brought from the roots of India to your home.
          </p>
        </div>

        <div>
          <h3 className="font-semibold">Shop</h3>

          <div className="mt-4 space-y-2 text-sm text-white/70">
            <a href="#ghee" className="block hover:text-white">
              Ghee & Dairy
            </a>

            <a href="#karam" className="block hover:text-white">
              Karam & Podis
            </a>

            <a href="#essentials" className="block hover:text-white">
              Everyday Essentials
            </a>
          </div>
        </div>

        <div id="about">
          <h3 className="font-semibold">About PureRoot</h3>

          <p className="mt-4 text-sm leading-6 text-white/70">
            We believe everyday food should stay close to its roots.
            PureRoot brings traditional flavours and carefully selected
            foods from trusted makers to modern Indian homes.
          </p>
        </div>

        <div id="why">
          <h3 className="font-semibold">Our Promise</h3>

          <p className="mt-4 text-sm leading-6 text-white/70">
            Thoughtfully sourced<br />
            Carefully packed<br />
            Delivered across India
          </p>
        </div>

      </div>

      <div className="border-t border-white/10 py-5 text-center text-xs text-white/50">
        © 2026 PureRoot. All rights reserved.
      </div>
    </footer>
  );
}
