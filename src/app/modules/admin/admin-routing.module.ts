import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './pages/aboutus/aboutus.component';
import { CartComponent } from './pages/cart/cart.component';
import { ContactusComponent } from './pages/contactus/contactus.component';
import { MainComponent } from './pages/main/main.component';
import { PageDashboardComponent } from './pages/page-dashboard/page-dashboard.component';
import { ProductlistComponent } from './pages/productlist/productlist.component';

const routes: Routes = [
  {path:'',component:PageDashboardComponent, children:[
    {path:'main',component:MainComponent},
    {path:'product-list',component:ProductlistComponent},
    {path:'product-list/:category',component:ProductlistComponent},
    {path:'aboutus',component:AboutusComponent},
    {path:'contactus',component:ContactusComponent},
    {path:'cart',component:CartComponent},
    {path:'cart/:product',component:CartComponent},
    {path:'', redirectTo:'/admin/main', pathMatch:'full'}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
