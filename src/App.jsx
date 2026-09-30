import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TechCard from "./components/TechCard";
import YourStack from "./components/YourStack";
import Footer from "./components/Footer";

export default function App() {
  const [technologies, setTechnologies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [stack, setStack] = useState([]);

  useEffect(() => {
    fetch("/technologies.json")
      .then((res) => res.json())
      .then((data) => setTechnologies(data))
      .catch(() => toast.error("Could not load technologies. Refresh to try again."))
      .finally(() => setLoading(false));
  }, []);

  const handleAdd = (tech) => {
    if (stack.some((item) => item.id === tech.id)) {
      toast.warn(`${tech.name} is already in your stack`);
      return;
    }
    setStack([...stack, tech]);
    toast.success(`${tech.name} added to your stack`);
  };

  const handleRemove = (id) => {
    const tech = stack.find((item) => item.id === id);
    setStack(stack.filter((item) => item.id !== id));
    toast.info(`${tech.name} removed from your stack`);
  };

  const handleRemoveAll = () => {
    setStack([]);
    toast.info("Your stack is now empty");
  };

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <section id="technologies" className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
          <h2 className="text-3xl font-extrabold sm:text-4xl">
            Explore the <span className="text-brand">Technologies</span>
          </h2>
          <p className="mt-2 text-sm text-slate-500">Add the technologies you want to your stack.</p>

          {loading ? (
            <div className="flex items-center justify-center gap-3 py-24 text-slate-500">
              <span className="loading loading-spinner loading-lg text-pink-600"></span>
              <span>Loading technologies...</span>
            </div>
          ) : (
            <div className="mt-8 grid items-start gap-6 lg:grid-cols-[1fr_280px]">
              <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
                {technologies.map((tech) => (
                  <TechCard key={tech.id} tech={tech} onAdd={handleAdd} />
                ))}
              </div>
              <YourStack stack={stack} onRemove={handleRemove} onRemoveAll={handleRemoveAll} />
            </div>
          )}
        </section>
      </main>
      <Footer />
      <ToastContainer position="top-right" autoClose={2200} />
    </>
  );
}