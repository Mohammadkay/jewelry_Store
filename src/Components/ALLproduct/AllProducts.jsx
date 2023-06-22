// // <<<<<<< HEAD
// // import React, { useEffect } from "react";

<<<<<<< HEAD
// // export default function AllProducts() {
// //   useEffect(() => {
// //     fetch("http://localhost:9000/jewelryArray")
// //       .then((res) => res.json())
// //       .then((data) => console.log(data));
// //   }, []);
// //   return <div></div>;
// // }
// // =======
// import React, { useEffect, useState } from "react";
// import "./AllProducts.css";
// export default function AllProducts() {
//   const [products, setProduct] = useState([]);
//   useEffect(() => {
//     fetch("http://localhost:9000/jewelryArray")
//       .then((res) => res.json())
//       .then((data) => {
//         console.log(data);
//         setProduct(data);
//       });
//   }, []);

//   return (
//     <section className="cards">
//       {products.map((ele) => {
//         return (
//           <article key={ele.id}>
//             <div>
//               <img src={ele.image} alt={ele.name} />
//             </div>
//             <div>
//               <h1 style={{ fontWeight: "700" }}>{ele.name}</h1>

//               <h1 style={{ fontWeight: "700" }}>{ele.price} JD</h1>
//             </div>
//           </article>
//         );
//       })}
//     </section>
//   );
// }
// // >>>>>>> 8e5910b99bcd9d3d7fcc998e32af8c9b3262807e
=======
  return (
    <section className="cards">
      {products.map((ele) => {
        return (
          <article key={ele.id}>
            <div>
              <img src={ele.image} alt={ele.name} />
            </div>
            <div className="icons">
              <div>
                <i
                  className="fa-sharp fa-solid fa-eye fa-2xl icon"
                  style={{ color: " #0000006e" }}
                ></i>
              </div>
              <div>
                <i
                  className="fa-sharp fa-solid fa-heart fa-2xl icon"
                  style={{ color: "#0000006e" }}
                ></i>
              </div>
            </div>
            <div className="card-details">
              <p
                style={{
                  fontWeight: "700",
                  fontSize: "14px",
                  whiteSpace: "nowrap",
                  overflow: "hidden"
                }}
              >
                {ele.name}
              </p>

              <h1 style={{ whiteSpace: "nowrap", overflow: "hidden" }}>
                {ele.price} JD
              </h1>
            </div>
          </article>
        );
      })}
    </section>
  );
}
>>>>>>> e106d5f25dea0570dbe84ce7d53ab30bfbf3f79d
