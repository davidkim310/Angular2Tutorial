import { Routes, RouterModule } from '@angular/router';


//define routes here
const APP_ROUTES: Routes = [
    { path: '', component: HomeComponent },
    { path: 'user', component: UserComponent}
];
//register Routes
export const routing = RouterModule.forRoot(APP_ROUTES);

