import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { DataService } from '../../services/data.service';
var SearchbarPage = /** @class */ (function () {
    function SearchbarPage(dataService) {
        this.dataService = dataService;
        this.albumes = [];
        this.textoBuscar = '';
    }
    SearchbarPage.prototype.ngOnInit = function () {
        var _this = this;
        this.dataService.getAlbumes()
            .subscribe(function (albumes) {
            console.log(albumes);
            _this.albumes = albumes;
        });
    };
    SearchbarPage.prototype.buscar = function (event) {
        this.textoBuscar = event.detail.value;
    };
    SearchbarPage = tslib_1.__decorate([
        Component({
            selector: 'app-searchbar',
            templateUrl: './searchbar.page.html',
            styleUrls: ['./searchbar.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [DataService])
    ], SearchbarPage);
    return SearchbarPage;
}());
export { SearchbarPage };
//# sourceMappingURL=searchbar.page.js.map