import { Button } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "../index.module.css";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <div className={styles.navbar_container}>
      <Button
        onClick={() => navigate("/")}
        variant="contained"
        color="secondary"
        // className={styles.navbar_btn1}
      >
        Home
      </Button>
      <Button
        onClick={() => navigate("/add")}
        variant="contained"
        color="success"
      >
        Add todo
      </Button>
    </div>
  );
};

export default Navbar;
