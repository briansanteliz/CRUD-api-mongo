"use strict";

var _database = require("../model/database");

var _mongodb = require("mongodb");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var get = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {
    var db, query;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return (0, _database.connect)();

          case 2:
            db = _context.sent;
            _context.next = 5;
            return db.collection("productos").find({}).toArray();

          case 5:
            query = _context.sent;
            res.status(200).json(query);

          case 7:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function get(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

var getById = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res) {
    var id, db, query;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            id = req.params.id;
            _context2.next = 3;
            return (0, _database.connect)();

          case 3:
            db = _context2.sent;
            _context2.next = 6;
            return db.collection("productos").findOne({
              _id: (0, _mongodb.ObjectID)(id)
            });

          case 6:
            query = _context2.sent;

            if (query !== null) {
              res.status(200).json(query);
            } else {
              res.status(404).json({
                message: "Este Producto no existe"
              });
            }

          case 8:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function getById(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();

var post = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(req, res) {
    var db, _req$body, nombre, descripcion, marca, categoria, producto, query, result, ops;

    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.next = 2;
            return (0, _database.connect)();

          case 2:
            db = _context3.sent;
            _req$body = req.body, nombre = _req$body.nombre, descripcion = _req$body.descripcion, marca = _req$body.marca, categoria = _req$body.categoria;
            producto = {
              nombre: nombre,
              descripcion: descripcion,
              marca: marca,
              categoria: categoria
            };
            _context3.next = 7;
            return db.collection("productos").insertOne(producto);

          case 7:
            query = _context3.sent;
            result = query.result, ops = query.ops;
            res.status(200).json({
              datos: ops[0],
              estado: result.ok
            });

          case 10:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));

  return function post(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();

var put = /*#__PURE__*/function () {
  var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(req, res) {
    var id, productoActualizado, db, query, lastErrorObject;
    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            id = req.params.id;
            productoActualizado = _objectSpread({}, req.body);
            _context4.next = 4;
            return (0, _database.connect)();

          case 4:
            db = _context4.sent;
            _context4.next = 7;
            return db.collection("productos").findOneAndUpdate({
              _id: (0, _mongodb.ObjectID)(id)
            }, {
              $set: productoActualizado
            });

          case 7:
            query = _context4.sent;
            lastErrorObject = query.lastErrorObject;
            res.status(200).json({
              message: "El producto con el id '".concat(id, "', ha sido actualizado corectamente"),
              estado: lastErrorObject.updatedExisting
            });

          case 10:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));

  return function put(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();

var dele = /*#__PURE__*/function () {
  var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(req, res) {
    var id, db, query, result;
    return regeneratorRuntime.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            id = req.params.id;
            _context5.next = 3;
            return (0, _database.connect)();

          case 3:
            db = _context5.sent;
            _context5.next = 6;
            return db.collection("productos").remove({
              _id: (0, _mongodb.ObjectID)(id)
            });

          case 6:
            query = _context5.sent;
            result = query.result;
            res.status(200).json({
              message: "El producto con el id '".concat(id, "', ha sido eliminado correctamente"),
              estado: result.ok
            });

          case 9:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5);
  }));

  return function dele(_x9, _x10) {
    return _ref5.apply(this, arguments);
  };
}();

module.exports = {
  get: get,
  getById: getById,
  post: post,
  put: put,
  dele: dele
};