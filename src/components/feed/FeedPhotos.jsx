import React from "react";
import styles from "./FeedPhotos.module.css";
import useFetch from "../../hooks/useFetch";
import { PHOTOS_GET } from "../../api";
import FeedPhotosItem from "./FeedPhotosItem";
import Error from "../../helper/Error";
import Loading from "../../helper/Loading";

const FeedPhotos = ({ user, page, setModalPhoto, setInfinite }) => {
  const { data, loading, error, request } = useFetch();

  React.useEffect(() => {
    async function fetchPhotos() {
      const total = 6;
      const { url, options } = PHOTOS_GET({ page, total, user });
      const { response, json } = await request(url, options);
      if (response && response.ok && json.length < total) setInfinite(false);
      // console.log(json);
    }
    fetchPhotos();
  }, [page, user]);

  if (error) return <Error error={error} />;
  if (loading) return <Loading />;
  if (!data) return <></>;

  return (
    <ul className={`${styles.feed} animeLeft`}>
      {data.map((photo) => (
        <FeedPhotosItem
          key={photo.id}
          photo={photo}
          setModalPhoto={setModalPhoto}
        />
      ))}
    </ul>
  );
};

export default FeedPhotos;
