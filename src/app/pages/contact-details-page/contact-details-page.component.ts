import { Component, OnInit } from '@angular/core';



import { ContactService } from 'src/app/services/contact.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Contact } from 'src/app/models/contact.model';
import { User } from 'src/app/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'contact-details-page',
  templateUrl: './contact-details-page.component.html',
  styleUrls: ['./contact-details-page.component.scss']
})
export class ContactDetailsPageComponent implements OnInit {

  constructor(
    private contactService: ContactService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private userService:UserService
  ) { }

  contact: Contact = null;
  user: User = null
    navigateBack() {
  this.router.navigate(['/contact']);

}
deleteContact() {
  this.contactService.deleteContact(this.contact._id)
  this.navigateBack()
}
loadContact(id) {
  this.contactService.getContactById(id)
    .subscribe(contact => {

      this.contact = contact
    })
}
loadUser(){
  this.userService.getUser()
    .subscribe(user=>{
      this.user=user
      
    })
}

ngOnInit(): void {
  this.activatedRoute.params
    .subscribe(params => {

      this.loadContact(params.id)
    })
    this.loadUser()
    

}

}





