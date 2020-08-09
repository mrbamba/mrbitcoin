import { Component, OnInit, Input } from '@angular/core';
import { ContactService } from '../../services/contact.service';


@Component({
  selector: 'contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.scss']
})
export class ContactPageComponent implements OnInit {

  constructor(private contactService:ContactService) { }
  contacts=this.contactService.contacts$
  ngOnInit(): void {
    this.loadContacts(null)
  }
  loadContacts(filterBy){
    this.contactService.loadContacts(filterBy)
  }

}
