import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { SignupComponent } from './components/signup/signup.component';
import { AuthGuard } from './Myguards/auth.guard';

const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path:'', redirectTo:'/login',pathMatch:'full'},
  {path:'signup',component:SignupComponent},
  {path:'admin',
  canActivate:[AuthGuard],
  loadChildren:()=>import('./modules/admin/admin.module').then((a)=>a.AdminModule)},
  {path:'**',component:NotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
