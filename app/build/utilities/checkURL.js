"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function checkURL(queryObj) {
    // Check if needed parameters exist (Could be solved using custom type)
    if (!queryObj.hasOwnProperty('imageName') || // eslint-disable-line
        !queryObj.hasOwnProperty('height') || // eslint-disable-line
        !queryObj.hasOwnProperty('width') // eslint-disable-line
    )
        throw new Error('To resize an image, you need to pass imageName, height and width.');
    return queryObj;
}
exports.default = checkURL;
