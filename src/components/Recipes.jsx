import { Flame, Timer, Utensils } from "lucide-react";

function Recipes() {
  const recipes = [
    {
      icon: Utensils,
      title: "Creamy Overnight Oats",
      time: "5 min prep",
      steps: [
        "1/2 cup oats + 1/2 cup milk",
        "Add chia, honey, and berries",
        "Chill overnight — done!",
      ],
    },
    {
      icon: Flame,
      title: "Golden Turmeric Latte",
      time: "8 min",
      steps: [
        "Warm milk with turmeric + cinnamon",
        "Sweeten with maple",
        "Whisk until frothy",
      ],
    },
    {
      icon: Timer,
      title: "2-Ingredient Popsicles",
      time: "3 hrs freeze",
      steps: [
        "Blend milk with fruit",
        "Pour into molds",
        "Freeze and enjoy",
      ],
    },
  ];

  return (
    <section id="recipes" className="mx-auto max-w-6xl px-6 py-16">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
          Easy milk recipes
        </h2>
        <a href="#top" className="text-sm font-medium text-blue-600 hover:underline">
          Back to top
        </a>
      </div>

      <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3">
        {recipes.map(({ icon: Icon, title, time, steps }) => (
          <div key={title} className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
            <div className="flex items-center gap-3">
              <span className="grid h-10 w-10 place-items-center rounded-full bg-pink-50 text-pink-600">
                <Icon className="h-5 w-5" />
              </span>
              <div>
                <h3 className="text-lg font-semibold text-slate-900">{title}</h3>
                <p className="text-xs text-slate-500">{time}</p>
              </div>
            </div>
            <ul className="mt-4 space-y-2 text-sm text-slate-600">
              {steps.map((s) => (
                <li key={s} className="flex items-start gap-2">
                  <span className="mt-1 inline-block h-1.5 w-1.5 flex-none rounded-full bg-slate-300" />
                  <span>{s}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Recipes;
