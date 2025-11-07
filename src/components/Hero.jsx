import { Milk } from "lucide-react";

function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-100 via-white to-emerald-100" />
      <div className="relative mx-auto max-w-6xl px-6 py-20">
        <div className="flex flex-col-reverse items-center gap-10 md:flex-row">
          <div className="w-full md:w-1/2">
            <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
              Milk: Nature's Original Superdrink
            </h1>
            <p className="mt-4 text-lg text-slate-600">
              Packed with protein, calcium, and essential vitamins—milk powers
              your day from breakfast to bedtime.
            </p>
            <div className="mt-8 flex items-center gap-4">
              <a
                href="#recipes"
                className="rounded-lg bg-blue-600 px-5 py-3 text-white shadow hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
              >
                Try easy milk recipes
              </a>
              <a
                href="#nutrition"
                className="rounded-lg border border-slate-300 px-5 py-3 text-slate-700 hover:bg-white/60"
              >
                See nutrition facts
              </a>
            </div>
            <p className="mt-6 text-sm text-slate-500">
              Tip: Swap milk types (whole, 2%, skim, or plant-based) to fit your
              goals and taste.
            </p>
          </div>
          <div className="w-full md:w-1/2">
            <div className="mx-auto grid h-64 w-64 place-items-center rounded-3xl bg-white shadow-xl ring-1 ring-black/5 sm:h-80 sm:w-80">
              <Milk className="h-24 w-24 text-blue-600" />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-white/0 via-white/30 to-white/0" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
