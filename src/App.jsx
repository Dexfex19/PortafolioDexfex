import styles from "./App.module.css";
import { Navbar } from "./components/Navbar/Navbar";
import { AntiHero } from "./components/AntiHero/AntiHero";
import { About } from "./components/About/About";
import { Skills } from "./components/Skills/Skills";
import { LanguageProvider } from "./Context/LanguageContext";
import { Contact } from "./components/Contact/Contact";
import { Projects } from "./components/Projects/Projects";

function App() {
  return (
    <LanguageProvider>
      <div className={styles.App}>
        <Navbar />
        <AntiHero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </div>
    </LanguageProvider>
  );
}

export default App;
