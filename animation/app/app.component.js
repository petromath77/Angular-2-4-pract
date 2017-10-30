"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var animations_1 = require("@angular/animations");
var AppComponent = (function () {
    function AppComponent() {
        this.showDiv = true;
    }
    AppComponent.prototype.toggle = function () {
        this.showDiv = this.showDiv;
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        template: "<h1>Angular Animation</h1>\n                <button (click)=\"toggle()\">Toggle</button>\n                <div *ngIf=\"showDiv\" [@flyInOut]>\n                    FLYOUT\n                </div>\n                ",
        animations: [
            animations_1.trigger('flyInOut', [
                animations_1.transition('void => *', [
                    animations_1.style({ transform: 'translateY(100%)' }),
                    animations_1.animate('0.5s')
                ])
            ])
        ]
    })
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map