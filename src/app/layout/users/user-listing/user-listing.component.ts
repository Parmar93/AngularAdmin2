import { Component, OnInit, ViewChild } from '@angular/core';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import { trigger, transition,style,animate,state} from '../../../../../node_modules/@angular/animations';
import { routerTransition } from '../../../router.animations';

export interface status {
  value: string;
  viewValue: string;
}
export interface country {
  value: string;
  viewValue: string;
}


// DataTable
export interface UserData {
  id: string;
  name: string;
  progress: string;
  color: string;

  name2: string;
  address: string;
  address1: string;
  address2: string;
  address3: string;

}

/** Constants used to fill up our data base. */
const COLORS: string[] = ['maroon', 'red', 'orange', 'yellow', 'olive', 'green', 'purple',
  'fuchsia', 'lime', 'teal', 'aqua', 'blue', 'navy', 'black', 'gray'];
const NAMES: string[] = ['Maia', 'Asher', 'Olivia', 'Atticus', 'Amelia', 'Jack',
  'Charlotte', 'Theodore', 'Isla', 'Oliver', 'Isabella', 'Jasper',
  'Cora', 'Levi', 'Violet', 'Arthur', 'Mia', 'Thomas', 'Elizabeth'];

  const NAMES2: string[] = ['lorem', 'Asher', 'Olivia', 'Atticus', 'Amelia', 'Jack',
  'Charlotte', 'Theodore', 'Isla', 'Oliver', 'Isabella', 'Jasper',
  'Cora', 'Levi', 'Violet', 'Arthur', 'Mia', 'Thomas', 'Elizabeth'];

  const ADDRESS: string[] = ['Maia', 'Asher', 'Olivia', 'Atticus', 'Amelia', 'Jack',
  'Charlotte', 'Theodore', 'Isla', 'Oliver', 'Isabella', 'Jasper',
  'Cora', 'Levi', 'Violet', 'Arthur', 'Mia', 'Thomas', 'Elizabeth'];

  const ADDRESS1: string[] = ['Maia', 'Asher', 'Olivia', 'Atticus', 'Amelia', 'Jack',
  'Charlotte', 'Theodore', 'Isla', 'Oliver', 'Isabella', 'Jasper',
  'Cora', 'Levi', 'Violet', 'Arthur', 'Mia', 'Thomas', 'Elizabeth'];
  
  const ADDRESS2: string[] = ['Maia', 'Asher', 'Olivia', 'Atticus', 'Amelia', 'Jack',
  'Charlotte', 'Theodore', 'Isla', 'Oliver', 'Isabella', 'Jasper',
  'Cora', 'Levi', 'Violet', 'Arthur', 'Mia', 'Thomas', 'Elizabeth'];

  const ADDRESS3: string[] = ['Maia', 'Asher', 'Olivia', 'Atticus', 'Amelia', 'Jack',
  'Charlotte', 'Theodore', 'Isla', 'Oliver', 'Isabella', 'Jasper',
  'Cora', 'Levi', 'Violet', 'Arthur', 'Mia', 'Thomas', 'Elizabeth'];

/**
 * @title Data table with sorting, pagination, and filtering.
 */




@Component({
  selector: 'app-user-listing',
  templateUrl: './user-listing.component.html',
  styleUrls: ['./user-listing.component.scss'],
  
  
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
export class UserListingComponent implements OnInit {

  // Animate filter
  state: string = 'small';
  animate() {
        this.state = (this.state === 'small' ? 'large' : 'small');
  }
  // close filter
  closeFilter() {
    this.state = (this.state === 'large' ? 'small' : 'large');
}



  // Status select
  statusAll: status[] = [
    {value: 'All', viewValue: 'All'},
    {value: 'Active', viewValue: 'Active'},
    {value: 'Blocked', viewValue: 'Blocked'}
  ];

  // Status country
  countries: country[] = [
    {value: 'India', viewValue: 'India'},
    {value: 'USA', viewValue: 'USA'},
    {value: 'UK', viewValue: 'UK'}
  ];

//Datepicker
  myFilter = (d: Date): boolean => {
    const day = d.getDay();
    // Prevent Saturday and Sunday from being selected.
    return day !== 0 && day !== 6;
  }

  

// DataTable
  displayedColumns: string[] = ['id', 'name', 'progress', 'color', 'name2', 'address', 'address1', 'address2', 'address3' ];
  dataSource: MatTableDataSource<UserData>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor() {
    // Create 100 users
    const users = Array.from({length: 100}, (_, k) => createNewUser(k + 1));

    // Assign the data to the data source for the table to render
    this.dataSource = new MatTableDataSource(users);
  }

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}


 

 /** Builds and returns a new User. */
function createNewUser(id: number): UserData {
  const name =
      NAMES[Math.round(Math.random() * (NAMES.length - 1))] + ' ' +
      NAMES[Math.round(Math.random() * (NAMES.length - 1))].charAt(0) + '.';

      const name2 =
      NAMES2[Math.round(Math.random() * (NAMES2.length - 1))] + ' ' +
      NAMES2[Math.round(Math.random() * (NAMES2.length - 1))].charAt(0) + '.';


      const address =
      ADDRESS[Math.round(Math.random() * (ADDRESS.length - 1))] + ' ' +
      ADDRESS[Math.round(Math.random() * (ADDRESS.length - 1))].charAt(0) + '.';

      const address1 =
      ADDRESS1[Math.round(Math.random() * (ADDRESS1.length - 1))] + ' ' +
      ADDRESS1[Math.round(Math.random() * (ADDRESS1.length - 1))].charAt(0) + '.';

      const address2 =
      ADDRESS2[Math.round(Math.random() * (ADDRESS2.length - 1))] + ' ' +
      ADDRESS2[Math.round(Math.random() * (ADDRESS2.length - 1))].charAt(0) + '.';

      const address3 =
      ADDRESS3[Math.round(Math.random() * (ADDRESS3.length - 1))] + ' ' +
      ADDRESS3[Math.round(Math.random() * (ADDRESS3.length - 1))].charAt(0) + '.';



  return {
    id: id.toString(),
    name: name,
    name2: name2,
    address: address,
    address1: address1,
    address2: address2,
    address3: address3,
   
    progress: Math.round(Math.random() * 100).toString(),
    color: COLORS[Math.round(Math.random() * (COLORS.length - 1))]
  };
}


