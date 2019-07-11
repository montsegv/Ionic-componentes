import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { FabPage } from './fab.page';
import { ComponentsModule } from '../../components/components.module';
var routes = [
    {
        path: '',
        component: FabPage
    }
];
var FabPageModule = /** @class */ (function () {
    function FabPageModule() {
    }
    FabPageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                RouterModule.forChild(routes),
                ComponentsModule
            ],
            declarations: [FabPage]
        })
    ], FabPageModule);
    return FabPageModule;
}());
export { FabPageModule };
//# sourceMappingURL=fab.module.js.map