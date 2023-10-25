import "./app.scss";
import NavBar from "./components/navbar/NavBar";
import Hero from "./components/hero/Hero";

const App = () => {
  return (
    <div>
      <section id="Homepage">
        <NavBar />
        <Hero />
      </section>
      <section id="Services">Parallax</section>
      <section>Services</section>
      <section id="Portfolio">Portfolio</section>
      <section>Portfolio</section>
      <section>Portfolio</section>
      <section id="Contact">Contact</section>
    </div>
  );
};

export default App;
