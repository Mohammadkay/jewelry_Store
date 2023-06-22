import { useEffect, useState } from "react";
import "./productDetails.css";
function ProductDetails() {
  const [product, setProduct] = useState([]);
  useEffect(() => {
    fetch("http://localhost:9000/jewelryArray/1")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setProduct(data);
      });
  }, []);

  return (
    <main>
      <section className="productInside">
        <div className="productImage">
          <img src={product.image} alt={product.name} />
        </div>
        <article className="productDetails">
          <h1>{product.name}</h1>
        </article>
      </section>
    </main>
  );
}
export default ProductDetails;
