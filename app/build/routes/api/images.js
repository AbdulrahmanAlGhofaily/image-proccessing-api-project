"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var imageResizing_1 = __importDefault(require("../../middleware/imageResizing"));
var images = express_1.default.Router();
images.get('/', imageResizing_1.default, function (req, res, next) {
    res.send('Images route');
    next();
});
exports.default = images;
