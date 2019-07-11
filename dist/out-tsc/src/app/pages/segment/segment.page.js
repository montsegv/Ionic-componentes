import * as tslib_1 from "tslib";
import { Component, ViewChild } from '@angular/core';
import { IonSegment } from '@ionic/angular';
import { DataService } from '../../services/data.service';
var SegmentPage = /** @class */ (function () {
    function SegmentPage(dataService) {
        this.dataService = dataService;
        this.publisher = '';
    }
    SegmentPage.prototype.ngOnInit = function () {
        this.segment.value = 'todos';
        this.superHeroes = this.dataService.getHeroes();
    };
    SegmentPage.prototype.segmentChanged = function (event) {
        var valorSegmento = event.detail.value;
        if (valorSegmento === 'todos') {
            this.publisher = '';
            return;
        }
        this.publisher = valorSegmento;
        console.log(valorSegmento);
    };
    tslib_1.__decorate([
        ViewChild(IonSegment),
        tslib_1.__metadata("design:type", IonSegment)
    ], SegmentPage.prototype, "segment", void 0);
    SegmentPage = tslib_1.__decorate([
        Component({
            selector: 'app-segment',
            templateUrl: './segment.page.html',
            styleUrls: ['./segment.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [DataService])
    ], SegmentPage);
    return SegmentPage;
}());
export { SegmentPage };
//# sourceMappingURL=segment.page.js.map