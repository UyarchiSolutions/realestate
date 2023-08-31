import { AbstractControl, ValidationErrors } from '@angular/forms';

export function StrongPasswordValidator(control: AbstractControl): ValidationErrors | null {
  const value: string = control.value;
  console.log(value,34534)

  if (!value) {
    return null; // Don't validate if the field is empty
  }

  const minLength = 8;
  const hasUpperCase = /[A-Z]/.test(value);
  const hasLowerCase = /[a-z]/.test(value);
  const hasNumbers = /\d/.test(value);
  const hasSpecialCharacters = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/.test(value);

  if (value.length < minLength ||
      !hasUpperCase ||
      !hasLowerCase ||
      !hasNumbers ||
      !hasSpecialCharacters) {
    return { strongPassword: true };
  }

  return null;
}
