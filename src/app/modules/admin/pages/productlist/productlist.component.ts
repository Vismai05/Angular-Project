import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductlistService } from 'src/app/services/product/productlist.service';

@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.css']
})
export class ProductlistComponent implements OnInit {

  constructor(private list:ProductlistService, private actv:ActivatedRoute) { }

  ngOnInit(): void {
    this.list.geturl().subscribe((a) => this.lst=a);
    this.actv.params.subscribe((itm:any)=> this.product = itm);
    console.log(this.product);
  }

  lst:any = [] 
  product:any

  senditem(value:any){
    this.list.senditem(value);
  }
}
