import { Component, Input, OnInit, Output } from '@angular/core';
import { Item } from 'src/app/modelos/item';
/* Se cambia la importacion que nos da por defecto por esta */
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  @Input() item: Item= new Item();
  /* Creamos el evente con el que se eliminaran los productos a traves de nuestra clase Item */
 @Output() deleteItem: EventEmitter<Item>= new EventEmitter();
 /* Evento para actualizar nuestro cambio, cada que el ckeck este marcado */
 @Output() toggleItem: EventEmitter<Item>= new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }
  /* Metodo para eliminar producto */
  onDelete(item:Item){
    this.deleteItem.emit(item);
  }
  /* Metodo para el checkbox */
  onToggle(item:Item){
    /* Con esto estamos diciendo que se cambie el dato, se esta eliminando solo se esta modificando */
    item.completed = !item.completed;
    /*Mandamos a llamar el evento */
    this.toggleItem.emit(item);
  }
}
