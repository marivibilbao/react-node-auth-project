import React, { useState } from "react";


export default function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const FetchSignUp = () => {
    var url = "http://localhost:4000/user/sign-up";
    var data = { name: name, email: email, password: password };
    fetch(url, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    })
    .then((res) => res.json())
    .then((response) => console.log("Success:", response))
    .catch((error) => console.error("Error:", error));
  };

  return (
    <div className="input-group flex-nowrap">
      <input type="text" onChange={(event) => setName(event.target.value)} className="form-control" placeholder="name"></input>
      <input type="text" onChange={(event) => setEmail(event.target.value)} className="form-control" placeholder="email"></input>
      <input type="password" onChange={(event) => setPassword(event.target.value)} className="form-control" placeholder="password"></input>
      <button type="button" onClick={FetchSignUp} className="btn btn-warning">Submit</button>
    </div>
  );
};
