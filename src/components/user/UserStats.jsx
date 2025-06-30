import React from "react";
import Head from "../../helper/Head";
import useFetch from "../../hooks/useFetch";
import { STATS_GET } from "../../api";
import Loading from "../../helper/Loading";
import Error from "../../helper/Error";

// import UserStatsGraphs from "./UserStatsGraphs";
const UserStatsGraphs = React.lazy(() => import("./UserStatsGraphs"));

const UserStats = () => {
  const { data, error, loading, request } = useFetch();

  React.useEffect(() => {
    async function getData() {
      const { url, options } = STATS_GET();
      await request(url, options);
    }
    getData();
  }, []);

  if (loading) return <Loading />;
  if (error) return <Error error={error} />;
  if (!data) return <></>;
  return (
    <React.Suspense fallback={<></>}>
      <Head title="Estatísticas" />
      <UserStatsGraphs data={data} />
    </React.Suspense>
  );
};

export default UserStats;
