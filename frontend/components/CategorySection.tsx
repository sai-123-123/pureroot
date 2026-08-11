import { ShoppingBasket, Soup } from "lucide-react";

const cats = [
  { name: "Ghee & Dairy", icon: Soup, href: "#ghee" },
  { name: "Karam & Podis", icon: Soup, href: "#karam" },
  { name: "Everyday Essentials", icon: ShoppingBasket, href: "#essentials" }
];

export default function CategorySection() {
  return (
    <section className="container-wide py-12">
      <div className="mb-8 flex items-center gap-5">
        <div className="h-px flex-1 bg-gray-200" />
        <h2 className="serif text-2xl">Explore Our Collections</h2>
        <div className="h-px flex-1 bg-gray-200" />
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        {cats.map(({ name, icon: Icon, href }) => (
          <a
            key={name}
            href={href}
            className="group flex items-center gap-5 rounded-2xl border bg-white p-6 transition hover:-translate-y-1 hover:border-forest/30 hover:shadow-lg"
          >
            <span className="grid h-16 w-16 place-items-center rounded-full bg-sage text-forest">
              <Icon size={28} />
            </span>

            <div>
              <div className="serif text-xl group-hover:text-forest">
                {name}
              </div>

              <div className="mt-1 text-xs text-gray-500">
                Discover collection →
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
