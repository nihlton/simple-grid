"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.largeOnly = exports.mediumOnly = exports.smallOnly = exports.documentWidth = exports.cellPadding = exports.gutters = exports.breakPoints = void 0;
var breaks = {
    small: 0,
    medium: 720,
    large: 1023,
};
exports.breakPoints = {
    small: "".concat(breaks.small, "px"),
    medium: "".concat(breaks.medium, "px"),
    large: "".concat(breaks.large, "px"),
};
exports.gutters = {
    none: "0rem",
    close: "0.125rem",
    default: "0.5rem",
    open: "1.5rem",
};
exports.cellPadding = "0.5rem";
exports.documentWidth = "80rem";
exports.smallOnly = "\"(max-width: ".concat(breaks.medium, "px)\"");
exports.mediumOnly = "\"(min-width: ".concat(breaks.medium + 1, "px) and (max-width: ").concat(breaks.large - 1, "px )\"");
exports.largeOnly = "\"(min-width: ".concat(breaks.large, ")\"");
