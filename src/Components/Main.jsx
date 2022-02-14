import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import getWeatherInfo from "../redux/weather/weatherAction";
import Details from "./Details";

const Main = () => {
  const { loading, data, error } = useSelector((state) => state);
  const dispatch = useDispatch();
  const [query, setQuery] = useState("");

  const handleGetWeatherInfo = () => {
    dispatch(getWeatherInfo(query));
    setQuery("");
  };

  return (
    <div>
      <div className="main-box">
        <div className="search">
          <div className="icon" onClick={handleGetWeatherInfo}></div>
          <div className="input">
            <input
              type="text"
              id="search-Input"
              placeholder="نام شهر را وارد کنید"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
          </div>
        </div>
        {loading ? (
          <h2>Loading...</h2>
        ) : data.main ? (
          <Details data={data} />
        ) : error ? (
          <div className="error">
            <h3 className="text">نام شهر را به درستی وارد کنید</h3>
          </div>
        ) : (
          <div className="alert">
            <h3 className="text">نام شهر را وارد کنید</h3>
          </div>
        )}
      </div>
    </div>
  );
};

export default Main;