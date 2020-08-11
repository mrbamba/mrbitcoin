import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { User } from '../../user';
import { BitcoinService } from '../../services/bitcoin.service'

@Component({
  selector: 'home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  constructor(
    private userService: UserService,
    private bitcoinService: BitcoinService,
  ) { }
  user: User = null
  currentRates = null
  btcRate=null
  ethRate=null


  ngOnInit(): void {
    this.userService.getUser()
      .subscribe(user => this.user = user);
    this.bitcoinService.getCurrentRates()
      .subscribe(rates => {
        console.log(rates);
        const BTC="1"
        const ETH="1027"
        this.currentRates = rates
        this.btcRate=this.currentRates.data[BTC].quotes.USD.price
        this.ethRate=this.currentRates.data[ETH].quotes.USD.price

        console.log(this.currentRates);
        console.log(this.btcRate);
        console.log(this.ethRate);
        
        
      })
        


  }

}
