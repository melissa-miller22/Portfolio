import { Component } from '@angular/core';
import { Inquiry } from 'src/app/model/inquiry';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-inquiries',
  templateUrl: './inquiries.component.html',
  styleUrls: ['./inquiries.component.scss']
})

export class InquiriesComponent {
  
  count: any = '';
  all: any = '';
  newInquiry!: Inquiry;
  activeInquiry!: Inquiry;
  returnedInquiry!: Inquiry;

  addOrEdit = 'add';

  firstName!: any;
  lastName!: any;
  id: number = 2;

  constructor(private apiService: ApiService) {
  }

  getCount(){
    this.apiService.get('inquiries/count').subscribe((data: any) => {
      this.count = data
    })
  }
  
  getAll(){
    this.apiService.get('inquiries/all').subscribe((data: any) => {
      this.all = data
    })
  }

  getById(){
    this.apiService.get(`inquiries/getbyid/${this.id}`).subscribe((data: any) => {
      this.returnedInquiry = data;
    })

  }

  addNew(){
    this.newInquiry = new Inquiry(this.firstName, this.lastName);
    if(this.newInquiry){
      this.apiService.post('inquiries/add', this.newInquiry).subscribe((data: any) => {
        this.getAll();
      })
    }
  }

  setEdit(inquiry: any){
    this.activeInquiry = inquiry;
    console.log(inquiry);
    this.addOrEdit = 'edit';
    this.firstName = inquiry.firstName;
    this.lastName = inquiry.lastName;
  }

  resetForm(){
    this.firstName = '';
    this.lastName = '';

    this.addOrEdit = 'add';
  }

  update(){
    this.newInquiry = new Inquiry(this.firstName, this.lastName, this.activeInquiry.id);
    if(this.newInquiry){
      this.apiService.put('inquiries/update', this.newInquiry).subscribe((data: any) => {
        this.resetForm();
        this.getAll();
      })
    }
  }
}
