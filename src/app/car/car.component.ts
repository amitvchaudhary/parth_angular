import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.scss']
})
export class CarComponent implements OnInit {

  car: Car;

  carList: Car[] = [];
  stockedCarList: Car[] = [];
  newCar: Car = new Car();


  // carColor: string;
  // carName: string;
  // carType: string;
  // carCompany: string;
  // carSeater: number;


  constructor() { }

  ngOnInit() {
  }
//color: string, name: string, type:string, seater:number, company:string
  generateCar(newCar){
    const car = new Car();
    car.name = newCar.name;
    car.type = newCar.type;
    car.company = newCar.company;
    car.seater = newCar.seater;
    car.color = newCar.color;

    this.carList.push(car);
  }

  moveRightArray(i){
    const stockableCar: Car[] = this.carList.splice(i, 1);
    console.log(stockableCar);
    this.stockedCarList.concat(stockableCar);
  }

  getCar(){
    console.log("received");
  }
  moveLeftArray(){

  }




}

export class Car {

  name: string;
  color: string;
  type: string;
  company: string;
  seater: number;
}
