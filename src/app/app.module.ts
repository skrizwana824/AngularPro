import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material'; 
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { SeaComponent } from './sea/sea.component';
import { PaymentComponent } from './payment/payment.component';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { SummerComponent } from './summer/summer.component';
import { WinterComponent } from './winter/winter.component';
import { SpringComponent } from './spring/spring.component';
import { AutomComponent } from './autom/autom.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { OrderComponent } from './order/order.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RegisterComponent } from './register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    SeaComponent,
    PaymentComponent,
    LoginComponent,
    SummerComponent,
    WinterComponent,
    SpringComponent,
    AutomComponent,
    AboutusComponent,
    OrderComponent,
    RegisterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatListModule,
    FormsModule,ReactiveFormsModule,HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
