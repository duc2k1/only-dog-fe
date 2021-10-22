import React, { useState, memo } from "react";
import Logo from "./Logo";
import { Navbar, Container } from "react-bootstrap";
//--------------------------------------------------
import Find from "./Find";
import Actions from "./Actions/Actions";
//--------------------------------------------------
export default memo(function Header() {
  const [find, setFind] = useState("");
  //--------------------------------------------------
  return (
    <Navbar
      expand="md"
      style={{
        position: "sticky",
        top: 0,
        background: "white",
      }}
    >
      <Container>
        <Logo />
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Find find={find} setFind={setFind} />
          <Actions />
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
});
