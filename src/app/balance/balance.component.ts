import { Component } from '@angular/core';
import { Statement } from '../../assets/Statement'

@Component({
  selector: 'balance',
  templateUrl: './balance.component.html',
  styleUrls: ['./balance.component.css']
})
export class Balance {
  title = 'balance';
  statements: Statement[] = new Array<Statement>();
}
