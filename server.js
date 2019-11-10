const express = require("express");
const cors = require("cors");
const app = express();

app.use(express.json());

app.use(cors({ origin: "https://gifted-colden-848734.netlify.com" }));

app.use("/", require("./routes"));

const PORT = 4242;

app.listen(PORT, () => {
  console.log(`server listening on ${PORT}`);
});
