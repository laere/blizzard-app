import React, { Component, PropTypes } from 'react';

const SearchBar = ({onSubmit, onPlayerChange, onRealmChange}) => {
  return (
    <div className="searchbar">
      <form onSubmit={onSubmit}>
        <div>
          <span>Character Name:</span>
          <input type="text"  onChange={onPlayerChange}/>
        </div>
        <div>
          <span>Realm Name:</span>
          <input type="text"  onChange={onRealmChange}/>
        </div>
        <div>
          <button>Search</button>
        </div>
      </form>
    </div>
  );
}

export default SearchBar;
