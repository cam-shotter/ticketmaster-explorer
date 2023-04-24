import { AbstractControl, ValidatorFn } from '@angular/forms';

export function latlongValidator(): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    const latlongRegExp = /^-?\d{1,3}\.\d{6},\s?-?\d{1,3}\.\d{6}$/;

    if (control.value && !latlongRegExp.test(control.value)) {
      return { latlong: { value: control.value } };
    }

    return null;
  };
}
