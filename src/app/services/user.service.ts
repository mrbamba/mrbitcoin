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
    moves: [{
      coins: 4,
      contactEmail: "steven@gmail.com",
      contactId: "5a566402abce24c6bfe4d699d",
      contactName: "Steven Bach",
      createdAt: Date.now()-1000,
      direction: "Outbound"
    },
    {
      coins: 2.6,
      contactEmail: "dominiquesoto@renovifze.com",
      contactId: "5a566402abce24c6bfe46f99d",
      contactName: "Robbie Smith",
      createdAt: Date.now()-1000*60*3,
      direction: "Outbound",
    },
    {
      coins: 1.1,
      contactEmail: "dominiquesoto@renovize.com",
      contactId: "5a566402abce24c6bfe4699d",
      contactName: "Dominique Soto",
      createdAt: Date.now()-1000*60*60*5,
      direction: "Outbound",
    },
    {
      coins: 0.0000034534,
      contactEmail: "jimmychoo@gmail.com",
      contactId: "5a566402abce24c6bfe469g9d",
      contactName: "Jimmy Choo",
      createdAt: Date.now()-1000*60*60*24*3,
      direction: "Outbound",
    },
    {
      coins: 0.7,
      contactEmail: "dominiquesoto@renovize.com",
      contactId: "5a566402abce24c6bfe4699d",
      contactName: "Dominique Soto",
      createdAt: Date.now()-1000*60*60*24*15,
      direction: "Outbound",
    },
    {
      coins: 0.9,
      contactEmail: "dominiquesoto@renovize.com",
      contactId: "5a566402abce24c6bfe4699d",
      contactName: "Dominique Soto",
      createdAt: Date.now()-1000*60*60*24*60,
      direction: "Outbound",
    }]
  }

  public getUser(): Observable<User> {
    return of(this.user)
  }
  public updateUser(user): Observable<User> {
    this.user = user;
    sessionStorage.setItem('user', JSON.stringify(user))
    return of(user)
  }

}
