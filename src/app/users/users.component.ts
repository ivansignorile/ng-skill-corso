import { VcardComponent } from './../vcard/vcard.component';
import { UsersService } from './../users.service';
import { AjaxService } from './../ajax.service';
import { Component, OnInit, ViewChild, Inject } from '@angular/core';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import * as _ from 'lodash';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})

export class UsersComponent implements OnInit {

  constructor(
    private ajax: AjaxService,
    private dialog: MatDialog,
    private users: UsersService
  ) { }

   userList;
   userForm;
   fullUserList;

  //  spinner
  color = 'accent';
  mode = 'indeterminate';
  value = 10;


   displayedColumns: string[] = ['user_name', 'user_email', 'companyName', 'options'];


   openVcard(obj) {

    this.dialog.open(VcardComponent, {
       width: '300px',
       data: obj
     });

    }



   applyFilter(args) {
      if (args === '') {
        this.userList = this.fullUserList;
      } else {
        // filter se vogliamo una corrispondenza esatta
        this.userList = _.filter(this.fullUserList, (e) => {
          return (e.user_name.toLowerCase() === args.toLowerCase()) || e.user_name.toLowerCase().includes(args.toLowerCase());
        });
      }



      // this.userList.filter = args.trim().toLowerCase();
  }

  getUsers() {
      this.users.getAll().subscribe( response => {
          this.fullUserList = response;
          this.userList = new MatTableDataSource(this.fullUserList);
      });
  }

  buildForm() {

      this.userForm = new FormGroup({
        user_name: new FormControl('', Validators.required),
        user_email: new FormControl('', [Validators.required, Validators.email]),
        companyName: new FormControl('', Validators.required)
      });

  }

  submitForm() {
      const obj = this.userForm.value;
      this.fullUserList.push(obj);
      this.userList = new MatTableDataSource(this.fullUserList);

  }


  ngOnInit() {

    setTimeout( () => {
      this.getUsers();
    }, 2000);

    this.buildForm();

  }

}
