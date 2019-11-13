import { AjaxService } from './ajax.service';
import { Injectable } from '@angular/core';
import {map} from 'rxjs/operators';
import * as _ from 'lodash';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(
    private ajax: AjaxService
  ) { }

  
  getAll(){
     return this.ajax.get('users.json');
  }
 


}
