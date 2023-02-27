import mongoose from "mongoose";

const connect = {};

async function connectDb() {
  if (connect.isConnected) {
    return;
  }

  const db = await mongoose.connect(process.env.MONGOURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  connect.isConnected = db.connections[0].readyState;
}

export default connectDb;
