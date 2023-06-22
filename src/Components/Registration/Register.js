import { useEffect, useState } from "react";
import "./Register.css";
import { useId } from "react";
import axios from "axios";
function Register() {
  // State with information Registration
  const [username, setuserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [Users, setUsers] = useState([]);

  //GET DATA USERS IN JSON SERVER
  useEffect(() => {
    GetRegistration();
  }, []);

  const GetRegistration = () => {
    axios
      .get("http://localhost:9000/Users/") // Replace the URL with your JSON server endpoint
      .then((response) => {
        setUsers(response.data);
        // Do something with the retrieved data
      });
  };
  // console.log(Users);
  const valid = Users.find((user) => {
    return user.email == email;
  });

  // TO POST DATA on Array of Users in json server
  const PostRegistration = () => {
    axios

      .post("http://localhost:9000/Users", {
        email,
        password,
        username,
        Image: "./",
        IsLogin: false,
        phone: "",
        Address: "",
        History: [],
        Cart: [],
        Favorite: [],
      })
      .then((data) => {});
  };

  // Handle forms in click submit
  const handleForm = (e) => {
    e.preventDefault();
    PostRegistration();

    if (valid) {
      console.log(true);
    } else {
      console.log(false);
    }
    //  get username value in input
  };
  const getUserName = (e) => {
    setuserName(e.target.value);
  };

  //  get Email value in input

  const getEmail = (e) => {
    setEmail(e.target.value);
  };

  //  get Password value in input
  const getPassword = (e) => {
    setPassword(e.target.value);
  };

  return (
    <>
      <div className="ContainerForm">
        <form onSubmit={handleForm}>
          <div className="Register Filed-lable">
            <label htmlFor="userName">userName</label>
            <input
              onChange={getUserName}
              value={username}
              type="text"
              id="userName"
            />
          </div>
          <div className="Register Filed-lable">
            <label htmlFor="Email">Email</label>
            <input onChange={getEmail} value={email} type="text" id="Email" />
          </div>
          <div className="Register Filed-lable">
            <label htmlFor="Password">Password</label>
            <input
              onChange={getPassword}
              value={password}
              type="password"
              id="Password"
            />
          </div>
          <button className="btnSignUp" type="submit">
            signUp
          </button>
        </form>
      </div>
    </>
  );
}
export default Register;
