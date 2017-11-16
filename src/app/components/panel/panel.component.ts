import { Component, OnInit } from '@angular/core';

import * as firebase from 'firebase';

import { NotificationService } from "../../providers/notification.service";
import { OwnFireService } from "../../providers/own-fire.service";
import {PostsService} from "../../providers/posts.service";


@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.css']
})
export class PanelComponent implements OnInit {

  // Atributos
  ownPostLists: any[] = []; // Lista de posts propios


  constructor(
    private notifier: NotificationService,
    private ownFireService: OwnFireService,
    private postsService: PostsService
  ) { }

  ngOnInit() {

    const uid = firebase.auth().currentUser.uid;

    this.postsService.getOwnPosts(uid)
      .subscribe( data => {
        console.log(data)
        this.ownPostLists = data;
      });
  }

}
