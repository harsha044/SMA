import { AbstractControl } from "@angular/forms";

export function expValidator(control: AbstractControl){
 if(control.value > 45 || control.value < 23 ){
        return { invalidEmp : true }
 }
 return null;
}