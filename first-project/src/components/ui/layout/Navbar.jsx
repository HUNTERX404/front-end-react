import navigation from "@/lib/navigation";
import React from "react";
import { Button } from "../button";
import { NavLink } from "react-router";

function Navbar() {
  return (
    <nav>
      {navigation.map((nav, index) => (
        <Button key={index} asChild>
          <NavLink to={nav.link}>
            <nav.icon color="#ffff" className="text-red-500 bg-amber-400 shrink-0" size={"1rem"} />
            <span>{nav.title}</span>
          </NavLink>
        </Button>
      ))}
    </nav>
  );
}

export default Navbar;
