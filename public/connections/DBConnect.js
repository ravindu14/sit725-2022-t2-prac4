const mongoose = require("mongoose");

const MONGO_URI =
  "mongodb+srv://Spiky14:admin@cholesteroladvisor.vslgm.mongodb.net/DeakinPractical4";

const ConnectDB = () => {
  mongoose
    .connect(MONGO_URI, {
      useNewUrlParser: true,
    })
    .then(() => console.log("MDB connected"))
    .catch((error) => console.log(error));
};

module.exports = ConnectDB;
