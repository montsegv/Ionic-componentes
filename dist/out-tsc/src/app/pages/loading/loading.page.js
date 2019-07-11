import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { LoadingController } from '@ionic/angular';
var LoadingPage = /** @class */ (function () {
    function LoadingPage(loadingCtrl) {
        this.loadingCtrl = loadingCtrl;
    }
    LoadingPage.prototype.ngOnInit = function () {
        var _this = this;
        this.presentLoading('Aguantese un poco');
        setTimeout(function () {
            _this.loading.dismiss();
        }, 1500);
    };
    LoadingPage.prototype.presentLoading = function (message) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var _a;
            return tslib_1.__generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, this.loadingCtrl.create({
                                message: message
                                //duration: 2000
                            })];
                    case 1:
                        _a.loading = _b.sent();
                        return [2 /*return*/, this.loading.present()];
                }
            });
        });
    };
    LoadingPage = tslib_1.__decorate([
        Component({
            selector: 'app-loading',
            templateUrl: './loading.page.html',
            styleUrls: ['./loading.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [LoadingController])
    ], LoadingPage);
    return LoadingPage;
}());
export { LoadingPage };
//# sourceMappingURL=loading.page.js.map