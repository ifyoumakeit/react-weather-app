const APIkey = process.env.REACT_APP_API_KEY;

export const fetchLocation = (zip) => {
  return (
    "https://api.openweathermap.org/geo/1.0/zip?zip=" +
    zip +
    ",US&appid=" +
    APIkey
  );
};

export const fetchWeather = (lat, long) => {
  return (
    "https://api.openweathermap.org/data/3.0/onecall?lat=" +
    lat +
    "&lon=" +
    long +
    "&units=imperial&appid=" +
    APIkey
  );
};
