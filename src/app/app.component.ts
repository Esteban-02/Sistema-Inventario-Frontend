import { Component } from '@angular/core';
import { ProductoListaComponent } from "./producto-lista/producto-lista.component";


@Component({
  selector: 'app-root',

  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [ProductoListaComponent]
})
export class AppComponent {
  title = 'inventario-app';
}
