import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Item } from 'src/app/modelos/item';
import { ItemService } from 'src/app/services/item.service';

@Component({
  selector: 'app-additem',
  templateUrl: './additem.component.html',
  styleUrls: ['./additem.component.css']
})
export class AdditemComponent implements OnInit {
  id:number=0;
  title:string='';
  price:number=0;
  quantity:number=0;

  /* Mandamos a llamar nuestro servicio */
                                            /* inyectamos la variable router para poder navergar */
  constructor(private itemService:ItemService, private router:Router) { }

  ngOnInit(): void {
  }
  onSubmit(){
    /* Creacion del objeto */
    const item = new Item();
    item.id = this.id;
    item.title = this.title;
    item.price = this.price;
    item.quantity = this.quantity;
    item.completed = false;
    
    /* this.itemService.addItem(item); */
    this.itemService.addItem(item).subscribe(i =>{
          /* Le tenemos que decir a nuestro ruteador que nos regrese a la pagina principal */
    this.router.navigate(['/']);

    });
  }
}
