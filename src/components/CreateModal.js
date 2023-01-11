import Modal from "./Modal";
import TextField from "@mui/material/TextField";
import axios from "../api/http";
import { PRODUCTS_URL } from "../config/api";
import { useState } from "react";

const CreateModal = ({ open, handleClose }) => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [count, setCount] = useState("");
  const [errors, setErrors] = useState({ name: "", price: "", count: "" });

  const createNewProduct = async () => {
    const response = await axios.post(PRODUCTS_URL, {
      name,
      price,
      countInStock: count,
    });
    handleClose();
  };

  const validateName = (e) => {
    const { value } = e.target;
    setErrors({ ...errors, name: "" });
    if (!value) {
      setErrors({ ...errors, name: "Name can not be empty" });
    } else if (new RegExp("[0-9]").test(value)) {
      setErrors({ ...errors, name: "Name can not contain numbers" });
    }
    setName(value);
  };

  const validateCount = (e) => {
    const { value } = e.target;
    setErrors({ ...errors, count: "" });
    if (!value) {
      setErrors({ ...errors, count: "Count can not be empty" });
    } else if (Number(value) > 1000) {
      setErrors({ ...errors, count: "Count can not be more than 1000" });
    }
    setCount(value);
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
        onChange={validateName}
      />
      {errors.name && <span style={{ color: "red" }}>{errors.name}</span>}
      <TextField
        autoFocus
        margin="dense"
        id="price"
        label="Price"
        type="text"
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
        onChange={validateCount}
      />
      {errors.count && <span style={{ color: "red" }}>{errors.count}</span>}
    </Modal>
  );
};
export default CreateModal;
