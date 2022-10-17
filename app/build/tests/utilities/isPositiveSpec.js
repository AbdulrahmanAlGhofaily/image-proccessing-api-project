"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var isPositive_1 = __importDefault(require("../../utilities/isPositive"));
describe('Check if the width/height has positive integrs', function () {
    it('Should pass if height/width is positive', function () {
        expect((0, isPositive_1.default)(300)).toEqual(300);
    });
    it('Should throw error if height/width is negative integrs', function () {
        expect(function () {
            (0, isPositive_1.default)(-300);
        }).toThrow();
    });
    it('Should throw error if height/width is zero', function () {
        expect(function () {
            (0, isPositive_1.default)(0);
        }).toThrow();
    });
});
