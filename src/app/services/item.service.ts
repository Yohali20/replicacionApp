/* Servicio que nos ayuda en Angular a acceder a infromacion general, lo que hace es transladar
la informacion de un componente para que sea accesible de forma global */
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Item } from '../modelos/item';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ItemService {
  url:string='http://localhost:3001/items';
  httpOptions = {
    headers:{
      'Content-Type': 'aplication/json'
    }
  };
  /* Lista de producos y agregar un nuevo producto */
  items:Item[]=[
    {
      id:0,
      title:'manzana',
      price: 10.5,
      quantity: 4,
      completed: false
    },
    {
      id:1,
      title:'pan',
      price: 3.50,
      quantity: 8,
      completed: true
    },
    {
      id:2,
      title:'melon',
      price: 300,
      quantity: 1,
      completed: false
    }
  ];
  /* Inyectar en hhtp */
  constructor( private http:HttpClient) { }
  /* FUNCION OBTENER */
  /* Creamos una funcion que va a colocar los items */
  /* Quiero que sea una funcion que regrese un objeto observable */
  getItems():Observable<Item[]>{
   //return this.items;
   return this.http.get<Item[]>(this.url);
  }
  /* FUNCION AÑADIR */
  addItem(item:Item):Observable<Item>{
    /* unshift: para que nos agregue el elemento al inicio */
    /* this.items.unshift(item); */
    return this.http.post<Item>(this.url, item, this.httpOptions);
  }
  /* FUNDION ACTUALIZAR TODO */
  toggleItem(item:Item):Observable<Item>{
    return this.http.put<Item>(this.url + item.id, item, this.httpOptions );
    }
    /* FUNCION ELIMINAR */
  deleteItem(item:Item):Observable<Item>{
      return this.http.delete<Item>(this.url + item.id);
      }
}
