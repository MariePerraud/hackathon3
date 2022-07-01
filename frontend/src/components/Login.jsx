import React from "react";
import { Link } from "react-router-dom";
import "./Login.css";
// import axios from "axios";
// import swal from "sweetalert";
import logo from "../assets/logo-apside-bleu.png";

export default function Login() {
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   if (!email || !password) {
  //     swal({
  //       title: "Error!",
  //       text: "Please specify email and password",
  //       icon: "error",
  //       confirmButtonText: "Done !",
  //     });
  //   } else {
  //     axios
  //       .post(
  //         `${import.meta.env.VITE_BACKEND_URL}/users/login`,
  //         { email, password },
  //         { withCredentials: true }
  //       )
  //       // eslint-disable-next-line no-restricted-syntax
  //       .then((response) => console.log(response.data))
  //       .catch((err) => {
  //         // alert(err.response.data.error);
  //         console.error(err);
  //       });
  //   }
  // };

  return (
    <>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <img
          src={logo}
          alt="logo"
          style={{
            width: "20vw",
            margin: "5vh 0 5vh 0",
          }}
        />
      </div>
      <div className="login">
        <div className="log-title">
          <form className="form-login">
            <input
              className="inputLogEmail"
              type="text"
              name="email"
              id="email"
              placeholder="nancy.goldin@apside.com"
              // value={email}
              // onChange={(e) => setEmail(e.target.value)}
            />
            <input
              className="inputLogPassword"
              type="password"
              name="password"
              id="password"
              placeholder="Mot de passe"
              // value={password}
              // onChange={(e) => setPassword(e.target.value)}
            />
            <Link to="/home">
              <button
                className="logbutton"
                type="submit"
                // onClick={handleSubmit}
              >
                LOG IN
              </button>
            </Link>
          </form>
        </div>
      </div>
    </>
  );
}
