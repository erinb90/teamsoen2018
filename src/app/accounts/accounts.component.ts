import { Component, OnInit } from '@angular/core';
import {AccountsService} from './accounts.service';
import {Account} from './account';

@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.css']
})
export class AccountsComponent implements OnInit {

  constructor(private accountsService: AccountsService) { }

  accounts: Account[] = [];

  ngOnInit() {
    this.accountsService.getAccounts().subscribe(result => {
      result.forEach(account => {
        this.accounts.push(Account.toAccount(account));
      });
    });
  }

}
