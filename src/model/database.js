import MongoClient from "mongodb";

export const connect = async () => {
  try {
    const client = await MongoClient.connect(process.env.DB, {
      useUnifiedTopology: true,
    });
    const db = client.db(process.env.NAME_DB);
    console.log("DB Conectada");
    return db;
  } catch {
    throw new Error("Error, no se puede conectad a la DB");
  }
};
