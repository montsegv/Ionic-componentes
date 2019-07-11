import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { delay } from 'rxjs/operators';
var DataService = /** @class */ (function () {
    function DataService(http) {
        this.http = http;
    }
    //método que permite obtener los usuarios
    DataService.prototype.getUsers = function () {
        return this.http.get('https://jsonplaceholder.typicode.com/users');
    };
    //MÉTODO QUE REGRESA UN ARREGLO DE COMPONENTE
    DataService.prototype.getMenuOpts = function () {
        return this.http.get('/assets/data/menu.json');
    };
    DataService.prototype.getAlbumes = function () {
        return this.http.get('https://jsonplaceholder.typicode.com/albums');
    };
    DataService.prototype.getHeroes = function () {
        return this.http.get('/assets/data/superheroes.json')
            .pipe(delay(2000));
    };
    DataService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [HttpClient])
    ], DataService);
    return DataService;
}());
export { DataService };
//# sourceMappingURL=data.service.js.map