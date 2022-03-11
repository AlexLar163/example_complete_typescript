import connectDB from "../../db/db";
export default {
  createCourse: async (root: any, { input }: any) => {
    const defaults = { teacher: "", topic: "" };
    let newCourse = Object.assign(defaults, input);
    try {
      const db = await connectDB();
      const course = await db.collection("courses").insertOne(newCourse);
      newCourse._id = course.insertedId;
      return newCourse;
    } catch (error) {
      console.log(error);
    }
  },
};
