import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewInquiryComponent } from './new-inquiry.component';

describe('NewInquiryComponent', () => {
  let component: NewInquiryComponent;
  let fixture: ComponentFixture<NewInquiryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewInquiryComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NewInquiryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
