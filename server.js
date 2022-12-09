const express = require("express");
const cors = require("cors");
const MongoClient = require("mongodb").MongoClient;

const app = express();
const port = 3000;
let projectCollection;

app.use(cors());
app.use(express.static(__dirname + "/public"));
app.use(express.json());
app.use(express.urlencoded({ extends: false }));

const cardList = [
  {
    title: "Kitten 2",
    image: "images/kitten-2.jpg",
    link: "About Kitten 2",
    desciption: "Demo desciption about kitten 2",
  },
  {
    title: "Kitten 3",
    image: "images/kitten-3.jpg",
    link: "About Kitten 3",
    desciption: "Demo desciption about kitten 3",
  },
];

const MONGO_URI =
  "mongodb+srv://Spiky14:admin@cholesteroladvisor.vslgm.mongodb.net/DeakinPractical4";

const client = new MongoClient(MONGO_URI, { useNewUrlParser: true });

const createCollection = (collectionName) => {
  client.connect((err, db) => {
    projectCollection = client.db().collection(collectionName);
    if (!err) {
      console.log("MDB Connected");
    } else {
      console.log("MDB Error: ", err);
      process.exit(1);
    }
  });
};

app.get("/api/projects", (req, res) => {
  res.json({ statusCode: 200, data: cardList, message: "Success" });
});

app.listen(port, () => {
  console.log(`App connected to http://localhost:${port}`);
  createCollection("dogs");
});
