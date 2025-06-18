import React from "react";
import { useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import { PHOTO_GET } from "../../api";
import Error from "../../helper/Error";
import Loading from "../../helper/Loading";
import PhotoContent from "./PhotoContent";

const Photo = () => {
  const { id } = useParams();
  const { data, loading, error, request } = useFetch();

  React.useEffect(() => {
    const { url, options } = PHOTO_GET(id);
    request(url, options);
  }, []);

  if (error) return <Error error={error} />;
  if (loading) return <Loading />;
  if (!data) return <></>;

  return (
    <section className="container mainContainer">
      <PhotoContent data={data} single={true} />
    </section>
  );
};

export default Photo;
