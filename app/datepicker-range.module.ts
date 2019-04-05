import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule, NgbDateParserFormatter } from '@ng-bootstrap/ng-bootstrap';
import { NgbdDatepickerRange } from './datepicker-range';
import { NgbDateCustomParserFormatter } from './DateCustomParserFormatter';

console.log('NgbDateParserFormatter', NgbDateParserFormatter);

@NgModule({
  imports: [BrowserModule, NgbModule.forRoot(), FormsModule],
  declarations: [NgbdDatepickerRange],
  exports: [NgbdDatepickerRange],
  bootstrap: [NgbdDatepickerRange],
  providers: [
    { provide: NgbDateParserFormatter, useClass: NgbDateCustomParserFormatter }
  ]
})
export class NgbdDatepickerRangeModule { }
