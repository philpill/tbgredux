"use strict";
exports.__esModule = true;
var render_1 = require("../components/render");
var input_1 = require("../components/input");
var BlockEntity = /** @class */ (function () {
    function BlockEntity() {
        var render = new render_1["default"]();
        var input = new input_1["default"]();
        this.components = [render, input];
    }
    BlockEntity.prototype.init = function () {
    };
    return BlockEntity;
}());
exports["default"] = BlockEntity;
