import "./App.css";
import Creations from "./components/Creations";
import CreationsDesktop from "./components/CreationsDesktop";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Interactive from "./components/Interactive";
import ShowCase from "./components/ShowCase";

function App() {
  return (
    <div className="App">
      <Header />
      <ShowCase />
      <Interactive />
      <Creations />
      <CreationsDesktop />
      <Footer />
    </div>
  );
}

export default App;
