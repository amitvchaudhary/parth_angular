import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'An',
  templateUrl: './anchor.component.html',
  styleUrls: ['./anchor.component.scss']
})
export class AnchorComponent implements OnInit {

  @Input() customeClick: string;
  @Output() customeHref = new EventEmitter();

  customeHREF(){
  this.customeHref.emit('This is Done !');
  }

  constructor() { }

  ngOnInit() {
  }

}
