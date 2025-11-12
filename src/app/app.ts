import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Header } from "./leiaute/header/header";
import { Footer } from "./leiaute/footer/footer";
import { Menu } from "./leiaute/menu/menu";
import { Principal } from "./principal/principal";
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [FormsModule, Header, Footer, Menu, Principal, RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('ecommerce');


}
