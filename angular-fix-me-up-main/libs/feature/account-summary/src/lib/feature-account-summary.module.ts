import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AccountSummaryRoutingModule } from './account-summary-routing.module';
import { AccountSummaryComponent } from './account-summary/account-summary.component';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  imports: [CommonModule, AccountSummaryRoutingModule, FormsModule,BrowserModule, ReactiveFormsModule],
  declarations: [AccountSummaryComponent],
  exports: [AccountSummaryComponent],
})
export class FeatureAccountSummaryModule {}
