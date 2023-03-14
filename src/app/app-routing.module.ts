import { EditApiComponent } from './edit-api/edit-api.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { APIComponent } from './components/api/api.component';
import { LoginComponent } from './components/login/login.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { ProductEditComponent } from './components/product-edit/product-edit.component';
import { ProductsComponent } from './components/products/products.component';
import { WelcomComponent } from './components/welcom/welcom.component';

const routes: Routes = [
  {path:'welcom',component:WelcomComponent},
  {path:'',redirectTo:'welcom',pathMatch:'full'},
  {path:'products',component:ProductsComponent},
  {path:'products/:id',component:ProductDetailsComponent},
  {path:'products/:id/edit',component:ProductEditComponent},
  {path:'login',component:LoginComponent},
  {path:'api',component:APIComponent},
  {path:'api-edit/:id',component:EditApiComponent},
  {path:'**',component:NotFoundComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
