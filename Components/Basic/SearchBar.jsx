import { SearchOutlined } from "@mui/icons-material";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import style from "../../styles/Basic.module.css";


const SearchBar = (props) => {

  const [shadow, setShadow] = useState("transparent");
  return (
    //search bar 
    <div
      className={style.box}
      style={{ outline: `1px solid gray`, boxShadow: shadow }}
    >
      <span className={style.logo}>
        <SearchOutlined htmlColor="gray" />
      </span>
      <form
        action=""
        onBlur={() => setShadow("1px 1px 1px 0px grey")}
        onFocus={() => setShadow("1px 3px 16px 0px grey")}
      >
        <input
          className={`${style.input} bg-${props.theme} text-${
            props.theme === "dark" ? "light" : "dark"
          }`}
          type="text"
        />
      </form>
    </div>
  );
};

export default SearchBar;
