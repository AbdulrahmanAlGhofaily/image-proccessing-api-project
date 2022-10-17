"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function checkURL(queryObj) {
    // Check if needed parameters exist (Could be solved using custom type)
    if (!queryObj.hasOwnProperty('imageName') ||
        !queryObj.hasOwnProperty('height') ||
        !queryObj.hasOwnProperty('width'))
        throw new Error('To resize an image, you need to pass imageName, height and width.');
    return queryObj;
}
exports.default = checkURL;
