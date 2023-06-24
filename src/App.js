// import "./App.css";
import AllProducts from "./Components/ALLproduct/AllProducts";
import Register from "./Components/Registration/Register";
import Checkout from "./Components/Checkout/Checkout";
import { Routes, Route } from "react-router-dom";
import Login from "./Components/login/Login";
import Landing from "./Components/Landing page/Landing";
import Nav from "./Components/NavBar/Nav";
import Footer from "./Components/Footer/Footer";
function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/AllProducts" element={<AllProducts />} />
        <Route path="/Checkout" element={<Checkout />} />
      </Routes>
      <Footer />
    </>
  );
}
export default App;