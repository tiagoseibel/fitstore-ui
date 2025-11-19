import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProdutoService {
  private http = inject(HttpClient);
  
  listar(): Observable<any[]> {
    return this.http.get<any[]>('http://localhost:8080/produtos');
  }
}
