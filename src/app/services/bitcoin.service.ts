import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';
import { filter, map } from 'rxjs/operators'


@Injectable({
  providedIn: 'root'
})
export class BitcoinService {

  constructor(private http: HttpClient) { }
  rates = null;

  public getCurrentRates() {
    this.rates = JSON.parse(sessionStorage.getItem('rates'))
    if (this.rates) {
      console.log('going to first if', this.rates);
      return of(this.rates)
    } else {
      return this.http.get('https://api.alternative.me/v2/ticker/')
        .pipe(
          filter(rates=>{
            this.rates = rates
            console.log(rates);
            
            sessionStorage.setItem('rates', JSON.stringify(this.rates))
            return this.rates
          })
          )
    }
  }
}
