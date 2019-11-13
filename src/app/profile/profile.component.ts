import { UsersService } from './../users.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import * as _ from 'lodash';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(
    private router: ActivatedRoute,
    private users: UsersService
  ) { }

  user;

  ngOnInit() {

        this.router.paramMap.subscribe( params => {
            const email = params.get('email');

            this.users.getAll().subscribe( response => {
                /* find vuole 2 parametri: il primo è la collection su cui operare,
                 il secondo e la funzione di scrematura.
                 Dato l'elemento obj (elemento i-esimo dell'iterazione sulla collection), 
                 recupera quell'elemento in cui user_email === email (che è il parametro che mi sono
                  recuperato dall'url [VEDI ROUTES IN APP.MODULE])
                */
                this.user = _.find(response, (obj) => {
                  return obj.user_email === email 
                });

                console.log(this.user);
            });


        });


  }

}
