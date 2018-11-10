"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _http = _interopRequireDefault(require("http"));

var _express = _interopRequireDefault(require("express"));

var _config = _interopRequireDefault(require("./config"));

var _parcels = _interopRequireDefault(require("./routes/parcels"));

var _users = _interopRequireDefault(require("./routes/users"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var app = (0, _express["default"])();
app.server = _http["default"].createServer(app); // middleware
// parse application/json

app.use(_express["default"].json()); // api routes v1

app.use('/api/v1', _parcels["default"]);
app.use('/api/v1/users', _users["default"]);
app.server.listen(_config["default"].port);
var _default = app;
exports["default"] = _default;