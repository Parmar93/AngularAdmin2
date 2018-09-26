import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { routerTransition } from '../router.animations';
import { trigger, transition,style,animate,state } from '../../../node_modules/@angular/animations';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    
// Login Form Animation
  animations: [[routerTransition()],
  trigger('formAnimation', [
      state('first', style({
          right: '-400px',
      })),
      state('second', style({
        right: '0',
      })),
      transition('first => second', animate('500ms ease-in')),
      transition('first <=> second', animate('500ms ease-in')),
   ]),

   trigger('LoginFormAnimation', [
    state('first', style({
        left: '0',
    })),
    state('second', style({
      left: '-400px',
    })),
    transition('first => second', animate('500ms ease-in')),
    transition('first <=> second', animate('500ms ease-in')),
 ]),

]
})
export class LoginComponent implements OnInit {

 // Form Animation
  state: string = 'first';
  openform() {
        this.state = (this.state === 'first' ? 'second' : 'first');
  }
 // Form Animation close
 closeform() {
    this.state = (this.state === 'second' ? 'first' : 'second');
}




    constructor(public router: Router) {}

    ngOnInit() {}

    onLoggedin() {
        localStorage.setItem('isLoggedin', 'true');
    }
}
