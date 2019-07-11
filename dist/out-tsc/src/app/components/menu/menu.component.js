import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { DataService } from '../../services/data.service';
var MenuComponent = /** @class */ (function () {
    function MenuComponent(dataService) {
        this.dataService = dataService;
    }
    MenuComponent.prototype.ngOnInit = function () {
        this.componentes = this.dataService.getMenuOpts();
    };
    MenuComponent = tslib_1.__decorate([
        Component({
            selector: 'app-menu',
            templateUrl: './menu.component.html',
            styleUrls: ['./menu.component.scss']
        }),
        tslib_1.__metadata("design:paramtypes", [DataService])
    ], MenuComponent);
    return MenuComponent;
}());
export { MenuComponent };
//# sourceMappingURL=menu.component.js.map