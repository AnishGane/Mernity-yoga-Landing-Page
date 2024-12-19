import "./App.css";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import Card from "./components/Card";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <div className="mx-8 md:mx-[8%]">
        <Navbar />
        <Header />
        <Card />
        <Banner />
        <Footer />
      </div>
    </>
  );
}

export default App;
