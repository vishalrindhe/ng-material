import { Reg } from './reg';
import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-material';
  stateHasError = true;

  
  states = [ "Andhra Pradesh","Arunachal Pradesh",
            "Assam","Bihar","Chhattisgarh", "Goa", "Gujarat","Haryana",
            "Himachal Pradesh","Jharkhand","Karnataka","Kerala",
            "Madhya Pradesh","Maharashtra","Manipur"," Meghalaya",
            " Mizoram"," Nagaland","Odisha","Punjab","Rajasthan",
            "Sikkim","Tamil Nadu","Telangana","Tripura",
            "Uttar Pradesh","Uttarakhand","West Bengal"];

  userModel = new Reg ( " ", " ", " " , 1 , 2 , "State "," "," " ,true);

  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

  validateTopic(value) {
    if (value === 'default'){
    this.stateHasError=true;
    } else {
      this.stateHasError = false;
    }
  }

  onChange(event) {
    console.log(event);
  }
}
