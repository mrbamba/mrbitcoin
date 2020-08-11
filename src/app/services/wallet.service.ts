import { Injectable } from '@angular/core';
import { User } from '../user';
import { Contact } from '../models/contact.model';
import { UserService } from './user.service';
import { of, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WalletService {

  constructor(private userService: UserService) { }


  public moveFunds(fromUser: User, toContact: Contact, amount: number) {
    console.log('moving funds', { fromUser, toContact });
    fromUser.moves.unshift({
      contactName: toContact.name,
      contactId: toContact._id,
      contactEmail: toContact.email,
      direction: 'Outbound',
      createdAt: Date.now(),
      coins: amount,
    })
    fromUser.coins -= amount;
    console.log({ fromUser });
    return this.userService.updateUser(fromUser)
      .pipe(user => {
        return of(user)
      })

  }
}
