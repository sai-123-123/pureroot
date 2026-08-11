'use client';

import { Search, ShoppingCart, UserRound, Menu, X, Leaf } from "lucide-react";
import { useState } from "react";

export default function Header({ cartCount, onCart }: { cartCount: number; onCart: () => void }) {
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState("");

  const handleSearch = () => {
    const query = search.trim().toLowerCase();

    if (!query) return;

    window.dispatchEvent(
      new CustomEvent("product-search", {
        detail: query,
      })
    );

    document.getElementById("shop")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  const handleSearchKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <>
      <div className="bg-forest text-white text-xs">
        <div className="container-wide flex items-center justify-between py-2">
          <span>🌿 Rooted in Tradition &nbsp; | &nbsp; Carefully Sourced &nbsp; | &nbsp; Made with Care</span>
          <span className="hidden sm:block">🚚 Free shipping on orders above ₹999</span>
          <span className="hidden md:block">🇮🇳 Delivering across India</span>
        </div>
      </div>

      <header className="sticky top-0 z-40 border-b bg-white/95 backdrop-blur">
        <div className="container-wide flex h-20 items-center justify-between gap-5">
          <a href="#" className="leading-none">
            <div className="flex items-center gap-2">
              <Leaf size={22} className="text-forest" />
              <div>
                <div className="serif text-3xl">Godavari Basket</div>
                <div className="text-[9px] tracking-[.28em] text-gray-500">
                  Authentic Goodness From Godavari
                </div>
              </div>
            </div>
          </a>

          <nav className="hidden lg:flex items-center gap-8 text-sm">
            <a className="font-semibold text-forest" href="#">Home</a>
            <a href="#shop" className="hover:text-forest">Shop</a>
            <a href="#about" className="hover:text-forest">Our Story</a>
            <a href="#why" className="hover:text-forest">Why PureRoot</a>
            <a href="#contact" className="hover:text-forest">Contact</a>
          </nav>

          <div className="hidden md:flex items-center gap-3">

            <div className="flex h-11 w-64 items-center rounded-full border px-4">
              <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                onKeyDown={handleSearchKeyDown}
                className="w-full bg-transparent text-sm outline-none"
                placeholder="Search our collection..."
              />

              <button
                type="button"
                onClick={handleSearch}
                aria-label="Search products"
                className="cursor-pointer"
              >
                <Search size={19} />
              </button>
            </div>

            <UserRound size={22} />

            <button onClick={onCart} className="relative">
              <ShoppingCart size={24} />

              {cartCount > 0 && (
                <span className="absolute -right-2 -top-2 grid h-5 min-w-5 place-items-center rounded-full bg-forest px-1 text-[10px] text-white">
                  {cartCount}
                </span>
              )}
            </button>
          </div>

          <div className="flex items-center gap-4 md:hidden">
            <button onClick={onCart} className="relative">
              <ShoppingCart size={22} />
            </button>

            <button onClick={() => setOpen(!open)}>
              {open ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {open && (
          <div className="border-t bg-white px-6 py-5 lg:hidden">
            <div className="flex flex-col gap-4 text-sm">
              <a href="#" onClick={() => setOpen(false)}>Home</a>
              <a href="#shop" onClick={() => setOpen(false)}>Shop</a>
              <a href="#about" onClick={() => setOpen(false)}>Our Story</a>
              <a href="#why" onClick={() => setOpen(false)}>Why PureRoot</a>
              <a href="#contact" onClick={() => setOpen(false)}>Contact</a>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
