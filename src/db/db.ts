import { MongoClient } from "mongodb";

const { DB_USER, DB_PASSWORD, DB_HOST, DB_PORT, DB_NAME } = process.env;

const url = `mongodb://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}`;

const connectDB = async () => {
  try {
    let connection: any;
    const client = await MongoClient.connect(url);
    connection = client.db(DB_NAME);
    return connection;
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

export default connectDB;
