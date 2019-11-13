import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-anagrafica',
  templateUrl: './anagrafica.component.html',
  styleUrls: ['./anagrafica.component.css']
})
export class AnagraficaComponent implements OnInit {
  @Input() user;
  constructor() { }

  ngOnInit() {
  }

}
