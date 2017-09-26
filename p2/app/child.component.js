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
var ChildComponent = (function () {
    function ChildComponent() {
        this.userNameChange = new core_1.EventEmitter();
    }
    ChildComponent.prototype.onNameChange = function (model) {
        this.userName = model;
        this.userNameChange.emit(model);
    };
    return ChildComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], ChildComponent.prototype, "userName", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], ChildComponent.prototype, "userNameChange", void 0);
ChildComponent = __decorate([
    core_1.Component({
        selector: 'child-comp',
        template: "<h2>Child Component</h2>\n                <input [ngModel]=\"userName\" (ngModelChange)=\"onNameChange($event)\" />\n                <p>Value from Parent Comp is </p>"
    })
], ChildComponent);
exports.ChildComponent = ChildComponent;
//# sourceMappingURL=child.component.js.map