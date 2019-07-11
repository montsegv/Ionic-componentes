import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { CheckPage } from './check.page';
var routes = [
    {
        path: '',
        component: CheckPage
    }
];
var CheckPageModule = /** @class */ (function () {
    function CheckPageModule() {
    }
    CheckPageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                RouterModule.forChild(routes),
                CommonModule
            ],
            declarations: [CheckPage]
        })
    ], CheckPageModule);
    return CheckPageModule;
}());
export { CheckPageModule };
//# sourceMappingURL=check.module.js.map