import { MongoClient } from "mongodb";

const { DB_USER, DB_PASSWORD, DB_HOST, DB_PORT, DB_NAME } = process.env;

const url = `mongodb://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}`;
let connection: any;

const connectDB = async () => {
  if (connection) {
    return connection;
  }
  try {
    const client = await MongoClient.connect(url);
    connection = client.db(DB_NAME);
    return connection;
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

export default connectDB;
