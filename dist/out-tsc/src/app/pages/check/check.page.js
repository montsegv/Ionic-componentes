import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
var CheckPage = /** @class */ (function () {
    function CheckPage() {
        this.data = [
            {
                name: 'primary',
                selected: false
            },
            {
                name: 'secondary',
                selected: true
            },
            {
                name: 'tertiary',
                selected: false
            },
            {
                name: 'success',
                selected: true
            }
        ];
    }
    CheckPage.prototype.ngOnInit = function () {
    };
    //Cuál es el elemento en el que hice click 
    CheckPage.prototype.onClick = function (check) {
        console.log(check);
    };
    CheckPage = tslib_1.__decorate([
        Component({
            selector: 'app-check',
            templateUrl: './check.page.html',
            styleUrls: ['./check.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [])
    ], CheckPage);
    return CheckPage;
}());
export { CheckPage };
//# sourceMappingURL=check.page.js.map