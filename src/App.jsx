import Home from "./pages/Home";
import About from "./pages/About";
import Program from "./pages/Program";
import Locations from "./pages/Locations";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./App.css";
import Curators from "./pages/Curators";
import Contact from "./pages/Contact";

const App = () => {
  return (
    <div className="app">
      <Header />
      <div id="home"><Home /></div>
      <div id="about"><About /></div>
      <div id="creator"><Curators /></div>
      <div id="program"><Program /></div>
      <div id="locations"><Locations /></div>
      <div id="contact"><Contact /></div>
      <Footer />
    </div>
  );
};

export default App;
