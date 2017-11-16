import { Component, OnInit } from '@angular/core';
import { NgForm} from "@angular/forms";
import * as firebase from "firebase";
import { NotificationService } from "../../../providers/notification.service";
import { OwnFireService } from "../../../providers/own-fire.service";
import { UserService } from "../../../providers/user.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private notifier: NotificationService,
    private ownFireService: OwnFireService,
    private userService: UserService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    const email = form.value.email;
    const password = form.value.password;

    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(userData => {
        if (userData.emailVerified) {

          return this.ownFireService.getUserFromDatabase(userData.uid);
        } else {
          const message = 'Su cuenta de correo no ha sido verificada aun';
          this.notifier.display('error', message);
          firebase.auth().signOut();
        }
      })
      .then(userDataFromDatabase => {
        if (userDataFromDatabase) {
          this.userService.set(userDataFromDatabase);
          this.router.navigate(['/posts']);
        }
      })
      .catch(err => {
        this.notifier.display('error', err.message);
      })
  }

}
