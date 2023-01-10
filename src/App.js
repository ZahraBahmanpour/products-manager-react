import { Container, Grid } from "@mui/material";
import Item from "@mui/material/Grid";
import ProductTable from "./components/ProductTable";
import Header from "./components/Header";
import { useState } from "react";

function App() {
  const [queryString, setQueryString] = useState("");
  return (
    <Container sx={{ paddingTop: "2rem" }}>
      <Grid container spacing={2}>
        <Header
          queryString={queryString}
          handleChange={(text) => setQueryString(text)}
        />
        <Grid item xs={12}>
          <Item>
            <ProductTable queryString={queryString} />
          </Item>
        </Grid>
      </Grid>
    </Container>
  );
}

export default App;
