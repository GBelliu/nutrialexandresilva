import "./App.css";
import { Banner } from "./components/Banner";
import { ComoFunciona } from "./components/ComoFunciona";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Historia } from "./components/Historias";
import { Membros } from "./components/Membros";
import { Metodologia } from "./components/Metodologia";

function App() {
  return (
    <main>
      <Header />
      <Hero />
      <Banner />
      <ComoFunciona />
      <Metodologia />
      <Membros />
      <Historia />
      <Footer />
    </main>
  );
}

export default App;
