import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
var routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', loadChildren: './home/home.module#HomePageModule' },
    { path: 'alert', loadChildren: './pages/alert/alert.module#AlertPageModule' },
    { path: 'action-sheet', loadChildren: './pages/action-sheet/action-sheet.module#ActionSheetPageModule' },
    { path: 'avatar', loadChildren: './pages/avatar/avatar.module#AvatarPageModule' },
    { path: 'botones', loadChildren: './pages/botones/botones.module#BotonesPageModule' },
    { path: 'card', loadChildren: './pages/card/card.module#CardPageModule' },
    { path: 'check', loadChildren: './pages/check/check.module#CheckPageModule' },
    { path: 'date-time', loadChildren: './pages/date-time/date-time.module#DateTimePageModule' },
    { path: 'fab', loadChildren: './pages/fab/fab.module#FabPageModule' },
    { path: 'grid', loadChildren: './pages/grid/grid.module#GridPageModule' },
    { path: 'infinite-scroll', loadChildren: './pages/infinite-scroll/infinite-scroll.module#InfiniteScrollPageModule' },
    { path: 'input', loadChildren: './pages/input/input.module#InputPageModule' },
    { path: 'list', loadChildren: './pages/list/list.module#ListPageModule' },
    { path: 'list-order', loadChildren: './pages/list-order/list-order.module#ListOrderPageModule' },
    { path: 'loading', loadChildren: './pages/loading/loading.module#LoadingPageModule' },
    { path: 'modal', loadChildren: './pages/modal/modal.module#ModalPageModule' },
    { path: 'popover', loadChildren: './pages/popover/popover.module#PopoverPageModule' },
    { path: 'progress-bar', loadChildren: './pages/progress-bar/progress-bar.module#ProgressBarPageModule' },
    { path: 'refresher', loadChildren: './pages/refresher/refresher.module#RefresherPageModule' },
    { path: 'searchbar', loadChildren: './pages/searchbar/searchbar.module#SearchbarPageModule' },
    { path: 'segment', loadChildren: './pages/segment/segment.module#SegmentPageModule' },
    { path: 'slides', loadChildren: './pages/slides/slides.module#SlidesPageModule' }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib_1.__decorate([
        NgModule({
            imports: [
                RouterModule.forRoot(routes)
            ],
            exports: [RouterModule]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
export { AppRoutingModule };
//# sourceMappingURL=app-routing.module.js.map