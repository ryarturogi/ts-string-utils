"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.replacer = exports.replace = void 0;
const index_1 = require("./index");
const replace = (str, regex, replacement) => {
    return str.replace(regex, replacement);
};
exports.replace = replace;
const replacer = (_, p1) => {
    return (0, index_1.capitalize)(p1.toLowerCase());
};
exports.replacer = replacer;
