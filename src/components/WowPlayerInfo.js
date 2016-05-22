import React, { Component, PropTypes } from 'react';
import Loading from '../components/Loading';
import shortid from 'shortid';

const WowPlayerInfo = ({playerdata}) => {
  return (
    !playerdata.isFetching ?
    <Loading name="Loading data..." /> :
    <div>
      {playerdata.map(x => {
        return (
          <div key={shortid.generate()}>
            <span>{x.name}</span>
            <span>{x.realm}</span>
          </div>
        );
      })}
    </div>
  );
}

export default WowPlayerInfo;
