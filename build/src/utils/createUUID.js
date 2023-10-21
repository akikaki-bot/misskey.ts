"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createUuid = void 0;
function createUuid() {
    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (a) {
        const r = (new Date().getTime() + Math.random() * 16) % 16 | 0, v = a == "x" ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
}
exports.createUuid = createUuid;
