import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { Withdrawal } from './withdrawal/withdrawal.component';
import { routing } from './app.routes';
import { Balance } from './balance/balance.component';
import { Deposit } from './deposit/deposit.component';
import { DepositCheck } from './deposit_check/deposit_check.component';

@NgModule({
  declarations: [
    AppComponent,
    Balance,
    Deposit,
    DepositCheck,
    Withdrawal
  ],
  imports: [
    BrowserModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
