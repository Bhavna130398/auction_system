import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminDashboardComponent } from './pages/admin/admin-dashboard/admin-dashboard.component';
import { AuctionerComponent } from './pages/admin/admin-dashboard/auctioner/auctioner.component';
import { BiddarComponent } from './pages/admin/admin-dashboard/biddar/biddar.component';
import { AuctionerFrontComponent } from './pages/user/auctioner-front/auctioner-front.component';
import { BiddarFrontComponent } from './pages/user/biddar-front/biddar-front.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { AuthGuard } from './guard/auth.guard';
import { AuctionerGuard } from './guard/auctioner.guard';
import { BidderGuard } from './guard/bidder.guard';
import { ProductComponent } from './pages/admin/admin-dashboard/product/product.component';
import { ProductFrontComponent } from './pages/user/product-front/product-front.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  {
    path: 'admin', canActivate: [AuthGuard], component: AdminDashboardComponent,
    children: [
      { path: 'biddar', component: BiddarComponent },
      { path: 'auctioner', component: AuctionerComponent },
      { path: 'product', component: ProductComponent }
    ]
  },
  { path: 'user/auctioner', component: AuctionerFrontComponent, canActivate: [AuctionerGuard] },
  { path: 'user/biddar', component: BiddarFrontComponent, canActivate: [BidderGuard] },
  { path: 'user/product', component: ProductFrontComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
