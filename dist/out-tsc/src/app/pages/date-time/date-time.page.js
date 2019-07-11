import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
var DateTimePage = /** @class */ (function () {
    function DateTimePage() {
        this.fechaNaci = new Date();
    }
    DateTimePage.prototype.ngOnInit = function () {
        this.customPickerOptions = {
            buttons: [{
                    text: 'Save',
                    handler: function (evento) {
                        console.log('Clicked Save');
                        console.log(evento);
                    }
                }, {
                    text: 'Log',
                    handler: function () {
                        console.log('Clicked Log. Do not Dismiss. ');
                    }
                }]
        };
    };
    DateTimePage.prototype.cambioFecha = function (event) {
        console.log('ionChange', event);
        console.log('Date', new Date(event.detail.value));
    };
    DateTimePage = tslib_1.__decorate([
        Component({
            selector: 'app-date-time',
            templateUrl: './date-time.page.html',
            styleUrls: ['./date-time.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [])
    ], DateTimePage);
    return DateTimePage;
}());
export { DateTimePage };
//# sourceMappingURL=date-time.page.js.map