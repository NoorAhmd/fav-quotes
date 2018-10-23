import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import {FavoritesPage} from "../pages/favorites/favorites";
import {SettingsPage} from "../pages/settings/settings";
import {QuotePage} from "../pages/quote/quote";
import {LibraryPage} from "../pages/library/library";
import {TabsPage} from "../pages/tabs/tabs";

@NgModule({
  declarations: [
    MyApp,
    FavoritesPage,
    SettingsPage,
    QuotePage,
    QuotePage,
    LibraryPage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    FavoritesPage,
    SettingsPage,
    QuotePage,
    QuotePage,
    LibraryPage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
