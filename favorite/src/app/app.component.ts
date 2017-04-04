import { Component} from '@angular/core';
import {LikeComponent} from './like.component';

@Component({
  selector: 'app-root',
  template: `<like [totalLikes]="tweet.totalLikes" [iLike]="tweet.iLike"></like>`,
  // directives: [LikeComponent]
})

export class AppComponent {
    tweet = {
        totalLikes: 10,
        iLike: false
    }
}
