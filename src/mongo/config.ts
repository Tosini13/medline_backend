import mongoose from "mongoose";

export const connectMongoose = () => {
  mongoose.connect(
    `mongodb+srv://${process.env.MONGO_DB_USER}:${process.env.MONGO_DB_PASSWORD}@medline.arwq9.mongodb.net/${process.env.MONGO_DB_DATABASE}?retryWrites=true&w=majority`
  );
  mongoose.Promise = global.Promise;
};
