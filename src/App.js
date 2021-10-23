import React from 'react';
import "./App.css";
import Login from "./components/Login";
import SignUp from './components/SignUp';
import  {BrowserRouter, Switch, Route} from "react-router-dom";

// Ejecuté comando: npm install react-router-dom 
// según lo leido en la web: https://johnserrano.co/blog/aprende-a-crear-rutas-con-react-router

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Switch>
      <header className="App-header">
        <h1>Authentication React App</h1>
        <div className="btn-group" role="group" aria-label="Basic mixed styles example">
          <button type="button" className="btn btn-danger"><a href="http://localhost:3000/sign-in">Login</a></button>
          <button type="button" className="btn btn-warning"><a href="http://localhost:3000/sign-up">Sign-up</a></button>
          <button type="button" className="btn btn-success"><a href="http://localhost:3000/home">Home</a></button>
        <Route path="/sign-in" component={Login} />
        <Route path="/sign-up" component={SignUp} />
        {/* Falta el home, no he creado el componente. */}
        </div>
      </header>
      </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
