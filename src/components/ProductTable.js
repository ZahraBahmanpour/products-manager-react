import axios from "../api/http";
import { useEffect, useState } from "react";
import Table from "./Table";
import { PRODUCTS_URL } from "../config/api";
import { Button, IconButton } from "@mui/material";
import PreviewIcon from "@mui/icons-material/Preview";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import EditModal from "./EditModal";
import DeleteModal from "./DeleteModal";

const abortControlller = new AbortController();
const ProductTable = ({ queryString }) => {
  const [products, setProducts] = useState([]);
  const [editModalId, setEditModalId] = useState(undefined);
  const [deleteModalId, setDeleteModalId] = useState(undefined);
  const [loading, setLoading] = useState(false);

  const fetchProducts = async () => {
    try {
      setLoading(true);
      const response = await axios.get(`${PRODUCTS_URL}?name=${queryString}`, {
        signal: abortControlller.signal,
      });
      setProducts(response.data.products);
    } catch (e) {
      console.log(e);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    let timerId;
    if (queryString) {
      console.log(queryString);
      timerId = setTimeout(fetchProducts, 1000);
    } else {
      fetchProducts();
    }
    return () => clearTimeout(timerId);
  }, [queryString]);

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

  if (loading)
    return (
      <>
        <div>Loading...</div>
        <Button onClick={() => abortControlller.abort()}>Cancel</Button>
      </>
    );
  return (
    <>
      {editModalId && (
        <EditModal
          open={editModalId ? true : false}
          handleClose={() => setEditModalId(undefined)}
          handleOk={() => fetchProducts()}
          product={products.find((p) => p.id === editModalId)}
        />
      )}
      {deleteModalId && (
        <DeleteModal
          open={deleteModalId ? true : false}
          handleClose={() => setDeleteModalId(undefined)}
          handleOk={() => fetchProducts()}
          id={deleteModalId}
        />
      )}
      <Table rows={rows} columns={columns} />
    </>
  );
};

export default ProductTable;
