import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

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
    signupForm: FormGroup;
    constructor(fb: FormBuilder){
        this.signupForm = fb.group({
            name: ['', Validators.required],
            email: [],
            billing: fb.group({
                cardNumber: ['', Validators.required],
                expiry: ['', Validators.required]
            })
        });
    }
}
