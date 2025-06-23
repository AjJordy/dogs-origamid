import React from "react";
import Feed from "./feed/Feed";
import Loading from "../helper/Loading";
import Head from "../helper/Head";

const Home = () => {
  return (
    <section className="container mainContainer">
      <Head
        title="Fotos"
        description="Home de site Dogs, com o feed de fotos"
      />
      <Feed />
    </section>
  );
};

export default Home;
