import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { DataService } from '../services/data.service';
var HomePage = /** @class */ (function () {
    function HomePage(menuCtrl, dataService) {
        this.menuCtrl = menuCtrl;
        this.dataService = dataService;
    }
    HomePage.prototype.ngOnInit = function () {
        this.Componentes = this.dataService.getMenuOpts();
    };
    HomePage.prototype.toggleMenu = function () {
        this.menuCtrl.toggle();
    };
    HomePage = tslib_1.__decorate([
        Component({
            selector: 'app-home',
            templateUrl: './home.page.html',
            styleUrls: ['./home.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [MenuController,
            DataService])
    ], HomePage);
    return HomePage;
}());
export { HomePage };
//# sourceMappingURL=home.page.js.map