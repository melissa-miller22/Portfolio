import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-all-inquiries',
  templateUrl: './all-inquiries.component.html',
  styleUrl: './all-inquiries.component.scss'
})
export class AllInquiriesComponent implements OnInit {
  panelOpenState = false;

  tableColumns = ['confirmationCode', 'organization', 'firstName', 'lastName', 'startDate', 'endDate']

  newInquiries!: any;
  acceptedInquiries!: any;

  constructor(private readonly apiService: ApiService) {}

  ngOnInit() {
    this.getNewInquiries();
    this.getAcceptedInquiries();
  }

  getNewInquiries(){ 
    this.apiService.get(`inquiries/getbypendingreviewtrue`).subscribe((data: any) => {
      this.newInquiries = data;
      console.log('new', this.newInquiries)
    })
  }

  getAcceptedInquiries(){ 
    this.apiService.get(`inquiries/getbypendingreviewfalse`).subscribe((data: any) => {
      this.acceptedInquiries = data;
      console.log('accepted', this.acceptedInquiries)
    })
  }

}
