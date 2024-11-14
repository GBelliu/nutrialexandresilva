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
import TagManager from "react-gtm-module";

function App() {
  useEffect(() => {
    // Inicializa o Facebook Pixel
    ReactPixel.init("898048755761591");

    // Inicializa o Google Tag Manager
    const tagManagerArgs = {
      gtmId: "GTM-MJFXW5RD" // Substitua pelo seu ID GTM real
    };
    TagManager.initialize(tagManagerArgs);


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

