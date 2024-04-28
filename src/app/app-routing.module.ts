import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PaymentComponent } from './payment/payment.component';
import { SeaComponent } from './sea/sea.component';
import { LoginComponent } from './login/login.component';
import { SummerComponent } from './summer/summer.component';
import { WinterComponent } from './winter/winter.component';
import { SpringComponent } from './spring/spring.component';
import { AutomComponent } from './autom/autom.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { OrderComponent } from './order/order.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {path:'sea',component:SeaComponent},
  {path:'payment',component: PaymentComponent},
  {path:'login',component: LoginComponent},
  {path:'summer',component: SummerComponent},
  {path:'winter',component: WinterComponent},
  {path:'spring',component: SpringComponent},
  {path:'autom',component: AutomComponent},
  {path:'aboutus',component: AboutusComponent},
  {path:'order',component:OrderComponent},
  {path:'payment',component:PaymentComponent}





];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
