// src/App.tsx
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Services from "./sections/Services";
import Products from "./sections/Products";
import Technology from "./sections/Technology";
import Team from "./sections/Team";
import Vision from "./sections/Vision";
import Contact from "./sections/Contact";

function App() {
  return (
    <div className="min-h-screen bg-ink text-text">
      <Navbar />

      <main>
        <Hero />
        <About />
        <Services />
        <Products />
        <Technology />
        <Team />
        <Vision />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default App;