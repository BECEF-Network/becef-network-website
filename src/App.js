import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Header from "./Components/Header/Header";
import ContactPage from "./pages/Contact/Contactpage";
import HomePage from "./pages/Homepage/Homepage";

export default function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/contact" component={ContactPage} />
      </Switch>
    </Router>
  );
}
