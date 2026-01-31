import { About } from "./components/home/About";
import { Documents } from "./components/home/Documents";
import { FAQ } from "./components/home/FAQ";
import { Features } from "./components/home/Features";
import { Hero } from "./components/home/Hero";
import { Process } from "./components/home/Process";
import { Services } from "./components/home/Services";
import { Footer } from "./components/layout/Footer";
import { Header } from "./components/layout/Header";

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="pt-20">
        <Hero />
        <About />
        <Services />
        <Features />
        <Documents />
        <Process />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}

export default App;
