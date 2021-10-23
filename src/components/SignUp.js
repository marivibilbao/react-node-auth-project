import React from "react";


export default function SignUp() {
  return (
    <div className="input-group flex-nowrap">
      <input type="text" className="form-control" placeholder="email"></input>
      <input type="password" className="form-control" placeholder="password"></input>
      <input type="password" className="form-control" placeholder="repeat password"></input>
      <button type="button" className="btn btn-warning">Sign-up</button>
    </div>
  );
};
