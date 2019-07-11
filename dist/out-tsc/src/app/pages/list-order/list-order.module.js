import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { ListOrderPage } from './list-order.page';
var routes = [
    {
        path: '',
        component: ListOrderPage
    }
];
var ListOrderPageModule = /** @class */ (function () {
    function ListOrderPageModule() {
    }
    ListOrderPageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                RouterModule.forChild(routes)
            ],
            declarations: [ListOrderPage]
        })
    ], ListOrderPageModule);
    return ListOrderPageModule;
}());
export { ListOrderPageModule };
//# sourceMappingURL=list-order.module.js.map