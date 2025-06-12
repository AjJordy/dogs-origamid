import React from "react";
import UserHeaderNav from "./UserHeaderNav";
import styles from "./UserHeader.module.css";
import { useLocation } from "react-router-dom";

const UserHeader = () => {
  const [title, setTitle] = React.useState("");
  const location = useLocation();

  const titles = {
    "/conta": "Conta",
    "/conta/estatisticas": "Estatisticas",
    "/conta/postar": "Postar",
  };

  React.useEffect(() => {
    setTitle(titles[location.pathname] ?? "");
  }, [location]);

  return (
    <header className={styles.header}>
      <h1 className="title">{title}</h1>
      <UserHeaderNav />
    </header>
  );
};

export default UserHeader;
