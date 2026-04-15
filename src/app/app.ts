import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './components/layout/header/header';
import { Footer } from './components/layout/footer/footer';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Footer],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('tpAMU');
  // Zone.js package JS qui permet de détecter des chanaements 
  // dans les variables et regénérer, rafraichir la page en 
  // regénérant le html : désactivation optionnelle jusqu'à Angular 20
  // puis par défaut depuis Angular 21
}
