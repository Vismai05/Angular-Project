import { Component, OnInit } from '@angular/core';
import { ProductlistService } from 'src/app/services/product/productlist.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor(private prlst:ProductlistService) { }

  ngOnInit(): void {
    this.prlst.geturl().subscribe((pr) => this.prlist = pr);
  }
  prlist:any = []
}
