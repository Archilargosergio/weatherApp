import React from 'react';
import '../styles/App.css';
import NavBar from '../components/NavBar';
import WeatherPanel from '../components/WeatherPanel';
import Footer from '../components/Footer';

const App = () => {

  return (
    <div className="App">

      < NavBar />
      < WeatherPanel />
      < Footer />

    </div>
  );
}

export default App;
