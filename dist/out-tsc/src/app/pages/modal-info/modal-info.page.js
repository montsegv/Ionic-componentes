import * as tslib_1 from "tslib";
import { Component, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
var ModalInfoPage = /** @class */ (function () {
    function ModalInfoPage(modalCtrl) {
        this.modalCtrl = modalCtrl;
    }
    ModalInfoPage.prototype.ngOnInit = function () {
    };
    ModalInfoPage.prototype.salirSinArgumentos = function () {
        this.modalCtrl.dismiss();
    };
    ModalInfoPage.prototype.salirConArgumentos = function () {
        this.modalCtrl.dismiss({
            nombre: 'Juanita',
            pais: 'Colima'
        });
    };
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Object)
    ], ModalInfoPage.prototype, "nombre", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Object)
    ], ModalInfoPage.prototype, "pais", void 0);
    ModalInfoPage = tslib_1.__decorate([
        Component({
            selector: 'app-modal-info',
            templateUrl: './modal-info.page.html',
            styleUrls: ['./modal-info.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [ModalController])
    ], ModalInfoPage);
    return ModalInfoPage;
}());
export { ModalInfoPage };
//# sourceMappingURL=modal-info.page.js.map