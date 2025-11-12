import { Routes } from '@angular/router';
import { Principal } from './principal/principal';
import { Cadastro } from './cadastro/cadastro';

export const routes: Routes = [
    {
        path: '',
        component: Principal
    },
    {
        path: 'cadastro',
        component: Cadastro
    }
];
