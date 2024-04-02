import "./App.css";
import { Banner } from "./components/Banner";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";

function App() {
  return (
    <main>
      <Header />
      <Hero />
      <Banner />
      <Footer />
    </main>
  );
}

export default App;
