import React from "react";

const App = () => {
  return (
    <div>
      <div className="main-box">
        <div className="search">
          <div className="icon"></div>
          <div className="input">
            <input
              type="text"
              id="search-Input"
              placeholder="نام شهر را وارد کنید"
            />
          </div>
          <span
            className="clear"
            onclick="document.querySelector('#search-Input').value=''"
          ></span>
        </div>
        <div className="details night">
          <div className="cloud">
            <svg
              width="148"
              height="108"
              viewBox="0 0 148 108"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g filter="url(#filter0_f_13_24)">
                <circle cx="38.8061" cy="38.8061" r="28.8061" fill="#E7B609" />
              </g>
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M96.7871 38.6171C91.9286 31.0499 83.4391 26.0363 73.7786 26.0363C58.6887 26.0363 46.4558 38.2692 46.4558 53.3591C46.4558 53.5428 46.4576 53.726 46.4612 53.9087C44.2985 53.358 42.0327 53.0654 39.6986 53.0654C24.6086 53.0654 12.3758 65.2982 12.3758 80.3882C12.3758 95.4781 24.6086 107.711 39.6986 107.711C44.736 107.711 49.455 106.348 53.5069 103.97C57.5587 106.348 62.2777 107.711 67.3151 107.711C72.9735 107.711 78.23 105.991 82.5906 103.045C86.569 106.15 91.5745 108 97.0121 108C103.252 108 108.923 105.564 113.125 101.591C116.456 103.405 120.274 104.436 124.333 104.436C137.29 104.436 147.794 93.9327 147.794 80.9757C147.794 68.0188 137.29 57.5151 124.333 57.5151C123.019 57.5151 121.729 57.6233 120.474 57.8311C117.282 47.3942 108.01 39.6128 96.7871 38.6171Z"
                fill="white"
              />
              <defs>
                <filter
                  id="filter0_f_13_24"
                  x="0"
                  y="0"
                  width="77.6121"
                  height="77.6121"
                  filterUnits="userSpaceOnUse"
                  color-interpolation-filters="sRGB"
                >
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="BackgroundImageFix"
                    result="shape"
                  />
                  <feGaussianBlur
                    stdDeviation="5"
                    result="effect1_foregroundBlur_13_24"
                  />
                </filter>
              </defs>
            </svg>
          </div>
          <div className="city">
            <h1>اصفهان</h1>
            <span>
              <ion-icon name="location"></ion-icon>
            </span>
          </div>
          <div className="detail">
            <div className="weather">
              <h1 className="temperature">15°</h1>
              <div className="sky">
                <span>
                  <ion-icon name="cloudy"></ion-icon>
                </span>
                <h2>ابری</h2>
              </div>
            </div>
            <div className="time">
              <h2 className="date">جمعه 22 بهمن 1400</h2>
              <h2 className="time">ساعت 1:35</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
