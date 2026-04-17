import { Routes } from '@angular/router';
import { Welcome } from './components/navigationExample/welcome/welcome';
import { Goodbye } from './components/navigationExample/goodbye/goodbye';
import { NotFound } from './components/not-found/not-found';
import { ExosSignals } from './components/exos-signals/exos-signals';
import { ExosIO } from './components/exos-io/exos-io';
import { UserFormV1 } from './components/forms/user-form-v1/user-form-v1';
import { UserFormV2 } from './components/forms/user-form-v2/user-form-v2';
import { SpaceNews } from './components/bootstrap/space-news/space-news';
import { ExosMaterial } from './components/exos-material/exos-material';
import { ExemplesObservables } from './components/exemples-observables/exemples-observables';
import { ProductApi } from './components/product-api/product-api';
//import { ProductForm } from './components/product-form/product-form';

export const routes: Routes = [

    { path : 'welcome', component : Welcome , title : 'Home Page' },
    { path : '', redirectTo : '/welcome', pathMatch : 'full'},
    { path : 'byebye', component : Goodbye},
    { path : 'signals', component : ExosSignals},
    { path : 'io', component : ExosIO},
    { path : 'adduserv1', component : UserFormV1},
    { path : 'adduserv2', component : UserFormV2},
    { path : 'spacenews', component : SpaceNews},
    { path : 'material', component : ExosMaterial},
    { path : 'observable', component : ExemplesObservables},
    //{ path : 'products/new', component : ProductForm},
    { path : 'products', component : ProductApi},
    { path : '**', component : NotFound }

];
