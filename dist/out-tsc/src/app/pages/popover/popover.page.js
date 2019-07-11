import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { PopinfoComponent } from '../../components/popinfo/popinfo.component';
var PopoverPage = /** @class */ (function () {
    function PopoverPage(popoverCtrl) {
        this.popoverCtrl = popoverCtrl;
    }
    PopoverPage.prototype.ngOnInit = function () {
    };
    PopoverPage.prototype.mostrarPop = function (evento) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var popover, data;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.popoverCtrl.create({
                            component: PopinfoComponent,
                            event: evento,
                            mode: 'ios',
                        })];
                    case 1:
                        popover = _a.sent();
                        return [4 /*yield*/, popover.present()];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, popover.onWillDismiss()];
                    case 3:
                        data = (_a.sent()).data;
                        console.log('Padre:', data);
                        return [2 /*return*/];
                }
            });
        });
    };
    PopoverPage = tslib_1.__decorate([
        Component({
            selector: 'app-popover',
            templateUrl: './popover.page.html',
            styleUrls: ['./popover.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [PopoverController])
    ], PopoverPage);
    return PopoverPage;
}());
export { PopoverPage };
//# sourceMappingURL=popover.page.js.map