import { Component } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-edit-inquiry',
  templateUrl: './edit-inquiry.component.html',
  styleUrl: './edit-inquiry.component.scss'
})
export class EditInquiryComponent {

  cc!: any;
  retrievedInquiry!: any;

  constructor(private readonly apiService: ApiService) {}

  getById(){
    this.apiService.get(`inquiries/getbyconfirmationcode/${this.cc}`).subscribe((data: any) => {
      this.retrievedInquiry = data;
      console.log(this.retrievedInquiry)
    })

  }

}
