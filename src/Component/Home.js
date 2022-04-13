import React from "react";
import "../App.css";
import dogge from "../Assests/dogge.png";
import graph from "../Assests/graph.png";
import place from "../Assests/place.png";
import tableimage from "../Assests/tableimage.png";
import { useGLobalContext } from "./Context";
import Loading from "./Loading";
const Home = () => {
  const Style = {
    width: "100%",
  };
  const Styles = {
    backgroundColor: "#ffffff",
    color: "#172b4c",
    borderRadius: "5px",
    minWidth: "80px",
    marginBottom: "10px",
    marginTop: "5px",
    fontFamily: "IBM Plex Sans",
    fontWeight: "700",
  };
  const {
    currency,
    BitCoin,
    HandleClick,
    HandleBitCoin,
    info,
    mydata,
    sortedInfo,
    sign,
  } = useGLobalContext();
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
                style={{ width: "100%" }}
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
                {info.map((items) => {
                  const { previousdata, index } = items;
                  return (
                    <div className="card-body" key={index}>
                      <h5 className="card-title d-flex">
                        <img
                          src={dogge}
                          alt="dogge"
                          width="30px"
                          height="30px"
                        ></img>
                        <div className="title-padding">
                          <div className="coin-title">{`${BitCoin}/${currency}`}</div>
                          <div className="dogge-currency">{`${BitCoin}/${currency}`}</div>
                        </div>
                      </h5>
                      <h4 className="card-text card-desc">
                        {previousdata.last5Mins} %
                      </h4>
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
                  );
                })}
              </div>
            </div>
            <div className="col-lg-2 col-md-6 col-sm-6 col-12">
              <div className="card pull-up mt-5" style={Style}>
                {info.map((items) => {
                  const { previousdata, index } = items;
                  return (
                    <div className="card-body" key={index}>
                      <h5 className="card-title d-flex">
                        <img
                          src={dogge}
                          alt="dogge"
                          width="30px"
                          height="30px"
                        ></img>
                        <div className="title-padding">
                          <div className="coin-title">{`${BitCoin}/${currency}`}</div>
                          <div className="dogge-currency">{`${BitCoin}/${currency}`}</div>
                        </div>
                      </h5>
                      <h4 className="card-text card-desc">
                        {previousdata.last1Hour} %
                      </h4>
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
                  );
                })}
              </div>
            </div>
            <div className="col-lg-3 col-md-12 col-xs-12 m-auto">
              <div className="card pull-up mt-5 text-center market">
                {info.map((items) => {
                  const { previousdata, index } = items;
                  return (
                    <div className="card-body" key={index}>
                      <h3 className="market-title">Best Price to trade</h3>
                      <h4 className="card-text market-text">{`${previousdata.avg_trage} %`}</h4>
                      <div className="market-para">
                        {`Average ${BitCoin} / ${currency} net price including commission`}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="col-lg-2 col-md-6 col-sm-6 col-12">
              <div className="card pull-up mt-5" style={Style}>
                {info.map((items) => {
                  const { previousdata, index } = items;
                  return (
                    <div className="card-body" key={index}>
                      <h5 className="card-title d-flex">
                        <img
                          src={dogge}
                          alt="dogge"
                          width="30px"
                          height="30px"
                        ></img>
                        <div className="title-padding">
                          <div className="coin-title">{`${BitCoin}/${currency}`}</div>
                          <div className="dogge-currency">{`${BitCoin}/${currency}`}</div>
                        </div>
                      </h5>
                      <h4 className="card-text card-desc">
                        {previousdata.last24Hours} %
                      </h4>
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
                  );
                })}
              </div>
            </div>
            <div className="col-lg-2 col-md-6 col-sm-6 col-12">
              <div className="card pull-up mt-5" style={Style}>
                {info.map((items) => {
                  const { previousdata, index } = items;
                  return (
                    <div className="card-body" key={index}>
                      <h5 className="card-title d-flex">
                        <img
                          src={dogge}
                          alt="dogge"
                          width="30px"
                          height="30px"
                        ></img>
                        <div className="title-padding">
                          <div className="coin-title">{`${BitCoin}/${currency}`}</div>
                          <div className="dogge-currency">{`${BitCoin}/${currency}`}</div>
                        </div>
                      </h5>
                      <h4 className="card-text card-desc">
                        {previousdata.last7Days} %
                      </h4>
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
                  );
                })}
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
                      <div className="company-name">{mydata.Company}</div>
                      <div className="coin-price">{`${BitCoin}/${currency}`}</div>
                    </div>
                  </h5>
                  {sign.map((items) => {
                    return (
                      <>
                        <h4 className="card-text current-price">{`${items.symbol} ${mydata.place2Sell}`}</h4>
                      </>
                    );
                  })}
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
                      <div className="company-name">{mydata.PurchaseAt}</div>
                      <div className="coin-price">{`${BitCoin}/${currency}`}</div>
                    </div>
                  </h5>
                  {sign.map((items) => {
                    return (
                      <>
                        <h4 className="card-text current-price">
                          {`${items.symbol} ${mydata.place2Purchase}`}
                        </h4>
                      </>
                    );
                  })}
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-xs-12" data-aos="fade-up">
              <div className="card pull-up mt-5 card-width">
                <div className="card-body">
                  <h3 className="market-title profit">
                    {`The profit you earn at 1 ${BitCoin} Coin`}
                  </h3>
                  <h5 className="card-title d-flex">
                    <img
                      src={place}
                      alt="place"
                      width="30px"
                      height="30px"
                    ></img>
                    <div className="place-style">
                      <div className="company-name">{`${BitCoin}/${currency}`}</div>
                      <div className="coin-price">{`${BitCoin}/${currency}`}</div>
                    </div>
                  </h5>
                  {sign.map((items) => {
                    return (
                      <>
                        <h4 className="card-text current-price">
                          <h4 className="card-text current-price">
                            {`${items.symbol} ${mydata.averageTarde}`}
                          </h4>
                        </h4>
                      </>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*filter section */}
      <section className="p-2 m-2 filter d-flex" data-aos="fade-up">
        <div class="nav-item dropdown">
          <a
            className="nav-link dropdown-toggle"
            href="#"
            id="navbarDropdown"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
            style={{ display: "inline-block" }}
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
              <a class="dropdown-item" href="#" onClick={HandleClick}>
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
        </div>
        <div class="nav-item dropdown">
          <a
            class="nav-link dropdown-toggle"
            href="#"
            id="navbarDropdown"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
            style={{ display: "inline-block" }}
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
          <tbody data-aos="fade-up">
            {sortedInfo.map((items, index) => {
              const { name, last_trade_price, bid_percentage, volume } = items;
              return (
                <tr>
                  <th scope="row">{index + 1}</th>
                  <td className="d-flex align-items-left justify-content-start">
                    <img
                      className="image-circle"
                      src={tableimage}
                      alt="logo"
                      width="18px"
                      height="23px"
                    ></img>
                    <span style={{ fontWeight: 600 }}>{name}</span>
                  </td>
                  <td>
                    {sign.map((items) => {
                      return (
                        <>
                          <span
                            style={{ fontWeight: "600", marginRight: "5px" }}
                          >
                            {items.symbol}
                          </span>
                        </>
                      );
                    })}

                    <span>{last_trade_price}</span>
                  </td>
                  <td>{bid_percentage}</td>
                  <td>
                    {sign.map((items) => {
                      return (
                        <>
                          <span
                            style={{ fontWeight: "600", marginRight: "5px" }}
                          >
                            {items.symbol}
                          </span>
                        </>
                      );
                    })}
                    <div style={{ display: "inline" }}>{volume}</div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </section>
      {/*footer section */}
      <div className="footer fixed-bottom">
        <div className="d-flex justify-content-around align-items-center flex-row">
          <div className="dropdown mt-2 ">
            <button
              className="btn btn-secondary dropdown-toggle"
              type="button"
              id="dropdownMenuButton1"
              data-bs-toggle="dropdown"
              aria-expanded="false"
              style={Styles}
            >
              {currency}
            </button>
            <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
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
                <a class="dropdown-item" href="#" onClick={HandleClick}>
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
          </div>
          <div className="dropdown mt-2 ">
            <button
              class="btn btn-secondary dropdown-toggle"
              type="button"
              id="dropdownMenuButton1"
              data-bs-toggle="dropdown"
              aria-expanded="false"
              style={Styles}
            >
              {BitCoin}
            </button>
            <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
              <li>
                <a class="dropdown-item" href="#" onClick={HandleBitCoin}>
                  DOGE
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="#" onClick={HandleBitCoin}>
                  HOGE
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="#" onClick={HandleBitCoin}>
                  CATE
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="#" onClick={HandleBitCoin}>
                  SAMO
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="#" onClick={HandleBitCoin}>
                  ELON
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="#" onClick={HandleBitCoin}>
                  BABYDOGE
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="#" onClick={HandleBitCoin}>
                  SPELL
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="#" onClick={HandleBitCoin}>
                  MIM
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="#" onClick={HandleBitCoin}>
                  DOGE
                </a>
              </li>
            </ul>
          </div>
          <div className="tele d-flex justify-content-end">
            <div className="footer-twitter-btn">
              <a href="https://t.me/Luvfindingbot" alt="telegram">
                <i class="fa-brands fa-telegram fa-3x"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Home;
