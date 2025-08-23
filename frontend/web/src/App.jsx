import Header from "./components/Header";
import Carousel from "./components/Carousel";
import Footer from "./components/Footer";
import Register from "./components/Register";
import TestConnection from "./components/TestConnection";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./assets/css/style.css";

function App() {
  return (
    <>
      <Header />
      <main>
        <Carousel />
        {/* 👇 aquí pruebas la conexión */}
        <TestConnection />
        <div>
          <Register />
        </div>
      </main>
      <Footer />
    </>
  );
}

export default App;