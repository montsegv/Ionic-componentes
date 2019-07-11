import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { ModalPage } from './modal.page';
import { ComponentsModule } from '../../components/components.module';
import { ModalInfoPage } from '../modal-info/modal-info.page';
import { ModalInfoPageModule } from '../modal-info/modal-info.module';
var routes = [
    {
        path: '',
        component: ModalPage
    }
];
var ModalPageModule = /** @class */ (function () {
    function ModalPageModule() {
    }
    ModalPageModule = tslib_1.__decorate([
        NgModule({
            entryComponents: [
                ModalInfoPage
            ],
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                RouterModule.forChild(routes),
                ComponentsModule,
                ModalInfoPageModule
            ],
            declarations: [ModalPage]
        })
    ], ModalPageModule);
    return ModalPageModule;
}());
export { ModalPageModule };
//# sourceMappingURL=modal.module.js.map