import axios from "../api/http";
import { useEffect, useState } from "react";
import Table from "./Table";
import { PRODUCTS_URL } from "../config/api";
import { IconButton } from "@mui/material";
import PreviewIcon from "@mui/icons-material/Preview";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import EditModal from "./EditModal";
import DeleteModal from "./DeleteModal";

const ProductTable = ({ queryString }) => {
  const [products, setProducts] = useState([]);
  const [editModalId, setEditModalId] = useState(undefined);
  const [deleteModalId, setDeleteModalId] = useState(undefined);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(`${PRODUCTS_URL}?name=${queryString}`);
        setProducts(response.data.products);
      } catch (e) {
        console.log(e);
      }
    };
    let timerId;
    if (queryString) {
      console.log(queryString);
      timerId = setTimeout(fetchProducts, 1000);
    } else {
      fetchProducts();
    }
    return () => clearTimeout(timerId);
  }, [editModalId, deleteModalId, queryString]);
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
      renderCell: (params) => {
        return (
          <>
            <IconButton>
              <PreviewIcon color="success" />
            </IconButton>
            <IconButton onClick={() => setEditModalId(params.id)}>
              <EditIcon color="warning" />
            </IconButton>
            <IconButton onClick={() => setDeleteModalId(params.id)}>
              <DeleteIcon color="error" />
            </IconButton>
          </>
        );
      },
    },
  ];

  const rows = products.map((p) => {
    return { ...p, createdAt: new Date(p.createdAt).toDateString() };
  });

  return (
    <>
      {editModalId && (
        <EditModal
          open={editModalId ? true : false}
          handleClose={() => setEditModalId(undefined)}
          product={products.find((p) => p.id === editModalId)}
        />
      )}
      {deleteModalId && (
        <DeleteModal
          open={deleteModalId ? true : false}
          handleClose={() => setDeleteModalId(undefined)}
          id={deleteModalId}
        />
      )}
      <Table rows={rows} columns={columns} />
    </>
  );
};

export default ProductTable;
