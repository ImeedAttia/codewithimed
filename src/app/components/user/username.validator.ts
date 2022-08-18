import { AbstractControl, FormGroup, ValidationErrors, ValidatorFn } from "@angular/forms";
const lowerCaseLetters = /[a-z]/g;
const upperCaseLetters = /[A-Z]/g;
const numbers = /[0-9]/g;
export class Usernamevalidator{

  //Validator to check if string has space or not
  static cannotContainSpace(controll : AbstractControl) : ValidationErrors | null {
    if ((controll.value as string).indexOf(' ') >= 0 )
      return {
        cannotContainSpace: true
      }
    return null;
  }

  //password check and confiramtion password
  static mustMatch(controlName: string, matchingControlName: string) {
    return (formGroup: FormGroup) => {
      const control = formGroup.controls[controlName];
      const matchingControl = formGroup.controls[matchingControlName];

      if (matchingControl.errors && !matchingControl.errors['mustMatch']) {
        return;
      }

      // set error on matchingControl if validation fails
      if (control.value !== matchingControl.value) {
        matchingControl.setErrors({ mustMatch: true });
      } else {
        matchingControl.setErrors(null);
      }
      return null;
    };
  }


}

