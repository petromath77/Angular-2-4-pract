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
    }
    Object.defineProperty(ChildComponent.prototype, "userAge", {
        get: function () { return this._userAge; },
        set: function (age) {
            if (age < 0)
                this._userAge = 0;
            else if (age > 100)
                this._userAge = 100;
            else
                this._userAge = age;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ChildComponent.prototype, "userName", {
        get: function () { return this._userName; },
        set: function (name) {
            if (name == "")
                this._userName = "Your name";
            else
                this._userName = name;
        },
        enumerable: true,
        configurable: true
    });
    return ChildComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Number),
    __metadata("design:paramtypes", [Number])
], ChildComponent.prototype, "userAge", null);
__decorate([
    core_1.Input(),
    __metadata("design:type", String),
    __metadata("design:paramtypes", [String])
], ChildComponent.prototype, "userName", null);
ChildComponent = __decorate([
    core_1.Component({
        selector: 'child-comp',
        template: "<p>User name: {{ userName }}</p> \n               <p>User age: {{ userAge }}</p>",
        styles: ["h2, p {color:red;}"]
    })
], ChildComponent);
exports.ChildComponent = ChildComponent;
//# sourceMappingURL=child.component.js.map