import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { DataService } from './services/data.service';
var AppComponent = /** @class */ (function () {
    function AppComponent(platform, splashScreen, statusBar, dataService) {
        this.platform = platform;
        this.splashScreen = splashScreen;
        this.statusBar = statusBar;
        this.dataService = dataService;
        this.initializeApp();
    }
    AppComponent.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
            _this.componentes = _this.dataService.getMenuOpts();
        });
    };
    AppComponent = tslib_1.__decorate([
        Component({
            selector: 'app-root',
            templateUrl: 'app.component.html'
        }),
        tslib_1.__metadata("design:paramtypes", [Platform,
            SplashScreen,
            StatusBar,
            DataService])
    ], AppComponent);
    return AppComponent;
}());
export { AppComponent };
//# sourceMappingURL=app.component.js.map