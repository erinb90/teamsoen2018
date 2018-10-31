import { RouterModule, Routes } from '@angular/router';
import { Withdrawal } from './withdrawal/withdrawal.component';
import { Balance } from './balance/balance.component';
import { Deposit } from './deposit/deposit.component';
import { DepositCheck } from './deposit_check/deposit_check.component';
import { Y_U_Broke } from './huehuehue/invalid.component';

const routes: Routes = [
  { path: 'balance', component: Balance },
  { path: 'deposit', component: Deposit },
  { path: 'deposit_check', component: DepositCheck },
  { path: 'withdrawal', component: Withdrawal },
  { path: 'invalid' , component: Y_U_Broke}
];

export const routing = RouterModule.forRoot(routes);