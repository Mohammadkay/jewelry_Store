import { useEffect, useState } from "react";

function ProductDetails() {
  const [Product, setProduct] = useState();
  useEffect(() => {
    fetch("http://localhost:9000/jewelryArray/2")
      .then((res) => res.json())
      .then((data) => setProduct(data));
  });
  console.log(Product);
  return <></>;
}
