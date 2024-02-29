import { BrowserModule } from '@angular/platform-browser';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTableModule } from '@angular/material/table'
import { MatCheckboxModule } from '@angular/material/checkbox';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { NavComponent } from './common/nav/nav.component';
import { InquiriesComponent } from './components/inquiries/inquiries.component';
import { HttpClientModule } from '@angular/common/http';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NewInquiryComponent } from './components/inquiries/new-inquiry/new-inquiry.component';
import { MatNativeDateModule } from '@angular/material/core';
import { ConfirmationPageComponent } from './components/inquiries/confirmation-page/confirmation-page.component';
import { EditInquiryComponent } from './components/inquiries/edit-inquiry/edit-inquiry.component';
import { AllInquiriesComponent } from './components/manage-inquiries/all-inquiries/all-inquiries.component';
import { GncTableComponent } from './common/gnc-table/gnc-table.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'home', component: HomeComponent },
  { path: 'inquiries', component: InquiriesComponent },
  { path: 'inquiries/new', component: NewInquiryComponent},
  { path: 'inquiries/edit', component: EditInquiryComponent},
  { path: 'inquiries/submit-successful/:confirmationcode', component: ConfirmationPageComponent},
  { path: 'manage-inquiries/all', component: AllInquiriesComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    AllInquiriesComponent,
    ConfirmationPageComponent,
    EditInquiryComponent,
    GncTableComponent,
    HomeComponent,
    NavComponent,
    InquiriesComponent,
    NewInquiryComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    MatButtonModule,
    MatCardModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatExpansionModule,
    MatInputModule,
    MatMenuModule,
    MatNativeDateModule,
    MatSelectModule,
    MatSlideToggleModule,
    MatTableModule,
    MatToolbarModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent],
  exports: [RouterModule]
})
export class AppModule { }
