import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AjaxService {

  constructor(
    private http: HttpClient
  ) { }

  endpoint = 'http://bktv.it/';

  test() {
    alert('service richiamato correttamente');
  }


  get(path){
    return this.http.get( this.endpoint + path);
  }

  post(params) {
    this.http.post('https://app.fakejson.com/q', params.reqObj).subscribe( response => {
      console.log(response);
    });
  }




}
