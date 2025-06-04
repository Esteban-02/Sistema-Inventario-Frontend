import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Producto } from './producto';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  private urlBase = "http://localhost:8080/inventario-app/productos"
  private clienteHTTP = inject(HttpClient)

  obtenerProductosLista(): Observable<Producto[]>{
    return this.clienteHTTP.get<Producto[]>(this.urlBase);
  }

  agregarProducto(producto: Producto ): Observable<Object>{
    return this.clienteHTTP.post(this.urlBase, producto);
  }


  obtenerProductoPorId(id:number){
      return this.clienteHTTP.get<Producto>(`${this.urlBase}/${id}`)
  }




}
