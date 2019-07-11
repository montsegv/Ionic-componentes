import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { DateTimePage } from './date-time.page';
import { ComponentsModule } from '../../components/components.module';
var routes = [
    {
        path: '',
        component: DateTimePage
    }
];
var DateTimePageModule = /** @class */ (function () {
    function DateTimePageModule() {
    }
    DateTimePageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                RouterModule.forChild(routes),
                ComponentsModule
            ],
            declarations: [DateTimePage]
        })
    ], DateTimePageModule);
    return DateTimePageModule;
}());
export { DateTimePageModule };
//# sourceMappingURL=date-time.module.js.map