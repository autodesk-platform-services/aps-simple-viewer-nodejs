"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Utils = void 0;
const model_1 = require("../model");
class Utils {
    static GetPathfromRegion(region) {
        switch (region) {
            case model_1.Region.US:
                return "/modelderivative/v2/designdata/";
            case model_1.Region.EMEA:
                return "/modelderivative/v2/regions/eu/designdata/";
            default:
                return "/modelderivative/v2/designdata/";
        }
    }
}
exports.Utils = Utils;
