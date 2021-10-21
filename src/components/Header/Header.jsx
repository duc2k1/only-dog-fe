import React, { useState, lazy, Suspense } from "react";
import Logo from "./Logo";
import { Navbar, Container } from "react-bootstrap";
//--------------------------------------------------
const Find = lazy(() => import("./Find"));
const Actions = lazy(() => import("./Actions/Actions"));
//--------------------------------------------------
export default function Header() {
  const [find, setFind] = useState("");
  //--------------------------------------------------
  return (
    <Suspense fallback={<></>}>
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
    </Suspense>
  );
}
