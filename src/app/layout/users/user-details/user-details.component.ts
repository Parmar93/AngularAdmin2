import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { DialogComponent } from './../../dialog/dialog.component';
import { trigger, transition,style,animate,state} from '../../../../../node_modules/@angular/animations';
import { routerTransition } from '../../../router.animations';


@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss'],

  // Animate filter
  animations: [[routerTransition()],
    trigger('filterAnimation', [
        state('small', style({
            right: '-355px',
        })),
        state('large', style({
          right: '0',
        })),
        transition('small => large', animate('300ms ease-in')),
        transition('small <=> large', animate('300ms ease-in')),
     ]),
  ]


})
export class UserDetailsComponent implements OnInit {
  // Animate filter
  state: string = 'small';
  animate() {
        this.state = (this.state === 'small' ? 'large' : 'small');
  }
  // close filter
  closeFilter() {
    this.state = (this.state === 'large' ? 'small' : 'large');
}
  constructor(private dialog:MatDialog) { }
  
  openDialog(){
    this.dialog.open(DialogComponent)
    .afterClosed().subscribe(result => 
      console.log(result));
    
  }

  ngOnInit() {
  }

}
