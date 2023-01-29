"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.replace = exports.capitalize = void 0;
function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}
exports.capitalize = capitalize;
function replace(str, regex, replacement) {
    return str.replace(regex, replacement);
}
exports.replace = replace;
