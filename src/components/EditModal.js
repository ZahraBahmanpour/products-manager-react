import Modal from "./Modal";
import TextField from "@mui/material/TextField";
import axios from "../api/http";
import { PRODUCTS_URL } from "../config/api";
import { useState } from "react";

const EditModal = ({ open, handleClose, handleOk, product }) => {
  const { id, name, price, countInStock } = product;
  const [tempName, setTempName] = useState(name);
  const [tempPrice, setTempPrice] = useState(price);
  const [tempCount, setTempCount] = useState(countInStock);

  const editProduct = async () => {
    const response = await axios.put(`${PRODUCTS_URL}/${id}`, {
      name: tempName,
      price: tempPrice,
      countInStock: tempCount,
    });
    handleClose();
    handleOk();
  };
  return (
    <Modal
      open={open}
      handleClose={handleClose}
      handleOk={editProduct}
      title={"Edit Product"}
    >
      <TextField
        autoFocus
        margin="dense"
        id="name"
        label="Name"
        type="text"
        fullWidth
        variant="standard"
        value={tempName}
        onChange={(e) => setTempName(e.target.value)}
      />
      <TextField
        autoFocus
        margin="dense"
        id="price"
        label="Price"
        type="number"
        fullWidth
        variant="standard"
        value={tempPrice}
        onChange={(e) => setTempPrice(e.target.value)}
      />
      <TextField
        autoFocus
        margin="dense"
        id="count"
        label="Count"
        type="number"
        fullWidth
        variant="standard"
        value={tempCount}
        onChange={(e) => setTempCount(e.target.value)}
      />
    </Modal>
  );
};
export default EditModal;
