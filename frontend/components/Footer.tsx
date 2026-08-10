export default function Footer() {
  return (
    <footer id="contact" className="mt-16 bg-forest text-white">
      <div className="container-wide grid gap-10 py-14 md:grid-cols-4">
        <div>
          <div className="serif text-3xl">PureRoot</div>
          <p className="mt-3 text-sm leading-6 text-white/70">Pure ingredients, traditional flavours and everyday essentials.</p>
        </div>
        <div>
          <h3 className="font-semibold">Shop</h3>
          <div className="mt-4 space-y-2 text-sm text-white/70">
            <a href="#ghee" className="block hover:text-white">Ghee</a>
            <a href="#karam" className="block hover:text-white">Karam Powders</a>
            <a href="#essentials" className="block hover:text-white">Essentials</a>
          </div>
        </div>
        <div id="about">
          <h3 className="font-semibold">About</h3>
          <p className="mt-4 text-sm leading-6 text-white/70">We focus on a small, carefully selected range rather than a huge catalogue.</p>
        </div>
        <div id="why">
          <h3 className="font-semibold">Contact</h3>
          <p className="mt-4 text-sm text-white/70">WhatsApp ordering<br />Pan-India delivery</p>
        </div>
      </div>
      <div className="border-t border-white/10 py-5 text-center text-xs text-white/50">© 2026 PureRoot. All rights reserved.</div>
    </footer>
  );
}
