"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var AppComponent = (function () {
    function AppComponent() {
        this.boldWeihgt = true;
        this.showPar = true;
        this.colors = ["red", "green", "blue"];
    }
    AppComponent.prototype.clickMe = function (value) {
        console.log(value);
    };
    AppComponent.prototype.toggle = function () {
        this.showPar = !this.showPar;
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        template: "<div>\n                  <p [style.fontWeight]=\"boldWeihgt? 'bold' : 'none'\">Hello Angular 2</p>\n                  <p>Angular 2 \u043F\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u043B\u044F\u0435\u0442 \u043C\u043E\u0434\u0443\u043B\u044C\u043D\u0443\u044E \u0430\u0440\u0445\u0438\u0442\u0435\u043A\u0442\u0443\u0440\u0443 \u043F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u044F</p>\n               </div>\n               <button (click)=\"clickMe(dataInp.value)\">Click Me</button>\n               <input type=\"text\" #dataInp>\n               <ul>\n                   <li *ngFor=\"let color of colors\">{{color}}</li>\n               </ul>\n               <p [class.oneClass]=\"showPar\">I see paragraph</p>\n               <button (click)=\"toggle()\">Toggle!</button>\n               <hr>\n               <br>\n               <br>\n               <br>\n               \n               <h2>Parent App Component</h2>\n               <label>Enter Parent Value</label>\n               <input type=\"text\">\n               <p>Value from Child Comp is {{name}}</p>\n               <child-comp [(userName)]=\"name\"></child-comp>",
        styles: [".oneClass{font-style:italic;}"]
    })
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map