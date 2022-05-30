import { Component, OnInit } from '@angular/core';
import { ProductlistService } from 'src/app/services/product/productlist.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private prlst:ProductlistService) { }

  ngOnInit(): void {
    this.prlst.geturl().subscribe((q) => this.prlist = q);
  }

  prlist:any = []
}
