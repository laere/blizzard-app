import React, { Component } from 'react';

const Professions = ({professions}) => {
  return (
    <div className="infoContainer__Info --professions">
      <button>Professions</button>
      {professions.primary.map(x =>
        <div key={x.id}>
          <div>{x.name}: {x.rank} of {x.max}</div>
        </div>
      )}
      {professions.secondary.map(x =>
        <div key={x.id}>
          <div>{x.name}: {x.rank} of {x.max}</div>
        </div>
      )}
    </div>
  );
}

export default Professions;
