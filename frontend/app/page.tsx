'use client';
import IntroAnimation from "../components/IntroAnimation";
import { useEffect, useState } from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import CategorySection from "../components/CategorySection";
import ProductGrid from "../components/ProductGrid";
import CartDrawer, { type CartItem } from "../components/CartDrawer";
import Footer from "../components/Footer";
import type { Product } from "../lib/products";

export default function Home() {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [cartOpen, setCartOpen] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("pureroot-cart");
    if (saved) setCart(JSON.parse(saved));
  }, []);

  useEffect(() => {
    localStorage.setItem("pureroot-cart", JSON.stringify(cart));
  }, [cart]);

  function addToCart(product: Product) {
    setCart(current => {
      const found = current.find(i => i.id === product.id);
      if (found) return current.map(i => i.id === product.id ? { ...i, quantity: i.quantity + 1 } : i);
      return [...current, { ...product, quantity: 1 }];
    });
    setCartOpen(true);
  }

  function changeQuantity(id: number, delta: number) {
    setCart(current =>
      current
        .map(i => i.id === id ? { ...i, quantity: i.quantity + delta } : i)
        .filter(i => i.quantity > 0)
    );
  }

  const count = cart.reduce((n, i) => n + i.quantity, 0);

  return (
  <>
    <IntroAnimation />

    <Header cartCount={count} onCart={() => setCartOpen(true)} />

    <main>
      <Hero />
      <CategorySection />
      <ProductGrid onAdd={addToCart} />

      <section className="container-wide mt-8 grid gap-3 rounded-2xl bg-sage p-5 text-sm md:grid-cols-4">
        <div>
          🚚 <b>Free Shipping</b>
          <br />
          <span className="text-gray-600">
            On orders above ₹999
          </span>
        </div>

        <div>
          📦 <b>Secure Packaging</b>
          <br />
          <span className="text-gray-600">
            Safe & hygienic
          </span>
        </div>

        <div>
          🌿 <b>Delivered Fresh</b>
          <br />
          <span className="text-gray-600">
            Packed with care
          </span>
        </div>

        <div>
          💚 <b>100% Satisfaction</b>
          <br />
          <span className="text-gray-600">
            We care for you
          </span>
        </div>
      </section>
    </main>

    <Footer />

    <CartDrawer
      open={cartOpen}
      items={cart}
      onClose={() => setCartOpen(false)}
      onChange={changeQuantity}
    />
  </>
);
}
