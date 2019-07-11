import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
var ProgressBarPage = /** @class */ (function () {
    function ProgressBarPage() {
        this.porcentaje = 0.05;
    }
    ProgressBarPage.prototype.ngOnInit = function () {
    };
    ProgressBarPage.prototype.cambioRango = function (event) {
        console.log(event);
        this.porcentaje = event.detail.value / 100;
    };
    ProgressBarPage = tslib_1.__decorate([
        Component({
            selector: 'app-progress-bar',
            templateUrl: './progress-bar.page.html',
            styleUrls: ['./progress-bar.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [])
    ], ProgressBarPage);
    return ProgressBarPage;
}());
export { ProgressBarPage };
//# sourceMappingURL=progress-bar.page.js.map