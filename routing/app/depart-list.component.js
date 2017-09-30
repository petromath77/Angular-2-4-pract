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
var router_1 = require("@angular/router");
var DepartListComponent = (function () {
    function DepartListComponent(router, route) {
        this.router = router;
        this.route = route;
        this.departments = [
            { "id": 1, "name": "Angular" },
            { "id": 2, "name": "MongoDB" },
            { "id": 3, "name": "Bootstrap" },
            { "id": 4, "name": "Jquery" },
            { "id": 5, "name": "NodeJS" }
        ];
    }
    DepartListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            var id = parseInt(params['id']);
            _this.selectedId = id;
        });
    };
    DepartListComponent.prototype.onSelect = function (department) {
        this.router.navigate(['/departments', department.id]);
    };
    DepartListComponent.prototype.isSelected = function (department) {
        return department.id === this.selectedId;
    };
    return DepartListComponent;
}());
DepartListComponent = __decorate([
    core_1.Component({
        selector: 'depart-list',
        template: "<h3>Depart List</h3>\n                <ul class=\"items\">\n                    <li (click)=\"onSelect(department)\" [class.selected]=\"isSelected(department)\" *ngFor=\"let department of departments\">\n                        <span class=\"bge\">{{department.id}}</span>{{department.name}}\n                    </li>\n                </ul>\n    ",
        styles: [".items{list-style: none; width: auto}\n              .items li{background-color: #ccc; margin-bottom: 10px;  border-radius: 5px; cursor: pointer;}\n               .items li:hover{margin-left: 5px;}\n              .bge{background-color: #b1b1b1; display: inline-block; padding: 5px; margin-right: 10px; border-bottom-left-radius: 5px; border-top-left-radius:5px;}\n              .items li.selected{background-color: #cfd8dc; color: #fff}\n            "]
    }),
    __metadata("design:paramtypes", [router_1.Router, router_1.ActivatedRoute])
], DepartListComponent);
exports.DepartListComponent = DepartListComponent;
//# sourceMappingURL=depart-list.component.js.map