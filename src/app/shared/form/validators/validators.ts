import { AbstractControl, ValidatorFn } from '@angular/forms';

export function Xrequired(fieldName = 'fieldName'): ValidatorFn {
  return (control: AbstractControl): { [key: string]: string } | null => {
    if (
      control.value === null ||
      control.value == '' ||
      typeof control.value === 'undefined'
    ) {
      return {
        required: `${fieldName} is Required`,
      };
    }
    return null;
  };
}
