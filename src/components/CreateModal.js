import Modal from "./Modal";
import TextField from "@mui/material/TextField";
import axios from "../api/http";
import { PRODUCTS_URL } from "../config/api";
import { useState } from "react";

const CreateModal = ({ open, handleClose }) => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState(undefined);
  const [count, setCount] = useState(undefined);

  const createNewProduct = async () => {
    const response = await axios.post(PRODUCTS_URL, {
      name,
      price,
      countInStock: count,
    });
    handleClose();
  };
  return (
    <Modal
      open={open}
      handleClose={handleClose}
      handleOk={createNewProduct}
      title={"Create Product"}
    >
      <TextField
        autoFocus
        margin="dense"
        id="name"
        label="Name"
        type="text"
        fullWidth
        variant="standard"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <TextField
        autoFocus
        margin="dense"
        id="price"
        label="Price"
        type="number"
        fullWidth
        variant="standard"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />
      <TextField
        autoFocus
        margin="dense"
        id="count"
        label="Count"
        type="number"
        fullWidth
        variant="standard"
        value={count}
        onChange={(e) => setCount(e.target.value)}
      />
    </Modal>
  );
};
export default CreateModal;
