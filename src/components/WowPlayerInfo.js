import React, { Component, PropTypes } from 'react';
import shortid from 'shortid';
import { condition } from '../utils/utils';
import PlayerInfo from './PlayerInfo';
import Professions from './Professions';
import Titles from './Titles';
import Reputations from './Reputations';
import Guild from './Guild';
import Talents from './Talents';
import Items from './Items';
import Mounts from './Mounts';

const WowPlayerInfo = ({playerdata}) => {
  return (
    <div>
      {playerdata.map(x => {
        return (
          <div key={shortid.generate()}>
            <div className="infoContainer">
              <div className="infoContainer__Info">
                <button>Player Info</button>
                <div>Name: {x.name}</div>
                <div>Realm: {x.realm}</div>
                <div>Level: {x.level}</div>
                {condition(x.gender, <div>Gender: Female</div>, <div>Gender: Male</div>)}
                {condition(x.faction, <div>Faction: Horde</div>, <div>Faction: Alliance</div>)}
                <div>Battlegroup: {x.battlegroup}</div>
                <div>Achievement Points: {x.achievementPoints}</div>
                <div>Honorable Kills: {x.totalHonorableKills}</div>
              </div>
              <Guild guild={x.guild}/>
              <Professions professions={x.professions}/>
              <Titles titles={x.titles}/>
              <Reputations reputations={x.reputation}/>
              <Talents talents={x.talents} />
              <Items items={x.items} />
              <Mounts mounts={x.mounts} />
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default WowPlayerInfo;
