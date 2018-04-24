import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import {UsereventsPage} from "../pages/userevents/userevents";
import {CompetitionPage} from "../pages/competition/competition";
import {ItemsPage} from "../pages/items/items";

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    UsereventsPage,
    CompetitionPage,
    ItemsPage

  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    UsereventsPage,
    CompetitionPage,
    ItemsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
