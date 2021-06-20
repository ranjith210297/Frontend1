import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import About from "./components/About";
import BootstrapNavbar from "./components/BootstrapNavbar";
import Contact from "./components/Contact";
//import Home from "./components/Home";
import Predictor from "./components/Predictor";
import Footer from "./components/AppFooter";
import Api1 from "./components/Api1";
import PerfectScrollbar from "react-perfect-scrollbar";
import LoginButton from "./components/LoginButton";
import Login from "./components/login";


function App() {
  return (
    <PerfectScrollbar>
    <Router>
      <BootstrapNavbar />
      
      <LoginButton />
      <Route exact path="/Login">
        <Login />
      </Route>
    {/* <Login /> */}
      <Route exact path="/">
        <Predictor />
      </Route>
      <Route path="/Contact" component={Contact} />
      <Route path="/About" component={About} />
      <Route path="/Predictor" component={Predictor} />
    
    {/* < Footer /> */}
    </Router>
    </PerfectScrollbar>
  );
}

export default App;
