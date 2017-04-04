import { Component, Input } from '@angular/core';

@Component({
    selector: 'zippy',
    template: `
        <div class="panel panel-primary zippy">
            <div class="panel-heading zippy-heading" (click) = "toggle()">
                {{title}}
                <i class="glyphicon pull-right"
                    [ngClass]="{
                        'glyphicon-chevron-down': !isExpanded,
                        'glyphicon-chevron-up': isExpanded
                    }">
                </i>
            </div>
            <div *ngIf="isExpanded" class="panel-body zippy-body">
                <ng-content></ng-content>
            </div>
        </div>
    `,
    styles: [`
        .zippy-heading{
            cursor: pointer;
        }
    `],
})

export class ZippyComponent{
    @Input() title: string;
    isExpanded = false;

    toggle(){
        this.isExpanded = !this.isExpanded;
    }

}
