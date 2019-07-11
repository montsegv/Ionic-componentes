import * as tslib_1 from "tslib";
import { Pipe } from '@angular/core';
var FiltroPipe = /** @class */ (function () {
    function FiltroPipe() {
    }
    FiltroPipe.prototype.transform = function (arreglo, texto, columna) {
        if (texto === '') {
            return arreglo;
        }
        texto = texto.toLowerCase();
        return arreglo.filter(function (item) {
            return item[columna].toLowerCase()
                .includes(texto);
        });
        return arreglo;
    };
    FiltroPipe = tslib_1.__decorate([
        Pipe({
            name: 'filtro'
        })
    ], FiltroPipe);
    return FiltroPipe;
}());
export { FiltroPipe };
//# sourceMappingURL=filtro.pipe.js.map