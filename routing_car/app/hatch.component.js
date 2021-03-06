"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var car_service_1 = require("./car.service");
var HatchComponent = (function () {
    function HatchComponent(carService) {
        this.carService = carService;
        this.cars = [];
    }
    HatchComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.carService.getData()
            .subscribe(function (data) { return _this.cars = data.json(); });
    };
    return HatchComponent;
}());
HatchComponent = __decorate([
    core_1.Component({
        templateUrl: './templates/hatchback.html',
        providers: [car_service_1.CarService]
    }),
    __metadata("design:paramtypes", [car_service_1.CarService])
], HatchComponent);
exports.HatchComponent = HatchComponent;
//# sourceMappingURL=hatch.component.js.map