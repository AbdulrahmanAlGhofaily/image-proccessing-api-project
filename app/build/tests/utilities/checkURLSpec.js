"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var checkURL_1 = __importDefault(require("../../utilities/checkURL"));
describe('Check if the URL has the right proprties', function () {
    it('Should pass if the req.query (URL) has the right proprties', function () {
        expect((0, checkURL_1.default)({ imageName: 'f', width: '2', height: '3' })).toEqual({
            imageName: 'f',
            width: '2',
            height: '3',
        });
    });
    it('Should throw error if the req.query (URL) has the wrong proprties', function () {
        expect(function () {
            (0, checkURL_1.default)({ d: 'f', s: '2', a: '3' });
        }).toThrow();
    });
    it('Should throw error if the req.query (URL) has no proprties', function () {
        expect(function () {
            (0, checkURL_1.default)({});
        }).toThrow();
    });
});
