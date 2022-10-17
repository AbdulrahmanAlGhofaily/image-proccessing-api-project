"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var fetch = function (url, init) {
    return Promise.resolve().then(function () { return __importStar(require('node-fetch')); }).then(function (_a) {
        var fetch = _a.default;
        return fetch(url, init);
    });
};
var node_cache_1 = __importDefault(require("node-cache"));
var index_1 = __importDefault(require("./routes/index"));
var cors_1 = __importDefault(require("cors"));
var myCache = new node_cache_1.default();
var imageLink = 'http://localhost:3000/api/images';
var app = (0, express_1.default)();
var port = 3000;
app.get('/', function (req, res) {
    if (myCache.has('images')) {
        return res.send(myCache.get('images'));
    }
    else {
        fetch(imageLink)
            .then(function (response) { return response.json; })
            .then(function (json) {
            myCache.set('images', json);
            res.send(json);
        });
    }
});
app.use((0, cors_1.default)());
app.use('/api', index_1.default);
app.listen(port, function () {
    console.log("http://localhost:".concat(port));
});
