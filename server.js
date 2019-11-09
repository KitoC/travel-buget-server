const express = require("express");
const cors = require("cors");
const app = express();

app.use(express.json());

app.use(cors());

app.use("/", require("./routes"));

const PORT = 4242;

app.listen(PORT, () => {
  console.log(`server listening on ${PORT}`);
});
