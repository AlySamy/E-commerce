import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { WelcomComponent } from './components/welcom/welcom.component';
import { ProductsComponent } from './components/products/products.component';
import { FooterComponent } from './components/footer/footer.component';
import { LoginComponent } from './components/login/login.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { ProductEditComponent } from './components/product-edit/product-edit.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { APIComponent } from './components/api/api.component';
import { EditApiComponent } from './edit-api/edit-api.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    WelcomComponent,
    ProductsComponent,
    FooterComponent,
    LoginComponent,
    ProductDetailsComponent,
    ProductEditComponent,
    NotFoundComponent,
    APIComponent,
    EditApiComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
