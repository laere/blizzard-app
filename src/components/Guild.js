import React, { Component } from 'react';

const Guild = ({guild}) => {
  return (
    <div className="infoContainer__Info --guild">
      <button>Guild Info</button>
      <div>Guild: {guild.name}</div>
      <div>Members: {guild.members}</div>
      <div>Guild Achievement Points: {guild.achievementPoints}</div>
    </div>
  );
}

export default Guild;
