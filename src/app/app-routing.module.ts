import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { authGuard } from './guard/auth.guard';
import { NotFountRouteComponent } from './not-fount-route/not-fount-route.component';
import { HomePageComponent } from './home-page/home-page.component';
import { MapOperatorComponent } from './rxjs/rxjsoperator/map-operator/map-operator.component';

const routes: Routes = [{path:"", component:HomePageComponent},
  { path: 'singUp', loadChildren: () => import('./sing-up/sing-up.module').then(m => m.SingUpModule) },
 { path: 'dashboard', canActivate:[authGuard], loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule) },
 { path: 'rigister', loadChildren: () => import('./rigister/rigister.module').then(m => m.RigisterModule) },
 { path: 'profileSettings',canActivate:[authGuard], loadChildren: () => import('./profile-settings/profile-settings.module').then(m => m.ProfileSettingsModule) },
 { path: 'changePassword',canActivate:[authGuard], loadChildren: () => import('./change-password/change-password.module').then(m => m.ChangePasswordModule) },
 { path: 'parent', loadChildren: () => import('./parent/parent.module').then(m => m.ParentModule) },
 { path: 'subject', loadChildren: () => import('./subject/subject.module').then(m => m.SubjectModule) },
 { path: 'behaviorSubject', loadChildren: () => import('./behavior-subject/behavior-subject.module').then(m => m.BehaviorSubjectModule) },
 { path: 'replaySubject', loadChildren: () => import('./replay-subject/replay-subject.module').then(m => m.ReplaySubjectModule) },
 { path: 'countryFlags', loadChildren: () => import('./country-flags/country-flags.module').then(m => m.CountryFlagsModule) },
 { path: 'fileUpload', loadChildren: () => import('./file-upload/file-upload.module').then(m => m.FileUploadModule) },
 { path: 'postCreate',canActivate:[authGuard], loadChildren: () => import('./post-create/post-create.module').then(m => m.PostCreateModule) },
  { path: 'postprofile',canActivate:[authGuard], loadChildren: () => import('./postprofile/postprofile.module').then(m => m.PostprofileModule) },
  { path: 'viewmore/:postId', loadChildren: () => import('./viewmore/viewmore.module').then(m => m.ViewmoreModule) },
  {path: 'rxjs', component:MapOperatorComponent},
 {path:"**", component:NotFountRouteComponent},];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
