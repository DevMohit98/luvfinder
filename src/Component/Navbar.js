import React from "react";
import "../App.css";
import { Link } from "react-router-dom";
import { useGLobalContext } from "./Context";
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
  const { currency, BitCoin, HandleClick, HandleBitCoin } = useGLobalContext();
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
                  {currency}
                </a>
                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <a class="dropdown-item" href="#" onClick={HandleClick}>
                      USD
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#" onClick={HandleClick}>
                      INR
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#" onClick={HandleClick}>
                      JPY
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#" onClick={HandleClick}>
                      EUR
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#" onClick={HandleClick}>
                      RUB
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#" onClick={HandleClick}>
                      CAKE
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#" onClick={HandleClick}>
                      BTC
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#" onClick={HandleClick}>
                      BNB
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#" onClick={HandleClick}>
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
                  {BitCoin}
                </a>
                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <a class="dropdown-item" href="#" onClick={HandleBitCoin}>
                      DOGE
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#" onClick={HandleBitCoin}>
                      SHIB
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#" onClick={HandleBitCoin}>
                      MIM
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#" onClick={HandleBitCoin}>
                      SPELL
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#" onClick={HandleBitCoin}>
                      BABYDOGE
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#" onClick={HandleBitCoin}>
                      ELON
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#" onClick={HandleBitCoin}>
                      SAMO
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#" onClick={HandleBitCoin}>
                      CATE
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#" onClick={HandleBitCoin}>
                      HOGE
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#" onClick={HandleBitCoin}>
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
