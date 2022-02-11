//just mongoClient
const { MongoClient } = require("mongodb");

//uri
const connectionString = "";

//new mongoClient using our database connection string
// const client = new MongoClient(connectionString);

//connect to db through MongoClient
const init = async () => {
  let client = await MongoClient.connect(connectionString);
  return client.db();
}

module.exports = { init };
