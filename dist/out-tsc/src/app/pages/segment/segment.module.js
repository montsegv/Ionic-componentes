import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { SegmentPage } from './segment.page';
import { ComponentsModule } from '../../components/components.module';
import { PipesModule } from '../../pipes/pipes.module';
var routes = [
    {
        path: '',
        component: SegmentPage
    }
];
var SegmentPageModule = /** @class */ (function () {
    function SegmentPageModule() {
    }
    SegmentPageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                RouterModule.forChild(routes),
                ComponentsModule,
                PipesModule
            ],
            declarations: [SegmentPage]
        })
    ], SegmentPageModule);
    return SegmentPageModule;
}());
export { SegmentPageModule };
//# sourceMappingURL=segment.module.js.map