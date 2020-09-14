import { Reg } from './reg';
import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { FormGroup, FormBuilder } from '@angular/forms';

export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-material';
  stateHasError = true;

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    
  }

  url="./assets/blank.jpeg";

  onSelectFile(event){
    if(event.target.files) {
      var reader = new FileReader();
      reader.readAsDataURL(event.target.files[0]);
      reader.onload =( event: any) => {
        this.url=event.target.result;
      }
      
    }
  }
  
  states = [ "Andhra Pradesh","Arunachal Pradesh",
            "Assam","Bihar","Chhattisgarh", "Goa", "Gujarat","Haryana",
            "Himachal Pradesh","Jharkhand","Karnataka","Kerala",
            "Madhya Pradesh","Maharashtra","Manipur"," Meghalaya",
            " Mizoram"," Nagaland","Odisha","Punjab","Rajasthan",
            "Sikkim","Tamil Nadu","Telangana","Tripura",
            "Uttar Pradesh","Uttarakhand","West Bengal"];

  countries = ["India", "Pak", "China"];

  userModel = new Reg ( "", "", "" , 9876543210, 2 , "","","" ,true);

  

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

  options: FormGroup;
  hideRequiredControl = new FormControl(false);
  floatLabelControl = new FormControl('auto');

  constructor(fb: FormBuilder) {
    this.options = fb.group({
      hideRequired: this.hideRequiredControl,
      floatLabel: this.floatLabelControl,
    });
  }
}
