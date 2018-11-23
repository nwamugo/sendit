"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _moment = _interopRequireDefault(require("moment"));

var _uuid = _interopRequireDefault(require("uuid"));

var _models = _interopRequireDefault(require("../models"));

var _helper = _interopRequireDefault(require("./helper"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var User = {
  signup: function () {
    async function signup(req, res) {
      if (!req.body.email || !req.body.password) {
        return res.status(400).send({
          message: 'Some details are missing'
        });
      }

      if (!_helper["default"].isValidEmail(req.body.email)) {
        return res.status(400).send({
          message: 'Please enter a valid email address'
        });
      }

      var hashPassword = _helper["default"].hashPassword(req.body.password);

      var createQuery = "INSERT INTO\n      users(id, email, password, is_admin, created_date, modified_date)\n      VALUES($1, $2, $3, $4, $5, $6)\n      RETURNING *";
      var values = [_uuid["default"].v4(), req.body.email, hashPassword, false, (0, _moment["default"])(new Date()), (0, _moment["default"])(new Date())];

      try {
        var _ref = await _models["default"].query(createQuery, values),
            rows = _ref.rows;

        var token = _helper["default"].generateToken(rows[0].id);

        return res.status(201).send({
          token: token
        });
      } catch (error) {
        if (error.routine === '_bt_check_unique') {
          return res.status(400).send({
            message: 'User with that EMAIL already exists'
          });
        }

        return res.status(400).send(error.toString());
      }
    }

    return signup;
  }(),
  login: function () {
    async function login(req, res) {
      if (!req.body.email || !req.body.password) {
        return res.status(400).send({
          message: 'Some values are missing'
        });
      }

      if (!_helper["default"].isValidEmail(req.body.email)) {
        return res.status(400).send({
          message: 'Please enter a valid email address'
        });
      }

      var text = 'SELECT * FROM users WHERE email = $1';

      try {
        var _ref2 = await _models["default"].query(text, [req.body.email]),
            rows = _ref2.rows;

        if (!rows[0]) {
          return res.status(400).send({
            message: 'The details are incorrect'
          });
        }

        if (!_helper["default"].comparePassword(rows[0].password, req.body.password)) {
          return res.status(400).send({
            message: 'Incorrect password'
          });
        }

        var token = _helper["default"].generateToken(rows[0].id);

        return res.status(200).send({
          token: token
        });
      } catch (error) {
        return res.status(400).send(error);
      }
    }

    return login;
  }(),
  getAll: function () {
    async function getAll(req, res) {
      var findAllQuery = 'SELECT * FROM parcels WHERE user_id = $1';

      try {
        var _ref3 = await _models["default"].query(findAllQuery, [req.user.id]),
            rows = _ref3.rows,
            rowCount = _ref3.rowCount;

        return res.status(200).send({
          rows: rows,
          rowCount: rowCount
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
        var _ref4 = await _models["default"].query(text, [req.params.id, req.user.id]),
            rows = _ref4.rows;

        if (!rows[0]) {
          return res.status(404).send('Parcel was not found');
        }

        return res.status(200).send(rows[0]);
      } catch (error) {
        return res.status(400).send(error);
      }
    }

    return getOne;
  }()
};
var _default = User;
exports["default"] = _default;