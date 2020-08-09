import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'contact-filter',
  templateUrl: './contact-filter.component.html',
  styleUrls: ['./contact-filter.component.scss']
})
export class ContactFilterComponent implements OnInit {

  constructor() { }

  filterBy={
    term:''
  }
  @Output()filter = new EventEmitter();
  filterContacts(){
    this.filter.emit(this.filterBy);
  }
  ngOnInit(): void {

  }

}
