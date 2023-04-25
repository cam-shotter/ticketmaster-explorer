import { AbstractControl, ValidatorFn } from '@angular/forms';

// This needs tests written
export function latlongValidator(): ValidatorFn {
  return (control: AbstractControl<string>): { [key: string]: unknown } | null => {
    // This regex is a bit of a hack, but it's good enough for now
    const latlongRegExp = /^-?\d{1,3}\.\d{6},\s?-?\d{1,3}\.\d{6}$/;

    if (control.value && !latlongRegExp.test(control.value)) {
      return { latlong: { value: control.value } };
    }

    return null;
  };
}
