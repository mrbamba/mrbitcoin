import { Component, OnInit, Input } from '@angular/core';
import { ContactService } from '../../services/contact.service';
import { Contact } from '../../contact';


@Component({
  selector: 'contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.scss']
})
export class ContactPageComponent implements OnInit {

  constructor(private contactService:ContactService) { }


  contacts:Contact[]=[]


  loadContacts(filterBy){
    this.contactService.loadContacts(filterBy)
  }

  

getContacts(){
  this.contactService.contacts$
  .subscribe(contacts=>{this.contacts=contacts})
}
  ngOnInit(): void {
    this.loadContacts(null)
    this.getContacts()
  }

}
