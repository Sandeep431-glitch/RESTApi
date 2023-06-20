const mongoose = require("mongoose");

const db = async () => {
  try {
    await mongoose.connect(
      "mongodb://ghoshsandeep431:mfSrtyDEeoHaeTO7@ac-hhoboue-shard-00-00.zf2abjx.mongodb.net:27017,ac-hhoboue-shard-00-01.zf2abjx.mongodb.net:27017,ac-hhoboue-shard-00-02.zf2abjx.mongodb.net:27017/databaserest?ssl=true&replicaSet=atlas-mfxzzc-shard-0&authSource=admin&retryWrites=true&w=majority"
    );
    console.log("Connected to db ");
  } catch (error) {
    console.log("Error connecting", error);
  }
};

module.exports = db;
