import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductlistComponent } from './product/productlist/productlist.component';
import { CartViewComponent } from './cart/cart-view/cart-view.component';


const routes: Routes = [
  {path:'', redirectTo:'/products', pathMatch:'full'},
  {path:'products', component: ProductlistComponent},
  {path:'cart', component: CartViewComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
