
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CartDetailsComponent } from './components/cart-details/cart-details.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { FoodDetailsComponent } from './components/food-details/food-details.component';
import { FoodListComponent } from './components/food-list/food-list.component';

const routes: Routes = [
  {path: 'checkout', component: CheckoutComponent},
  {path: 'cart-details', component: CartDetailsComponent},
  {path: 'foods/:id', component: FoodDetailsComponent},
  {path: 'search/:keyword', component: FoodListComponent},
  // {path: 'cuisine/:id/:name', component: FoodListComponent},
  {path: 'cuisine/:id', component: FoodListComponent},
  {path: 'cuisine', component: FoodListComponent},
  {path: 'foods', component: FoodListComponent},
  {path: '', redirectTo: '/foods', pathMatch: 'full'},
  {path: '**', redirectTo: '/foods', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
