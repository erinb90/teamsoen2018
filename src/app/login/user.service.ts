import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {User} from './user';

@Injectable()
export class UserService {
  constructor(private http: HttpClient) {

  }

  getUser(username: string, password: string): Observable<User[]> {
    return this.http.post<User[]>('http://localhost:3000/api/users', {username: username, password: password});
  }
}
