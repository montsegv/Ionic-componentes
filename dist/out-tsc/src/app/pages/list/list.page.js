import * as tslib_1 from "tslib";
import { Component, ViewChild } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { IonList } from '@ionic/angular';
var ListPage = /** @class */ (function () {
    function ListPage(dataService) {
        this.dataService = dataService;
    }
    ListPage.prototype.ngOnInit = function () {
        this.usuarios = this.dataService.getUsers();
    };
    ListPage.prototype.favorite = function (user) {
        console.log('favorite', user);
        this.lista.closeSlidingItems();
    };
    ListPage.prototype.share = function (user) {
        console.log('share', user);
        this.lista.closeSlidingItems();
    };
    ListPage.prototype.borrar = function (user) {
        console.log('borrar', user);
        this.lista.closeSlidingItems();
    };
    tslib_1.__decorate([
        ViewChild('lista'),
        tslib_1.__metadata("design:type", IonList)
    ], ListPage.prototype, "lista", void 0);
    ListPage = tslib_1.__decorate([
        Component({
            selector: 'app-list',
            templateUrl: './list.page.html',
            styleUrls: ['./list.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [DataService])
    ], ListPage);
    return ListPage;
}());
export { ListPage };
//# sourceMappingURL=list.page.js.map