import { Routes } from '@angular/router';
import { Client } from './client/client';
import { Utilisateur } from './utilisateur/utilisateur';

export const routes: Routes = [
  {path: '', redirectTo: "client", pathMatch: "full" },
  { path: 'client', component: Client },
  {path: 'utilisateur', component: Utilisateur},
  {path: '**',redirectTo: 'utilisateur', pathMatch: "full" },
];
