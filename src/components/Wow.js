import React, { Component, PropTypes } from 'react';
import SearchBar from '../components/SearchBar';
import WowPlayerInfo from '../components/WowPlayerInfo';

const Wow = ({data, onSubmit, onPlayerChange, onRealmChange}) => {
    return (
        <div>
            <SearchBar onSubmit={onSubmit}
                       onChange_1={onPlayerChange}
                       onChange_2={onRealmChange} />
            <WowPlayerInfo data={data} />
        </div>
    );
}

export default Wow;
