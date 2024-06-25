import { Routes } from '@angular/router';
import { IndexComponent } from './Home/index/index.component';

export const routes: Routes = [
    {path: "", component: IndexComponent, loadChildren: () => import("./Home/home.route").then(m => m.Home_Route)}
];
