import axios from "../api/http";
import { useEffect, useState } from "react";
import Table from "./Table";
import { PRODUCTS_URL } from "../config/api";
import { IconButton } from "@mui/material";
import PreviewIcon from "@mui/icons-material/Preview";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

const ProductTable = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(PRODUCTS_URL);
        setProducts(response.data.products);
      } catch (e) {
        console.log(e);
      }
    };
    fetchProducts();
  }, []);
  const columns = [
    { field: "id", headerName: "ID", width: 70 },
    { field: "name", headerName: "Name", width: 300 },
    { field: "price", headerName: "Price", type: "number", width: 150 },
    {
      field: "countInStock",
      headerName: "Count",
      type: "number",
      width: 150,
    },
    { field: "createdAt", headerName: "Create Date", width: 200 },
    {
      field: "actions",
      headerName: "Actions",
      width: 160,
      renderCell: () => {
        return (
          <>
            <IconButton>
              <PreviewIcon color="success" />
            </IconButton>
            <IconButton>
              <EditIcon color="warning" />
            </IconButton>
            <IconButton color="error">
              <DeleteIcon />
            </IconButton>
          </>
        );
      },
    },
  ];

  const rows = products.map((p) => {
    return { ...p, createdAt: new Date(p.createdAt).toDateString() };
  });

  return <Table rows={rows} columns={columns} />;
};

export default ProductTable;
