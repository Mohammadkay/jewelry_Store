import { useEffect, useState } from "react";
import axios from "axios";
import "../Registration/Register.css";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigation = useNavigate();
  const [Users, setUsers] = useState([]);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    GetRegistration();

    // Event listener for window close
   
  }, []);

  // get data from server
  const GetRegistration = () => {
    axios
      .get("http://localhost:9000/Users/") // Replace the URL with your JSON server endpoint
      .then((response) => {
        setUsers(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const getEmail = (event) => {
    setEmail(event.target.value);
  };

  const getPassword = (e) => {
    setPassword(e.target.value);
  };

  const FormHandle = (event) => {
    event.preventDefault();
    ValidationLogin();
  };

  const ValidationLogin = () => {
    const valid = Users.find((user) => user.email === email);

    if (valid) {
      if (valid.password === password) {
        setError("");
        navigation(`/${valid.id}`);

        axios
          .put(`http://localhost:9000/Users/${valid.id}`, {
            ...valid,
            IsLogin: true
          })
          .then((response) => {
            console.log(response);
          })
          .catch((error) => {
            console.log(error);
          });
      } else {
        setError("• Password or email is not correct");
      }
    } else {
      setError("• Password or email is not correct");
    }
  };

  return (
    <>
      <div className="containerr">
        <h4>Login</h4>
        <h6>Customer Login</h6>
        <div className="errors">{error && <p>{error}</p>}</div>

        <form onSubmit={FormHandle}>
          <label>Email</label>
          <input type="text" onChange={getEmail} />
          <label>Password</label>
          <input type="password" onChange={getPassword} />
          <span>
            <b>Forget Password ?</b>
          </span>

          <button type="submit">Sign in</button>
        </form>
      </div>
    </>
  );
}

export default Login;
