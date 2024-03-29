import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Register.css";
import axios from "axios";
import swal from "sweetalert";
import NavBar from "./NavBar";

function Register() {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [office, setOffice] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const role = "ROLE_USER";

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!firstname || !lastname || !office || !email || !password) {
      swal({
        title: "Error!",
        text: "Please specifie all informations",
        icon: "error",
        confirmButtonText: "Thanks !",
      });
    } else {
      axios
        .post(
          `${import.meta.env.VITE_BACKEND_URL}/users/register`,
          { firstname, lastname, office, email, password, role },
          { withCredentials: true }
        )
        // eslint-disable-next-line no-restricted-syntax
        .then((response) => console.log(response.data))
        .catch((err) => {
          // eslint-disable-next-line no-alert
          alert(err.response.data.error);
        });
    }
  };

  return (
    <>
      <NavBar />
      <div className="register">
        <div className="register-title">
          <h2>Subscribe !</h2>
          <form className="form-register" onSubmit={handleSubmit}>
            <input
              className="inputFirstname"
              type="firstname"
              name="firstname"
              id="firstname"
              placeholder="Nancy"
              value={firstname}
              onChange={(e) => setFirstname(e.target.value)}
            />
            <input
              className="inputLastname"
              type="lastname"
              name="lastname"
              id="lastname"
              placeholder="Goldin"
              value={lastname}
              onChange={(e) => setLastname(e.target.value)}
            />
            <input
              className="inputOffice"
              type="office"
              name="office"
              id="office"
              placeholder="Bruxelle"
              value={office}
              onChange={(e) => setOffice(e.target.value)}
            />
            <input
              className="inputEmail"
              type="email"
              name="email"
              id="email"
              placeholder="nancy.goldin@apside.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              className="inputPassword"
              type="password"
              name="password"
              id="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Link to="/home">
              <button
                className="loginbutton"
                type="submit"
                onClick={handleSubmit}
              >
                SUBMIT
              </button>
            </Link>
          </form>
        </div>
      </div>
    </>
  );
}
export default Register;
