import React from "react";
import { Navbar } from "flowbite-react";
import { Link } from "react-router-dom";

const NavbarComponent = () => {
  return (
    <>
      <Navbar
        fluid={true}
        rounded={true}
      >
        <Navbar.Brand>
          <img
            src="/images/logo-UAD.png"
            className="mr-3 h-12"
            alt="Logo"
          />
          <Link to='/' className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
            PT. LOREM IPSUM
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Link to='/'>
            Dashboard
          </Link>
          <Link to='/about'>
            About
          </Link>
        </Navbar.Collapse>
      </Navbar>
    </>
  )
}
export default NavbarComponent