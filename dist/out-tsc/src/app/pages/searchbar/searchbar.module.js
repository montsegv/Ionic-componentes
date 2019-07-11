import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { SearchbarPage } from './searchbar.page';
import { ComponentsModule } from '../../components/components.module';
import { PipesModule } from '../../pipes/pipes.module';
var routes = [
    {
        path: '',
        component: SearchbarPage
    }
];
var SearchbarPageModule = /** @class */ (function () {
    function SearchbarPageModule() {
    }
    SearchbarPageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                RouterModule.forChild(routes),
                ComponentsModule,
                PipesModule
            ],
            declarations: [SearchbarPage]
        })
    ], SearchbarPageModule);
    return SearchbarPageModule;
}());
export { SearchbarPageModule };
//# sourceMappingURL=searchbar.module.js.map