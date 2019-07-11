import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
var ListOrderPage = /** @class */ (function () {
    function ListOrderPage() {
        this.personajes = ['Aquaman', 'Superman', 'Batman', 'Flash', 'MujerMaravilla'];
    }
    ListOrderPage.prototype.ngOnInit = function () {
    };
    ListOrderPage.prototype.reorder = function (event) {
        console.log(event);
        var itemMover = this.personajes.splice(event.detail.from, 1)[0];
        this.personajes.splice(event.detail.to, 0, itemMover);
        event.detail.complete();
    };
    ListOrderPage.prototype.onClick = function () {
        console.log(this.personajes);
    };
    ListOrderPage = tslib_1.__decorate([
        Component({
            selector: 'app-list-order',
            templateUrl: './list-order.page.html',
            styleUrls: ['./list-order.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [])
    ], ListOrderPage);
    return ListOrderPage;
}());
export { ListOrderPage };
//# sourceMappingURL=list-order.page.js.map