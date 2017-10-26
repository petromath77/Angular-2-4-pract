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
var http_service_1 = require("./http.service");
var router_1 = require("@angular/router");
var car_service_1 = require("./car.service");
var SedanComponent = (function () {
    function SedanComponent(carService, router) {
        this.carService = carService;
        this.router = router;
    }
    SedanComponent.prototype.getCars = function () {
        var _this = this;
        this.carService
            .getCars()
            .then(function (cars) { return _this.cars = cars; });
    };
    SedanComponent.prototype.ngOnInit = function () {
        this.getCars();
    };
    return SedanComponent;
}());
SedanComponent = __decorate([
    core_1.Component({
        templateUrl: './templates/sedan.html',
        providers: [http_service_1.HttpService]
    }),
    __metadata("design:paramtypes", [car_service_1.CarService,
        router_1.Router])
], SedanComponent);
exports.SedanComponent = SedanComponent;
//# sourceMappingURL=sedan.component.js.map