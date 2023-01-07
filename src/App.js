import { Container, Grid, Button } from "@mui/material";
import Item from "@mui/material/Grid";
import SearchBar from "./components/SearchBar";
import ProductTable from "./components/ProductTable";

function App() {
  return (
    <Container>
      <Grid container spacing={2}>
        <Grid item xs={8}>
          <Item>
            <SearchBar />
          </Item>
        </Grid>
        <Grid item xs={4}>
          <Item>
            <Button variant="contained" color="success">
              Add
            </Button>
            <Button variant="contained" color="secondary">
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
