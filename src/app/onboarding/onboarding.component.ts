import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, FormArray, Validators } from '@angular/forms';
import { expValidator } from '../custom/expvalidator';

@Component({
  selector: 'app-onboarding',
  templateUrl: './onboarding.component.html',
  styleUrls: ['./onboarding.component.css']
})
export class OnboardingComponent implements OnInit {
  onboardingForm: FormGroup;
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.onboardingForm = this.fb.group({
      //Validators.pattern()
      name: new FormControl('', [ Validators.required, Validators.minLength(5), Validators.maxLength(10) ]),
      age: new FormControl('', [ Validators.required, Validators.min(23), Validators.max(45) ]),
      pan: new FormControl('', [Validators.required ]),
      dob: new FormControl('', [ Validators.required ]),
      exp: new FormControl('', [ Validators.required,  expValidator ]),
      emailid: new FormControl('', [ Validators.required, Validators.email ]),
      address: this.fb.group({
        addressline1: new FormControl('', [ Validators.required ]),
        addressline2: new FormControl('', []),
        city: new FormControl('', [ Validators.required ]),
        pin: new FormControl('', [ Validators.required ]),
      }),
      pastexp: this.fb.array([
        this.buildForm()
      ])
    }

    )
  }

  buildForm(){
    return this.fb.group({
      employerName: new FormControl('', [ Validators.required ]),
      designation: new FormControl('', [ Validators.required ]),
      startDate: new FormControl('', [ Validators.required ]),
      endDate: new FormControl('', [ Validators.required ]),
    })
  }
  

  addEmployer(){
    const pastexp= this.onboardingForm.controls["pastexp"] as FormArray;
    pastexp.push(this.buildForm());
  }

  removeEmployer(i: number){
    const pastexp= this.onboardingForm.controls["pastexp"] as FormArray;
    pastexp.removeAt(i);
  }

  addemployee(){
    console.log(this.onboardingForm.value);
    this.onboardingForm.reset();
  }

}
