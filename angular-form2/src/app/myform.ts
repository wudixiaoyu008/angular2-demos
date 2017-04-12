import { Component } from '@angular/core';

@Component({
    selector: 'myform',
    templateUrl: './myform.html'
})

export class myFormComponent {
    frequencies = [
        { id: 1, label: 'Daily' },
        { id: 2, label: 'Weekly' },
        { id: 3, label: 'Monthly' }
    ];

    onSubmit(form){
        console.log(form.value);
    }
}
