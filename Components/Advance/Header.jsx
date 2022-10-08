import React from "react";
import { Container, Nav, Navbar, NavLink } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import SearchBar from "../Basic/SearchBar";
import styles from "../../styles/Home.module.css";
import { FavoriteBorder, ShoppingBasket } from "@mui/icons-material";
import { FormControlLabel, Switch } from "@mui/material";
import { changeTheme } from "../../utils/Store/reducers/profileReducer";
import Link from "next/link";

const Header = () => {
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.profile.theme);

  return (
    <>
      <Navbar expand bg={theme} variant={theme}>
        <Container>
          <Navbar.Brand style={{ width: "14%" }}>
            <img
              width={"100%"}
              src={theme === "dark" ? "/logo.svg" : "/logoDark.svg"}
              alt="Logo"
            />
          </Navbar.Brand>

          <SearchBar theme={theme} />

          <Nav>
            <NavLink>
              <FavoriteBorder />
            </NavLink>
            <span className="vr text-light"></span>
            <NavLink>
              <ShoppingBasket />
            </NavLink>
            {/* theme controller */}
            <FormControlLabel
              label={theme === "dark" ? "🌙" : "🌞"}
              className={`mt-1 text-${theme === "dark" ? "light" : "dark"}`}
              control={
                <Switch
                  defaultChecked
                  onClick={() =>
                    dispatch(changeTheme(theme === "dark" ? "light" : "dark"))
                  }
                  className={styles.themeButton}
                  color="warning"
                  size="small"
                />
              }
              labelPlacement="start"
            />
          </Nav>
        </Container>
      </Navbar>

      <Navbar expand bg={theme} variant={theme}>
        <Container className="d-flex flex-row align-items-center justify-content-center">
          <Nav className="gap-4">
            <NavLink>All</NavLink>

            <NavLink>Cardio</NavLink>
            <NavLink>Strength</NavLink>
            <NavLink>Weight</NavLink>
            <NavLink>Benches</NavLink>
            <NavLink>Bikes</NavLink>
            <NavLink>Massagers</NavLink>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
