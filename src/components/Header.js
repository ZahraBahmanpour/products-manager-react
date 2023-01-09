import AddIcon from "@mui/icons-material/Add";
import RefreshIcon from "@mui/icons-material/Refresh";
import SearchBar from "./SearchBar";
import { Grid, Button } from "@mui/material";
import Item from "@mui/material/Grid";
import { useState } from "react";
import CreateModal from "./CreateModal";

const Header = () => {
  const [showModal, setShowModal] = useState();
  return (
    <>
      {showModal && (
        <CreateModal open={showModal} handleClose={() => setShowModal(false)} />
      )}
      <Grid item xs={8}>
        <Item>
          <SearchBar />
        </Item>
      </Grid>
      <Grid item xs={4}>
        <Item>
          <Button
            variant="contained"
            color="success"
            endIcon={<AddIcon />}
            sx={{ marginRight: "1rem" }}
            onClick={() => setShowModal(true)}
          >
            Add
          </Button>
          <Button variant="contained" color="info" endIcon={<RefreshIcon />}>
            Refresh
          </Button>
        </Item>
      </Grid>
    </>
  );
};

export default Header;
