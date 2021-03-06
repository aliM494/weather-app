import {
  RECEIVE_WEATHER_ERROR,
  RECEIVE_WEATHER_RESPONSE,
  SEND_WEATHER_REQUEST,
} from "./weatherTypes";

export const sendWeatherRequest = (query) => {
  return {
    type: SEND_WEATHER_REQUEST,
    payload: query,
  };
};
export const receiveWeatherResponse = (data) => {
  return {
    type: RECEIVE_WEATHER_RESPONSE,
    payload: data,
  };
};
export const receiveWeatherError = (data) => {
  return {
    type: RECEIVE_WEATHER_ERROR,
    payload: data,
  };
};

/*const getWeatherInfo = (query) => {
  return (dispatch) => {
    dispatch(sendWeatherRequest);
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${query}&units=metric&appid=ee76fefa37043ccbcf5ac464af545905`
      )
      .then((res) => {
        dispatch(receiveWeatherResponse(res.data));
      })
      .catch((err) => {
        dispatch(receiveWeatherError(err.message));
      });
  };
};

export default getWeatherInfo;*/
