import { Component,OnInit,ViewChild } from '@angular/core';


// SelectBox
export interface status {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-content-add',
  templateUrl: './content-add.component.html',
  styleUrls: ['./content-add.component.scss'],
  
})
export class ContentAddComponent implements OnInit{
 
  // SelectBox
  statuses: status[] = [
    {value: 'Active', viewValue: 'Active'},
    {value: 'Inactive', viewValue: 'Inactive'},
  ];


// CkEditor
  name = 'ng2-ckeditor';
  ckeConfig: any;
  mycontent: string;
  log: string = '';
 constructor() {
  }
ngOnInit() {
    this.ckeConfig = {
      allowedContent: false,
      extraPlugins: 'divarea',
      forcePasteAsPlainText: true
    };
  }
  onChange($event: any): void {
    console.log("onChange");
  }

}
