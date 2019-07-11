import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { InputPage } from './input.page';
import { ComponentsModule } from '../../components/components.module';
var routes = [
    {
        path: '',
        component: InputPage
    }
];
var InputPageModule = /** @class */ (function () {
    function InputPageModule() {
    }
    InputPageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                RouterModule.forChild(routes),
                ComponentsModule
            ],
            declarations: [InputPage]
        })
    ], InputPageModule);
    return InputPageModule;
}());
export { InputPageModule };
//# sourceMappingURL=input.module.js.map