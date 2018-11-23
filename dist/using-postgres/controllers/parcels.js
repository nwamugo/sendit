"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _moment = _interopRequireDefault(require("moment"));

var _uuid = _interopRequireDefault(require("uuid"));

var _models = _interopRequireDefault(require("../models"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Parcels = {
  create: function () {
    async function create(req, res) {
      var createQuery = "INSERT INTO\n    parcels(id, destination, user_id, price, pickup_location, created_date, modified_date, status, present_location)\n    VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9)\n    RETURNING *";
      var values = [_uuid["default"].v4(), req.body.destination, req.user.id, req.body.price, req.body.pickup_location, (0, _moment["default"])(new Date()), (0, _moment["default"])(new Date()), 'Queue', req.body.pickup_location];

      try {
        var _ref = await _models["default"].query(createQuery, values),
            rows = _ref.rows;

        return res.status(201).send(rows[0]);
      } catch (error) {
        return res.status(400).send(error.toString());
      }
    }

    return create;
  }(),
  getAll: function () {
    async function getAll(req, res) {
      var findAllQuery = 'SELECT * FROM parcels where user_id = $1';

      try {
        var _ref2 = await _models["default"].query(findAllQuery, [req.user.id]),
            rows = _ref2.rows,
            rowCount = _ref2.rowCount;

        var allParcels = rows;
        var total = rowCount;
        return res.status(200).send({
          allParcels: allParcels,
          total: total
        });
      } catch (error) {
        return res.status(400).send(error);
      }
    }

    return getAll;
  }(),
  getOne: function () {
    async function getOne(req, res) {
      var text = 'SELECT * FROM parcels WHERE id = $1 AND user_id = $2';

      try {
        var _ref3 = await _models["default"].query(text, [req.params.id, req.user.id]),
            rows = _ref3.rows;

        if (!rows[0]) {
          return res.status(404).send('Parcel was not found');
        }

        return res.status(200).send(rows[0]);
      } catch (error) {
        return res.status(400).send(error);
      }
    }

    return getOne;
  }(),
  cancel: function () {
    async function cancel(req, res) {
      var findOneQuery = 'SELECT * FROM parcels WHERE id=$1 AND user_id = $2';
      var updateOneQuery = "UPDATE parcels\n      SET status=$1, modified_date=$2\n      WHERE id=$3 AND user_id=$4 returning *";

      try {
        var _ref4 = await _models["default"].query(findOneQuery, [req.params.id, req.user.id]),
            rows = _ref4.rows;

        if (!rows[0]) {
          return res.status(404).send({
            message: 'Parcel not found'
          });
        }

        var values = ['cancelled', (0, _moment["default"])(new Date()), req.params.id, req.user.id];
        var response = await _models["default"].query(updateOneQuery, values);
        return res.status(200).send(response.rows[0]);
      } catch (err) {
        return res.status(400).send(err);
      }
    }

    return cancel;
  }(),
  changeDest: function () {
    async function changeDest(req, res) {
      var findOneQuery = 'SELECT * FROM parcels WHERE id=$1 AND user_id=$2';
      var updateOneQuery = "UPDATE parcels\n    SET destination=$1, modified_date=$2\n    WHERE id=$3 AND user_id=$4 returning *";

      try {
        var _ref5 = await _models["default"].query(findOneQuery, [req.params.id, req.user.id]),
            rows = _ref5.rows;

        if (!rows[0]) {
          return res.status(404).send('Parcel not found');
        }

        var values = [req.body.destination || rows[0].destination, (0, _moment["default"])(new Date()), req.params.id, req.user.id];
        var response = await _models["default"].query(updateOneQuery, values);
        return res.status(200).send(response.rows[0]);
      } catch (error) {
        return res.status(400).send(error);
      }
    }

    return changeDest;
  }(),
  changeStatus: function () {
    async function changeStatus(req, res) {
      var findOneQuery = 'SELECT * FROM parcels WHERE id=$1 AND user_id=$2';
      var updateOneQuery = "UPDATE parcels\n      SET status=$1,modified_date=$2\n      WHERE id=$3 AND user_id=$4 returning *";

      try {
        var _ref6 = await _models["default"].query(findOneQuery, [req.params.id, req.user.id]),
            rows = _ref6.rows;

        if (!rows[0]) {
          return res.status(404).send({
            message: 'Parcel not found'
          });
        }

        var values = [req.body.status || rows[0].status, (0, _moment["default"])(new Date()), req.params.id, req.user.id];
        var response = await _models["default"].query(updateOneQuery, values);
        return res.status(200).send(response.rows[0]);
      } catch (err) {
        return res.status(400).send(err);
      }
    }

    return changeStatus;
  }(),
  updatePL: function () {
    async function updatePL(req, res) {
      var findOneQuery = 'SELECT * FROM parcels WHERE id=$1 AND user_id=$2';
      var updateOneQuery = "UPDATE parcels\n      SET present_location=$1,modified_date=$2\n      WHERE id=$3 AND user_id=$4 returning *";

      try {
        var _ref7 = await _models["default"].query(findOneQuery, [req.params.id, req.user.id]),
            rows = _ref7.rows;

        if (!rows[0]) {
          return res.status(404).send({
            message: 'Parcel not found'
          });
        }

        var values = [req.body.present_location || rows[0].present_location, (0, _moment["default"])(new Date()), req.params.id, req.user.id];
        var response = await _models["default"].query(updateOneQuery, values);
        return res.status(200).send(response.rows[0]);
      } catch (err) {
        return res.status(400).send(err);
      }
    }

    return updatePL;
  }()
};
var _default = Parcels;
exports["default"] = _default;