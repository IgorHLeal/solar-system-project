import React, { Component } from 'react';
import Title from './Title';
import MissionCard from './MissionCard';
import missions from '../data/missions';

class Missions extends Component {
  render() {
    return (
      <div className="missions-container">
        <div className="missions-title">
          <Title headline="Missões" />
        </div>
        <div data-testid="missions" className="missions">
          <div className="mission-card-container">
            {missions.map((mission) => (<MissionCard
              name={ mission.name }
              year={ mission.year }
              country={ mission.country }
              destination={ mission.destination }
              key={ mission.name }
            />))}
          </div>
        </div>
      </div>
    );
  }
}

export default Missions;
