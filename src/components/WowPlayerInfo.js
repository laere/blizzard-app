import React, { Component, PropTypes } from 'react';
import Loading from '../components/Loading';
import shortid from 'shortid';

const WowPlayerInfo = ({playerdata}) => {
  return (
    <div>
      {playerdata.map(x => {
        return (
          <div key={shortid.generate()} className="infoContainer">
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
            <div className="infoContainer__Info">
              <h2>Professions</h2>
              {x.professions.primary.map(x =>
                <div key={x.id}>
                  <div>{x.name}: {x.rank} of {x.max}</div>
                </div>
              )}
              {x.professions.secondary.map(x =>
                <div key={x.id}>
                  <div>{x.name}: {x.rank} of {x.max}</div>
                </div>
              )}
            </div>
            <div className="infoContainer__Info">
              <h2>Titles</h2>
              {x.titles.map(x =>
                <div key={x.id}>
                  <div>{x.name.replace('%s', '')}</div>
                </div>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default WowPlayerInfo;
