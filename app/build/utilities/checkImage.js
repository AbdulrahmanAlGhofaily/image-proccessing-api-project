"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var path_1 = __importDefault(require("path"));
var fs_1 = __importDefault(require("fs"));
function checkImage(imageName) {
    if (!fs_1.default.existsSync("".concat(path_1.default.resolve(), "\\assets\\full\\").concat(imageName, ".jpg")))
        throw new Error("Such image doesn't exist.");
    return imageName;
}
exports.default = checkImage;
