"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _http = _interopRequireDefault(require("http"));

var _express = _interopRequireDefault(require("express"));

var _bodyParser = _interopRequireDefault(require("body-parser"));

var _config = _interopRequireDefault(require("./config"));

var _parcels = _interopRequireDefault(require("./using-postgres/routes/parcels"));

var _user = _interopRequireDefault(require("./using-postgres/routes/user"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var app = (0, _express["default"])();
app.server = _http["default"].createServer(app); // middleware
// parse application/json

app.use(_bodyParser["default"].json());
app.use(_bodyParser["default"].urlencoded({
  extended: true
})); // api routes v1

app.use('/api/v1', _parcels["default"]);
app.use('/api/v1/auth', _user["default"]);
app.use('/api/v1/users', _user["default"]); // Test Route

app.get('/', function (req, res) {
  res.json({
    greetings: 'Welcome to our API!',
    get: '/api/v1/parcels',
    get2: '/api/v1/parcels/<parcelId>',
    get3: '/api/v1/users/<userId>/parcels',
    put: '/api/v1/parcels/<parcelId>/cancel',
    post: 'api/v1/parcels'
  });
});
app.get('/*', function (req, res) {
  res.send(404);
});
app.server.listen(_config["default"].port);
var _default = app;
exports["default"] = _default;