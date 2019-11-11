const express = require("express");
const cors = require("cors");
const app = express();

app.use(express.json());

const allowedOrigins = [
  "http://localhost:3000",
  "https://gifted-colden-848734.netlify.com"
];

app.use(
  cors({
    origin: function(origin, callback) {
      if (!origin) return callback(null, true);
      if (allowedOrigins.indexOf(origin) === -1) {
        const msg =
          "The CORS policy for this site does not " +
          "allow access from the specified Origin.";
        return callback(new Error(msg), false);
      }
      return callback(null, true);
    }
  })
);

app.use("/", require("./routes"));

const PORT = process.env.PORT || 4040;
console.log(process.env.PORT);
app.listen(PORT, () => {
  console.log(`server listening on ${PORT}`);
});
