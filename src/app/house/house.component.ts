import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-house',
  templateUrl: './house.component.html',
  styleUrls: ['./house.component.scss']
})


export class HouseComponent implements OnInit {

  house: House;

  houseList: Houses[] = [];

  constructor() { }

  ngOnInit() {
  }

  createHouse(){
    const house = new House();
    house.name = 'NilKamal';
    house.color = 'Black';
    house.room = 4;
    house.Address = 'Ahmedabad';


    this.houseList.push(house);

  }

}

export class House {

  name: string;
  color: string;
  room: number;
  Address :string;
}

export class Houses {

  name: string;
  color: string;
  room :number;
  Address :string;
}
