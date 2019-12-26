import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.scss']
})
export class CarComponent implements OnInit {

  car: Car;

  carList: Cars[] = [];

  constructor() { }

  ngOnInit() {
  }

  generateCar(){
    const car = new Car();
    car.name = 'ciaz';
    car.type = 'sedan';
    car.company = 'suzuki';
    car.seater = 4;
    car.color = 'nexa blue';

    this.carList.push(car);
  }


}

export class Car {

  name: string;
  color: string;
  type: string;
  company: string;
  seater: number;
}

export class Cars {

  name: string;
  color: string;
  type: string;
  company: string;
  seater: number;
}
