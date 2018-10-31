export const WEATHER_URL = (city: string) => {
  return `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=61e3e43bf6408e6b91f59f40a49face3`;
};
