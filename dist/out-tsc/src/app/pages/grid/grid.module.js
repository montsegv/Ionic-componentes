import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { GridPage } from './grid.page';
import { ComponentsModule } from '../../components/components.module';
var routes = [
    {
        path: '',
        component: GridPage
    }
];
var GridPageModule = /** @class */ (function () {
    function GridPageModule() {
    }
    GridPageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                RouterModule.forChild(routes),
                ComponentsModule
            ],
            declarations: [GridPage]
        })
    ], GridPageModule);
    return GridPageModule;
}());
export { GridPageModule };
//# sourceMappingURL=grid.module.js.map