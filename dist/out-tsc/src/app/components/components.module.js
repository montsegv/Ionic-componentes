import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { IonicModule } from '@ionic/angular';
import { MenuComponent } from './menu/menu.component';
import { RouterModule } from '@angular/router';
import { PopinfoComponent } from './popinfo/popinfo.component';
var ComponentsModule = /** @class */ (function () {
    function ComponentsModule() {
    }
    ComponentsModule = tslib_1.__decorate([
        NgModule({
            declarations: [
                HeaderComponent,
                MenuComponent,
                PopinfoComponent
            ],
            exports: [
                HeaderComponent,
                MenuComponent,
                PopinfoComponent
            ],
            imports: [
                CommonModule,
                IonicModule,
                RouterModule
            ]
        })
    ], ComponentsModule);
    return ComponentsModule;
}());
export { ComponentsModule };
//# sourceMappingURL=components.module.js.map