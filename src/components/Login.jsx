import React, { Fragment, useState } from "react";
import login from "../services/auth";

export default function Login() {
  const [user, setUser] = useState({ email: "", password: "" });
  const loginHandler = () => {
    login(user).then((response) => console.log(response));
  };
  return (
    <Fragment>
      <label>Email</label>
      <input
        type="email"
        value={user.email}
        onChange={(e) => setUser({ ...user, email: e.target.value })}
      />
      <label>Password</label>
      <input
        type="password"
        value={user.password}
        onChange={(e) => setUser({ ...user, password: e.target.value })}
      />
      <button onClick={loginHandler}>LOGIN</button>
    </Fragment>
  );
}
