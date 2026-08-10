export default function Hero() {
  return (
    <section className="hero-grid">
      <div className="container-wide grid min-h-[490px] items-center gap-10 py-14 lg:grid-cols-2">
        <div>
          <p className="mb-4 text-sm font-semibold uppercase tracking-[.22em] text-forest">From our kitchen to yours</p>
          <h1 className="serif max-w-xl text-5xl leading-[1.05] md:text-7xl">
            Pure Goodness.<br />
            Rooted in <span className="text-forest">Nature.</span>
          </h1>
          <p className="mt-6 max-w-lg text-lg leading-8 text-gray-600">
            100% natural ghee, traditional karam powders and everyday essentials made with care.
          </p>
          <a href="#shop" className="mt-8 inline-flex rounded-full bg-forest px-8 py-4 font-semibold text-white shadow-lg shadow-forest/20">
            Shop Now
          </a>

          <div className="mt-10 grid max-w-xl grid-cols-3 gap-3 border-t pt-7">
            <div><div className="font-semibold">100% Natural</div><div className="text-xs text-gray-500">No additives</div></div>
            <div><div className="font-semibold">Made with Love</div><div className="text-xs text-gray-500">Traditional process</div></div>
            <div><div className="font-semibold">Premium Quality</div><div className="text-xs text-gray-500">Carefully packed</div></div>
          </div>
        </div>

        <div className="relative min-h-[360px]">
          <div className="absolute left-4 top-14 h-72 w-72 rounded-full bg-[#e5ead8]" />
          <div className="absolute right-0 top-5 w-[78%] rotate-[-2deg] rounded-[40px] bg-[#e7dcc0] p-5 shadow-2xl">
            <div className="flex items-end justify-center gap-5">
              <div className="h-72 w-48 rounded-[28px] border-8 border-[#d4ad48] bg-[#f3c923] p-5 shadow-xl">
                <div className="rounded-xl bg-forest p-4 text-center text-white">
                  <div className="serif text-xl">PureRoot</div>
                  <div className="mt-5 text-xs tracking-widest">COW GHEE</div>
                  <div className="mt-3 text-[10px]">500 ML</div>
                </div>
              </div>
              <div className="mb-4 h-56 w-40 rounded-[24px] border-8 border-[#b9954b] bg-[#7d2f16] p-4 shadow-xl">
                <div className="rounded-xl bg-[#f5ead6] p-4 text-center">
                  <div className="serif text-lg text-forest">PureRoot</div>
                  <div className="mt-5 text-xs font-bold">KARAM PODI</div>
                  <div className="mt-2 text-[10px]">200 G</div>
                </div>
              </div>
            </div>
            <div className="mt-4 text-center text-sm font-medium text-forest">Traditional • Natural • Fresh</div>
          </div>
        </div>
      </div>
    </section>
  );
}
