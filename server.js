const express = require("express");
const movies = require("./moviesData");
const moviesData = movies.moviesData;
const cors = require("cors");
const app = express();
const PORT = 3000;
app.use(cors());

app.get("/", (req, res) => {
  res.sendFile("index.html");
});
app.get("/api/movies", (req, res) => {
  res.send(moviesData);
});

app.get("/api/movies/:id", (req, res) => {
  const movie = moviesData.find((movie) => movie.id === req.params.id);
  const notFound = "404 Not Found";
  movie ? res.send(movie) : res.send(notFound);
});

app.listen(process.env.PORT || PORT, () => {
  console.log(`Listening to ${PORT}`);
});
console.log(moviesData);
