import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent implements OnInit {

  contactForm: FormGroup;
  constructor(private fb: FormBuilder) {

  }
  ngOnInit(): void {
    this.contactForm = this.fb.group({
      name: [null, [Validators.required]],
      email: [null, [Validators.required, Validators.email]],
      message: [null, [Validators.required, Validators.minLength(10)]]
    })
  }

  onSubmit(){
    if(this.contactForm.invalid){
      alert("Please Fill the complete form");
    }else{
      alert("Form submitted!")
    }
  }
}
