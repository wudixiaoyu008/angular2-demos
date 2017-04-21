import { Component, OnInit } from '@angular/core';
import { GithubService } from './github.service';
import 'rxjs/add/observable/forkJoin';
import { Observable } from 'rxjs/Observable';

@Component({
    selector: 'github-profile',
    template: `
        <i *ngIf="isLoading" class="fa fa-spinner fa-spin fa-3x"></i>
        <h2>@{{ user.login }}</h2>
        <img class="avatar" src="{{ user.avatar_url }}">

        <h3>Followers</h3>
        <div *ngFor="let follower of followers" class="media">
            <div class="media-left">
                <a href="#">
                <img class="media-object avatar" src="{{ follower.avatar_url }}" alt="...">
                </a>
            </div>
            <div class="media-body">
                <h4 class="media-heading">{{ follower.login }}</h4>
            </div>
        </div>
    `,
    styles: [`
        .avatar{
            width: 30px;
            height: 30px;
            border-radius: 100%;
        }
    `],
    // providers: [GithubService]
})

export class GithubProfileComponent implements OnInit {
    isLoading = true;
    username = 'octocat';
    user = {};
    followers = [];

    constructor(private _githubService: GithubService){}

    ngOnInit(){
        Observable.forkJoin(
            this._githubService.getUser(this.username),
            this._githubService.getFollowers(this.username)
        )
        .subscribe(
            res => {
                this.user = res[0];
                this.followers = res[1];
            },
            null,
            () => {this.isLoading = false;}
        )
    }
}
