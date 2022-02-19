import moment from "moment-jalaali";
import React, { useEffect, useState } from "react";

const weekDays = [
  "یکشنبه",
  "دوشنبه",
  "سه شنبه",
  "چهار شنبه",
  "پنج شنبه",
  "جمعه",
  "شنبه",
];

const yearMonth = [
  "فروردین",
  "اردیبهشت",
  "خرداد",
  "تیر",
  "مرداد",
  "شهریور",
  "مهر",
  "آبان",
  "آذر",
  "دی",
  "بهمن",
  "اسفند",
];

const PersianDate = (props) => {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const { setSkyMod } = props;

  useEffect(() => {
    let m = moment();
    let finalDate = `${weekDays[m.day()]} ${m.jDate()} ${
      yearMonth[m.jMonth()]
    } ${m.jYear()}`;

    setDate(finalDate);
    setTime(m.format("HH:mm"));

    setSkyMod(m.hour() > 18 ? "night" : "");
  }, []);

  return (
    <>
      <div className="time">
        <h3 className="date">{date}</h3>
        <h3 className="cloak">ساعت {time}</h3>
      </div>
    </>
  );
};

export default PersianDate;
