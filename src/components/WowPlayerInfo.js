import React, { Component, PropTypes } from 'react';
import shortid from 'shortid';
import PlayerInfo from './PlayerInfo';
import Professions from './Professions';
import Titles from './Titles';
import Reputations from './Reputations';


const WowPlayerInfo = ({playerdata}) => {
  return (
    <div>
      {playerdata.map(x => {
        return (
          <div key={shortid.generate()}>
            <div className="infoContainer">
              <div className="infoContainer__Info">
                <h2>Player Info</h2>
                <div>Name: {x.name}</div>
                <div>Realm: {x.realm}</div>
                <div>Level: {x.level}</div>
                {x.gender === 1 ? <div>Gender: Female</div> : <div>Gender: Male</div>}
                {x.faction === 1 ? <div>Faction: Horde</div> : <div>Faction: Alliance</div>}
                <div>Battlegroup: {x.battlegroup}</div>
                <div>Achievement Points: {x.achievementPoints}</div>
                <div>Honorable Kills: {x.totalHonorableKills}</div>
              </div>
              <div className="infoContainer__Info">
                <h2>Guild Info</h2>
                <div>Guild: {x.guild.name}</div>
                <div>Members: {x.guild.members}</div>
                <div>Guild Achievement Points: {x.guild.achievementPoints}</div>
              </div>
              <Professions professions={x.professions}/>
              <Titles titles={x.titles}/>
              <Reputations reputations={x.reputation}/>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default WowPlayerInfo;
