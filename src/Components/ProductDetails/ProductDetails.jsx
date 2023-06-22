import { useEffect, useState } from "react";
import "./productDetails.css";
import axios from "axios";
function ProductDetails() {
  const [product, setProduct] = useState([]);
  useEffect(() => {
    fetch("http://localhost:9000/jewelryArray/2")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setProduct(data);
      });
  }, []);

  function addToCart() {
    axios.get("http://localhost:9000/Users/1")
    .then(response => {
      const userData = response.data;

      // Update the Cart array
      userData.Cart.push(product);

      // Send the updated user data to the server
      return axios.put("http://localhost:9000/Users/1", userData);
    })
  }
  return (
    <main>
      <section className="productInside">
        <div className="productImage">
          <img src={product.image} alt={product.name} />
        </div>
        <article className="productDetails">
          <h1>{product.name}</h1>
          <p>{product.description}</p>
          <button onClick={() => addToCart()}>Add to card</button>
        </article>
      </section>
    </main>
  );
}
export default ProductDetails;
