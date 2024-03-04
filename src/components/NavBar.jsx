import React from "react";
import Search from "./Search";
import { Button } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import Routing from "./Routing";

function NavBar({ darkTheme, setDarkTheme }) {
  return (
    <div className="p-4">
      <div className="flex justify-between">
        <NavLink to={"/"}>
          <p className=" dark:text-secondary">Google</p>
        </NavLink>
        <Button className="" onClick={() => setDarkTheme(!darkTheme)}>
          {darkTheme ? "Light" : "Dark"}
        </Button>
      </div>
      <Search />
      <Routing />
    </div>
  );
}

export default NavBar;
