import React, { useState, useContext, useEffect } from "react";
import AlertContext from "../../context/alert/alertContext";
import AuthContext from "../../context/auth/authContext";

function Register(props) {
  const alertContext = useContext(AlertContext);
  const authContext = useContext(AuthContext);

  const { setAlert } = alertContext;
  const { register, error, clearErrors, isAuthenticated } = authContext;

  useEffect(() => {
    if (isAuthenticated === true) {
      props.history.push("/");
    }

    if (error === "User already exists") {
      setAlert(error, "danger");
      clearErrors();
    }
    //eslist-disable-next-line
  }, [error, isAuthenticated, props.history]);

  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
  });
  const { name, email, password, password2 } = user;

  const onChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (name === "" || email === "" || password === "") {
      setAlert("Please enter all fields", "danger");
    } else if (password !== password2) {
      setAlert("Passwords do not match", "danger");
    } else {
      register({
        name,
        email,
        password,
      });
    }
  };

  return (
    <div >
      <h2 id="headerTitle" style={{paddingBottom:"0.5rem"}}>Account Register</h2>
      <form onSubmit={onSubmit}>
      <div id="loginform" style={{margin:"50px auto"}}>
        <div className="row" >
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            value={name}
            style={{margin:"0.1rem auto"}}
            onChange={onChange}
            placeholder="Enter your Name"
            required
          />
        </div>
        <div className="row">
          <label htmlFor="email">Email Address</label>
          <input
            id="email"
            type="email"
            name="email"
            style={{margin:"0.1rem auto"}}
            value={email}
            onChange={onChange}
            placeholder="Enter your email"
            required
          />
        </div>
        <div className="row">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            name="password"
            value={password}
            style={{margin:"0.1rem auto"}}
            onChange={onChange}
            placeholder="Enter your password"
            required
            minLength="6"
          />
        </div>
        <div className="row">
          <label htmlFor="password2">Confirm Password</label>
          <input
            id="password2"
            type="password"
            name="password2"
            placeholder="Re-enter your password"
            value={password2}
            style={{margin:"0.1rem auto"}}
            onChange={onChange}
            required
            minLength="6"
          />
        </div>
        <div className="row" id="button">
        <input
          type="submit"
          value="Register"
          className="aka"
        />
        </div>
      </div>
      </form>
    </div>
  );
}

export default Register;
