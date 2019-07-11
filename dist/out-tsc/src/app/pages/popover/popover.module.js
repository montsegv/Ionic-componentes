import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { PopoverPage } from './popover.page';
import { PopinfoComponent } from '../../components/popinfo/popinfo.component';
import { ComponentsModule } from '../../components/components.module';
var routes = [
    {
        path: '',
        component: PopoverPage
    }
];
var PopoverPageModule = /** @class */ (function () {
    function PopoverPageModule() {
    }
    PopoverPageModule = tslib_1.__decorate([
        NgModule({
            entryComponents: [
                PopinfoComponent
            ],
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                RouterModule.forChild(routes),
                ComponentsModule
            ],
            declarations: [PopoverPage]
        })
    ], PopoverPageModule);
    return PopoverPageModule;
}());
export { PopoverPageModule };
//# sourceMappingURL=popover.module.js.map