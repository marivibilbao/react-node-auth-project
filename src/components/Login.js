import React, {useState} from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const Singin = () =>{
    var url = "http://localhost:4000/user/sign-in";
    var data = {"email":email,"password":password };
    //console.log(data);
    fetch(url, {
      method: "POST",
      body: JSON.stringify(data),
      headers:{
        "Content-Type": "application/json"
      }
    }).then(res => res.json())
    .then(response => console.log("Success:", response))
    .catch(error => console.error("Error:", error));
  };

  return (
    <div className="input-group mb-3">
      <input type="text" onChange={(event)=>setEmail(event.target.value)} className="form-control" placeholder="email"></input>
      <input type="password" onChange={(event)=>setPassword(event.target.value)} className="form-control" placeholder="password"></input>
      <button type="button" onClick={Singin} className="btn btn-danger">Login</button>
    </div>
  );
};

export default Login;