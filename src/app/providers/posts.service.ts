import { Injectable } from '@angular/core';
import { Http } from "@angular/http";
import 'rxjs/Rx'


@Injectable()
export class PostsService {

  // Endpoints
  baseOwnPostsURL = 'https://bsasblog-1f415.firebaseio.com/ownposts/';

  constructor(
    private http: Http

  ) { }

  getOwnPosts(uid: string) {

    const url = `${this.baseOwnPostsURL}/${ uid }.json`;

    return this.http.get( url )
      .map(res => res.json())

  }

}
