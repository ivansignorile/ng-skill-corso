import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-bankinfo',
  templateUrl: './bankinfo.component.html',
  styleUrls: ['./bankinfo.component.css']
})
export class BankinfoComponent implements OnInit {
  @Input() parametro;
  constructor() { }

  ngOnInit() {
  }

}
