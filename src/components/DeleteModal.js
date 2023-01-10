import axios from "../api/http";
import { PRODUCTS_URL } from "../config/api";
import Modal from "./Modal";

const DeleteModal = ({ open, handleClose, id }) => {
  const deleteProduct = async () => {
    try {
      const response = await axios.delete(`${PRODUCTS_URL}/${id}`);
    } catch (e) {
      console.log(e);
    } finally {
      handleClose();
    }
  };
  return (
    <Modal
      open={open}
      handleClose={handleClose}
      handleOk={deleteProduct}
      title={"Delete Product"}
    >
      Are you sure you want to delete this item
    </Modal>
  );
};

export default DeleteModal;
