import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {ReactiveFormsModule, FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HttpClientModule,HTTP_INTERCEPTORS } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxUiLoaderModule,NgxUiLoaderHttpModule,NgxUiLoaderRouterModule} from 'ngx-ui-loader';
import { ToastrMessageComponent } from './notification/toastr-message/toastr-message.component';
import { AuthInterceptor } from './interceptor/auth.interceptor';
import { LoadingBarRouterModule } from '@ngx-loading-bar/router';
import { NotFountRouteComponent } from './not-fount-route/not-fount-route.component';
import { HomePageComponent } from './home-page/home-page.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { ScrollDirectiveDirective } from './directive/scroll-directive.directive';
import { WidthDirectiveDirective } from './directive/width-directive.directive';
import { TextareaDirectiveDirective } from './directive/textarea-directive.directive';
import { TimeupdatePipe } from './pipes/timeupdate.pipe';
import { MapOperatorComponent } from './rxjs/rxjsoperator/map-operator/map-operator.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ToastrMessageComponent,
    NotFountRouteComponent,
    HomePageComponent,
    ScrollDirectiveDirective,
    WidthDirectiveDirective,
    TextareaDirectiveDirective,
    MapOperatorComponent,
    // TimeupdatePipe,
    
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NgxUiLoaderModule,
    LoadingBarRouterModule,
    NgxUiLoaderHttpModule.forRoot({ showForeground: true }),
    ToastrModule.forRoot({
      timeOut: 10000,
      positionClass: 'toast-top-right',
      preventDuplicates: true
    }),
    
  ],
  providers: [
    {provide:HTTP_INTERCEPTORS, useClass:AuthInterceptor, multi:true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
