import { Component } from '@angular/core';



export interface platform {
  value: string;
  viewValue: string;
}

export interface update {
  value: string;
  viewValue: string;
}


export interface version {
  value: string;
  viewValue: string;
}



@Component({
  selector: 'app-manage-version-add',
  templateUrl: './manage-version-add.component.html',
  styleUrls: ['./manage-version-add.component.scss'],
  
})
export class ManageVersionAddComponent {
  platforms: platform[] = [
    {value: 'Android', viewValue: 'Android'},
    {value: 'iOS', viewValue: 'iOS'},
    {value: 'All', viewValue: 'All'},
  ];
  updates: update[] = [
    {value: 'Normal', viewValue: 'Normal'},
    {value: 'Skippable', viewValue: 'Skippable'},
    {value: 'Forcefully', viewValue: 'Forcefully'},
  ];
  versions: version[] = [
    {value: 'Yes', viewValue: 'Yes'},
    {value: 'No', viewValue: 'No'},
  ];
}
