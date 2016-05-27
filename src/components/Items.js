import React, { Component } from 'react';
import shortid from 'shortid';

const Items = ({items}) => {
  return (
    <div className="infoContainer__Info">
      <button>Items</button>
      {Object.keys(items).map(x => {
        var newItems = items[x];
        {console.log(newItems)}
        return (
          <div key={shortid.generate()}>
            <span>{newItems.name}</span>
            <span>{newItems.itemLevel}</span>
          </div>
        );
      })}
    </div>
  );
}

export default Items;
