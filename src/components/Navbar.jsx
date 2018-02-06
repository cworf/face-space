import React from "react";
import NavLinks from './NavLinks';
import SearchBar from './SearchBar';
import TweetButton from './TweetButton'

function Navbar(){
  return (
    <div>
      <NavLinks />
      <SearchBar />
      <TweetButton />
    </div>
  );
}

export default Navbar;
