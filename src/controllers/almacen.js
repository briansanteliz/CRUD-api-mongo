import { connect } from "../model/database";
import { ObjectID } from "mongodb";

const get = async (req, res) => {
  const db = await connect();
  const query = await db.collection("productos").find({}).toArray();
  res.status(200).json(query);
};
const getById = async (req, res) => {
  const { id } = req.params;
  const db = await connect();
  const query = await db.collection("productos").findOne({ _id: ObjectID(id) });
  if (query !== null) {
    res.status(200).json(query);
  } else {
    res.status(404).json({ message: "Este Producto no existe" });
  }
};
const post = async (req, res) => {
  const db = await connect();
  const { nombre, descripcion, marca, categoria } = req.body;
  const producto = { nombre, descripcion, marca, categoria };
  const query = await db.collection("productos").insertOne(producto);
  const { result, ops } = query;
  res.status(200).json({ datos: ops[0], estado: result.ok });
};
const put = async (req, res) => {
  const { id } = req.params;
  const productoActualizado = { ...req.body };
  const db = await connect();
  const query = await db
    .collection("productos")
    .findOneAndUpdate({ _id: ObjectID(id) }, { $set: productoActualizado });
  const { lastErrorObject } = query;
  res
    .status(200)
    .json({
      message: `El producto con el id '${id}', ha sido actualizado corectamente`,
      estado: lastErrorObject.updatedExisting,
    });
};

const dele = async (req, res) => {
  const { id } = req.params;
  const db = await connect();
  const query = await db.collection("productos").remove({ _id: ObjectID(id) });
  const { result } = query;
  res
    .status(200)
    .json({
      message: `El producto con el id '${id}', ha sido eliminado correctamente`,
      estado: result.ok,
    });
};

module.exports = {
  get,
  getById,
  post,
  put,
  dele,
};
