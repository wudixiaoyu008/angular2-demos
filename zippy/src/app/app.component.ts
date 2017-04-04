import { Component } from '@angular/core';
import { ZippyComponent } from './zippy.component';

@Component({
  selector: 'app-root',
  template: `

    <zippy title="1. title input to child">
        This will be rendered through ng-content
    </zippy>
    <zippy title="2. title input to child">
        This will be rendered through ng-content
    </zippy>
  `,
  styles: [`

  `]
})
export class AppComponent {
}
