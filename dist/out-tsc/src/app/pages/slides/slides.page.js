import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
var SlidesPage = /** @class */ (function () {
    function SlidesPage(navCtrl) {
        this.navCtrl = navCtrl;
        this.ocultar = '';
        this.slides = [
            {
                img: '/assets/slides/photos.svg',
                titulo: 'Comparte Fotos',
                desc: 'Mira y comparte increíbles fotos de todo el mundo'
            },
            {
                img: '/assets/slides/music-player-2.svg',
                titulo: 'Escucha Música',
                desc: 'Toda tu música favorita está aquí'
            },
            {
                img: '/assets/slides/calendar.svg',
                titulo: 'Nunca olvides nada',
                desc: 'El mejor calendario del mundo a tu disposición'
            },
            {
                img: '/assets/slides/placeholder-1.svg',
                titulo: 'Tu ubicación',
                desc: 'Siempre sabremos donde estás'
            }
        ];
    }
    SlidesPage.prototype.ngOnInit = function () {
    };
    SlidesPage.prototype.onClick = function () {
        this.ocultar = 'animated fadeOut fast';
        this.navCtrl.navigateBack('/');
    };
    SlidesPage = tslib_1.__decorate([
        Component({
            selector: 'app-slides',
            templateUrl: './slides.page.html',
            styleUrls: ['./slides.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [NavController])
    ], SlidesPage);
    return SlidesPage;
}());
export { SlidesPage };
//# sourceMappingURL=slides.page.js.map