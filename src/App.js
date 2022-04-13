import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Component/Home";
import Loading from "./Component/Loading";
import Navbar from "./Component/Navbar";
import { useGLobalContext } from "./Component/Context";
const App = () => {
  const { loading } = useGLobalContext();
  if (loading === true) {
    return (
      <>
        <Loading />
      </>
    );
  }
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Home />} />
        </Routes>
      </Router>
    </>
  );
};
export default App;
