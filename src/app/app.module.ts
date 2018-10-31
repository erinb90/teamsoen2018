import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { Withdrawal } from './withdrawal/withdrawal.component';
import { routing } from './app.routes';
import { Balance } from './balance/balance.component';
import { Deposit } from './deposit/deposit.component';
import { DepositCheck } from './deposit_check/deposit_check.component';
import { AccountsComponent } from './accounts/accounts.component';
import {AccountsService} from './accounts/accounts.service';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    Balance,
    Deposit,
    DepositCheck,
    Withdrawal,
    AccountsComponent,
  ],
  imports: [
    BrowserModule,
    routing,
    HttpClientModule
  ],
  providers: [AccountsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
