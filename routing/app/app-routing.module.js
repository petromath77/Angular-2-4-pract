"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var depart_list_component_1 = require("./depart-list.component");
var employee_list_component_1 = require("./employee-list.component");
var depart_detail_component_1 = require("./depart-detail.component");
var home_component_1 = require("./home.component");
var page_not_found_component_1 = require("./page-not-found.component");
var routes = [
    { path: '', component: home_component_1.HomeComponent },
    { path: 'departments', component: depart_list_component_1.DepartListComponent },
    { path: 'employees', component: employee_list_component_1.EmployeeListComponent },
    { path: 'departments/:id', component: depart_detail_component_1.DepartDetailComponent },
    { path: '**', component: page_not_found_component_1.PageNotFoundComponent }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    core_1.NgModule({
        imports: [router_1.RouterModule.forRoot(routes)],
        exports: [router_1.RouterModule]
    })
], AppRoutingModule);
exports.AppRoutingModule = AppRoutingModule;
exports.routingComponents = [page_not_found_component_1.PageNotFoundComponent, home_component_1.HomeComponent, depart_list_component_1.DepartListComponent, employee_list_component_1.EmployeeListComponent, depart_detail_component_1.DepartDetailComponent];
//# sourceMappingURL=app-routing.module.js.map