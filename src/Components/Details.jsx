import React, { useEffect, useState } from "react";
import Cloud from "./Cloud";
import PersianDate from "./PersianDate";

const Details = (props) => {
  const [skyMod, setSkyMod] = useState("");
  const { name, main, weather } = props.data;

  return (
    <>
      <div className={`details ${skyMod}`}>
        <Cloud />
        <div className="city">
          <h1>{name}</h1>
          <span>
            <ion-icon name="location"></ion-icon>
          </span>
        </div>
        <div className={`detail`}>
          <div className="weather">
            <h1 className="temperature">{Math.round(main.temp)}°C</h1>
            <div className="sky">
              <h2>{weather[0].main}</h2>
            </div>
          </div>
          <PersianDate skyMod={skyMod} setSkyMod={setSkyMod} />
        </div>
      </div>
    </>
  );
};

export default Details;
