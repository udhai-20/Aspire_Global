import MainRouter from "./AllRouter/MainRouter";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Page/Home/Home";

function App() {
  return (
    <div>
      <Header />
      <Navbar />
      <MainRouter />
      <Footer />
    </div>
  );
}

export default App;
