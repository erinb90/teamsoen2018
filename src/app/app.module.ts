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
import { Y_U_Broke } from './huehuehue/invalid.component';

@NgModule({
  declarations: [
    AppComponent,
    Balance,
    Deposit,
    DepositCheck,
    Withdrawal,
    Y_U_Broke,
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
