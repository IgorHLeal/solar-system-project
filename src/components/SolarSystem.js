import React, { Component } from 'react';
import PlanetCard from './PlanetCard';
import planets from '../data/planets';
import Title from './Title';

class SolarSystem extends Component {
  render() {
    return (
      <div className="planet-section">
        <div className="planets-title">
          <Title headline="Planetas" />
        </div>
        <div data-testid="solar-system" className="solar-system">
          <div className="planet-container">
            {planets.map((planet) => (<PlanetCard
              planetName={ planet.name }
              planetImage={ planet.image }
              key={ planet.name }
            />))}
          </div>
        </div>
      </div>
    );
  }
}

export default SolarSystem;
