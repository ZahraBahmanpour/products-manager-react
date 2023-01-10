import { TextField } from "@mui/material";

const SearchBar = ({ value, handleChange }) => {
  return (
    <TextField
      id="search-bar"
      label="Search here..."
      variant="outlined"
      size="small"
      sx={{ width: "100%" }}
      value={value}
      onChange={(e) => handleChange(e.target.value)}
    />
  );
};

export default SearchBar;
