import { Component, effect, signal } from '@angular/core';

import { Client } from './client/client';
import { FormsModule } from '@angular/forms';
import { Utilisateur } from './utilisateur/utilisateur';
import { RouterOutlet } from '@angular/router';
import { Header } from './header/header';

@Component({
  selector: 'app-root',
  imports: [Client, FormsModule, Utilisateur, RouterOutlet, Header],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('gestion-banque-master2');

  nom = signal("Mamadou");
  age = signal(10);

  articles = signal([
    { id: 1, titre: 'Premier article' },
    { id: 2, titre: 'Deuxieme article' },
    { id: 3, titre: 'Troisieme article' },
  ]);

  constructor() {
    effect(() => {
      console.log('Compteur =', this.age())
    })
  }


  affiche(){
    alert("Bienvenue au Senegal");
  }

  increment(){
    this.age.set(this.age() + 1)
  }
}
