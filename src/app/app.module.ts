import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from "./components/header/header.component";
import { PostsComponent } from "./components/posts/posts.component";
import { SignUpComponent } from "./components/auth/sign-up/sign-up.component";
import { LoginComponent } from "./components/auth/login/login.component";
import { HomeComponent } from "./components/home/home.component";
import { NotificationComponent } from "./components/notification/notification.component";
import { RouteGuard } from "./components/auth/route-guard";
import { NotificationService } from "./providers/notification.service";
import { OwnFireService } from "./providers/own-fire.service";
import { UserService } from "./providers/user.service";
import { FormsModule } from "@angular/forms";
import { AppRoutingModule } from "./app-routing.module";
import { PanelComponent } from './components/panel/panel.component';
import { PostsService } from "./providers/posts.service";
import { HttpModule } from "@angular/http";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PostsComponent,
    SignUpComponent,
    LoginComponent,
    HomeComponent,
    NotificationComponent,
    PanelComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    RouteGuard,
    NotificationService,
    OwnFireService,
    UserService,
    PostsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
