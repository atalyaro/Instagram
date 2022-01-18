import { AbstractControl } from '@angular/forms'
import { isIsraelidValid } from 'israeli-id-validator'

export default function israeliIdValidator(control: AbstractControl): { [key: string]: any } | null {

    if (control.value && control.value.length == 9 && !isIsraelidValid(control.value)) {
        return { 'IdNumberInvalid': true };
    }
    return null;
}
