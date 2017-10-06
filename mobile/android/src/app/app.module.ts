import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { HttpModule } from '@angular/http';
import { MyApp } from './app.component';
import { HomePage, Nomination_Creation_ScreenPage, Screen_76100Page, Screen_76150Page } from '../pages/pages';
import { Nomination_Default_ActivityService, Nominee_Default_ActivityService, Leader_reviewer_Default_ActivityService, SharedService } from '../shared/shared';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { customHttpProvider } from '../_helpers/custom-http';
import { ConfigService } from '../config/config.service';
import { ApiService } from '../config/api.service';
import {CookieService} from 'angular2-cookie/core';

@NgModule({
  declarations: [
    MyApp,
HomePage,
Nomination_Creation_ScreenPage,
Screen_76100Page,
Screen_76150Page
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
HomePage,
Nomination_Creation_ScreenPage,
Screen_76100Page,
Screen_76150Page
  ],
  providers: [
    CookieService,
    ConfigService,
    ApiService,
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    customHttpProvider,
Nomination_Default_ActivityService
,
Nominee_Default_ActivityService
,
Leader_reviewer_Default_ActivityService
,
SharedService

  ]
})
export class AppModule {}