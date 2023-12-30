import React from "react";
import { FaSearch } from "react-icons/fa";
const Search = () => {
  return (
    <form className="search-component" onSubmit={(e)=>{e.preventDefault()}}>
      <div
        className="search-container"
        style={{ display: "flex", alignItems: "center", gap: "1.5rem" }}
      >
        <label htmlFor="search-input">
          <FaSearch style={{ color: "#808080" }} size={20} />
        </label>
        <input
          type="text"
          id="search-input"
          className="search-input"
          name="search"
          placeholder="Search for the book you want and read it now..."
        />
      </div>
      <button type="submit" className="search btn">Search</button>
    </form>
  );
};

export default Search;
