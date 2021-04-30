import React, { useEffect, useState } from "react";
import { Container } from "reactstrap";
import Page from "./Page"; // es6 modules
// import { authApi } from "../api";

function SignUp(props) {
  const [state, setState] = useState({
    fullName: "",
    userName: "",
    email: "",
    password: "",
  });

  const handleChange = e => {
    const { name, value } = e.target;
    setState(prevState => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    // api post with state values.
    //   authApi
    //     .post("/signup", state)
    //     .then(res => {
    //       console.log(res.status);
    //       console.log(res.data);
    //       addToast({
    //         type: "warning",
    //         message: "Succesful registration.",
    //       }).then();
    //     })

    //     .catch(err => {
    //       if (err.response) {
    //         // The erquest was made and server responses with a status code of 4.., 5..
    //         console.error(err.response.status, err.response.data);
    //       } else if (err.request) {
    //         // The reqeust was made but no response received
    //         console.error("Didn't get a response from server.");
    //       } else {
    //         // Coudn't send a request.
    //       }
    //     });

    //   setState({
    //     fullName: "",
    //     userName: "",
    //     email: "",
    //     password: "",
    //   });
  };

  return (
    //Later change div to page

    <Page title="Sign Up" className="SignUpPage">
      <Container className="SignUpContainer">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Full Name"
            onChange={handleChange}
            name="fullName"
            value={state.fullName}
            className="form-control form-group"
            required
          />
          <input
            type="text"
            placeholder="Username"
            onChange={handleChange}
            name="userName"
            value={state.userName}
            className="form-control form-group"
            required
          />
          <input
            type="email"
            placeholder="E-mail"
            onChange={handleChange}
            value={state.email}
            name="email"
            className="form-control form-group"
            required
          />
          <input
            type="password"
            placeholder="Password"
            onChange={handleChange}
            name="password"
            value={state.password}
            className="form-control form-group"
            required
          />
          <input
            type="submit"
            className="btn btn-danger btn-block"
            value="Submit"
          />
        </form>
      </Container>
    </Page>
  );
}

export default SignUp;


