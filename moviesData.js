const uuid = require("uuid");
const moviesData = [
  {
    id: uuid.v4(),
    name: "dexter: new blood",
    year: 2021,
    category: "tv series",
  },
  { id: uuid.v4(), name: "the terminator", year: 1984, category: "action" },
  { id: uuid.v4(), name: "jurassic park", year: 1993, category: "adventure" },
  { id: uuid.v4(), name: "the ring", year: 2002, category: "horror" },
  { id: "unknown", name: "unknown", year: "unknown", category: "unknown" },
];

exports.moviesData = moviesData;
