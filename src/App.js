import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import About from "./Components/Main/About";
import Contacts from "./Components/Main/Contact";
import Trucks from "./Components/Main/Trucks";
import Welcome from "./Components/Main/Welcome";

import "./style.css";

function App() {
  return (
    <div className="App">
      <Header />
      <main className="main">
        <Welcome />
        <About />
        <Trucks />
        <Contacts />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
