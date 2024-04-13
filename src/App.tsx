import { useEffect } from "react";
import "./App.css";
import { Banner } from "./components/Banner";
import { ComoFunciona } from "./components/ComoFunciona";
import { Footer } from "./components/Footer";
// import { Form } from "./components/Form";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Historia } from "./components/Historias";
import { Membros } from "./components/Membros";
import { Metodologia } from "./components/Metodologia";
import { Sobre } from "./components/Sobre";
import ReactPixel from "react-facebook-pixel";
import ReactGA from "react-ga4";

function App() {
  useEffect(() => {
    ReactPixel.init("530500398633975");
    ReactGA.initialize("G-8LDTKE06NS");
  }, []);
  return (
    <main>
      <Header />
      <Hero />
      <Banner />
      <ComoFunciona />
      <Metodologia />
      <Membros />
      <Historia />
      <Sobre />
      {/* <Form /> */}
      <Footer />
    </main>
  );
}

export default App;
