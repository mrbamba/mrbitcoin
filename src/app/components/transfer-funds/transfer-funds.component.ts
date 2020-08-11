import { Component, OnInit, Input } from '@angular/core';
import { Contact } from 'src/app/models/contact.model';
import { User } from 'src/app/user';
import { WalletService } from 'src/app/services/wallet.service'

@Component({
  selector: 'transfer-funds',
  templateUrl: './transfer-funds.component.html',
  styleUrls: ['./transfer-funds.component.scss']
})
export class TransferFundsComponent implements OnInit {

  constructor(private walletService:WalletService) { }
  @Input() contact: Contact
  @Input() user:User
  transferAmount=null;

  performTransfer(ev){
    ev.preventDefault
    if (this.transferAmount>this.user.coins)return
    console.log('moving funds');
    this.walletService.moveFunds(this.user,this.contact, this.transferAmount)
    .subscribe(user=>{
      this.transferAmount=0
    })
    
  }
  ngOnInit(): void {

    
  }

}
