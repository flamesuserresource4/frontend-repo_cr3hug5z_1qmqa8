import { Leaf, Shield, Bone, Droplets } from "lucide-react";

function Nutrition() {
  const cards = [
    {
      icon: Droplets,
      title: "Hydration",
      text: "Milk is ~87% water, making it a surprisingly hydrating snack with nutrients attached.",
    },
    {
      icon: Bone,
      title: "Calcium + D",
      text: "Supports strong bones and teeth. Fortified options add vitamin D to boost absorption.",
    },
    {
      icon: Leaf,
      title: "Protein",
      text: "8g high-quality protein per cup helps muscle recovery and keeps you fuller longer.",
    },
    {
      icon: Shield,
      title: "Micronutrients",
      text: "Rich in B12, potassium, phosphorus, and more for all-around wellness.",
    },
  ];

  return (
    <section id="nutrition" className="mx-auto max-w-6xl px-6 py-16">
      <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
        Nutrition at a glance
      </h2>
      <p className="mt-2 text-slate-600">
        A single 8oz serving delivers balanced carbs, fats, and protein with essential minerals.
      </p>

      <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {cards.map(({ icon: Icon, title, text }) => (
          <div
            key={title}
            className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 hover:shadow-md transition-shadow"
          >
            <div className="flex items-center gap-3">
              <span className="grid h-10 w-10 place-items-center rounded-full bg-blue-50 text-blue-600">
                <Icon className="h-5 w-5" />
              </span>
              <h3 className="text-lg font-semibold text-slate-900">{title}</h3>
            </div>
            <p className="mt-3 text-sm leading-relaxed text-slate-600">{text}</p>
          </div>
        ))}
      </div>

      <div className="mt-8 rounded-xl border border-slate-200 bg-slate-50 p-5 text-sm text-slate-600">
        Note: Nutrition varies by type (whole, 2%, skim, lactose-free, or plant-based). Always check the label.
      </div>
    </section>
  );
}

export default Nutrition;
