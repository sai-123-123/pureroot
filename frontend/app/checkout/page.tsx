"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  MessageCircle,
  Minus,
  Plus,
  Trash2,
  ShoppingBag,
  MapPin,
  UserRound,
} from "lucide-react";

type CartItem = {
  id: number;
  name: string;
  size: string;
  price: number;
  image: string;
  quantity: number;
};

export default function CheckoutPage() {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [loaded, setLoaded] = useState(false);

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");

  useEffect(() => {
    try {
      const savedCart = localStorage.getItem("pureroot-cart");

      if (savedCart) {
        const parsedCart = JSON.parse(savedCart);

        if (Array.isArray(parsedCart)) {
          setCart(parsedCart);
        }
      }
    } catch (error) {
      console.error("Failed to load cart:", error);
    }

    setLoaded(true);
  }, []);

  useEffect(() => {
    if (!loaded) return;

    localStorage.setItem(
      "pureroot-cart",
      JSON.stringify(cart)
    );
  }, [cart, loaded]);

  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const itemCount = cart.reduce(
    (sum, item) => sum + item.quantity,
    0
  );

  function updateQuantity(id: number, change: number) {
    setCart((current) =>
      current
        .map((item) =>
          item.id === id
            ? {
                ...item,
                quantity: item.quantity + change,
              }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  }

  function removeItem(id: number) {
    setCart((current) =>
      current.filter((item) => item.id !== id)
    );
  }

  function orderOnWhatsApp() {
    if (!name.trim()) {
      alert("Please enter your name.");
      return;
    }

    if (!phone.trim()) {
      alert("Please enter your phone number.");
      return;
    }

    if (!address.trim()) {
      alert("Please enter your delivery address.");
      return;
    }

    if (cart.length === 0) {
      alert("Your cart is empty.");
      return;
    }

    const products = cart
      .map(
        (item) =>
          `• ${item.name} (${item.size}) x ${item.quantity} = ₹${
            item.price * item.quantity
          }`
      )
      .join("\n");

    const message = `Hello PureRoot,

I would like to place an order.

Customer Details:
Name: ${name}
Phone: ${phone}

Delivery Address:
${address}

Order Details:
${products}

Total: ₹${total}

Please confirm my order.`;

    const whatsappUrl =
      `https://wa.me/917989301401?text=` +
      encodeURIComponent(message);

    window.open(whatsappUrl, "_blank");
  }

  return (
    <main className="min-h-screen bg-[#f8f6ef]">

      {/* HEADER */}

      <div className="border-b border-black/5 bg-white">

        <div className="container-wide flex items-center justify-between py-5">

          <Link
            href="/"
            className="flex items-center gap-2 text-sm font-medium text-forest transition hover:opacity-70"
          >
            <ArrowLeft size={18} />
            <span>Continue Shopping</span>
          </Link>

          <div className="hidden text-xs font-semibold uppercase tracking-[0.2em] text-gray-400 sm:block">
            Secure Checkout
          </div>

        </div>

      </div>

      {/* MAIN */}

      <div className="container-wide py-8 pb-12 md:py-12">

        {/* TITLE */}

        <div className="max-w-2xl">

          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-forest">
            PureRoot
          </p>

          <h1 className="serif mt-2 text-4xl leading-tight md:text-5xl">
            Complete your order
          </h1>

          <p className="mt-3 text-sm leading-6 text-gray-500 md:text-base">
            Enter your delivery details and review your order
            before sending it to us on WhatsApp.
          </p>

        </div>

        {/* CONTENT */}

        <div className="mt-8 grid gap-6 lg:grid-cols-[1.25fr_.75fr] lg:gap-8">

          {/* LEFT */}

          <div className="space-y-6">

            {/* DELIVERY */}

            <section className="rounded-3xl border border-black/5 bg-white p-5 shadow-sm md:p-7">

              <div className="flex items-start gap-4">

                <div className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-[#eef3e8] text-forest">
                  <MapPin size={20} />
                </div>

                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-forest">
                    Step 01
                  </p>

                  <h2 className="serif mt-1 text-2xl md:text-3xl">
                    Delivery Details
                  </h2>

                  <p className="mt-1 text-sm text-gray-500">
                    Where should we deliver your order?
                  </p>
                </div>

              </div>

              <div className="mt-7 space-y-5">

                {/* NAME */}

                <div>
                  <label className="mb-2 block text-sm font-semibold">
                    Full Name
                  </label>

                  <div className="relative">

                    <UserRound
                      size={17}
                      className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                    />

                    <input
                      value={name}
                      onChange={(e) =>
                        setName(e.target.value)
                      }
                      placeholder="Enter your full name"
                      className="h-12 w-full rounded-xl border border-gray-200 bg-[#fafafa] pl-11 pr-4 text-sm outline-none transition focus:border-forest focus:bg-white focus:ring-2 focus:ring-forest/10"
                    />

                  </div>
                </div>

                {/* PHONE */}

                <div>
                  <label className="mb-2 block text-sm font-semibold">
                    Phone Number
                  </label>

                  <input
                    value={phone}
                    onChange={(e) =>
                      setPhone(e.target.value)
                    }
                    placeholder="Enter your mobile number"
                    type="tel"
                    inputMode="numeric"
                    className="h-12 w-full rounded-xl border border-gray-200 bg-[#fafafa] px-4 text-sm outline-none transition focus:border-forest focus:bg-white focus:ring-2 focus:ring-forest/10"
                  />

                  <p className="mt-2 text-xs text-gray-400">
                    We may use this number to confirm your order.
                  </p>
                </div>

                {/* ADDRESS */}

                <div>
                  <label className="mb-2 block text-sm font-semibold">
                    Delivery Address
                  </label>

                  <textarea
                    value={address}
                    onChange={(e) =>
                      setAddress(e.target.value)
                    }
                    placeholder="House / Flat, Street, Area, City, State, PIN code"
                    rows={5}
                    className="w-full resize-none rounded-xl border border-gray-200 bg-[#fafafa] px-4 py-3 text-sm leading-6 outline-none transition focus:border-forest focus:bg-white focus:ring-2 focus:ring-forest/10"
                  />
                </div>

              </div>

            </section>

            {/* MOBILE ORDER */}

            <section className="rounded-3xl border border-black/5 bg-white p-5 shadow-sm lg:hidden">

              <div className="flex items-center gap-3">

                <div className="grid h-10 w-10 place-items-center rounded-full bg-[#eef3e8] text-forest">
                  <ShoppingBag size={19} />
                </div>

                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-forest">
                    Step 02
                  </p>

                  <h2 className="serif text-2xl">
                    Your Order
                  </h2>
                </div>

              </div>

              <OrderContent
                loaded={loaded}
                cart={cart}
                total={total}
                itemCount={itemCount}
                updateQuantity={updateQuantity}
                removeItem={removeItem}
                orderOnWhatsApp={orderOnWhatsApp}
              />

            </section>

          </div>

          {/* DESKTOP ORDER */}

          <aside className="hidden lg:block">

            <section className="sticky top-6 rounded-3xl border border-black/5 bg-white p-7 shadow-sm">

              <div className="flex items-center gap-3">

                <div className="grid h-11 w-11 place-items-center rounded-full bg-[#eef3e8] text-forest">
                  <ShoppingBag size={20} />
                </div>

                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-forest">
                    Step 02
                  </p>

                  <h2 className="serif text-2xl">
                    Your Order
                  </h2>
                </div>

              </div>

              <OrderContent
                loaded={loaded}
                cart={cart}
                total={total}
                itemCount={itemCount}
                updateQuantity={updateQuantity}
                removeItem={removeItem}
                orderOnWhatsApp={orderOnWhatsApp}
              />

            </section>

          </aside>

        </div>

      </div>

    </main>
  );
}

/* ORDER COMPONENT */

function OrderContent({
  loaded,
  cart,
  total,
  itemCount,
  updateQuantity,
  removeItem,
  orderOnWhatsApp,
}: {
  loaded: boolean;
  cart: CartItem[];
  total: number;
  itemCount: number;
  updateQuantity: (id: number, change: number) => void;
  removeItem: (id: number) => void;
  orderOnWhatsApp: () => void;
}) {
  if (!loaded) {
    return (
      <div className="py-12 text-center text-sm text-gray-500">
        Loading your order...
      </div>
    );
  }

  if (cart.length === 0) {
    return (
      <div className="py-10 text-center">

        <div className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-[#f8f6ef]">
          <ShoppingBag
            size={25}
            className="text-forest"
          />
        </div>

        <p className="mt-4 text-sm text-gray-500">
          Your cart is empty.
        </p>

        <Link
          href="/"
          className="mt-5 inline-flex rounded-xl bg-forest px-5 py-3 text-sm font-semibold text-white"
        >
          Continue Shopping
        </Link>

      </div>
    );
  }

  return (
    <div className="mt-6">

      {/* ITEMS */}

      <div className="space-y-4">

        {cart.map((item) => (

          <div
            key={item.id}
            className="flex gap-3 border-b border-gray-100 pb-4"
          >

            {/* IMAGE */}

            <div className="flex h-[72px] w-[72px] shrink-0 items-center justify-center rounded-xl bg-[#f8f6ef] p-2">

              <img
                src={item.image}
                alt={item.name}
                className="max-h-full max-w-full object-contain mix-blend-multiply"
              />

            </div>

            {/* INFO */}

            <div className="min-w-0 flex-1">

              <div className="flex justify-between gap-2">

                <div>

                  <h3 className="text-sm font-semibold leading-5">
                    {item.name}
                  </h3>

                  <p className="mt-1 text-xs text-gray-500">
                    {item.size}
                  </p>

                </div>

                <button
                  onClick={() =>
                    removeItem(item.id)
                  }
                  className="grid h-9 w-9 shrink-0 place-items-center rounded-full text-gray-400 transition hover:bg-red-50 hover:text-red-500"
                  aria-label={`Remove ${item.name}`}
                >
                  <Trash2 size={16} />
                </button>

              </div>

              <div className="mt-3 flex items-center justify-between">

                <span className="font-bold">
                  ₹{item.price * item.quantity}
                </span>

                <div className="flex items-center rounded-lg border">

                  <button
                    onClick={() =>
                      updateQuantity(item.id, -1)
                    }
                    className="grid h-9 w-9 place-items-center"
                  >
                    <Minus size={14} />
                  </button>

                  <span className="min-w-6 text-center text-sm font-semibold">
                    {item.quantity}
                  </span>

                  <button
                    onClick={() =>
                      updateQuantity(item.id, 1)
                    }
                    className="grid h-9 w-9 place-items-center"
                  >
                    <Plus size={14} />
                  </button>

                </div>

              </div>

            </div>

          </div>

        ))}

      </div>

      {/* SUMMARY */}

      <div className="mt-6 space-y-3">

        <div className="flex justify-between text-sm text-gray-500">
          <span>Items</span>
          <span>{itemCount}</span>
        </div>

        <div className="flex justify-between text-sm text-gray-500">
          <span>Delivery</span>
          <span>To be confirmed</span>
        </div>

        <div className="border-t border-gray-100 pt-4">

          <div className="flex items-center justify-between">

            <span className="text-base font-semibold">
              Total
            </span>

            <span className="text-2xl font-bold">
              ₹{total}
            </span>

          </div>

        </div>

      </div>

      {/* WHATSAPP */}

      <button
        onClick={orderOnWhatsApp}
        className="mt-6 flex min-h-[52px] w-full items-center justify-center gap-3 rounded-xl bg-[#25D366] px-4 py-3.5 font-semibold text-white shadow-sm transition hover:scale-[1.01] hover:shadow-md"
      >
        <MessageCircle size={21} />
        Order via WhatsApp
      </button>

      <p className="mt-3 text-center text-xs leading-5 text-gray-400">
        Your order details will be sent securely to
        PureRoot WhatsApp for confirmation.
      </p>

    </div>
  );
}
