import React from "react";
import { Link } from "react-router-dom";
import Dogs from "../assets/dogs.svg?react";
import styles from "./Header.module.css";
import { UserContext } from "../context/UserContext";

const Header = () => {
  const { data } = React.useContext(UserContext);

  return (
    <header className={styles.header}>
      <nav className={`${styles.nav} container`}>
        <Link className={styles.logo} to="/" area-label="Dogs - Home">
          <Dogs />
        </Link>

        {data ? (
          <Link className={styles.login} to="/conta">
            {data.nome}
          </Link>
        ) : (
          <Link className={styles.login} to="/login">
            Login / Criar
          </Link>
        )}
      </nav>
    </header>
  );
};

export default Header;
