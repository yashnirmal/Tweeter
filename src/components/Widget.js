import React from 'react';
import "./Widgets.css";
import SearchIcon from "@material-ui/icons/Search";

export default function Widget() {
  return (
    <div className="Widgets">
      <div className="searchDiv">
        <SearchIcon Icon={SearchIcon} text="Search" />
        <input type="text" placeholder="Search Twitter" />
      </div>

      <div className='News'>
        <h2>What's Happening</h2>
      </div>
    </div>
  );
}
