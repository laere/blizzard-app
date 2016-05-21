import React, { Component, PropTypes } from 'react';

const SearchBar = (props) => {
  return (
    <div>
      <form onSubmit={props.onSubmit}>
        <div>
          <span>Character Name:</span>
          <input type="text" onChange={props}/>
        </div>
        <div>
          <span>Realm Name:</span>
          <input type="text" onChange={props}/>
        </div>
        <div>
          <button>Search</button>
        </div>
      </form>
    </div>
  );
}

export default SearchBar;
