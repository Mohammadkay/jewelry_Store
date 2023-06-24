import { useEffect, useState } from "react";
import "./productDetails.css";
import axios from "axios";
function ProductDetails() {
  const [product, setProduct] = useState([]);
  const [price, setPrice] = useState("");
  const [user, setUser] = useState("");
  const [cart, setCart] = useState([]);

  useEffect(() => {
    GetProduct();
    Getusers();
    Getcart();
  }, []);

  const GetProduct = () => {
    fetch("http://localhost:9000/jewelryArray/8")
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
        setPrice(data.price);
      });
  };

  const Getusers = () => {
    fetch("http://localhost:9000/Users/1")
      .then((res) => res.json())
      .then((data) => {
        setUser(data);
      });
  };
  const Getcart = () => {
    fetch("http://localhost:9000/Users/1")
      .then((res) => res.json())
      .then((data) => {
        setCart(data.Cart);
      });
  };
  const UpdateUser = () => {
    const index = cart.findIndex((e) => e.id === product.id);
    if (index === -1) {
      const updatedCart = [...cart, product];
      setCart(updatedCart);
      axios.put("http://localhost:9000/Users/1", {
        ...user,
        Cart: updatedCart
      });
    } else {
      console.log(cart);
      const updatedCart = cart.map((e) => {
        if (e.id === product.id) {
          return {
            ...e,
            quantity: e.quantity + product.quantity,
            price: e.price + product.price
          };
        }
        return e;
      });
      setCart(updatedCart);
      axios.put("http://localhost:9000/Users/1", {
        ...user,
        Cart: updatedCart
      });
    }
  };

  function addToCart() {
    UpdateUser();
  }

  function incrementQuantity() {
    setProduct((prevProduct) => ({
      ...prevProduct,
      quantity: prevProduct.quantity + 1,
      price: price * (prevProduct.quantity + 1)
    }));
  }

  function decrementQuantity() {
    if (product.quantity > 1) {
      setProduct((prevProduct) => ({
        ...prevProduct,
        quantity: prevProduct.quantity - 1,
        price: price * (prevProduct.quantity - 1)
      }));
    }
  }

  return (
    <main>
      <section className="productInside">
        <article className="productDetails">
          <h1>{product.name}</h1>
          <p>{product.description}</p>
          <div className="product-price-quantity">
            <div className="quantity">
              <h1>Quantity:</h1>
              <button onClick={() => incrementQuantity()}>+</button>
              <h1>{product.quantity}</h1>
              <button
                onClick={() => {
                  decrementQuantity();
                }}
              >
                -
              </button>
            </div>
            <div className="price">
              <h1>Total price: {product.price} JD</h1>
            </div>
          </div>

          <button onClick={() => addToCart()}>Add to card</button>
        </article>
        <div className="productImage">
          <img src={product.image} alt={product.name} />
        </div>
      </section>
    </main>
  );
}

export default ProductDetails;
