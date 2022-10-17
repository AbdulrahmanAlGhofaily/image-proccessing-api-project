"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function isPositive(num) {
    var sizeNumber = typeof num === 'string' ? Number(num) : num;
    var sign = Math.sign(sizeNumber);
    if (sign === -1 || isNaN(sign) || num === 0)
        throw new Error('Both width and height most be a positive number and greater than 0');
    return sizeNumber;
}
exports.default = isPositive;
