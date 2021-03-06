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
var home_component_1 = require("./home.component");
var hatch_component_1 = require("./hatch.component");
var sedan_component_1 = require("./sedan.component");
var vagon_component_1 = require("./vagon.component");
var detail_component_1 = require("./detail.component");
var page_not_found_component_1 = require("./page-not-found.component");
var routes = [
    { path: '', component: home_component_1.HomeComponent },
    { path: 'hatchback', component: hatch_component_1.HatchComponent },
    { path: 'hatchback/:id', component: detail_component_1.DetailComponent },
    { path: 'sedan', component: sedan_component_1.SedanComponent },
    { path: 'sedan/:id', component: detail_component_1.DetailComponent },
    { path: 'vagon', component: vagon_component_1.VagonComponent },
    { path: 'vagon/:id', component: detail_component_1.DetailComponent },
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
exports.routingComponents = [page_not_found_component_1.PageNotFoundComponent, home_component_1.HomeComponent, hatch_component_1.HatchComponent, sedan_component_1.SedanComponent, vagon_component_1.VagonComponent, detail_component_1.DetailComponent];
//# sourceMappingURL=app-routing.module.js.map