import Hero from "./components/Hero";
import Nutrition from "./components/Nutrition";
import Types from "./components/Types";
import Recipes from "./components/Recipes";

function App() {
  return (
    <div id="top" className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-emerald-50 text-slate-800">
      <header className="sticky top-0 z-20 border-b border-slate-200 bg-white/70 backdrop-blur supports-[backdrop-filter]:bg-white/50">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a href="#top" className="text-lg font-semibold tracking-tight">Milk</a>
          <nav className="flex items-center gap-6 text-sm">
            <a className="text-slate-600 hover:text-slate-900" href="#nutrition">Nutrition</a>
            <a className="text-slate-600 hover:text-slate-900" href="#recipes">Recipes</a>
          </nav>
        </div>
      </header>

      <main>
        <Hero />
        <Nutrition />
        <Types />
        <Recipes />
      </main>

      <footer className="border-t border-slate-200 bg-white/60">
        <div className="mx-auto max-w-6xl px-6 py-10 text-sm text-slate-600">
          © {new Date().getFullYear()} Milk microsite. Built for fun and learning.
        </div>
      </footer>
    </div>
  );
}

export default App;
