import { Component, OnInit } from '@angular/core';
import { ContactService } from 'src/app/services/contact.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Contact } from 'src/app/models/contact.model';
import { Location } from '@angular/common';

@Component({
  selector: 'contact-edit-page',
  templateUrl: './contact-edit-page.component.html',
  styleUrls: ['./contact-edit-page.component.scss']
})
export class ContactEditPageComponent implements OnInit {

  constructor(
    private contactService: ContactService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private location: Location,
    private contact: Contact,
  ) { }
  contactToEdit: Contact = null

  loadContact(id) {
    this.contactService.getContactById(id)
      .subscribe(contact => {

        this.contactToEdit = JSON.parse(JSON.stringify(contact))
      })
  }
  deleteContact(ev) {
    ev.prevenntDefault
    this.contactService.deleteContact(this.contactToEdit._id)
      .subscribe(contact => {
        this.router.navigate(['/contact']);
      })
  }
  saveContact(ev) {
    ev.preventDefault();
    this.contactService.saveContact(this.contactToEdit)
      .subscribe(contact => {
        console.log(contact);

        this.router.navigate(['/contact']);
      })
  }
  navigateBack(ev) {
    ev.preventDefault()
    this.location.back()
    // this.router.navigate(['/contact']);

  }
  loadEmptyContact() {
    this.contactToEdit = new Contact
  }

  ngOnInit(): void {
    console.log('started locading contact edit');
    
    this.activatedRoute.params
      .subscribe(params => {
        if (!params.id) {
          this.loadEmptyContact()
        } else {

          this.loadContact(params.id)
        }
      })
    console.log(this.contactToEdit);

  }

}
