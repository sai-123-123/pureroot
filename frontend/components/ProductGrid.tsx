"use client";

import { useEffect, useMemo, useState } from "react";
import {
  getProducts,
  type Category,
  type Product,
} from "../lib/products";
import ProductCard from "./ProductCard";

export default function ProductGrid({
  onAdd,
}: {
  onAdd: (p: Product) => void;
}) {
  const [category, setCategory] =
    useState<"All" | Category>("All");

  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadProducts() {
      try {
        const data = await getProducts();
        setProducts(data);
      } catch (error) {
        console.error("Failed to load products:", error);
      } finally {
        setLoading(false);
      }
    }

    loadProducts();
  }, []);

  const visible = useMemo(() => {
    if (category === "All") {
      return products;
    }

    return products.filter(
      (product) => product.category === category
    );
  }, [category, products]);

  const categoryLabels: Record<"All" | Category, string> = {
    All: "All Products",
    Ghee: "Ghee",
    Karam: "Karam & Podis",
    Essentials: "Everyday Essentials",
  };

  return (
    <section id="shop" className="container-wide py-10">

      <div className="mb-7 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">

        <div>
          <p className="text-xs font-semibold uppercase tracking-[.2em] text-forest">
            Made for everyday living
          </p>

          <h2 className="serif mt-2 text-4xl">
            Discover PureRoot
          </h2>
        </div>

        <div className="hide-scrollbar flex gap-2 overflow-x-auto">

          {(
            ["All", "Ghee", "Karam", "Essentials"] as const
          ).map((c) => (

            <button
              key={c}
              onClick={() => setCategory(c)}
              className={`whitespace-nowrap rounded-full border px-5 py-2 text-sm ${
                category === c
                  ? "border-forest bg-forest text-white"
                  : "bg-white hover:border-forest"
              }`}
            >
              {categoryLabels[c]}
            </button>

          ))}

        </div>

      </div>

      {loading && (
        <div className="py-20 text-center text-gray-500">
          Bringing our collection to you...
        </div>
      )}

      {!loading && (
        <div className="grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-4">

          {visible.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onAdd={onAdd}
            />
          ))}

        </div>
      )}

      {!loading && visible.length === 0 && (
        <div className="py-20 text-center text-gray-500">
          No products available in this collection.
        </div>
      )}

    </section>
  );
}
