import {Directive, ElementRef, Renderer} from 'angular2/core';
// ElementRef gives the access to the host Element
// Renderer let us modify the host element

@Directive({
    selector: '[autoGrow]',   //this is a css selector, [] refers to an attribute
    host: {
        '(focus)': 'onFocus()',   //bind this on the onFocus() to the focus event
        '(blur)': 'onBlur()'
    }
})

export class AutoGrowDirective{

    constructor(private el: ElementRef, private renderer: Renderer){   //generate the instances of ElementRef and Renderer

    }

    onFocus(){
        this.renderer.setElementStyle(this.el.nativeElement, 'width', '200')
    }

    onBlur(){
        this.renderer.setElementStyle(this.el.nativeElement, 'width', '120')
    }
}
