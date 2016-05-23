import React, { Component } from 'react';

const Reputations = ({reputations}) => {
  return (
    <div className="infoContainer__Info">
      <button>Reputations</button>
      {reputations.map(x =>{
        if(x.standing === 7) {
          return (
            <div key={x.id}>
              <div>Name: {x.name}</div>
              <div>Standing: Exalted</div>
            </div>
          );
        } else if(x.standing === 6) {
          return (
            <div key={x.id}>
              <div>Name: {x.name}</div>
              <div>Standing: Revered</div>
            </div>
          );
        } else if(x.standing === 6) {
          return (
            <div key={x.id}>
              <div>Name: {x.name}</div>
              <div>Standing: Honored</div>
            </div>
          );
        } else if(x.standing === 5) {
          return (
            <div key={x.id}>
              <div>Name: {x.name}</div>
              <div>Standing: Friendly</div>
            </div>
          );
        }
      })}
    </div>
  );
}

export default Reputations;
