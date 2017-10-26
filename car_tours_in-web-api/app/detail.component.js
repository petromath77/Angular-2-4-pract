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
require("rxjs/add/operator/switchMap");
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var common_1 = require("@angular/common");
var car_service_1 = require("./car.service");
var CarDetailComponent = (function () {
    function CarDetailComponent(carService, route, location) {
        this.carService = carService;
        this.route = route;
        this.location = location;
    }
    CarDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.paramMap
            .switchMap(function (params) { return _this.carService.getCar(+params.get('id')); })
            .subscribe(function (car) { return _this.car = car; });
    };
    CarDetailComponent.prototype.goBack = function () {
        this.location.back();
    };
    return CarDetailComponent;
}());
CarDetailComponent = __decorate([
    core_1.Component({
        templateUrl: './templates/detail.html'
    }),
    __metadata("design:paramtypes", [car_service_1.CarService,
        router_1.ActivatedRoute,
        common_1.Location])
], CarDetailComponent);
exports.CarDetailComponent = CarDetailComponent;
//# sourceMappingURL=detail.component.js.map