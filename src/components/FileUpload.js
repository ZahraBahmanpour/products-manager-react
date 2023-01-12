import styles from "./FileUpload.module.css";

const FileUpload = ({ handleChange }) => {
  return (
    <div className={styles["image-selector"]}>
      Drag an Image into this section or
      <label>
        select an image
        <input
          type="file"
          className={styles["file-input"]}
          accept="image/*"
          onChange={(e) => handleChange(e.target.files[0])}
        />
      </label>
      <img height="100" width="100" id="product-display" />
    </div>
  );
};
export default FileUpload;
