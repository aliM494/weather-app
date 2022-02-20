import axios from "axios";
import { call, put, takeLatest } from "redux-saga/effects";
import { receiveWeatherError, receiveWeatherResponse } from "./weatherAction";
import { SEND_WEATHER_REQUEST } from "./weatherTypes";

const getWeatherInfo = (query) => {
  return axios.get(
    `https://api.openweathermap.org/data/2.5/weather?q=${query}&units=metric&appid=ee76fefa37043ccbcf5ac464af545905`
  );
};

function* handleGetWeather(action) {
  try {
    const res = yield call(getWeatherInfo, action.payload);
    yield put(receiveWeatherResponse(res.data));
  } catch (error) {
    yield put(receiveWeatherError(error.message));
  }
}

export function* watcherSaga() {
  yield takeLatest(SEND_WEATHER_REQUEST, handleGetWeather);
}
