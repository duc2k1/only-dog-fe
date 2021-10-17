import React from "react";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Header() {
  return (
    <>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">Link</Nav.Link>
              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <div className="container-fluid gedf-wrapper">
        <div className="row">
          <div className="col-md-3">
            <div className="card">
              <div className="card-body">
                <div className="h5">@LeeCross</div>
                <div className="h7 text-muted">
                  Fullname : Miracles Lee Cross
                </div>
                <div className="h7">
                  Developer of web applications, JavaScript, PHP, Java, Python,
                  Ruby, Java, Node.js, etc.
                </div>
              </div>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  <div className="h6 text-muted">Followers</div>
                  <div className="h5">5.2342</div>
                </li>
                <li className="list-group-item">
                  <div className="h6 text-muted">Following</div>
                  <div className="h5">6758</div>
                </li>
                <li className="list-group-item">Vestibulum at eros</li>
              </ul>
            </div>
          </div>
          <div className="col-md-6 gedf-main">
            {/*- \\\\\\\Post*/}
            <div className="card gedf-card">
              <div className="card-header">
                <ul
                  className="nav nav-tabs card-header-tabs"
                  id="myTab"
                  role="tablist"
                >
                  <li className="nav-item">
                    <a
                      className="nav-link active"
                      id="posts-tab"
                      data-toggle="tab"
                      href="#posts"
                      role="tab"
                      aria-controls="posts"
                      aria-selected="true"
                    >
                      Make a publication
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      id="images-tab"
                      data-toggle="tab"
                      role="tab"
                      aria-controls="images"
                      aria-selected="false"
                      href="#images"
                    >
                      Images
                    </a>
                  </li>
                </ul>
              </div>
              <div className="card-body">
                <div className="tab-content" id="myTabContent">
                  <div
                    className="tab-pane fade show active"
                    id="posts"
                    role="tabpanel"
                    aria-labelledby="posts-tab"
                  >
                    <div className="form-group">
                      <label className="sr-only" htmlFor="message">
                        post
                      </label>
                      <textarea
                        className="form-control"
                        id="message"
                        rows={3}
                        placeholder="What are you thinking?"
                        defaultValue={""}
                      />
                    </div>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="images"
                    role="tabpanel"
                    aria-labelledby="images-tab"
                  >
                    <div className="form-group">
                      <div className="custom-file">
                        <input
                          type="file"
                          className="custom-file-input"
                          id="customFile"
                        />
                        <label
                          className="custom-file-label"
                          htmlFor="customFile"
                        >
                          Upload image
                        </label>
                      </div>
                    </div>
                    <div className="py-4" />
                  </div>
                </div>
                <div className="btn-toolbar justify-content-between">
                  <div className="btn-group">
                    <button type="submit" className="btn btn-primary">
                      share
                    </button>
                  </div>
                  <div className="btn-group">
                    <button
                      id="btnGroupDrop1"
                      type="button"
                      className="btn btn-link dropdown-toggle"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      <i className="fa fa-globe" />
                    </button>
                    <div
                      className="dropdown-menu dropdown-menu-right"
                      aria-labelledby="btnGroupDrop1"
                    >
                      <a className="dropdown-item" href="#">
                        <i className="fa fa-globe" /> Public
                      </a>
                      <a className="dropdown-item" href="#">
                        <i className="fa fa-users" /> Friends
                      </a>
                      <a className="dropdown-item" href="#">
                        <i className="fa fa-user" /> Just me
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Post /////*/}
            {/*- \\\\\\\Post*/}
            <div className="card gedf-card">
              <div className="card-header">
                <div className="d-flex justify-content-between align-items-center">
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="mr-2">
                      <img
                        className="rounded-circle"
                        width={45}
                        src="https://picsum.photos/50/50"
                        alt=""
                      />
                    </div>
                    <div className="ml-2">
                      <div className="h5 m-0">@LeeCross</div>
                      <div className="h7 text-muted">Miracles Lee Cross</div>
                    </div>
                  </div>
                  <div>
                    <div className="dropdown">
                      <button
                        className="btn btn-link dropdown-toggle"
                        type="button"
                        id="gedf-drop1"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        <i className="fa fa-ellipsis-h" />
                      </button>
                      <div
                        className="dropdown-menu dropdown-menu-right"
                        aria-labelledby="gedf-drop1"
                      >
                        <div className="h6 dropdown-header">Configuration</div>
                        <a className="dropdown-item" href="#">
                          Save
                        </a>
                        <a className="dropdown-item" href="#">
                          Hide
                        </a>
                        <a className="dropdown-item" href="#">
                          Report
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card-body">
                <div className="text-muted h7 mb-2">
                  {" "}
                  <i className="fa fa-clock-o" />
                  10 min ago
                </div>
                <a className="card-link" href="#">
                  <h5 className="card-title">
                    Lorem ipsum dolor sit amet, consectetur adip.
                  </h5>
                </a>
                <p className="card-text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo
                  recusandae nulla rem eos ipsa praesentium esse magnam nemo
                  dolor sequi fuga quia quaerat cum, obcaecati hic, molestias
                  minima iste voluptates.
                </p>
              </div>
              <div className="card-footer">
                <a href="#" className="card-link">
                  <i className="fa fa-gittip" /> Like
                </a>
                <a href="#" className="card-link">
                  <i className="fa fa-comment" /> Comment
                </a>
                <a href="#" className="card-link">
                  <i className="fa fa-mail-forward" /> Share
                </a>
              </div>
            </div>
            {/* Post /////*/}
            {/*- \\\\\\\Post*/}
            <div className="card gedf-card">
              <div className="card-header">
                <div className="d-flex justify-content-between align-items-center">
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="mr-2">
                      <img
                        className="rounded-circle"
                        width={45}
                        src="https://picsum.photos/50/50"
                        alt=""
                      />
                    </div>
                    <div className="ml-2">
                      <div className="h5 m-0">@LeeCross</div>
                      <div className="h7 text-muted">Miracles Lee Cross</div>
                    </div>
                  </div>
                  <div>
                    <div className="dropdown">
                      <button
                        className="btn btn-link dropdown-toggle"
                        type="button"
                        id="gedf-drop1"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        <i className="fa fa-ellipsis-h" />
                      </button>
                      <div
                        className="dropdown-menu dropdown-menu-right"
                        aria-labelledby="gedf-drop1"
                      >
                        <div className="h6 dropdown-header">Configuration</div>
                        <a className="dropdown-item" href="#">
                          Save
                        </a>
                        <a className="dropdown-item" href="#">
                          Hide
                        </a>
                        <a className="dropdown-item" href="#">
                          Report
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card-body">
                <div className="text-muted h7 mb-2">
                  {" "}
                  <i className="fa fa-clock-o" /> 10 min ago
                </div>
                <a className="card-link" href="#">
                  <h5 className="card-title">
                    {" "}
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Velit consectetur deserunt illo esse distinctio.
                  </h5>
                </a>
                <p className="card-text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Magnam omnis nihil, aliquam est, voluptates officiis iure
                  soluta alias vel odit, placeat reiciendis ut libero! Quas
                  aliquid natus cumque quae repellendus. Lorem ipsum dolor sit
                  amet consectetur adipisicing elit. Ipsa, excepturi.
                  Doloremque, reprehenderit! Quos in maiores, soluta doloremque
                  molestiae reiciendis libero expedita assumenda fuga quae.
                  Consectetur id molestias itaque facere? Hic!
                </p>
                <div>
                  <span className="badge badge-primary">JavaScript</span>
                  <span className="badge badge-primary">Android</span>
                  <span className="badge badge-primary">PHP</span>
                  <span className="badge badge-primary">Node.js</span>
                  <span className="badge badge-primary">Ruby</span>
                  <span className="badge badge-primary">Paython</span>
                </div>
              </div>
              <div className="card-footer">
                <a href="#" className="card-link">
                  <i className="fa fa-gittip" /> Like
                </a>
                <a href="#" className="card-link">
                  <i className="fa fa-comment" /> Comment
                </a>
                <a href="#" className="card-link">
                  <i className="fa fa-mail-forward" /> Share
                </a>
              </div>
            </div>
            {/* Post /////*/}
            {/*- \\\\\\\Post*/}
            <div className="card gedf-card">
              <div className="card-header">
                <div className="d-flex justify-content-between align-items-center">
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="mr-2">
                      <img
                        className="rounded-circle"
                        width={45}
                        src="https://picsum.photos/50/50"
                        alt=""
                      />
                    </div>
                    <div className="ml-2">
                      <div className="h5 m-0">@LeeCross</div>
                      <div className="h7 text-muted">Miracles Lee Cross</div>
                    </div>
                  </div>
                  <div>
                    <div className="dropdown">
                      <button
                        className="btn btn-link dropdown-toggle"
                        type="button"
                        id="gedf-drop1"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        <i className="fa fa-ellipsis-h" />
                      </button>
                      <div
                        className="dropdown-menu dropdown-menu-right"
                        aria-labelledby="gedf-drop1"
                      >
                        <div className="h6 dropdown-header">Configuration</div>
                        <a className="dropdown-item" href="#">
                          Save
                        </a>
                        <a className="dropdown-item" href="#">
                          Hide
                        </a>
                        <a className="dropdown-item" href="#">
                          Report
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card-body">
                <div className="text-muted h7 mb-2">
                  {" "}
                  <i className="fa fa-clock-o" /> Hace 40 min
                </div>
                <a className="card-link" href="#">
                  <h5 className="card-title">
                    Totam non adipisci hic! Possimus ducimus amet, dolores illo
                    ipsum quos cum.
                  </h5>
                </a>
                <p className="card-text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
                  sunt fugit reprehenderit consectetur exercitationem odio, quam
                  nobis? Officiis, similique, harum voluptate, facilis voluptas
                  pariatur dolorum tempora sapiente eius maxime quaerat.
                  <a
                    href="https://mega.nz/#!1J01nRIb!lMZ4B_DR2UWi9SRQK5TTzU1PmQpDtbZkMZjAIbv97hU"
                    target="_blank"
                  >
                    https://mega.nz/#!1J01nRIb!lMZ4B_DR2UWi9SRQK5TTzU1PmQpDtbZkMZjAIbv97hU
                  </a>
                </p>
              </div>
              <div className="card-footer">
                <a href="#" className="card-link">
                  <i className="fa fa-gittip" /> Like
                </a>
                <a href="#" className="card-link">
                  <i className="fa fa-comment" /> Comment
                </a>
                <a href="#" className="card-link">
                  <i className="fa fa-mail-forward" /> Share
                </a>
              </div>
            </div>
            {/* Post /////*/}
          </div>
          <div className="col-md-3">
            <div className="card gedf-card">
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="#" className="card-link">
                  Card link
                </a>
                <a href="#" className="card-link">
                  Another link
                </a>
              </div>
            </div>
            <div className="card gedf-card">
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="#" className="card-link">
                  Card link
                </a>
                <a href="#" className="card-link">
                  Another link
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
