import connectDB from "../../db/db";
import { ObjectId } from "mongodb";

export default {
  getCourse: async (root: any, {_id}: any) => {
    console.log(_id);
    const db = await connectDB();
    return await db.collection("courses").findOne({ _id: new ObjectId(_id) });
  },
  getCourses: async () => {
    const db = await connectDB();
    return await db.collection("courses").find().toArray();
  },
}