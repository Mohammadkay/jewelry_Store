import React, { useEffect, useState } from "react";
import "./AllProducts.css";
export default function AllProducts() {
  const [products, setProduct] = useState([]);
  useEffect(() => {
    fetch("http://localhost:9000/jewelryArray")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setProduct(data);
      });
  }, []);

  return (
    <section className="cards">
      {products.map((ele) => {
        return (
          <article key={ele.id}>
            <div>
              <img src={ele.image} alt={ele.name} />
            </div>
            <div>
              <h1 style={{ fontWeight: "700" }}>{ele.name}</h1>
           
              <h1 style={{ fontWeight: "700" }}>{ele.price} JD</h1>
            </div>
          </article>
        );
      })}
    </section>
  );
}
