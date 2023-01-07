import { Container, Grid, Button } from "@mui/material";
import Item from "@mui/material/Grid";
import SearchBar from "./components/SearchBar";
import ProductTable from "./components/ProductTable";
import AddIcon from "@mui/icons-material/Add";
import RefreshIcon from "@mui/icons-material/Refresh";

function App() {
  return (
    <Container sx={{ paddingTop: "2rem" }}>
      <Grid container spacing={2}>
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
            >
              Add
            </Button>
            <Button variant="contained" color="info" endIcon={<RefreshIcon />}>
              Refresh
            </Button>
          </Item>
        </Grid>
        <Grid item xs={12}>
          <Item>
            <ProductTable />
          </Item>
        </Grid>
      </Grid>
    </Container>
  );
}

export default App;
