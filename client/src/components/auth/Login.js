import React, { useState, useEffect, useContext } from "react";
import AuthContext from "../../context/auth/authContext";
import AlertContext from "../../context/alert/alertContext";

function Login(props) {
  const alertContext = useContext(AlertContext);
  const authContext = useContext(AuthContext);

  const { setAlert } = alertContext;
  const { login, error, clearErrors, isAuthenticated } = authContext;

  useEffect(() => {
    if (isAuthenticated === true) {
      props.history.push("/");
    }

    if (error === "Invalid Credentials") {
      setAlert(error, "danger");
      clearErrors();
    }
    //eslist-disable-next-line
  }, [error, isAuthenticated, props.history]);

  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const { email, password } = user;

  const onChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (email === "" || password === "") {
      setAlert("Please fill in all fields", "danger");
    } else {
      login({
        email,
        password,
      });
    }
  };

  return (
    // <div className="form-container">
    //   <h1>
    //     Account <span className="text-primary">Login</span>
    //   </h1>
    //   <form onSubmit={onSubmit}>
    //     <div className="form-group">
    //       <label htmlFor="email">Email Address</label>
    //       <input
    //         id="email"
    //         type="email"
    //         name="email"
    //         value={email}
    //         onChange={onChange}
    //       />
    //     </div>
    //     <div className="form-group">
    //       <label htmlFor="password">Password</label>
    //       <input
    //         id="password"
    //         type="password"
    //         name="password"
    //         value={password}
    //         onChange={onChange}
    //       />
    //     </div>
    //     <input
    //       type="submit"
    //       value="Login"
    //       className="btn btn-primary btn-block"
    //     />
    //   </form>
    // </div>
    <form onSubmit={onSubmit}>
      <div id="loginform">
        <h2 id="headerTitle">Login Account</h2>
        <div>
          <div class="row">
            <label htmlFor="email">Email Address</label>
            <input
              id="email"
              type="email"
              name="email"
              value={email}
              onChange={onChange}
              placeholder="Enter your email"
            />
          </div>
          <div class="row">
            <label htmlFor="password">Password</label>
            <input
              id="password"
              type="password"
              name="password"
              value={password}
              onChange={onChange}
              placeholder="Enter your password"
            />
          </div>
          <div id="button" class="row">
            <input type="submit" value="Login" class="aka" />
          </div>
        </div>
      </div>
    </form>
  );
}

export default Login;
