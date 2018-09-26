import { Component } from '@angular/core';


export interface platform {
  value: string;
  viewValue: string;
}



export interface gender {
  value: string;
  viewValue: string;
}


@Component({
  selector: 'app-notification-add',
  templateUrl: './notification-add.component.html',
  styleUrls: ['./notification-add.component.scss'],
  
})
export class NotificationAddComponent {
  platforms: platform[] = [
    {value: 'Android', viewValue: 'Android'},
    {value: 'iOS', viewValue: 'iOS'},
    {value: 'All', viewValue: 'All'},
  ];

  genders: gender[] = [
    {value: 'Male', viewValue: 'Male'},
    {value: 'Female', viewValue: 'Female'},
  ];
}
