import React from "react";
import styles from "./PhotoDelete.module.css";
import { PHOTO_DELETE } from "../../api";
import useFetch from "../../hooks/useFetch";

const PhotoDelete = ({ id }) => {
  const { loading, response } = useFetch();

  async function handleClick() {
    const confirm = window.confirm("Tem certeza que deseja deletar ?");
    if (!confirm) return;
    const { url, options } = PHOTO_DELETE(id);
    const { response } = await request(url, options);
    if (response.ok) window.location.reload();
  }

  return (
    <>
      {loading ? (
        <button disabled className={styles.delete}>
          Deletando...
        </button>
      ) : (
        <button onClick={handleClick} className={styles.delete}>
          Deletar
        </button>
      )}
    </>
  );
};

export default PhotoDelete;
