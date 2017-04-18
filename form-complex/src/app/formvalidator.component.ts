import { Component } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { CustomValidator } from './customvalidator';

@Component({
    selector: 'formvalidator',
    templateUrl: './formvalidator.html',
    styles: [`
        .formvalidator{
            margin: 5rem 10rem;
        }
    `]
})

export class FormValidator {

    form: FormGroup;

    constructor(fb: FormBuilder){
        this.form = fb.group({
            oldPassword: ['', Validators.required],
            // oldPassword: new FormControl('', Validators.required),
            newPassword: ['', Validators.compose([
                Validators.required,
                CustomValidator.complexPassword
            ])],
            confirmPassword: ['', Validators.required]
        }, { validator: CustomValidator.passwordsShouldMatch });
    }

    // // oldPassword = new FormControl(['', Validators.required]);
    //
    // constructor(){
    //     this.form = new FormGroup({
    //         // 'oldPassword': this.oldPassword
    //         'oldPassword': new FormControl(['', Validators.required]),
    //     })
    // }

    // form: FormGroup;
    // constructor(private fb: FormBuilder) { }
    //
    // ngOnInit(): void {
    //     this.buildForm();
    // }
    //
    // buildForm(): void {
    //     this.form = this.fb.group({
    //         'oldPassword': ['', Validators.required]
    //     });
    // }
    changePassword(){
        var oldPassword = this.form.get('oldPassword');
        if (oldPassword.value != '1234')
            oldPassword.setErrors({ validOldPassword: true });

        if (this.form.valid)
            alert("Password successfully changed.");
    }

}
