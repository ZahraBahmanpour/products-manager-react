import { Container, Grid } from "@mui/material";
import Item from "@mui/material/Grid";
import ProductTable from "./components/ProductTable";
import Header from "./components/Header";

function App() {
  return (
    <Container sx={{ paddingTop: "2rem" }}>
      <Grid container spacing={2}>
        <Header />
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
