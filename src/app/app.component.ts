import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'super 6 - Data';
  fname = 'Parth';
  lname = 'B';
  age = 22;
  address = 'Ahmedabad';
  contact = 5252552;

showDetails(){
 this.showFname();
 this.showLname();
 this.showAge();
 this.showAddress();
 this.showContact();
}
showFname(){
  console.log(this.fname);
};
showLname(){
  console.log(this.lname);
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


