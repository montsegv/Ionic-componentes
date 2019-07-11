import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { InfiniteScrollPage } from './infinite-scroll.page';
import { ComponentsModule } from '../../components/components.module';
var routes = [
    {
        path: '',
        component: InfiniteScrollPage
    }
];
var InfiniteScrollPageModule = /** @class */ (function () {
    function InfiniteScrollPageModule() {
    }
    InfiniteScrollPageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                RouterModule.forChild(routes),
                ComponentsModule
            ],
            declarations: [InfiniteScrollPage]
        })
    ], InfiniteScrollPageModule);
    return InfiniteScrollPageModule;
}());
export { InfiniteScrollPageModule };
//# sourceMappingURL=infinite-scroll.module.js.map