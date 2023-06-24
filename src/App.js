// import "./App.css";
import AllProducts from "./Components/ALLproduct/AllProducts";
import ProductDetails from "./Components/ProductDetails/ProductDetails";
import Register from "./Components/Registration/Register";
import Checkout from "./Components/Checkout/Checkout";
import { Routes, Route, useParams } from "react-router-dom";
import Login from "./Components/login/Login";
import Landing from "./Components/Landing page/Landing";
import Nav from "./Components/NavBar/Nav";
import Footer from "./Components/Footer/Footer";
import { useEffect } from "react";
import Cart from "./Components/Cart/Cart";

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/:UserId" element={<Landing />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Checkout" element={<Checkout />} />
        <Route path="/:UserId/AllProducts" element={<AllProducts />} />
        <Route path="/AllProducts" element={<AllProducts />} />
        <Route path="/Cart" element={<Cart />} />
        <Route
          path=":UserId/AllProducts/ProductDetails/:productId"
          element={<ProductDetails />}
        />
      </Routes>
      <Footer />
    </>
  );
}
export default App;
