import React, { useContext, useState, useEffect } from "react";
const AppContext = React.createContext();
const AppProvider = ({ children }) => {
  const [currency, setCurrency] = useState("USD");
  const [BitCoin, setBitCoin] = useState("DOGE");
  const [info, setInfo] = useState([]);
  const [sortedInfo, setsortedInfo] = useState([]);
  const [sign, setSign] = useState([]);
  const [loading, setLoading] = useState(true);
  const [mydata, setMydata] = useState({
    place2Sell: "",
    place2Purchase: "",
    averageTarde: "",
    Company: "",
    PurchaseAt: "",
  });
  const items = [
    { id: "USD", symbol: "$" },
    { id: "INR", symbol: "₹" },
    { id: "JPY", symbol: "¥" },
    { id: "EUR", symbol: "€" },
    { id: "RUB", symbol: "₽" },
    { id: "CAKE", symbol: "CAKE" },
    { id: "BTC", symbol: "BTC" },
    { id: "BNB", symbol: "BNB" },
    { id: "ETH", symbol: "ETH" },
  ];
  const url = `https://luvfinder.luvinu.io/api/getmemeMarket/${BitCoin}-${currency}`;
  const HandleClick = (e) => {
    setCurrency(e.target.innerHTML);
  };
  const HandleBitCoin = (e) => {
    setBitCoin(e.target.innerHTML);
  };
  const fetchDetails = async () => {
    const response = await fetch(url);
    const data = await response.json();
    const sortedData = data.result[0].maindata.sort(
      (a, b) => a.last_trade_price - b.last_trade_price
    );
    setLoading(false);
    setInfo(data.result);
    setsortedInfo(sortedData);
    const Length = sortedData.length - 1;
    const PlaceSell = sortedData[Length].last_trade_price;
    const placePurcahse = sortedData[0].last_trade_price;
    const FirstCol = sortedData[Length].name;
    const secondCol = sortedData[0].name;
    setMydata({
      place2Sell: PlaceSell,
      place2Purchase: placePurcahse,
      averageTarde: PlaceSell - placePurcahse,
      Company: FirstCol,
      PurchaseAt: secondCol,
    });
    const array = items.filter((Sign) => {
      if (Sign.id === currency) return Sign.symbol;
    });
    setSign(array);
  };
  useEffect(() => {
    fetchDetails();
  }, [currency, BitCoin]);
  return (
    <AppContext.Provider
      value={{
        currency,
        BitCoin,
        HandleClick,
        HandleBitCoin,
        info,
        mydata,
        sortedInfo,
        loading,
        sign,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
export const useGLobalContext = () => {
  return useContext(AppContext);
};
export { AppContext, AppProvider };
