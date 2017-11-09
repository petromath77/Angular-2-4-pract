"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var phone_1 = require("./phone");
var DataService = (function () {
    function DataService() {
        this.data = [
            { name: "Apple iPhone 7", price: 56000 },
            { name: "HP Elite x3", price: 56000 },
            { name: "Alcatel Idol S4", price: 25000 }
        ];
    }
    DataService.prototype.getData = function () {
        return this.data;
    };
    DataService.prototype.addData = function (name, price) {
        this.data.push(new phone_1.Phone(name, price));
    };
    return DataService;
}());
exports.DataService = DataService;
//# sourceMappingURL=data.service.js.map