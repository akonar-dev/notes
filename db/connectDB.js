import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect(`${process.env.DB_URL}` + `/` + `${DB_NAME}`);
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export {connectDB}
