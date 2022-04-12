import React from "react";
import "../App.css";
import { Link } from "react-router-dom";
const Navbar = () => {
  const Styles = {
    backgroundColor: "rgb(255, 179, 31)",
    color: "white",
    borderRadius: "5px",
    minWidth: "80px",
    marginBottom: "10px",
  };
  const twitter = {
    backgroundColor: "rgb(34, 158, 217)",
    borderRadius: "7px",
    marginLeft: "15px",
    color: "white",
    width: "120px",
    marginBottom: "10px",
  };

  return (
    <section className="p-4 m-4">
      <nav className="navbar fixed-top navbar-expand-lg navbar-light p-4">
        <div className="container-fluid">
          <a className="navbar-brand brand" href="/">
            LU❤️FINDER
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/#market" id="market">
                  Market
                </Link>
              </li>
              <li class="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle text-center"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  style={Styles}
                >
                  USD
                </a>
                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <a class="dropdown-item" href="#">
                      USD
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      INR
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      JPY
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      EUR
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      RUB
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      CAKE
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      BTS
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      BNB
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      ETH
                    </a>
                  </li>
                </ul>
              </li>
              <li class="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle text-center"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  style={Styles}
                >
                  DOBO
                </a>
                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <a class="dropdown-item" href="#">
                      DOGE
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      SHIB
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      MIM
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      SPELL
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      BABYDOGE
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      ELON
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      SAMO
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      CATE
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      HOGE
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      DOBO
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item mr-0" style={twitter}>
                <a
                  href="https://twitter.com/LuvInuCoin"
                  target="_blank"
                  className="btn twitter-btn"
                >
                  CONNECT
                  <i class="fa-brands fa-twitter"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </section>
  );
};
export default Navbar;
