import React from "react";
import "../App.css";
import dogge from "../Assests/dogge.png";
import graph from "../Assests/graph.png";
import place from "../Assests/place.png";
import tableimage from "../Assests/tableimage.png";
const Home = () => {
  const Style = {
    width: "100%",
  };
  const Styles = {
    backgroundColor: "white",
    color: "#172b4c",
    borderRadius: "5px",
    minWidth: "80px",
    marginBottom: "10px",
    marginTop: "5px",
  };

  return (
    <>
      {/*banner section */}
      <section className="m-2 p-2">
        <div className="container-fluid">
          <div className="row">
            <div
              className="col col-lg-8 col-md-7 col-sm-12 col-12 d-flex flex-column justify-content-center align-items-left"
              data-aos="fade-right"
            >
              <h1 className="banner-title">
                Top Memes Tokens by Market Capitalization
              </h1>
              <p className="banner-para">
                This page lists the top meme coins and tokens. These projects
                are listed by market capitalization with the largest first and
                then descending in order.
              </p>
            </div>
            <div
              className="col col-lg-4 col-md-5 col-sm-12 col-12"
              data-aos="fade-left"
            >
              <img
                src="https://luvfinder.luvinu.io/static/media/min.31434c0936590ed1d3e0.png"
                width="100%"
                alt="banner"
              ></img>
            </div>
          </div>
        </div>
      </section>
      {/*coin section */}
      <section className="p-2 m-2">
        <div className="container-fluid">
          <div className="row" data-aos="fade-up">
            <div className="col-lg-2 col-md-6 col-sm-6 col-12">
              <div className="card pull-up mt-5" style={Style}>
                <div className="card-body ">
                  <h5 className="card-title d-flex">
                    <img
                      src={dogge}
                      alt="dogge"
                      width="30px"
                      height="30px"
                    ></img>
                    <div className="title-padding">
                      <div className="coin-title">DOGGE/USD</div>{" "}
                      <div className="dogge-currency">Dogecoin/U.S. Dollar</div>
                    </div>
                  </h5>
                  <h4 className="card-text card-desc">0.81%</h4>
                  <h6 className="coin-time">Last 5 mins</h6>
                  <div className="card-text">
                    <img
                      src={graph}
                      alt="graph"
                      height="30px"
                      width="150px"
                      className="graph"
                    ></img>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-2 col-md-6 col-sm-6 col-12">
              <div className="card pull-up mt-5" style={Style}>
                <div className="card-body">
                  <h5 className="card-title d-flex">
                    <img
                      src={dogge}
                      alt="dogge"
                      width="30px"
                      height="30px"
                    ></img>
                    <div className="title-padding">
                      <div className="coin-title">DOGGE/USD</div>
                      <div className="dogge-currency">Dogecoin/U.S. Dollar</div>
                    </div>
                  </h5>
                  <h4 className="card-text card-desc">0.36 %</h4>
                  <h6 className="coin-time">Last 1 hours</h6>
                  <div className="card-text">
                    <img
                      src={graph}
                      alt="graph"
                      height="30px"
                      width="150px"
                      className="graph"
                    ></img>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-12 col-xs-12 m-auto">
              <div className="card pull-up mt-5 text-center market">
                <div className="card-body">
                  <h3 className="market-title">Best Price to trade</h3>
                  <h4 className="card-text market-text">0.13738152 %</h4>
                  <div className="market-para">
                    Average Doge / USD net price including commission
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-2 col-md-6 col-sm-6 col-12">
              <div className="card pull-up mt-5" style={Style}>
                <div className="card-body">
                  <h5 className="card-title d-flex">
                    <img
                      src={dogge}
                      alt="dogge"
                      width="30px"
                      height="30px"
                    ></img>
                    <div className="title-padding">
                      <div className="coin-title">DOGGE/USD</div>
                      <div className="dogge-currency">Dogecoin/U.S. Dollar</div>
                    </div>
                  </h5>
                  <h4 className="card-text card-desc">6.35 %</h4>
                  <h6 className="coin-time">Last 1 day</h6>
                  <div className="card-text">
                    <img
                      src={graph}
                      alt="graph"
                      height="30px"
                      width="150px"
                      className="graph"
                    ></img>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-2 col-md-6 col-sm-6 col-12">
              <div className="card pull-up mt-5" style={Style}>
                <div className="card-body">
                  <h5 className="card-title d-flex">
                    <img
                      src={dogge}
                      alt="dogge"
                      width="30px"
                      height="30px"
                    ></img>
                    <div className="title-padding">
                      <div className="coin-title">DOGGE/USD</div>
                      <div className="dogge-currency">Dogecoin/U.S. Dollar</div>
                    </div>
                  </h5>
                  <h4 className="card-text card-desc">15.19 %</h4>
                  <h6 className="coin-time">Last 7 days</h6>
                  <div className="card-text">
                    <img
                      src={graph}
                      alt="graph"
                      height="30px"
                      width="150px"
                      className="graph"
                    ></img>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*place and price section */}
      <section className="p-2 m-2" id="market">
        <div className="container-fluid">
          <div className="row price-section">
            <div className="col-lg-4 col-md-4 col-12" data-aos="fade-up">
              <div className="card pull-up mt-5 card-width">
                <div className="card-body">
                  <h3 className="market-title">Best Place to sell at:</h3>
                  <h5 className="card-title d-flex">
                    <img
                      src={place}
                      alt="place"
                      width="30px"
                      height="30px"
                    ></img>
                    <div className="place-style">
                      <div className="company-name">OKcoin</div>
                      <div className="coin-price">Dogecoin / U.S. Dollar</div>
                    </div>
                  </h5>
                  <h4 className="card-text current-price"> $0.1439</h4>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-12" data-aos="fade-up">
              <div className="card pull-up mt-5 card-width">
                <div className="card-body">
                  <h3 className="market-title">Best Place to purcahse at:</h3>
                  <h5 className="card-title d-flex">
                    <img
                      src={place}
                      alt="place"
                      width="30px"
                      height="30px"
                    ></img>
                    <div className="place-style">
                      <div className="company-name">Bittrex</div>
                      <div className="coin-price">Dogecoin / U.S. Dollar</div>
                    </div>
                  </h5>
                  <h4 className="card-text current-price"> $0.00000343</h4>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-xs-12" data-aos="fade-up">
              <div className="card pull-up mt-5 card-width">
                <div className="card-body">
                  <h3 className="market-title profit">
                    The profit you earn at 1 DOGE Coin
                  </h3>
                  <h5 className="card-title d-flex">
                    <img
                      src={place}
                      alt="place"
                      width="30px"
                      height="30px"
                    ></img>
                    <div className="place-style">
                      <div className="company-name">DOGE/USD</div>
                      <div className="coin-price">Dogecoin / U.S. Dollar</div>
                    </div>
                  </h5>
                  <h4 className="card-text current-price">$ 0.14290957</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*filter section */}
      <section className="p-2 m-2 filter d-flex">
        <div class="nav-item dropdown">
          <a
            class="nav-link dropdown-toggle"
            href="#"
            id="navbarDropdown"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
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
              <a class="dropdown-item" href="#">
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
                BTC
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
        </div>
        <div class="nav-item dropdown">
          <a
            class="nav-link dropdown-toggle"
            href="#"
            id="navbarDropdown"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            DOGE
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
                HOGE
              </a>
            </li>
          </ul>
        </div>
      </section>
      {/*table section */}
      <section className="p-2 m-2 table-section">
        <table class="table table-responsive" data-aos="fade-up">
          <thead>
            <tr className="heading">
              <th scope="col">#</th>
              <th scope="col">Platform</th>
              <th scope="col">Last Traded Price</th>
              <th scope="col">Bid Percentage</th>
              <th scope="col">Volume</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td className="d-flex align-items-left justify-content-start">
                <img
                  className="image-circle"
                  src={tableimage}
                  alt="logo"
                  width="18px"
                  height="23px"
                ></img>
                <span style={{ fontWeight: 600 }}>KuCoin</span>
              </td>
              <td>
                <span style={{ fontWeight: "600", marginRight: "5px" }}>$</span>
                <span>0.000045</span>
              </td>
              <td>0.087412 %</td>
              <td>
                <span style={{ fontWeigt: "600", marginRight: "5px" }}>$</span>
                <span style={{ display: "inline" }}>2,205,690.5</span>
              </td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td className="d-flex align-items-left justify-content-start">
                <img
                  className="image-circle"
                  src={tableimage}
                  alt="logo"
                  width="18px"
                  height="23px"
                ></img>
                <span style={{ fontWeight: 600 }}>KuCoin</span>
              </td>
              <td>
                <span style={{ fontWeight: "600", marginRight: "5px" }}>$</span>
                <span>0.000045</span>
              </td>
              <td>0.087412 %</td>
              <td>
                <span style={{ fontWeigt: "600", marginRight: "5px" }}>$</span>
                <div style={{ display: "inline" }}>2,205,690.5</div>
              </td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td className="d-flex align-items-left justify-content-start">
                <img
                  className="image-circle"
                  src={tableimage}
                  alt="logo"
                  width="18px"
                  height="23px"
                ></img>
                <span style={{ fontWeight: 600 }}>KuCoin</span>
              </td>
              <td>
                <span style={{ fontWeight: "600", marginRight: "5px" }}>$</span>
                <span>0.000045</span>
              </td>
              <td>0.087412 %</td>
              <td>
                <span style={{ fontWeigt: "600", marginRight: "5px" }}>$</span>
                <div style={{ display: "inline" }}>2,205,690.5</div>
              </td>
            </tr>
            <tr>
              <th scope="row">4</th>
              <td className="d-flex align-items-left justify-content-start">
                <img
                  className="image-circle"
                  src={tableimage}
                  alt="logo"
                  width="18px"
                  height="23px"
                ></img>
                <span style={{ fontWeight: 600 }}>KuCoin</span>
              </td>
              <td>
                <span style={{ fontWeight: "600", marginRight: "5px" }}>$</span>
                <span>0.000045</span>
              </td>
              <td>0.087412 %</td>
              <td>
                <span style={{ fontWeigt: "600", marginRight: "5px" }}>$</span>
                <div style={{ display: "inline" }}>2,205,690.5</div>
              </td>
            </tr>
            <tr>
              <th scope="row">5</th>
              <td className="d-flex align-items-left justify-content-start">
                <img
                  className="image-circle"
                  src={tableimage}
                  alt="logo"
                  width="18px"
                  height="23px"
                ></img>
                <span style={{ fontWeight: 600 }}>KuCoin</span>
              </td>
              <td>
                <span style={{ fontWeight: "600", marginRight: "5px" }}>$</span>
                <span>0.000045</span>
              </td>
              <td>0.087412 %</td>
              <td>
                <span style={{ fontWeigt: "600", marginRight: "5px" }}>$</span>
                <div style={{ display: "inline" }}>2,205,690.5</div>
              </td>
            </tr>
            <tr>
              <th scope="row">6</th>
              <td className="d-flex align-items-left justify-content-start">
                <img
                  className="image-circle"
                  src={tableimage}
                  alt="logo"
                  width="18px"
                  height="23px"
                ></img>
                <span style={{ fontWeight: 600 }}>KuCoin</span>
              </td>
              <td>
                <span style={{ fontWeight: "600", marginRight: "5px" }}>$</span>
                <span>0.000045</span>
              </td>
              <td>0.087412 %</td>
              <td>
                <span style={{ fontWeigt: "600", marginRight: "5px" }}>$</span>
                <div style={{ display: "inline" }}>2,205,690.5</div>
              </td>
            </tr>
            <tr>
              <th scope="row">7</th>
              <td className="d-flex align-items-left justify-content-start">
                <img
                  className="image-circle"
                  src={tableimage}
                  alt="logo"
                  width="18px"
                  height="23px"
                ></img>
                <span style={{ fontWeight: 600 }}>KuCoin</span>
              </td>
              <td>
                <span style={{ fontWeight: "600", marginRight: "5px" }}>$</span>
                <span>0.000045</span>
              </td>
              <td>0.087412 %</td>
              <td>
                <span style={{ fontWeigt: "600", marginRight: "5px" }}>$</span>
                <div style={{ display: "inline" }}>2,205,690.5</div>
              </td>
            </tr>
            <tr>
              <th scope="row">8</th>
              <td className="d-flex align-items-left justify-content-start">
                <img
                  className="image-circle"
                  src={tableimage}
                  alt="logo"
                  width="18px"
                  height="23px"
                ></img>
                <span style={{ fontWeight: 600 }}>KuCoin</span>
              </td>
              <td>
                <span style={{ fontWeight: "600", marginRight: "5px" }}>$</span>
                <span>0.000045</span>
              </td>
              <td>0.087412 %</td>
              <td>
                <span style={{ fontWeigt: "600", marginRight: "5px" }}>$</span>
                <div style={{ display: "inline" }}>2,205,690.5</div>
              </td>
            </tr>
            <tr>
              <th scope="row">9</th>
              <td className="d-flex align-items-left justify-content-start">
                <img
                  className="image-circle"
                  src={tableimage}
                  alt="logo"
                  width="18px"
                  height="23px"
                ></img>
                <span style={{ fontWeight: 600 }}>KuCoin</span>
              </td>
              <td>
                <span style={{ fontWeight: "600", marginRight: "5px" }}>$</span>
                <span>0.000045</span>
              </td>
              <td>0.087412 %</td>
              <td>
                <span style={{ fontWeigt: "600", marginRight: "5px" }}>$</span>
                <div style={{ display: "inline" }}>2,205,690.5</div>
              </td>
            </tr>
            <tr>
              <th scope="row">10</th>
              <td className="d-flex align-items-left justify-content-start">
                <img
                  className="image-circle"
                  src={tableimage}
                  alt="logo"
                  width="18px"
                  height="23px"
                ></img>
                <span style={{ fontWeight: 600 }}>KuCoin</span>
              </td>
              <td>
                <span style={{ fontWeight: "600", marginRight: "5px" }}>$</span>
                <span>0.000045</span>
              </td>
              <td>0.087412 %</td>
              <td>
                <span style={{ fontWeigt: "600", marginRight: "5px" }}>$</span>
                <div style={{ display: "inline" }}>2,205,690.5</div>
              </td>
            </tr>
            <tr>
              <th scope="row">11</th>
              <td className="d-flex align-items-left justify-content-start">
                <img
                  className="image-circle"
                  src={tableimage}
                  alt="logo"
                  width="18px"
                  height="23px"
                ></img>
                <span style={{ fontWeight: 600 }}>KuCoin</span>
              </td>
              <td>
                <span style={{ fontWeight: "600", marginRight: "5px" }}>$</span>
                <span>0.000045</span>
              </td>
              <td>0.087412 %</td>
              <td>
                <span style={{ fontWeigt: "600", marginRight: "5px" }}>$</span>
                <div style={{ display: "inline" }}>2,205,690.5</div>
              </td>
            </tr>
            <tr>
              <th scope="row">12</th>
              <td className="d-flex align-items-left justify-content-start">
                <img
                  className="image-circle"
                  src={tableimage}
                  alt="logo"
                  width="18px"
                  height="23px"
                ></img>
                <span style={{ fontWeight: 600 }}>KuCoin</span>
              </td>
              <td>
                <span style={{ fontWeight: "600", marginRight: "5px" }}>$</span>
                <span>0.000045</span>
              </td>
              <td>0.087412 %</td>
              <td>
                <span style={{ fontWeigt: "600", marginRight: "5px" }}>$</span>
                <div style={{ display: "inline" }}>2,205,690.5</div>
              </td>
            </tr>
            <tr>
              <th scope="row">13</th>
              <td className="d-flex align-items-left justify-content-start">
                <img
                  className="image-circle"
                  src={tableimage}
                  alt="logo"
                  width="18px"
                  height="23px"
                ></img>
                <span style={{ fontWeight: 600 }}>KuCoin</span>
              </td>
              <td>
                <span style={{ fontWeight: "600", marginRight: "5px" }}>$</span>
                <span>0.000045</span>
              </td>
              <td>0.087412 %</td>
              <td>
                <span style={{ fontWeigt: "600", marginRight: "5px" }}>$</span>
                <div style={{ display: "inline" }}>2,205,690.5</div>
              </td>
            </tr>
            <tr>
              <th scope="row">14</th>
              <td className="d-flex align-items-left justify-content-start">
                <img
                  className="image-circle"
                  src={tableimage}
                  alt="logo"
                  width="18px"
                  height="23px"
                ></img>
                <span style={{ fontWeight: 600 }}>KuCoin</span>
              </td>
              <td>
                <span style={{ fontWeight: "600", marginRight: "5px" }}>$</span>
                <span>0.000045</span>
              </td>
              <td>0.087412 %</td>
              <td>
                <span style={{ fontWeigt: "600", marginRight: "5px" }}>$</span>
                <div style={{ display: "inline" }}>2,205,690.5</div>
              </td>
            </tr>
            <tr>
              <th scope="row">15</th>
              <td className="d-flex align-items-left justify-content-start">
                <img
                  className="image-circle"
                  src={tableimage}
                  alt="logo"
                  width="18px"
                  height="23px"
                ></img>
                <span style={{ fontWeight: 600 }}>KuCoin</span>
              </td>
              <td>
                <span style={{ fontWeight: "600", marginRight: "5px" }}>$</span>
                <span>0.000045</span>
              </td>
              <td>0.087412 %</td>
              <td>
                <span style={{ fontWeigt: "600", marginRight: "5px" }}>$</span>
                <div style={{ display: "inline" }}>2,205,690.5</div>
              </td>
            </tr>
            <tr>
              <th scope="row">16</th>
              <td className="d-flex align-items-left justify-content-start">
                <img
                  className="image-circle"
                  src={tableimage}
                  alt="logo"
                  width="18px"
                  height="23px"
                ></img>
                <span style={{ fontWeight: 600 }}>KuCoin</span>
              </td>
              <td>
                <span style={{ fontWeight: "600", marginRight: "5px" }}>$</span>
                <span>0.000045</span>
              </td>
              <td>0.087412 %</td>
              <td>
                <span style={{ fontWeigt: "600", marginRight: "5px" }}>$</span>
                <div style={{ display: "inline" }}>2,205,690.5</div>
              </td>
            </tr>
            <tr>
              <th scope="row">17</th>
              <td className="d-flex align-items-left justify-content-start">
                <img
                  className="image-circle"
                  src={tableimage}
                  alt="logo"
                  width="18px"
                  height="23px"
                ></img>
                <span style={{ fontWeight: 600 }}>KuCoin</span>
              </td>
              <td>
                <span style={{ fontWeight: "600", marginRight: "5px" }}>$</span>
                <span>0.000045</span>
              </td>
              <td>0.087412 %</td>
              <td>
                <span style={{ fontWeigt: "600", marginRight: "5px" }}>$</span>
                <div style={{ display: "inline" }}>2,205,690.5</div>
              </td>
            </tr>
            <tr>
              <th scope="row">18</th>
              <td className="d-flex align-items-left justify-content-start">
                <img
                  className="image-circle"
                  src={tableimage}
                  alt="logo"
                  width="18px"
                  height="23px"
                ></img>
                <span style={{ fontWeight: 600 }}>KuCoin</span>
              </td>
              <td>
                <span style={{ fontWeight: "600", marginRight: "5px" }}>$</span>
                <span>0.000045</span>
              </td>
              <td>0.087412 %</td>
              <td>
                <span style={{ fontWeigt: "600", marginRight: "5px" }}>$</span>
                <div style={{ display: "inline" }}>2,205,690.5</div>
              </td>
            </tr>
            <tr>
              <th scope="row">19</th>
              <td className="d-flex align-items-left justify-content-start">
                <img
                  className="image-circle"
                  src={tableimage}
                  alt="logo"
                  width="18px"
                  height="23px"
                ></img>
                <span style={{ fontWeight: 600 }}>KuCoin</span>
              </td>
              <td>
                <span style={{ fontWeight: "600", marginRight: "5px" }}>$</span>
                <span>0.000045</span>
              </td>
              <td>0.087412 %</td>
              <td>
                <span style={{ fontWeigt: "600", marginRight: "5px" }}>$</span>
                <div style={{ display: "inline" }}>2,205,690.5</div>
              </td>
            </tr>
            <tr>
              <th scope="row">20</th>
              <td className="d-flex align-items-left justify-content-start">
                <img
                  className="image-circle"
                  src={tableimage}
                  alt="logo"
                  width="18px"
                  height="23px"
                ></img>
                <span style={{ fontWeight: 600 }}>KuCoin</span>
              </td>
              <td>
                <span style={{ fontWeight: "600", marginRight: "5px" }}>$</span>
                <span>0.000045</span>
              </td>
              <td>0.087412 %</td>
              <td>
                <span style={{ fontWeigt: "600", marginRight: "5px" }}>$</span>
                <div style={{ display: "inline" }}>2,205,690.5</div>
              </td>
            </tr>
            <tr>
              <th scope="row">21</th>
              <td className="d-flex align-items-left justify-content-start">
                <img
                  className="image-circle"
                  src={tableimage}
                  alt="logo"
                  width="18px"
                  height="23px"
                ></img>
                <span style={{ fontWeight: 600 }}>KuCoin</span>
              </td>
              <td>
                <span style={{ fontWeight: "600", marginRight: "5px" }}>$</span>
                <span>0.000045</span>
              </td>
              <td>0.087412 %</td>
              <td>
                <span style={{ fontWeigt: "600", marginRight: "5px" }}>$</span>
                <div style={{ display: "inline" }}>2,205,690.5</div>
              </td>
            </tr>
          </tbody>
        </table>
      </section>
      {/*footer section */}
      <footer className="footer">
        <ul className="navbar-nav">
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
              className="nav-link dropdown-toggle text-center "
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
        </ul>
      </footer>
    </>
  );
};
export default Home;
