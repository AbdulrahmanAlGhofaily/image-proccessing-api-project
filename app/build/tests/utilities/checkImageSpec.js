"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var checkImage_1 = __importDefault(require("../../utilities/checkImage"));
describe('Check if image with such name exist or no', function () {
    it('Should pass if the image with real name exist', function () {
        expect((0, checkImage_1.default)('fjord')).toEqual('fjord');
    });
    it('Should throw error if the image with fake name does not exist', function () {
        expect(function () {
            (0, checkImage_1.default)('daa');
        }).toThrow();
    });
});
