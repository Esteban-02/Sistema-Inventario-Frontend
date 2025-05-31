import { Routes } from '@angular/router';
import { ProductoListaComponent } from './producto-lista/producto-lista.component';


//http://localhost:4200     -> Es la ruta por defecto
export const routes: Routes = [
    {path:'productos', component: ProductoListaComponent},      //redirigue a http://localhost:4200/productos -> url por defecto
    {path:'', redirectTo: 'productos', pathMatch: 'full'}       //Redirigue a la URL por defecto
];

/**
 * NOTA:
 * No usar los href de HTML porque refresca toda la pagina y no se estaran usando los path definidos aqui, 
 * para eso se usa reuterLink 
 */

