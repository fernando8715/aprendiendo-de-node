"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getId = void 0;
const getId = () => {
    return crypto.randomUUID();
};
exports.getId = getId;
