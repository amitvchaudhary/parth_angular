import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'super 6 - Data';
  fname = 'Parth';
  lname = 'bhatti';
  age = 22;
  address = 'ahmedabad';
  contact = 5252552;

showDetails() {
 this.showFname();
 this.showLname();
 this.showAge();
 this.showAddress();
 this.showContact();
}

showDetails2(){
  return {name: this.fname, lastName: this.lname, age: this.age, address: this.address, contact: this.contact};
}

showFname(){
  return this.fname;

};
showLname(){
  console.log(this.lname);
  return this.lname;
};
showAge(){
  console.log(this.age);
};
showAddress(){
  console.log(this.address);
};
showContact(){
  console.log(this.contact);
};



}


