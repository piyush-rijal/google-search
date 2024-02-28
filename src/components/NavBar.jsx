import React from "react";
import Search from "./Search";
import { Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import SelectBar from "./SelectBar";
import Routing from "./Routing";

function NavBar({ darkTheme, setDarkTheme }) {
  return (
    <div className="p-4">
      <div className="flex justify-between">
        <Link to="/">
          <p className=" dark:text-secondary">Google</p>
        </Link>
        <Button className="" onClick={() => setDarkTheme(!darkTheme)}>
          {darkTheme ? "Light" : "Dark"}
        </Button>
      </div>
      <Search />
      <SelectBar />
      <Routing />
    </div>
  );
}

export default NavBar;
