import { Component, inject, OnInit } from '@angular/core';
import { ProdutoService } from '../produto-service';

@Component({
  selector: 'app-principal',
  imports: [],
  templateUrl: './principal.html',
  styleUrl: './principal.css',
})
export class Principal implements OnInit {
  private produtoService = inject(ProdutoService);

  public listaProdutos: any[] = [];

  ngOnInit(): void {
    this.produtoService.listar().subscribe({
      next: (produtos) => {
        this.listaProdutos = produtos;
      }
    });
  }
}
