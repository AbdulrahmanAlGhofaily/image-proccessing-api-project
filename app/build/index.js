"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var cors_1 = __importDefault(require("cors"));
var express_1 = __importDefault(require("express"));
var path_1 = __importDefault(require("path"));
var index_1 = __importDefault(require("./routes/index"));
var app = (0, express_1.default)();
var port = 3000;
app.use(express_1.default.static(path_1.default.join(__dirname, 'assets')));
app.get('/', function (req, res) {
    res.send('server root');
});
app.use((0, cors_1.default)());
app.use('/api', index_1.default);
app.listen(port, function () {
    console.log("http://localhost:".concat(port));
});
