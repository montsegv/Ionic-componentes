import * as tslib_1 from "tslib";
import { Component, ViewChild } from '@angular/core';
import { IonInfiniteScroll } from '@ionic/angular';
var InfiniteScrollPage = /** @class */ (function () {
    function InfiniteScrollPage() {
        this.data = Array(20);
    }
    InfiniteScrollPage.prototype.ngOnInit = function () {
    };
    InfiniteScrollPage.prototype.loadData = function (event) {
        var _this = this;
        console.log('Cargando siguiente...');
        //Simular carga asincrona
        setTimeout(function () {
            var _a;
            if (_this.data.length > 50) {
                event.target.complete();
                _this.InfiniteScroll.disabled = true; //Desabilitarlo
                return;
            }
            var nuevoArr = Array(20);
            (_a = _this.data).push.apply(_a, nuevoArr);
            event.target.complete();
        }, 1000);
    };
    tslib_1.__decorate([
        ViewChild(IonInfiniteScroll),
        tslib_1.__metadata("design:type", IonInfiniteScroll)
    ], InfiniteScrollPage.prototype, "InfiniteScroll", void 0);
    InfiniteScrollPage = tslib_1.__decorate([
        Component({
            selector: 'app-infinite-scroll',
            templateUrl: './infinite-scroll.page.html',
            styleUrls: ['./infinite-scroll.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [])
    ], InfiniteScrollPage);
    return InfiniteScrollPage;
}());
export { InfiniteScrollPage };
//# sourceMappingURL=infinite-scroll.page.js.map