import React from 'react';
import "./App.css";

// Ejecuté comando: npm install react-router-dom 
// según lo leido en la web: https://johnserrano.co/blog/aprende-a-crear-rutas-con-react-router

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Authentication React App</h1>
        <div class="btn-group" role="group" aria-label="Basic mixed styles example">
          <button type="button" class="btn btn-danger">Login</button>
          <button type="button" class="btn btn-warning">Sign-up</button>
          <button type="button" class="btn btn-success">Home</button>
        </div>
      </header>
    </div>
  );
};

export default App;