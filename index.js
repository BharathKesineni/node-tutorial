const express = require("express");
const multer = require("multer");
const cors = require("cors");
const app = express();

app.use(cors());

const PORT = 5500;

const ds = multer.diskStorage({
  destination: "uploads/",
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

const upload = multer({ storage: ds });

app.post("/upload", upload.single("avatar"), (req, res) => {
  res.send("Uploaded successfully!");
});

app.listen(PORT, () => {
  console.log(`server listening on ${PORT}`);
});
