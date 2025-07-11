import React from "react";
import styles from "./FeedModal.module.css";
import useFetch from "../../hooks/useFetch";
import Error from "../../helper/Error";
import Loading from "../../helper/Loading";
import PhotoContent from "../photo/PhotoContent";
import { PHOTO_GET } from "../../api";

const FeedModal = ({ photo, setModalPhoto }) => {
  const { data, error, loading, request } = useFetch();

  React.useEffect(() => {
    const { url, options } = PHOTO_GET(photo.id);
    const { json } = request(url, options);
  }, [photo]);

  function handleOutsideClick(event) {
    if (event.target === event.currentTarget) {
      setModalPhoto(null);
    }
  }

  return (
    <div className={styles.modal} onClick={handleOutsideClick}>
      {error && <Error error={error} />}
      {loading && <Loading />}
      {data && <PhotoContent data={data} />}
    </div>
  );
};

export default FeedModal;
