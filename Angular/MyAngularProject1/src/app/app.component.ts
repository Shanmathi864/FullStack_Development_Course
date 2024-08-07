import { Component } from '@angular/core';
import { CalculatorService } from './calculator.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
 /* name : string;
  age : number;
  email : string;
  imagePath : string;
  fname : string;

  constructor(){
    this.name = "Shanmathi";
    this.age = 21;
    this.email = "shanmathi@gmail.com"
    this.fname = "";
    this.imagePath =
      'data:image/jpeg;base64,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';
  }

changeName(){
  this.name = "Shanu";
}

changeAge(){
  this.age = 23;
}

changeEmail(){
  this.email ="shanu@gmail.com"

}

changeImage(){     
  this.imagePath =
    'data:image/jpeg;base64,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';
}
// flag :boolean;
// vehicle:string[];
// selectedvehicle :string;
// myStyle:{};
// myClass:string;

// constructor(){
//   this.flag =true;
//   this.vehicle=["car","bus","bike"];
//   this.selectedvehicle="";
//   this.myStyle= {'width':'40%','border':'2px solid orange','border-radius':'25px'}
//   this.myClass="MyClass1";


// }
// changeFlag(){
//   this.flag =! this.flag;
// }
// setselecteditem(vec:string){
//   this.selectedvehicle=vec;
// }
// changeStyle(){
//    this.myStyle = {'width': '40%','border': '2px solid green','border-radius': '25px'}
//
}
*/
 sum : number;
 sub : number;
 mul : number;
 div : number;
 constructor(private calc : CalculatorService, private fact : FactorialService ){
  this.sum = calc.getAddition(10 , 20);
  this.sub = calc.getSubtraction( 10, 20);
  this.mul = calc.getMultiplication( 10, 20);
  this.div = calc.getDivision( 100, 2);
 }
 }

