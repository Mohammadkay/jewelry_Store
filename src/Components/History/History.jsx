import React from 'react'
import './History.css'
function History() {
  return (
    <div>
  

 
    <div className="container">
      <h1 className="mb-4">Order History</h1>
      <table className="table">
        <thead className="thead-dark">
          <tr>
           
            <th scope="col">Product</th>
            <th scope="col">Quantity</th>
            <th scope="col">Price</th>
            <th scope="col">Date</th>
          </tr>
        </thead>
        <tbody>
          {/* {orders.map(order => (
            
              <th scope="row">{order.orderId}</th>
              <td>{order.product}</td>
              <td>{order.quantity}</td>
              <td>${order.price.toFixed(2)}</td>
            </tr>
          ))} */}
        </tbody>
      </table>
    </div>
  
{/* }; */}
    </div>
  );
}

export default History
