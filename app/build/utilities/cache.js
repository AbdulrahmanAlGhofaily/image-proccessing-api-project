"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var path_1 = __importDefault(require("path"));
var fs_1 = __importDefault(require("fs"));
function cache(imageName, width, height) {
    if (!fs_1.default.existsSync(path_1.default.join("".concat(path_1.default.resolve()), 'src', 'assets', 'thumb', "".concat(imageName, "_").concat(width, "_").concat(height, "_thumb.jpg")))) {
        return true;
    }
    return false;
}
exports.default = cache;
