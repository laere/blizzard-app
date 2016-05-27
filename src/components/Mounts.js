import React, { Component } from 'react';
import shortid from 'shortid';

const Mounts = ({mounts}) => {
  return (
    <div className="infoContainer__Info">
      <button>Mounts</button>
      {mounts.collected.map(x => {
        return (
          <div key={x.itemId}>
            {x.name}
          </div>
        );
      })}
    </div>
  );
}

export default Mounts;
