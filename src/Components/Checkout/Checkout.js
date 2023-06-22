import "./Checkout.css";
function Checkout() {
  return (
    <>
      <div className="ContainerCheckOut">
        <form action="">
          <h3 className="Title">Jewelry-Themeforshop</h3>

          <div className="CheckOut labelField">
            <label htmlFor="">Contact</label>
            <input type="text" />
          </div>
          <div className="CheckOut labelField">
            <label htmlFor="">Shipping address</label>
            <select>
              <option value="">1</option>
              <option value="">2</option>
              <option value="">3</option>
              <option value="">4</option>
              <option value="">5</option>
              <option value="">6</option>
              <option value="">7</option>
              <option value="">8</option>
              <option value="">9</option>
              <option value="">10</option>
            </select>
          </div>
          <input type="text" placeholder="Address" />
          <div className="firstNameLast">
            <input type="text" placeholder="First name" />
            <input type="text" placeholder="Last name" />
          </div>
          <input type="text" placeholder="Address" />
          <input type="text" placeholder="phone" />

          <button>Continue in shipinig</button>
        </form>
      </div>
    </>
  );
}

export default Checkout;
