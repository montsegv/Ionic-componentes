import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { RefresherPage } from './refresher.page';
import { ComponentsModule } from '../../components/components.module';
var routes = [
    {
        path: '',
        component: RefresherPage
    }
];
var RefresherPageModule = /** @class */ (function () {
    function RefresherPageModule() {
    }
    RefresherPageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                RouterModule.forChild(routes),
                ComponentsModule
            ],
            declarations: [RefresherPage]
        })
    ], RefresherPageModule);
    return RefresherPageModule;
}());
export { RefresherPageModule };
//# sourceMappingURL=refresher.module.js.map