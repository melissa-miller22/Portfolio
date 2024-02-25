import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-inquiries',
  templateUrl: './inquiries.component.html',
  styleUrls: ['./inquiries.component.scss']
})
export class InquiriesComponent implements OnInit {
  
  private inquiriesUrl: string;

  constructor(private http: HttpClient) {
    this.inquiriesUrl = 'http://localhost:8080/api/user/count';
  }

  apiCall(){
    this.findAll().subscribe((data: any) => {
      console.log(data)
    })
  }

  public findAll(): Observable<any> {
    return this.http.get<any>(this.inquiriesUrl);
  }

  ngOnInit(): void {
  }

}
