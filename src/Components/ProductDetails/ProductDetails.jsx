import { useEffect, useState } from "react";
import "./productDetails.css";
import axios from "axios";
function ProductDetails() {
  const [product, setProduct] = useState([]);
  const [price, setPrice] = useState();
  const [user, setUser] = useState();

  useEffect(() => {
    fetch("http://localhost:9000/jewelryArray/7")
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
        setPrice(data.price);
      });
  }, []);

  async function addToCart() {
    axios.get("http://localhost:9000/Users/1").then((response) => {
      const userData = response.data;
      let index = userData.Cart.findIndex((e) => e.id === product.id);
      if (index !== -1) {
        const existingProduct = userData.Cart[index];
        setProduct((prevProduct) => ({
          ...prevProduct,
          quantity: prevProduct.quantity + existingProduct.quantity,
          price: prevProduct.price + existingProduct.price
        }));
        userData.Cart[index] = product;
        console.log(product);
      } else {
        userData.Cart.push(product);
      }

      // Send the updated user data to the server
      axios
        .put("http://localhost:9000/Users/1", userData)
        .then(() => {
          // Product details updated successfully
          console.log("Product details updated.");
        })
        .catch((error) => {
          // Handle error if the update fails
          console.error("Error updating product details:", error);
        });
    });
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
