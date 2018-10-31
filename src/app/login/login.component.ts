import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {UserService} from './user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  submitted = false;
  username;
  password;

  @Output()
  output = new EventEmitter();

  constructor(private userService: UserService) { }

  ngOnInit() {
  }

  onSubmit() {
    this.userService.getUser(this.username, this.password).subscribe(res => {
      if (res.length > 0) {
        this.output.emit();
        this.submitted = true;
      } else {
        alert("Invalid username or password");
      }
    });
  }

}
