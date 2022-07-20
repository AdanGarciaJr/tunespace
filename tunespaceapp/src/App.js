import React from "react";
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from "./components/Routes";
import Navigation from "./components/Navigation";
import Header from './components/Header'
import Login from './pages/Login'
import './App.css';

function App() {
  return (
    <Router>
      <div style={styles.body}>
        <Header />
      </div>
      <main >
        <Routes />
      </main>
    </Router>
  );
}

export default App;

const styles = {
  container: {
    backgroundColor: 'white'
  },body: {
    backgroundColor: '#03192b'
  }
}



