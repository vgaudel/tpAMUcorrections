import { Component } from '@angular/core';
import { AbstractControl, FormArray, FormControl, FormGroup, ReactiveFormsModule, ValidationErrors, Validators } from '@angular/forms';
import { Role } from '../../../model/Role';

@Component({
  selector: 'app-user-form-v2',
  imports: [ReactiveFormsModule],
  templateUrl: './user-form-v2.html',
  styleUrl: './user-form-v2.scss',
})
export class UserFormV2 {
  roles = Object.values(Role);


   // ────────────────────────────────────────────────────────────────────────────
  // FormGroup : regroupe plusieurs FormControl sous un objet unique.
  // Chaque FormControl accepte : (valeurInitiale, validateurSync, validateurAsync)
  //
  // Validators disponibles (built-in) :
  //   Validators.required          → le champ ne doit pas être vide
  //   Validators.requiredTrue      → la valeur doit être true (case à cocher)
  //   Validators.minLength(n)      → longueur minimale de n caractères
  //   Validators.maxLength(n)      → longueur maximale de n caractères
  //   Validators.min(n)            → valeur numérique minimale
  //   Validators.max(n)            → valeur numérique maximale
  //   Validators.email             → format email valide
  //   Validators.pattern(regex)    → correspond à une expression régulière
  //   Validators.nullValidator     → ne fait rien (placeholder utile)
  //   Validators.compose([...])    → combine plusieurs validateurs (équivalent à un tableau)
  //   Validators.composeAsync([...]) → idem pour les validateurs asynchrones
  // ────────────────────────────────────────────────────────────────────────────
  form = new FormGroup({

    // Pour passer plusieurs validators
    userName : new FormControl('', [Validators.required,Validators.minLength(3)]),
    firstName : new FormControl('', Validators.required),
    lastName : new FormControl('',Validators.required),
    email : new FormControl('',[Validators.required,Validators.email, this.emailEnding]),
    newPassword : new FormControl('', [
      Validators.required,
      Validators.minLength(6)]),
    confirmPassword : new FormControl (''),
    roles : new FormArray<FormControl<Role | null>>([
      new FormControl<Role>(Role.User),
    ]),
  },[this.identicalPasswords, this.differentNames]);

  onSubmit() : void {
    console.log(this.form.value)
  }

  reset() : void {
    this.form.reset({roles : [] });
  }

  identicalPasswords (group: AbstractControl) : ValidationErrors | null {
   const valide = (group.get('confirmPassword')?.value === group.get('newPassword')?.value);
   return valide ? null : { differentPasswords : true };
  }

  differentNames (group: AbstractControl) : ValidationErrors | null {
   const valide = (group.get('lastName')?.value !== group.get('firstName')?.value);
   return valide ? null : { similarNames : true };
  }

  emailEnding (control: AbstractControl) : ValidationErrors | null {
   const value = control.value + '';
   const valide = value.slice(-5).includes('.');
   return valide ? null : { emailEnding : true };
  }
  
  get rolesArray(): FormArray<FormControl<Role | null>> {
    return this.form.get('roles') as FormArray<FormControl<Role | null>>;
  }

  ajouterRole(){
    this.rolesArray.push(new FormControl<Role>(Role.User));
  }

  retirerRole(index : number){
    this.rolesArray.removeAt(index);
  }

}
