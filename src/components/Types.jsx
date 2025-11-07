import { Droplet, Bean, Snowflake, Sparkles } from "lucide-react";

function Types() {
  const types = [
    {
      icon: Droplet,
      name: "Dairy",
      desc: "Whole, 2%, skim, and lactose-free. Creamy, classic, and naturally rich in protein.",
      tag: "Cow's milk",
    },
    {
      icon: Bean,
      name: "Plant-based",
      desc: "Almond, oat, soy, coconut, pea—choose your favorite taste and texture.",
      tag: "Alternatives",
    },
    {
      icon: Snowflake,
      name: "Ultra-filtered",
      desc: "Higher protein, lower sugar options created through gentle filtration.",
      tag: "UF",
    },
    {
      icon: Sparkles,
      name: "Flavored",
      desc: "Chocolate, strawberry, vanilla—great for treats or post-workout recovery.",
      tag: "Fun",
    },
  ];

  return (
    <section className="mx-auto max-w-6xl px-6 py-16">
      <div className="flex items-end justify-between gap-6">
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Types of milk
          </h2>
          <p className="mt-2 text-slate-600">
            There's a style for everyone. Explore textures, flavors, and nutrition.
          </p>
        </div>
      </div>

      <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {types.map(({ icon: Icon, name, desc, tag }) => (
          <div key={name} className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
            <div className="flex items-center gap-3">
              <span className="grid h-10 w-10 place-items-center rounded-full bg-emerald-50 text-emerald-600">
                <Icon className="h-5 w-5" />
              </span>
              <div>
                <div className="text-xs font-medium uppercase tracking-wide text-emerald-600">{tag}</div>
                <h3 className="text-lg font-semibold text-slate-900">{name}</h3>
              </div>
            </div>
            <p className="mt-3 text-sm leading-relaxed text-slate-600">{desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Types;
