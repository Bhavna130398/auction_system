import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminDashboardComponent } from './pages/admin/admin-dashboard/admin-dashboard.component';
import { AuctionerComponent } from './pages/admin/admin-dashboard/auctioner/auctioner.component';
import { BiddarComponent } from './pages/admin/admin-dashboard/biddar/biddar.component';
import { AuctionerFrontComponent } from './pages/user/auctioner-front/auctioner-front.component';
import { BiddarFrontComponent } from './pages/user/biddar-front/biddar-front.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { ProductComponent } from './pages/user/product/product.component';
import { AuthGuard } from './guard/auth.guard';
import { AuctionerGuard } from './guard/auctioner.guard';
import { BidderGuard } from './guard/bidder.guard';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  {
    path: 'admin', canActivate: [AuthGuard],
    children: [
      { path: '', component: AdminDashboardComponent },
      { path: 'biddar', component: BiddarComponent },
      { path: 'auctioner', component: AuctionerComponent },
    ]
  },
  { path: 'product', component: ProductComponent },

  // { path: 'admin/dashboard', component: AdminDashboardComponent, canActivate: [AuthGuard] },
  // { path: 'admin/biddar', component: BiddarComponent, canActivate: [AuthGuard] },
  // { path: 'admin/auctioner', component: AuctionerComponent, canActivate: [AuthGuard] },

  { path: 'user/auctioner', component: AuctionerFrontComponent, canActivate: [AuctionerGuard] },
  { path: 'user/biddar', component: BiddarFrontComponent, canActivate: [BidderGuard] },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
