import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';
import { User } from '../user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }
  user: User = {
    name: 'Ochoa Hyde',
    coins: 100,
    moves: []
  }

  getUser(): Observable<User> {
    return of(this.user)
  }
}
