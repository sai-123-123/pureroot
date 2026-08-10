"use client";

import { Heart, ShoppingCart, Star, X, Plus, Minus } from "lucide-react";
import { useState } from "react";
import type { Product } from "../lib/products";

export default function ProductCard({
  product,
  onAdd,
}: {
  product: Product;
  onAdd: (p: Product) => void;
}) {
  const [showDetails, setShowDetails] = useState(false);
  const [quantity, setQuantity] = useState(1);

  function addToCart() {
    for (let i = 0; i < quantity; i++) {
      onAdd(product);
    }

    setShowDetails(false);
    setQuantity(1);
  }

  return (
    <>
      {/* PRODUCT CARD */}

      <article
        onClick={() => setShowDetails(true)}
        className="product-card cursor-pointer overflow-hidden rounded-2xl border bg-white transition duration-300 hover:-translate-y-1 hover:shadow-xl"
      >
        <div className="relative flex h-48 items-center justify-center sm:h-60 bg-[#f8f6ef] p-6">

          {product.badge && (
            <span className="absolute left-3 top-3 rounded-md bg-forest px-2.5 py-1 text-xs font-semibold text-white">
              {product.badge}
            </span>
          )}

          <button
            onClick={(event) => {
              event.stopPropagation();
            }}
            className="absolute right-3 top-3 z-10 grid h-9 w-9 place-items-center rounded-full bg-white shadow-sm transition hover:scale-110"
          >
            <Heart size={17} />
          </button>

          <img
            src={product.image}
            alt={product.name}
            className="max-h-full max-w-[80%] object-contain mix-blend-multiply transition duration-500 hover:scale-105"
          />
        </div>

        <div className="p-4">

          <div className="font-semibold">
            {product.name}
          </div>

          <div className="mt-1 text-xs text-gray-500">
            {product.size}
          </div>

          <div className="mt-2 flex items-center gap-1 text-xs">
            <Star
              size={14}
              fill="#D99B24"
              className="text-[#D99B24]"
            />

            <span>{product.rating}</span>

            <span className="text-gray-400">
              ({product.reviews})
            </span>
          </div>

          <div className="mt-4 flex items-center justify-between gap-3">

            <div className="text-xl font-bold">
              ₹{product.price}
            </div>

            <button
              onClick={(event) => {
                event.stopPropagation();
                onAdd(product);
              }}
              className="flex items-center gap-2 rounded-xl bg-sage px-3 py-2 sm:px-4 sm:py-2.5 text-sm font-semibold text-forest transition hover:bg-forest hover:text-white"
            >
              <ShoppingCart size={16} />
              Add to Cart
            </button>

          </div>

        </div>
      </article>

      {/* QUICK VIEW MODAL */}

      {showDetails && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 p-4 backdrop-blur-sm"
          onClick={() => setShowDetails(false)}
        >

          <div
            onClick={(event) => event.stopPropagation()}
            className="relative max-h-[90vh] w-full max-w-4xl overflow-y-auto rounded-3xl bg-white shadow-2xl"
          >

            {/* CLOSE */}

            <button
              onClick={() => setShowDetails(false)}
              className="absolute right-5 top-5 z-20 grid h-10 w-10 place-items-center rounded-full bg-white shadow-md transition hover:scale-110"
            >
              <X size={20} />
            </button>

            <div className="grid md:grid-cols-2">

              {/* IMAGE */}

              <div className="flex min-h-[380px] items-center justify-center bg-[#f8f6ef] p-10">

                <img
                  src={product.image}
                  alt={product.name}
                  className="max-h-[360px] max-w-[85%] object-contain mix-blend-multiply"
                />

              </div>

              {/* DETAILS */}

              <div className="flex flex-col justify-center p-7 md:p-10">

                <div className="text-xs font-semibold uppercase tracking-[.2em] text-forest">
                  {product.category}
                </div>

                <h2 className="serif mt-3 text-3xl md:text-4xl">
                  {product.name}
                </h2>

                <div className="mt-4 flex items-center gap-2">

                  <div className="flex items-center gap-1">
                    <Star
                      size={17}
                      fill="#D99B24"
                      className="text-[#D99B24]"
                    />

                    <span className="font-semibold">
                      {product.rating}
                    </span>
                  </div>

                  <span className="text-sm text-gray-400">
                    ({product.reviews} reviews)
                  </span>

                </div>

                <div className="mt-5 flex items-end gap-3">

                  <span className="text-3xl font-bold">
                    ₹{product.price}
                  </span>

                  <span className="text-sm text-gray-500">
                    {product.size}
                  </span>

                </div>

                <p className="mt-5 leading-7 text-gray-600">
                  {product.description}
                </p>

                {product.ingredients && (
                  <div className="mt-5">
                    <h3 className="font-semibold">
                      Ingredients
                    </h3>

                    <p className="mt-1 text-sm leading-6 text-gray-500">
                      {product.ingredients}
                    </p>
                  </div>
                )}

                {product.benefits && (
                  <div className="mt-4">
                    <h3 className="font-semibold">
                      Benefits
                    </h3>

                    <p className="mt-1 text-sm leading-6 text-gray-500">
                      {product.benefits}
                    </p>
                  </div>
                )}

                {/* QUANTITY */}

                <div className="mt-6">

                  <div className="mb-2 text-sm font-semibold">
                    Quantity
                  </div>

                  <div className="flex w-fit items-center gap-5 rounded-xl border px-4 py-2.5">

                    <button
                      onClick={() =>
                        setQuantity((current) =>
                          Math.max(1, current - 1)
                        )
                      }
                    >
                      <Minus size={17} />
                    </button>

                    <span className="min-w-5 text-center font-semibold">
                      {quantity}
                    </span>

                    <button
                      onClick={() =>
                        setQuantity((current) => current + 1)
                      }
                    >
                      <Plus size={17} />
                    </button>

                  </div>

                </div>

                {/* ADD TO CART */}

                <button
                  onClick={addToCart}
                  className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-forest py-4 font-semibold text-white transition hover:scale-[1.01]"
                >
                  <ShoppingCart size={19} />
                  Add {quantity} to Cart
                </button>

              </div>

            </div>

          </div>

        </div>
      )}
    </>
  );
}