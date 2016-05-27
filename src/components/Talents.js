import React, { Component } from 'react';
import shortid from 'shortid';

const Talents = ({talents}) => {
  return (
    <div>
      {talents.map(x =>
        <div key={shortid.generate()} className="infoContainer__Info">
          <button>Specs</button>
          <h3>{x.spec.name} - {x.spec.role}</h3>
          {x.talents.map(x =>
            <div>Tier {x.tier} : {x.spell.name}</div>
          )}
          <h5>Major Glyphs</h5>
          {x.glyphs.major.map(x =>
            <div>{x.name}</div>
          )}
          <h5>Minor Glyphs</h5>
          {x.glyphs.minor.map(x =>
            <div>{x.name}</div>
          )}
        </div>
      )}
    </div>
  );
}

export default Talents;
