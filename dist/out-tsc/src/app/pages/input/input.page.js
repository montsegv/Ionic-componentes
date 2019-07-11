import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
var InputPage = /** @class */ (function () {
    function InputPage() {
        this.usuario = {
            email: ' ',
            password: ' '
        };
    }
    InputPage.prototype.ngOnInit = function () {
    };
    InputPage.prototype.onSubmitTemplate = function () {
        console.log('Form submit');
        console.log(this.usuario);
    };
    InputPage = tslib_1.__decorate([
        Component({
            selector: 'app-input',
            templateUrl: './input.page.html',
            styleUrls: ['./input.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [])
    ], InputPage);
    return InputPage;
}());
export { InputPage };
//# sourceMappingURL=input.page.js.map