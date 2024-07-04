//import logo from './logo.svg';
import React from 'react';
import './App.css';
import Dashboard from "./components/Dashboard";

function App() {
  return (
    <div className ="App">
    <header className ="App-header">
      <h1>Product Dashboard</h1>
    </header>
    <main>
      <Dashboard></Dashboard>
    </main>
    </div>
  );
}

export default App;
