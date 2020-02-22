import React from "react";
import TextField from "@material-ui/core/TextField";
const Search = props => {
  return (
    <div>
      <TextField
        style={{ width: "95%", margin: "10px 5px 0 5px" }}
        id="outlined-search"
        label="Search for item"
        type="search"
        variant="outlined"
        value={props.searchString}
        onChange={props.handleChange}
      />
    </div>
  );
};

export default Search;
