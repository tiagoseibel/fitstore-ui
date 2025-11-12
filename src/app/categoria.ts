import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Categoria {
  private http = inject(HttpClient);
  
  listar() {
    return this.http.get<any[]>('http://localhost:8080/categorias');
  }

}
