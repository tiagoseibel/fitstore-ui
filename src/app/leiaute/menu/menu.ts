import { Component, inject, OnInit } from '@angular/core';
import { Categoria } from '../../categoria';

@Component({
  selector: 'app-menu',
  imports: [],
  templateUrl: './menu.html',
  styleUrl: './menu.css',
})
export class Menu implements OnInit {
  private service = inject(Categoria);

  public listaCategorias: any[] = [];

  ngOnInit(): void {
    this.service.listar().subscribe({
      next: (categorias) => {
        this.listaCategorias = categorias;
      }
    });
  }

}
