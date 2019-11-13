import { Router } from '@angular/router';
import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';


@Component({
  selector: 'app-vcard',
  templateUrl: './vcard.component.html',
  styleUrls: ['./vcard.component.css']
})
export class VcardComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<VcardComponent>,
    @Inject(MAT_DIALOG_DATA) public data,
    private router: Router
  ) { }

  openProfile(){
    this.dialogRef.close();
    this.router.navigateByUrl('/profile/' + this.data.user_email);
  }


  ngOnInit() {
  }

}
