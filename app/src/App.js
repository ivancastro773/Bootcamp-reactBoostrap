import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav/Nav';
import About from './components/About/About';
import Services from './components/Services/Services';
import Portfolio from './components/Portfolio/Portfolio';
import Call from './components/Call/Call';
import Contact from './components/Contact/Contact';
import { Footer } from './components/Footer/Footer';

function App() {
  return (
    <>
    <Nav/>
    <About/>
    <Services/>
    <Portfolio/>
    <Call/>
    <Contact/>
    <Footer/>
    </>
  );
}

export default App;
