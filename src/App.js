import "./App.css";
import Backtotop from "./components/Backtotop";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Preloader from "./components/Preloader";
import Section1 from "./components/Section1";
import Section2 from "./components/Section2";
import Section3 from "./components/Section3";
import Section4 from "./components/Section4";
import Section5 from "./components/Section5";

function App() {
  return (
    <div>
      <Preloader />
      <Backtotop/>
      <Header />
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
      <Footer/>
    </div>
  );
}

export default App;
