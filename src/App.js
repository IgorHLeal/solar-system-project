import React from 'react';
import Header from './components/Header';
import SolarSystem from './components/SolarSystem';
import Missions from './components/Missions';
import Footer from './components/Footer';

class App extends React.Component {
  render() {
    return (
      <>
        <Header />
        <SolarSystem />
        <Missions />
        <Footer source="https://raw.githubusercontent.com/IgorHLeal/exercise-tech-gallery/master/images/trybe-logo.jpg?token=GHSAT0AAAAAABONF3Z5CSR6QRB7E5RQTXESYQZOB6A" alternativeText="Logo Trybe" />
      </>
    );
  }
}

export default App;
