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
  
  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

  onChange(event) {
    console.log(event);
  }
}
