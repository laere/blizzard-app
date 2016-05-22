import React, { Component, PropTypes } from 'react';

const SearchBar = (props) => {
  return (
    <div className="searchbar">
      <form onSubmit={props.onSubmit}>
        <div>
          <span>Character Name:</span>
          <input type="text" value={props.value_1} onChange={props.onChange_1}/>
        </div>
        <div>
          <span>Realm Name:</span>
          <input type="text" value={props.value_2} onChange={props.onChange_2}/>
        </div>
        <div>
          <button>Search</button>
        </div>
      </form>
    </div>
  );
}

export default SearchBar;
