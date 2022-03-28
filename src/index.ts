import express from 'express';
import routes from "./routes";

const app = express();
const port = 3000;

app.use("/", routes);

app.listen(port, () => {
  return console.log(`WeatherDash is listening at http://localhost:${port}`);
});