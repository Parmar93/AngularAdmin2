import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';

import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material';
import {MatCheckboxModule} from '@angular/material/checkbox';

@NgModule({
    imports: [
        CommonModule,
        LoginRoutingModule, 
        MatFormFieldModule,
        MatInputModule,
        MatCheckboxModule
    ],
   
    declarations: [LoginComponent]
})
export class LoginModule {}
