import { Component, OnInit } from '@angular/core';
import { ProductlistService } from 'src/app/services/product/productlist.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  constructor(private itemlist:ProductlistService) { }

  ngOnInit(): void {
    this.item =  this.itemlist.items;
    for (let i=0; i<this.item.length; i++){
      let amount:number =  this.item[i].price
      this.total = this.total + amount;
      this.total = Math.round(this.total);
    }
  }
  item:any = []
  total = 0
  amount:number = 1
  remove(value:any){
    this.total = this.total - this.item[value].price;
    this.total = Math.round(this.total);
    this.item.splice(value,1);
  }
}
