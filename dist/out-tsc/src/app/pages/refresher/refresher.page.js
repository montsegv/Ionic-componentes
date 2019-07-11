import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
var RefresherPage = /** @class */ (function () {
    function RefresherPage() {
        this.items = [];
    }
    RefresherPage.prototype.ngOnInit = function () {
    };
    RefresherPage.prototype.doRefresh = function (event) {
        var _this = this;
        setTimeout(function () {
            _this.items = Array(20);
            event.target.complete();
        }, 1500);
    };
    RefresherPage = tslib_1.__decorate([
        Component({
            selector: 'app-refresher',
            templateUrl: './refresher.page.html',
            styleUrls: ['./refresher.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [])
    ], RefresherPage);
    return RefresherPage;
}());
export { RefresherPage };
//# sourceMappingURL=refresher.page.js.map