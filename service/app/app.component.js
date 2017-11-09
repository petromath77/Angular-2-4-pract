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
var data_service_1 = require("./data.service");
var AppComponent = (function () {
    function AppComponent(dataService) {
        this.dataService = dataService;
        this.items = [];
    }
    AppComponent.prototype.addItem = function (name, price) {
        this.dataService.addData(name, price);
    };
    AppComponent.prototype.ngOnInit = function () {
        this.items = this.dataService.getData();
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        template: "<div class=\"panel\">\n    <div class=\"form-inline\">\n        <div class=\"form-group\">\n            <div class=\"col-md-8\">\n                <input class=\"form-control\" [(ngModel)]=\"name\" placeholder = \"\u041C\u043E\u0434\u0435\u043B\u044C\" />\n            </div>\n        </div>\n        <div class=\"form-group\">\n            <div class=\"col-md-6\">\n                <input type=\"number\" class=\"form-control\" [(ngModel)]=\"price\" placeholder=\"\u0426\u0435\u043D\u0430\" />\n            </div>\n        </div>\n        <div class=\"form-group\">\n            <div class=\"col-md-offset-2 col-md-8\">\n                <button class=\"btn btn-default\" (click)=\"addItem(name, price)\">\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C</button>\n            </div>\n        </div>\n    </div>\n    <table class=\"table table-striped\">\n        <thead>\n            <tr>\n                <th>\u041C\u043E\u0434\u0435\u043B\u044C</th>\n                <th>\u0426\u0435\u043D\u0430</th>\n            </tr>\n        </thead>\n        <tbody>\n            <tr *ngFor=\"let item of items\">\n                <td>{{item.name}}</td>\n                <td>{{item.price}}</td>\n            </tr>\n        </tbody>\n    </table>\n</div>",
        providers: [data_service_1.DataService]
    }),
    __metadata("design:paramtypes", [data_service_1.DataService])
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map