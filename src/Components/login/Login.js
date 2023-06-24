import { useEffect, useState } from "react";
import axios from "axios";
import "../Registration/Register.css";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigation = useNavigate();
  const [Users, setUsers] = useState([]);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [erorr, setErorr] = useState("");

  useEffect(() => {
    GetRegistration();
  }, []);

  // get data in sever json
  const GetRegistration = () => {
    axios
      .get("http://localhost:9000/Users/") // Replace the URL with your JSON server endpoint
      .then((response) => {
        setUsers(response.data);
        // Do something with the retrieved data
      });
  };
  // return the first user found
  const valid = Users.find((user) => {
    return user.email == email;
  });

  // get Email Value
  const getEmail = (event) => {
    setEmail(event.target.value);
  };

  // get password Value
  const getPassword = (e) => {
    setPassword(e.target.value);
    // console.log(password);
  };

  const FormHandle = (event) => {
    event.preventDefault();
    ValidationLogin();
  };

  // Validation
  const ValidationLogin = () => {
    if (valid) {
      if (valid.password === password) {
        console.log("success");
        setErorr("");
        navigation("/Checkout");
        // window.location.replace("https://www.google.com")
        axios
          .put(`http://localhost:9000/Users/${valid.id}`, {
            ...valid,
            IsLogin: true,
          })
          .then((response) => {
            console.log(response);
          })
          .catch((error) => {
            console.log(error);
          });

        // const EditValue = Users.map((element) => {
        //   if (element.id === valid.id) {
        //     return { ...element, IsLogin: true };
        //   }
        //   return element;
        // });

        // axios
        //   .put("http://localhost:9000/", {
        //     Users: EditValue,
        //   })
        //   .then((response) => {
        //     console.log(response);
        //   })
        //   .catch((error) => {
        //     console.log(error);
        //   });

        // // Update the Users array or trigger a state update with EditValue
      } else {
        setErorr("• Password or email is not correct");
      }
    } else {
      setErorr("• Password or email is not correct");
    }
  };

  // console.log(Users);
  return (
    <>
      <div className="containerr">
        <h4>Login</h4>
        <h6>Customer Login</h6>
        <div className="erorrs">{erorr && <p>{erorr}</p>}</div>

        <form onSubmit={FormHandle}>
          <label>Email</label>
          <input type="text" onChange={getEmail} />
          <label>Password</label>
          <input type="password" onChange={getPassword} />
          <span>
            <b>Forget Passowrd ?</b>
          </span>
          <button type="submit">Sign in</button>
        </form>
      </div>
    </>
  );
}

export default Login;
