import React, { Component, PropTypes } from 'react';
import SearchBar from '../components/SearchBar';
import WowPlayerInfo from '../components/WowPlayerInfo';

const Wow = ({playerdata, onSubmit, onPlayerChange, onRealmChange}) => {
    return (
        <div>
            <SearchBar onSubmit={onSubmit}
                       onPlayerChange={onPlayerChange}
                       onRealmChange={onRealmChange} />
             <WowPlayerInfo playerdata={playerdata} />
        </div>
    );
}

export default Wow;
