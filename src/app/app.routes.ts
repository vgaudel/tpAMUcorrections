import { Routes } from '@angular/router';
import { Welcome } from './components/navigationExample/welcome/welcome';
import { Goodbye } from './components/navigationExample/goodbye/goodbye';
import { NotFound } from './components/not-found/not-found';
import { ExosSignals } from './components/exos-signals/exos-signals';
import { ExosIO } from './components/exos-io/exos-io';

export const routes: Routes = [

    { path : 'welcome', component : Welcome , title : 'Home Page' },
    { path : '', redirectTo : '/welcome', pathMatch : 'full'},
    { path : 'byebye', component : Goodbye},
    { path : 'signals', component : ExosSignals},
    { path : 'io', component : ExosIO},
    { path : '**', component : NotFound }

];
