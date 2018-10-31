import {Component, OnInit} from '@angular/core';
import {AccountsService} from '../accounts/accounts.service';
import {Account} from '../accounts/account';

@Component({
  selector: 'balance',
  templateUrl: './balance.component.html',
  styleUrls: ['./balance.component.css']
})
export class Balance implements OnInit {
  title = 'balance';
  userId: string = "5bd8ef89e7179a1b53001c31";

  account: Account;

  constructor(private accountService: AccountsService) {
  }

  ngOnInit() {
    this.accountService.getUserAccount(this.userId).subscribe(res => {
      this.account = Account.toAccount(res[0]);
    });
  }


}
