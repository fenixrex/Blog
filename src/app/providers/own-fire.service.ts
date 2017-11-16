import * as firebase from 'firebase';
import {UserService} from "./user.service";
import {Injectable} from "@angular/core";

@Injectable()
export class OwnFireService {

  constructor(
    private userService: UserService
  ) {}

  getUserFromDatabase(uid) {
    const ref = firebase.database().ref('users/' + uid);
    return ref.once('value')
      .then(snapshot => snapshot.val());
  }

  getUserPostsRef(uid) {
    return firebase.database().ref('ownposts').child(uid);
  }
}
