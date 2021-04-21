import { BrowserModule, } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http'
import { MaterialModule } from './modules/material.module';


import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminDashboardComponent } from './pages/admin/admin-dashboard/admin-dashboard.component';
import { BiddarComponent } from './pages/admin/admin-dashboard/biddar/biddar.component';
import { AuctionerComponent } from './pages/admin/admin-dashboard/auctioner/auctioner.component';
import { AuctionerFrontComponent } from './pages/user/auctioner-front/auctioner-front.component';
import { BiddarFrontComponent } from './pages/user/biddar-front/biddar-front.component';
import { ProductComponent } from './pages/admin/admin-dashboard/product/product.component';
import { SharedProductComponent } from './pages/shared/product/product.component';
import { DialogComponent } from './dialog/dialog.component'

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    AdminDashboardComponent,
    BiddarComponent,
    AuctionerComponent,
    AuctionerFrontComponent,
    BiddarFrontComponent,
    ProductComponent,
    DialogComponent,
    SharedProductComponent
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    CommonModule
  ],
  providers: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule { }
