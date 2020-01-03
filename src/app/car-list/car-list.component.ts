import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Car } from '../car/car.component';

@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.scss']
})
export class CarListComponent implements OnInit {

  @Input() carList: Car[] = [];
  @Output() sendCar = new EventEmitter();
  passCar(){
    this.sendCar.emit(null);
  }
  constructor() { }

  ngOnInit() {
  }

}
