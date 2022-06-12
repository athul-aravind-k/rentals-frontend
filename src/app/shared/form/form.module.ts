import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormFieldsModule } from './form-fields/form-fields.module';

@NgModule({
  declarations: [],
  imports: [CommonModule, FormFieldsModule],
  exports: [FormFieldsModule],
})
export class FormModule {}
