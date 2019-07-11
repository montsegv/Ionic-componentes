import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { ProgressBarPage } from './progress-bar.page';
import { ComponentsModule } from '../../components/components.module';
var routes = [
    {
        path: '',
        component: ProgressBarPage
    }
];
var ProgressBarPageModule = /** @class */ (function () {
    function ProgressBarPageModule() {
    }
    ProgressBarPageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                RouterModule.forChild(routes),
                ComponentsModule
            ],
            declarations: [ProgressBarPage]
        })
    ], ProgressBarPageModule);
    return ProgressBarPageModule;
}());
export { ProgressBarPageModule };
//# sourceMappingURL=progress-bar.module.js.map