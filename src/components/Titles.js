import React, { Component } from 'react';

const Titles = ({titles}) => {
  return (
    <div className="infoContainer__Info --titles">
      <button>Titles</button>
      {titles.map(x =>
        <div key={x.id}>
          <div>{x.name.replace('%s', '')}</div>
        </div>
      )}
    </div>
  );
}

export default Titles;
