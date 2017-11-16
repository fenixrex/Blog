import { RouterModule, Routes} from "@angular/router";
import { HomeComponent } from "./components/home/home.component";
import { PostsComponent } from "./components/posts/posts.component";
import { NgModule } from "@angular/core";
import { SignUpComponent } from "./components/auth/sign-up/sign-up.component";
import { LoginComponent } from "./components/auth/login/login.component";
import { RouteGuard } from "./components/auth/route-guard";
import { PanelComponent } from "./components/panel/panel.component";

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'posts', component: PostsComponent, canActivate: [RouteGuard] },
  { path: 'panel', component: PanelComponent, canActivate: [RouteGuard] },
  { path: 'signup', component: SignUpComponent },
  { path: 'login', component: LoginComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})

export class AppRoutingModule {}
