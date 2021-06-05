import "./App.css";
import Homepage from "./Components/Homepage/Homepage";
import Header from "./Components/Header/Header";
import Slider2 from "./Components/Slider2/Slider2";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";

// bootstrap link
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
// import Navbar from "./Components/Navbar/Navbar";

export default function App() {
  return (
    <>
      <Header />
      <Slider2 />
      <Homepage />
      <Contact />
      <Footer />
    </>
  );
}
