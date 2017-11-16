import {Component, OnInit} from '@angular/core';
import * as firebase from 'firebase';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  ngOnInit() {
    const config = {
      apiKey: "AIzaSyDGPG6TFgEhP_U_uEGaXIVw0bOMNpexFv8",
      authDomain: "bsasblog-1f415.firebaseapp.com",
      databaseURL: "https://bsasblog-1f415.firebaseio.com",
      projectId: "bsasblog-1f415",
      storageBucket: "bsasblog-1f415.appspot.com",
      messagingSenderId: "662397480417"
    };
    firebase.initializeApp(config);
  }

}
