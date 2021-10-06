import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatStepper } from '@angular/material/stepper';

@Component({
  selector: 'app-stepper-test',
  templateUrl: './stepper-test.component.html',
  styleUrls: ['./stepper-test.component.scss']
})
export class StepperTestComponent implements OnInit {

  bannerMessage = "Stepper Test";
  subtitle = "I know how to make a stepper";

  isLinear = true;
  firstStepFormGroup: FormGroup;
  secondStepFormGroup: FormGroup;

  @Output() bannerMessageUpdate = new EventEmitter<string>();

  @ViewChild('stepper') private myStepper?: MatStepper;

  constructor() {    
    this.firstStepFormGroup = this.createStep1Form();
    this.secondStepFormGroup = this.createStep2Form(); 
  }

  ngOnInit(): void {

  }

  createStep1Form() {
    return new FormGroup({
      name: new FormControl('', [Validators.required])
    });
  }

  createStep2Form() {
    return new FormGroup({
      addressLine1: new FormControl('', [Validators.required]),
      addressLine2: new FormControl('', [Validators.required])
    });
  }

  updateBanner() {
    this.bannerMessageUpdate.emit(this.bannerMessage);
  }

  resetStepper() {
    const name = this.firstStepFormGroup.get('name')?.value;
    const addressLine1 = this.firstStepFormGroup.get('addressLine1')?.value;
    const addressLine2 = this.secondStepFormGroup.get('addressLine2')?.value;
    this.subtitle = name + " " + addressLine1 + " " + addressLine2;

    this.myStepper?.reset();
  }



}
