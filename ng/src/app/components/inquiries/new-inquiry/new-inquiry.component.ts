import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MyErrorStateMatcher } from 'src/app/common/form-error/form-error.component';
import { Inquiry } from 'src/app/model/inquiry';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-new-inquiry',
  templateUrl: './new-inquiry.component.html',
  styleUrl: './new-inquiry.component.scss'
})
export class NewInquiryComponent {
  
  matcher = new MyErrorStateMatcher();

  constructor (private readonly apiService: ApiService) {}

  form = new FormGroup({
    firstName: new FormControl(null, [Validators.required]),
    lastName: new FormControl(null, [Validators.required]),
    phoneNumber: new FormControl(null, [Validators.required, Validators.pattern('^[0-9]*$')]),
    emailAddress: new FormControl(null, [Validators.required, Validators.email]),
    preferredContact: new FormControl(null, [Validators.required]),
    organization: new FormControl(null),
    duration: new FormControl(null, [Validators.required]),
    startDate: new FormControl({value: null, disabled: true}, [Validators.required]),
    endDate: new FormControl(null),
    location: new FormControl(null, [Validators.required]),
    expectations: new FormControl(null),
    details: new FormControl(null),
    questions: new FormControl(null),
  })

  inquiry!: Inquiry;

  selectDuration(eventValue: any){
    this.inquiry.duration = eventValue;
  }

  handleDates(){
    this.form.get('startDate')?.enable();
    this.form.controls.startDate.setValue(null);
    this.form.controls.endDate.setValue(null);

    if(this.form.controls.duration.value == 'multi'){
      this.form.controls['endDate'].addValidators([Validators.required]);
    } else {
      this.form.controls['endDate'].clearValidators();
    }
    
    this.form.controls['endDate'].updateValueAndValidity();
  }

  submit(){
    if(this.form.invalid){
      return;
    }

    console.log('valid')
    this.apiService.post('inquiries/add', this.form.value).subscribe((data: any) => {
      console.log(data)
    })
    
  }
}
