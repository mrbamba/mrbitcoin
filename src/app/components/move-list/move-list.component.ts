import { Component, OnInit, Input } from '@angular/core';
import { User } from 'src/app/user';
import { Contact } from 'src/app/models/contact.model';

@Component({
  selector: 'move-list',
  templateUrl: './move-list.component.html',
  styleUrls: ['./move-list.component.scss']
})
export class MoveListComponent implements OnInit {

  constructor() { }
  @Input() user: User
  @Input() contact: Contact
  moves=[]

  setMoves(){
    if(!this.contact){
      this.moves=this.user.moves
    }else{
      
      this.moves=this.user.moves.filter(move=> move.contactId===this.contact._id)
    }
    
  }
  ngOnInit(): void {
    this.setMoves();
  }


}
