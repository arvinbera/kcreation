import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookingComponent } from './booking/booking.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthGuard as Guard} from './jwt/AuthGuard';
import { LoginComponent } from './login/login.component';
import { ProductComponent } from './product/product.component';
import { ProductdetailsComponent } from './productdetails/productdetails.component';
import { ProductupdateComponent } from './productupdate/productupdate.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
  {
    path: "user",component:UserComponent,canActivate:[Guard]
  },
  {
    path: "product",component:ProductComponent
  },
  {
    path: "booking",component:BookingComponent
  },
  {
    path: "dashboard",component:DashboardComponent,canActivate:[Guard]
  },
  {
    path: "login",component:LoginComponent
  },
  {
    path: "productdetails/:id",component:ProductdetailsComponent
  },
  {
    path: "productupdate/:id",component:ProductupdateComponent
  },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
