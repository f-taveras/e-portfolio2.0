import { useNasaBackground } from "./hooks/useNasaBackground";
import Hero from "./components/Hero";
import TechStack from "./components/TechStack";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import NasaBanner from "./components/NasaBanner";

function App() {
  const { backgroundUrl, apodData, isLoading } = useNasaBackground();

  return (
    <div className="min-h-screen bg-black text-white relative">
      {!isLoading && backgroundUrl && (
        <>
          <div
            className="fixed inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${backgroundUrl})` }}
          />
          <div className="fixed inset-0 bg-gradient-to-b from-black/80 via-black/70 to-black/90" />
        </>
      )}
      <div className="relative z-10">
        <Hero />
        <TechStack />
        <Projects />
        <Experience />
        <Contact />
        <Footer />
      </div>
      {!isLoading && apodData && (
        <NasaBanner title={apodData.title} explanation={apodData.explanation} />
      )}
    </div>
  );
}

export default App;
