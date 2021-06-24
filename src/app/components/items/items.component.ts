import { Component, OnInit } from '@angular/core';
import {Item} from '../../modelos/item';
import { ItemService } from 'src/app/services/item.service';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {

  //inicializamos nuesta variable para que no nos marque error 
  items: Item[] = [];
  total: number =0;

  /* Inyectar servicio por medio de una variable */
  constructor(private itemService:ItemService) { }

  ngOnInit(): void {
    /* lista de los productos */
    //this.items = [];
   /*  this.items =this.itemService.getItems(); */
   this.itemService.getItems().subscribe(data =>{
     this.items = data;
     /* Actualizar la operacion */
     this.getTotal();
   })
   

  }
  deleteItem(item:Item){
    /* Filte: regresa todos los elementos que su id sean diferenctes al id que se esta reciebiendo en Item 
    entonces al dar clic en el boton eliminar se eliminara el producto de la lista*/
    this.items = this.items.filter(x => x.id != item.id)
    /* Mandamos a llamar el metodo de eliminar */
    this.itemService.deleteItem(item).subscribe();
    /* Actualizar datos del total */
    this.getTotal();
  }
  toggleItem(item:Item){
     /* Mandamos a llamar el metodo de eliminar */
     this.itemService.toggleItem(item).subscribe();
    /* Solo se actualiza la variable de total */
    this.getTotal();
  }
  /* Creacion de la funcion para que nos permita modificar la variable total */
  getTotal(){
    this.total = this.items
                 .filter(item => !item.completed)
                 /* Map porque primero se tiene que hacer la multiplicacion */
                 .map(item => item.quantity * item.price)
                 .reduce((acc,item)=> acc += item,0);

  }
}
