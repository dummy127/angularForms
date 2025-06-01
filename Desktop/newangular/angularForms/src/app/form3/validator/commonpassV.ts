import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms'

export function commonpassV(passwords: string[]): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const value = control.value || ''

    return passwords.includes(value) ? { commonpass: true } : null
  }
}
