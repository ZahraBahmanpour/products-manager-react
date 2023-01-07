import { TextField } from "@mui/material";

const SearchBar = () => {
  return (
    <TextField
      id="search-bar"
      label="Search here..."
      variant="outlined"
      size="small"
      sx={{ width: "100%" }}
    />
  );
};

export default SearchBar;
