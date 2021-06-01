import "./App.css";
import Homepage from "./Components/Homepage/Homepage";
import Navbar from "./Components/Navbar/Navbar";
import Contact from './Components/Contact/Contact'

export default function App() {
  return (
    <>
      <Navbar />
      <Homepage/>
      <Contact/>
    </>
  );
}