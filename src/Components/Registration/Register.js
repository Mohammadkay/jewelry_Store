import { useState } from "react";

function Register() {
  const [userName, setuserName] = useState("");
  const [Email, setEmail] = useState("");
  const [Passowrd, setPassword] = useState("");

  const handleForm = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <div className="ContainerForm">
        <form onSubmit={handleForm}>
          <div className="Register Filed-lable">
            <label htmlFor="userName">userName</label>
            <input type="text" id="userName" />
          </div>
          <div className="Register Filed-lable">
            <label htmlFor="Email">Email</label>
            <input type="email" id="Email" />
          </div>
          <div className="Register Filed-lable">
            <label htmlFor="Password">Password</label>
            <input type="password" id="Password" />
          </div>
          <button type="submit">signUp</button>
        </form>
      </div>
    </>
  );
}

export default Register;
