import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { PageDashboardComponent } from './pages/page-dashboard/page-dashboard.component';
import { HeaderComponent } from './pages/header/header.component';
import { FooterComponent } from './pages/footer/footer.component';
import { ContactusComponent } from './pages/contactus/contactus.component';
import { AboutusComponent } from './pages/aboutus/aboutus.component';
import { MainComponent } from './pages/main/main.component';
import { ProductlistComponent } from './pages/productlist/productlist.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CategoryPipe } from './category.pipe';
import { SelectedcategoryPipe } from './selectedcategory.pipe';
import { CartComponent } from './pages/cart/cart.component';

@NgModule({
  declarations: [
    PageDashboardComponent,
    HeaderComponent,
    FooterComponent,
    ContactusComponent,
    AboutusComponent,
    MainComponent,
    ProductlistComponent,
    CategoryPipe,
    SelectedcategoryPipe,
    CartComponent,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ]
})
export class AdminModule { }
