import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ModalInfoPage } from '../modal-info/modal-info.page';
var ModalPage = /** @class */ (function () {
    function ModalPage(modalCtrl) {
        this.modalCtrl = modalCtrl;
    }
    ModalPage.prototype.ngOnInit = function () {
    };
    //Modal hijo 
    ModalPage.prototype.abrirModal = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var modal, data;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalCtrl.create({
                            component: ModalInfoPage,
                            componentProps: {
                                nombre: 'Montserrat',
                                pais: 'España jaja'
                            }
                        })];
                    case 1:
                        modal = _a.sent();
                        return [4 /*yield*/, modal.present()];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, modal.onDidDismiss()];
                    case 3:
                        data = (_a.sent()).data;
                        console.log('Retorno del modal', data);
                        return [2 /*return*/];
                }
            });
        });
    };
    ModalPage = tslib_1.__decorate([
        Component({
            selector: 'app-modal',
            templateUrl: './modal.page.html',
            styleUrls: ['./modal.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [ModalController])
    ], ModalPage);
    return ModalPage;
}());
export { ModalPage };
//# sourceMappingURL=modal.page.js.map