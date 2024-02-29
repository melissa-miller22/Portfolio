import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-confirmation-page',
  templateUrl: './confirmation-page.component.html',
  styleUrl: './confirmation-page.component.scss'
})
export class ConfirmationPageComponent implements OnInit {

  someCode!: any;

  constructor(private readonly route: ActivatedRoute){}


  ngOnInit() {
    this.route.params.subscribe((params: Params) => this.someCode = params['confirmationcode']);
}

}
